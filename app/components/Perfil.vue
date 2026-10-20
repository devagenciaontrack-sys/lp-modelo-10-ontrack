<script setup lang="ts">
// Monte o perfil: a família escolhe quem precisa, a frequência e as tarefas,
// e recebe o perfil da profissional certa junto da mensagem de WhatsApp já
// escrita. Resolve a dúvida real de quem nunca contratou — não saber o que
// pedir nem como chamar o serviço.
const props = defineProps<{ whatsapp: string }>()

type Quem = 'diarista' | 'baba' | 'cuidadora'
type Freq = 'avulsa' | 'semanal' | 'fixa' | 'integral'

const quem = ref<Quem>('diarista')
const freq = ref<Freq>('semanal')
const tarefas = ref<string[]>([])
const regiao = ref('')

const opQuem: { id: Quem, n: string, d: string }[] = [
  { id: 'diarista', n: 'Diarista', d: 'Limpeza da casa' },
  { id: 'baba', n: 'Babá', d: 'Cuidado com crianças' },
  { id: 'cuidadora', n: 'Cuidadora', d: 'Apoio a idosos' },
]
const opFreq: { id: Freq, n: string }[] = [
  { id: 'avulsa', n: 'Uma vez' },
  { id: 'semanal', n: '1 a 2x por semana' },
  { id: 'fixa', n: 'Fixa, de segunda a sexta' },
  { id: 'integral', n: 'Integral, com dormida' },
]

// as tarefas mudam conforme quem a família precisa
const porQuem: Record<Quem, string[]> = {
  diarista: ['Limpeza pesada', 'Cozinhar', 'Passar roupa', 'Organizar armários', 'Cuidar de pet'],
  baba: ['Bebê de colo', 'Criança pequena', 'Levar e buscar na escola', 'Ajudar na lição', 'Preparar refeições'],
  cuidadora: ['Higiene e banho', 'Medicação no horário', 'Acompanhar consultas', 'Preparar refeições', 'Mobilidade reduzida'],
}
const opTarefas = computed(() => porQuem[quem.value])
watch(quem, () => { tarefas.value = [] })

const marcar = (t: string) => {
  const i = tarefas.value.indexOf(t)
  if (i < 0) tarefas.value.push(t)
  else tarefas.value.splice(i, 1)
}

// ── o perfil que sai da escolha ──────────────────────────────────────────
const perfil = computed(() => {
  const q = opQuem.find(o => o.id === quem.value)!
  const f = opFreq.find(o => o.id === freq.value)!
  const integral = freq.value === 'integral' || freq.value === 'fixa'
  const base: Record<Quem, string> = {
    diarista: 'Profissional de limpeza com experiência comprovada em casa de família',
    baba: 'Babá com experiência na faixa etária da sua criança e curso de primeiros socorros',
    cuidadora: 'Cuidadora com formação na área e experiência em acompanhamento domiciliar',
  }
  return {
    titulo: q.n,
    linha: `${base[quem.value]}, para atender ${f.n.toLowerCase()}.`,
    vinculo: integral
      ? 'Nesse formato a contratação costuma ser com carteira assinada. A gente explica como fica.'
      : 'Nesse formato o serviço costuma ser por diária, sem vínculo. A gente explica como fica.',
  }
})

const resumo = computed(() => {
  const q = opQuem.find(o => o.id === quem.value)!
  const f = opFreq.find(o => o.id === freq.value)!
  const l = [
    'Olá! Preciso de uma profissional.',
    `Tipo: ${q.n.toLowerCase()}.`,
    `Frequência: ${f.n.toLowerCase()}.`,
  ]
  if (tarefas.value.length) l.push(`Precisa de: ${tarefas.value.join(', ').toLowerCase()}.`)
  if (regiao.value) l.push(`Região: ${regiao.value}.`)
  return l.join('\n')
})
const link = computed(() => `https://wa.me/${props.whatsapp}?text=${encodeURIComponent(resumo.value)}`)

const regioes = ['Região 1', 'Região 2', 'Região 3', 'Região 4', 'Outra']
</script>

<template>
  <div class="mp">
    <div class="mp-campos">
      <fieldset class="campo">
        <legend class="rot">De quem você precisa</legend>
        <div class="cartoes">
          <button v-for="o in opQuem" :key="o.id" type="button" :class="{ on: quem === o.id }"
            :aria-pressed="quem === o.id" @click="quem = o.id">
            <b>{{ o.n }}</b><span>{{ o.d }}</span>
          </button>
        </div>
      </fieldset>

      <fieldset class="campo">
        <legend class="rot">Com que frequência</legend>
        <div class="pilulas">
          <button v-for="o in opFreq" :key="o.id" type="button" :class="{ on: freq === o.id }"
            :aria-pressed="freq === o.id" @click="freq = o.id">{{ o.n }}</button>
        </div>
      </fieldset>

      <fieldset class="campo">
        <legend class="rot">O que a rotina pede <i>(pode marcar várias)</i></legend>
        <div class="pilulas">
          <button v-for="t in opTarefas" :key="t" type="button" :class="{ on: tarefas.includes(t) }"
            :aria-pressed="tarefas.includes(t)" @click="marcar(t)">{{ t }}</button>
        </div>
      </fieldset>

      <label class="campo">
        <span class="rot">Onde você mora</span>
        <select v-model="regiao" name="regiao">
          <option value="">Escolha a região</option>
          <option v-for="r in regioes" :key="r" :value="r">{{ r }}</option>
        </select>
      </label>
    </div>

    <!-- o perfil montado -->
    <aside class="mp-saida" aria-live="polite">
      <p class="selo"><span class="selo-ic" aria-hidden="true">✓</span> Perfil que combina</p>
      <h3>{{ perfil.titulo }}</h3>
      <p class="mp-linha">{{ perfil.linha }}</p>

      <ul v-if="tarefas.length" class="mp-tarefas">
        <li v-for="t in tarefas" :key="t">{{ t }}</li>
      </ul>
      <p v-else class="mp-vazio">Marque o que a rotina pede e a lista aparece aqui.</p>

      <p class="mp-vinculo">{{ perfil.vinculo }}</p>

      <a class="btn btn-coral btn-bloco" :href="link" target="_blank" rel="noopener"
        data-track="lp_whatsapp_click" data-location="monte_perfil">
        <svg class="ic-wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3Z" /></svg>
        Enviar esse perfil no WhatsApp
      </a>
      <p class="mp-obs">Toda profissional indicada passa pela checagem de documento, antecedentes e referências.</p>
    </aside>
  </div>
