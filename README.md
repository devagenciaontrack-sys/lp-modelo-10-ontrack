# Modelo 10 — Diaristas e babás · On Track LP

Landing page modelo da **On Track**, feita em **Nuxt 4** (Vue). Sem marca: pronta para personalizar e vender.

- **Demonstração:** https://devagenciaontrack-sys.github.io/lp-modelo-10-ontrack/

## O que tem
- **Dois caminhos no primeiro quadro**: a família que precisa contratar e a profissional que quer trabalhar. Cada um com a sua cor e o seu botão, porque são dois públicos com medos diferentes.
- **Monte o perfil** (o recurso próprio deste nicho): a família escolhe de quem precisa, com que frequência e o que a rotina pede. A lista de tarefas muda conforme a escolha — babá mostra "bebê de colo" e "levar na escola", cuidadora mostra "medicação no horário". No fim aparece o perfil montado e o botão abre o WhatsApp com tudo escrito.
- **O que a gente confere**: as seis etapas de verificação, que é o argumento central de uma agência.
- Como funciona em quatro passos, seção dedicada a quem quer trabalhar, depoimentos dos dois lados, dúvidas em sanfona e chamada final.
- Botão de WhatsApp fixo no celular.

## Por que o montador de perfil
Quem nunca contratou não sabe o que pedir nem como chamar o serviço — e por isso adia a mensagem. O montador resolve isso: a pessoa responde três coisas simples, entende qual profissional procura e chega no WhatsApp com a rotina já descrita. A agência recebe um pedido pronto em vez de um "oi, quanto custa?".

O texto sobre vínculo muda conforme a frequência: diária avulsa aparece como serviço sem vínculo, e o formato fixo avisa que costuma pedir carteira assinada. Confira esse texto com quem cuida da parte trabalhista antes de publicar.

## Como personalizar
Tudo fica no topo de `app/app.vue`:
- `site`: nome, subtítulo, WhatsApp, telefone, cidade, responsável, Instagram, CNPJ, ano de início.
- `checagem`, `etapas`, `paraElas`, `depoimentos`, `duvidas`.
- As opções do montador (tipos, frequências, tarefas e regiões) ficam no topo de `app/components/Perfil.vue`.
- Cores e fontes: topo de `app/assets/css/main.css` e `nuxt.config.ts`.
- Fotos: o quadro em **Quero trabalhar** é espaço reservado. Troque pela foto real da equipe — foto de banco de imagem com gente sorrindo passa menos confiança do que uma foto simples e verdadeira.

## Cuidado com a promessa
A página fala em verificação de documento, antecedentes e referências. **Só mantenha o que a agência realmente faz.** Se alguma etapa não acontece, tire do site: prometer checagem que não existe é o tipo de coisa que destrói a reputação do negócio no primeiro problema.

## Rodar e publicar
```
npm install
npm run dev        # http://localhost:3000
npm run generate   # site estático em .output/public
```
- **Vercel:** importe o repositório; a Vercel detecta o Nuxt sozinha. Não defina `LP_BASE`.
- **GitHub Pages (demonstração):** `LP_BASE=/lp-modelo-10-ontrack/ npm run generate` e publique `.output/public` no branch `gh-pages`.

## Briefing para o cliente
PDF com tudo o que precisamos do cliente para montar o site: [baixar o briefing](Briefing-Modelo-10-Diaristas-e-babas.pdf?raw=1)

## Prévia ao compartilhar
A imagem `public/og.jpg` aparece quando o link é enviado no WhatsApp ou no Instagram. Em domínio próprio, gere com `LP_URL=https://www.dominio-do-cliente.com.br/` para a prévia apontar para o endereço certo, e troque o `og.jpg` por um print do site final.
