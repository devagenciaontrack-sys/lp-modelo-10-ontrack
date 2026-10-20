<script setup lang="ts">
// ============ PERSONALIZAÇÃO ============
const site = {
  marca: 'Sua Agência',
  subtitulo: 'Diaristas e babás',
  whatsapp: '5500000000000',
  telefone: '(00) 00000-0000',
  cidade: 'Sua cidade e região',
  responsavel: 'Nome da responsável',
  instagram: '#',
  cnpj: '00.000.000/0000-00',
  desde: '0000',
}
const wa = (msg = 'Olá! Gostaria de falar com a agência.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`

const checagem = [
  { t: 'Documento com foto', d: 'Conferimos RG e CPF e guardamos a cópia no cadastro.' },
  { t: 'Antecedentes criminais', d: 'Certidão emitida e conferida antes de a profissional ser indicada.' },
  { t: 'Referências ligadas', d: 'Falamos com as famílias anteriores. Não aceitamos carta pronta.' },
  { t: 'Entrevista presencial', d: 'Conversa olho no olho com a nossa equipe, não só formulário.' },
  { t: 'Endereço confirmado', d: 'Comprovante de residência atualizado, para sabermos onde encontrá-la.' },
  { t: 'Acompanhamento', d: 'Ligamos depois dos primeiros dias para ouvir os dois lados.' },
]

const etapas = [
  { n: 'Você conta a rotina', d: 'No WhatsApp, em poucos minutos. Sem formulário longo.' },
  { n: 'A gente seleciona', d: 'Escolhemos no cadastro quem combina com o seu caso e a sua região.' },
  { n: 'Você conhece', d: 'Apresentamos o perfil completo e, se quiser, uma conversa antes.' },
  { n: 'Dia de experiência', d: 'A profissional vai até você. Se não fluir, a gente troca.' },
]

const paraElas = [
  'Vagas com famílias que já passaram pela nossa conversa',
  'Valor combinado antes, sem surpresa no fim do dia',
  'A agência acompanha e intermedia se algo não estiver certo',
  'Cadastro gratuito, sem taxa de inscrição',
]

const depoimentos = [
  { n: 'Nome da cliente', b: 'Bairro', t: 'Depoimento real de uma família atendida. Três a quatro linhas bastam, falando do antes e do depois.' },
  { n: 'Nome da cliente', b: 'Bairro', t: 'Outro depoimento, de preferência citando o cuidado com criança ou a confiança no dia a dia.' },
  { n: 'Nome da profissional', b: 'Diarista', t: 'Depoimento de quem trabalha pela agência. Mostra que o outro lado também é bem tratado.' },
]

const duvidas = [
  { q: 'Como vocês escolhem as profissionais?', a: 'Entrevista presencial, conferência de documento e endereço, certidão de antecedentes e ligação para as famílias anteriores. Quem não passa em alguma etapa não entra no cadastro.' },
  { q: 'Quanto custa o serviço?', a: 'Depende do tipo de serviço, da frequência e da região. A gente passa o valor fechado depois de entender a sua rotina, antes de qualquer visita.' },
  { q: 'E se eu não gostar da profissional?', a: 'A gente troca, sem custo. O dia de experiência existe justamente para isso: você sente se a pessoa combina com a sua casa.' },
  { q: 'Preciso assinar carteira?', a: 'Para diarista de até duas vezes por semana, não há vínculo. Para quem trabalha de segunda a sexta, a lei pede registro. A gente explica cada caso antes de fechar.' },
  { q: 'Vocês atendem a minha região?', a: `Atendemos ${site.cidade}. Se o seu bairro estiver fora, a gente avisa na primeira conversa em vez de deixar você esperando.` },
  { q: 'Sou diarista. Como me cadastro?', a: 'Chama no WhatsApp dizendo que quer trabalhar com a gente. A conversa inicial é rápida e o cadastro é gratuito.' },
]
</script>

<template>
  <div>
    <a class="pular" href="#conteudo">Pular para o conteúdo</a>

    <header class="topo">
      <div class="wrap topo-in">
        <a href="#" class="marca" translate="no">
          <span class="marca-ic" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M16 26s-8-5-8-10.7A4.7 4.7 0 0 1 16 12a4.7 4.7 0 0 1 8 3.3C24 21 16 26 16 26Z" fill="currentColor" /></svg>
          </span>
          <span class="marca-txt"><b>{{ site.marca }}</b><small>{{ site.subtitulo }}</small></span>
        </a>
        <nav class="nav" aria-label="Seções">
          <a href="#familia">Para sua família</a>
          <a href="#como">Como funciona</a>
          <a href="#trabalhar">Quero trabalhar</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a class="btn btn-verde btn-p topo-cta" :href="wa()" target="_blank" rel="noopener"
          data-track="lp_whatsapp_click" data-location="topo">
          <svg class="ic-wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3Z" /></svg>
          WhatsApp
        </a>
      </div>
    </header>

    <main id="conteudo">
      <!-- ══════════ TOPO ══════════ -->
      <section class="hero">
        <div class="wrap">
          <p class="local"><span aria-hidden="true">◍</span> {{ site.cidade }} · Agência de diaristas e babás</p>
          <h1>A sua família em <em>boas mãos</em>.<br>A profissional certa, com respeito e <em class="az">valor justo</em>.</h1>
          <p class="assinado">Cuidado que acolhe, confiança que fica.</p>
          <p class="hero-sub">A {{ site.marca }} conecta famílias que buscam segurança a diaristas e babás cuidadosamente selecionadas. De um lado, tranquilidade. Do outro, oportunidade de verdade.</p>

          <!-- os dois caminhos -->
          <div class="portas">
            <article class="porta p-fam">
              <span class="porta-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 11 12 4l8 7v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" /><path d="M9.5 20.5V14h5v6.5" /></svg>
              </span>
              <h2>Preciso de uma profissional de confiança</h2>
              <p>Diaristas e babás verificadas, com antecedentes e referências checadas, para cuidar da sua casa e de quem você ama.</p>
              <a class="btn btn-coral btn-bloco" :href="wa('Olá! Preciso de uma profissional para a minha casa.')"
                target="_blank" rel="noopener" data-track="lp_whatsapp_click" data-location="porta_familia">
                Quero contratar com segurança
              </a>
            </article>

            <article class="porta p-pro">
              <span class="porta-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="3" y="7.5" width="18" height="12.5" rx="2" /><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" /></svg>
              </span>
              <h2>Quero trabalhar como diarista ou babá</h2>
              <p>Vagas com boas famílias, que respeitam o seu trabalho e pagam o valor que você merece. Com o apoio da agência sempre.</p>
              <a class="btn btn-azul btn-bloco" :href="wa('Olá! Quero me cadastrar para trabalhar.')"
                target="_blank" rel="noopener" data-track="lp_whatsapp_click" data-location="porta_profissional">
                Quero me cadastrar
              </a>
            </article>
          </div>
        </div>
      </section>

      <!-- ══════════ MONTE O PERFIL (recurso do nicho) ══════════ -->
      <section id="familia" class="sec perfil-sec">
        <div class="wrap">
          <div class="cab">
            <p class="chapeu">Para sua família</p>
            <h2>Conte a rotina e veja o perfil certo</h2>
            <p class="cab-sub">Quem nunca contratou não sabe o que pedir nem como chamar o serviço. Responda três coisas e a gente monta o perfil — e manda tudo pronto para o WhatsApp.</p>
          </div>
          <Perfil :whatsapp="site.whatsapp" />
        </div>
      </section>

      <!-- ══════════ CHECAGEM ══════════ -->
      <section class="sec check-sec">
        <div class="wrap">
          <div class="cab">
            <p class="chapeu">Antes da primeira visita</p>
            <h2>O que a gente confere em cada profissional</h2>
            <p class="cab-sub">Nenhuma indicação sai daqui sem passar por estas seis etapas.</p>
          </div>
          <ol class="check">
            <li v-for="(c, i) in checagem" :key="c.t">
              <span class="ck-n">{{ String(i + 1).padStart(2, '0') }}</span>
              <div><b>{{ c.t }}</b><p>{{ c.d }}</p></div>
            </li>
          </ol>
        </div>
      </section>

      <!-- ══════════ COMO FUNCIONA ══════════ -->
      <section id="como" class="sec">
        <div class="wrap">
          <div class="cab">
            <p class="chapeu">Como funciona</p>
            <h2>Da sua mensagem ao primeiro dia</h2>
          </div>
          <ol class="passos">
            <li v-for="(e, i) in etapas" :key="e.n">
              <span class="ps-n">{{ i + 1 }}</span>
              <div><b>{{ e.n }}</b><p>{{ e.d }}</p></div>
            </li>
          </ol>
        </div>
      </section>

      <!-- ══════════ PARA QUEM TRABALHA ══════════ -->
      <section id="trabalhar" class="sec pro-sec">
        <div class="wrap pro-grid">
          <div class="pro-ph"><span>Foto de uma profissional da equipe</span></div>
          <div class="pro-txt">
            <p class="chapeu az">Quero trabalhar</p>
            <h2>Do outro lado também tem gente</h2>
            <p>A gente só indica quem confia, e só manda para casa onde sabe que a profissional vai ser bem tratada. O combinado vale para os dois lados.</p>
            <ul class="pro-lista">
              <li v-for="p in paraElas" :key="p">{{ p }}</li>
            </ul>
            <a class="btn btn-azul" :href="wa('Olá! Quero me cadastrar para trabalhar.')" target="_blank" rel="noopener"
              data-track="lp_whatsapp_click" data-location="secao_profissional">
              <svg class="ic-wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3Z" /></svg>
              Fazer meu cadastro
            </a>
          </div>
        </div>
      </section>

      <!-- ══════════ DEPOIMENTOS ══════════ -->
      <section class="sec">
        <div class="wrap">
          <div class="cab">
            <p class="chapeu">Quem já passou por aqui</p>
            <h2>O que dizem as duas pontas</h2>
          </div>
          <div class="deps">
            <figure v-for="d in depoimentos" :key="d.t" class="dep">
              <blockquote>{{ d.t }}</blockquote>
              <figcaption><b>{{ d.n }}</b><span>{{ d.b }}</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ══════════ DÚVIDAS ══════════ -->
      <section id="duvidas" class="sec duv-sec">
        <div class="wrap">
          <div class="cab center">
            <p class="chapeu">Antes de chamar</p>
            <h2>Perguntas que sempre chegam</h2>
          </div>
          <div class="fq">
            <details v-for="(d, i) in duvidas" :key="d.q" :open="i === 0">
              <summary>
                {{ d.q }}
                <span class="fq-sinal" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span>
              </summary>
              <p>{{ d.a }}</p>
            </details>
          </div>
        </div>
      </section>

      <!-- ══════════ CHAMADA FINAL ══════════ -->
      <section class="final">
        <div class="wrap final-in">
          <h2>Conte o que a sua casa precisa</h2>
          <p>A primeira conversa é no WhatsApp e não compromete nada. Atendemos {{ site.cidade }}.</p>
          <div class="final-acoes">
            <a class="btn btn-coral btn-g" :href="wa('Olá! Preciso de uma profissional para a minha casa.')"
              target="_blank" rel="noopener" data-track="lp_whatsapp_click" data-location="final_familia">
              Preciso de uma profissional
            </a>
            <a class="btn btn-linha btn-g" :href="wa('Olá! Quero me cadastrar para trabalhar.')"
              target="_blank" rel="noopener" data-track="lp_whatsapp_click" data-location="final_profissional">
              Quero trabalhar
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="rodape">
      <div class="wrap rodape-in">
        <div>
          <a href="#" class="marca" translate="no">
            <span class="marca-ic" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path d="M16 26s-8-5-8-10.7A4.7 4.7 0 0 1 16 12a4.7 4.7 0 0 1 8 3.3C24 21 16 26 16 26Z" fill="currentColor" /></svg>
            </span>
            <span class="marca-txt"><b>{{ site.marca }}</b><small>{{ site.subtitulo }}</small></span>
          </a>
          <p class="rod-cnpj">CNPJ {{ site.cnpj }} · {{ site.cidade }}<br>Responsável: {{ site.responsavel }}</p>
        </div>
        <nav class="rod-links" aria-label="Seções">
          <a href="#familia">Para sua família</a>
          <a href="#como">Como funciona</a>
          <a href="#trabalhar">Quero trabalhar</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <div class="rod-cta">
          <a class="btn btn-verde btn-p" :href="wa()" target="_blank" rel="noopener"
            data-track="lp_whatsapp_click" data-location="rodape">Falar no WhatsApp</a>
          <a class="rod-tel" :href="`tel:${site.telefone.replace(/\D/g, '')}`">{{ site.telefone }}</a>
        </div>
      </div>
      <p class="rod-fim">
        <a class="rod-credito" href="https://www.ontrackagenciadigital.com.br" target="_blank" rel="noopener">
          Site feito pela <b>On Track</b>
        </a>
      </p>
    </footer>

    <a class="flutua" :href="wa()" target="_blank" rel="noopener" aria-label="Falar no WhatsApp"
      data-track="lp_whatsapp_click" data-location="flutuante">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3Z" /></svg>
    </a>
  </div>
</template>