</template>

<style scoped>
.mp{ display:grid; gap:20px; }
.mp > *{ min-width:0; }
.mp-campos, .campo, .cartoes, .pilulas{ min-width:0; }
@media (min-width:900px){
  .mp{ grid-template-columns:1.1fr .9fr; gap:34px; align-items:start; }
}

.mp-campos{ display:grid; gap:20px; align-content:start; }
.campo{ display:grid; gap:10px; margin:0; padding:0; border:0; }
.rot{ padding:0; font-size:13px; font-weight:800; letter-spacing:.1em;
      text-transform:uppercase; color:var(--grafite); }
.rot i{ font-style:normal; font-weight:600; text-transform:none; letter-spacing:0;
        color:var(--cinza); }

/* quem você precisa: três cartões */
.cartoes{ display:grid; grid-template-columns:repeat(3, 1fr); gap:9px; }
.cartoes button{
  display:grid; gap:3px; padding:14px 10px; min-height:76px; cursor:pointer;
  border:1.5px solid var(--linha); border-radius:16px; background:#fff;
  font:inherit; text-align:center; color:var(--grafite);
  transition:border-color .18s, background-color .18s, transform .12s;
}
.cartoes button:hover{ border-color:var(--rosa); }
.cartoes button.on{ border-color:var(--rosa); background:var(--rosa-claro); }
.cartoes b{ font-size:15px; font-weight:800; }
.cartoes span{ font-size:11.5px; line-height:1.3; color:var(--cinza); }

/* frequência e tarefas: pílulas */
.pilulas{ display:flex; flex-wrap:wrap; gap:8px; }
.pilulas button{
  min-height:44px; padding:10px 15px; cursor:pointer;
  border:1.5px solid var(--linha); border-radius:999px; background:#fff;
  font:inherit; font-size:14px; font-weight:600; color:var(--grafite);
  transition:border-color .18s, background-color .18s, color .18s;
}
.pilulas button:hover{ border-color:var(--azul); }
.pilulas button.on{ border-color:var(--azul); background:var(--azul-claro); color:var(--azul-tinta); }

select{
  width:100%; min-height:50px; padding:12px 38px 12px 14px;
  border:1.5px solid var(--linha); border-radius:14px; background:#fff;
  font:inherit; font-size:15.5px; color:var(--grafite); appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238A8F99' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat; background-position:right 13px center; background-size:18px;
}
select:focus{ outline:none; border-color:var(--azul); }

/* o perfil montado */
.mp-saida{
  padding:22px 20px; border-radius:20px; background:#fff;
  border:1.5px solid var(--linha);
  box-shadow:0 20px 40px -28px rgba(45,40,50,.4);
}
.selo{ display:inline-flex; align-items:center; gap:7px; margin:0 0 10px;
       padding:6px 12px 6px 7px; border-radius:999px; background:var(--verde-claro);
       font-size:12px; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
       color:var(--verde-tinta); }
.selo-ic{ display:grid; place-items:center; width:18px; height:18px; border-radius:50%;
          background:var(--verde); color:#fff; font-size:11px; }
.mp-saida h3{ margin:0 0 8px; font-family:var(--serif); font-size:28px; font-weight:600;
              letter-spacing:-.01em; }
.mp-linha{ margin:0; font-size:15.5px; line-height:1.55; color:var(--cinza); }
.mp-tarefas{ display:flex; flex-wrap:wrap; gap:7px; margin:16px 0 0; padding:0; list-style:none; }
.mp-tarefas li{ padding:6px 12px; border-radius:999px; background:var(--rosa-claro);
                font-size:13px; font-weight:600; color:var(--rosa-tinta); }
.mp-vazio{ margin:16px 0 0; font-size:13.5px; color:var(--cinza); font-style:italic; }
.mp-vinculo{ margin:16px 0 0; padding:12px 14px; border-radius:12px;
             background:var(--azul-claro); font-size:13.5px; line-height:1.5;
             color:var(--azul-tinta); }
.btn-bloco{ width:100%; margin-top:18px; }
.mp-obs{ margin:12px 0 0; font-size:12.5px; line-height:1.5; color:var(--cinza); text-align:center; }
@media (min-width:520px){ .mp-saida{ padding:26px 24px; } }
</style>
