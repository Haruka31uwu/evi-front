// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    'nuxt-primevue',

    ['@nuxtjs/robots', {
      UserAgent: '*',
      Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`
    }],
  ],
 
  
  build: {
    transpile: ['vuetify'],
  },
  css: ['@/scss/main.scss', 'primevue/resources/themes/aura-light-green/theme.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

    },
  },
  plugins: [
    '@/plugins/vuetify',
  ],
  ssr: false,
  runtimeConfig: {
    public: {
      APP_BACKEND_URL: process.env.APP_BACKEND_URL,
      CULQI_PUBLIC_KEY: process.env.CULQI_PUBLIC_KEY,
    }
  },
})

