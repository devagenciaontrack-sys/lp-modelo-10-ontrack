// Modelo 10 · Agência de diaristas e babás — On Track LP
// Endereço público do site (usado na prévia do WhatsApp/Instagram). Em domínio próprio: LP_URL=https://www.cliente.com.br/
const SITE = process.env.LP_URL || 'https://devagenciaontrack-sys.github.io/lp-modelo-10-ontrack/'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    // GitHub Pages: LP_BASE=/<repo>/ · Vercel/domínio próprio: deixe vazio
    baseURL: process.env.LP_BASE || '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Sua Agência — Diaristas e babás de confiança',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Agência de diaristas, babás e cuidadoras. Profissionais com documento, antecedentes e referências conferidos antes da primeira visita.' },
        { name: 'theme-color', content: '#FFFFFF' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sua Agência — Diaristas e babás de confiança' },
        { property: 'og:description', content: 'Conte o que a sua casa precisa e receba a profissional certa, já verificada. Para quem quer trabalhar, cadastro gratuito.' },
        { property: 'og:url', content: SITE },
        { property: 'og:image', content: SITE + 'og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Nunito:wght@400;500;600;700;800&display=swap' },
        { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23F4F7FB'/%3E%3Cpath d='M16 25s-7-4.4-7-9.4A4.1 4.1 0 0 1 16 13a4.1 4.1 0 0 1 7 2.6c0 5-7 9.4-7 9.4Z' fill='%23E8859C'/%3E%3C/svg%3E" },
      ],
    },
  },
})
