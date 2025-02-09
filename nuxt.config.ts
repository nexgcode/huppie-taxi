// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'nl',
    langDir: 'locales',
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    strategy: 'prefix_except_default'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content: 'EV-Horizon - Your sustainable choice for eco-friendly taxi services in the Netherlands.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
