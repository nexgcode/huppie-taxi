import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'shadcn-nuxt', '@pinia/nuxt'],
  components: {
    dirs: [
      {
        path: '~/components/ui',
        pathPrefix: false, // Remove the folder prefix from component names
        extensions: ['.vue'], // Only auto-import .vue files to avoid conflicts
      },
      {
        path: '~/components',
        pathPrefix: true, // Keep prefix for other component folders if needed
      },
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content: 'Huppie Taxi - Your fast choice for taxi services in the Netherlands.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    defaultLocale: 'nl',
    langDir: 'locales',
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
