// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`
    }],
  ],
  css: ['@/scss/main.scss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  ssr: false,
  runtimeConfig: {
    public: {
      APP_BACKEND_URL: process.env.APP_BACKEND_URL,
      // SUPABASE_URL: process.env.SUPABASE_URL,
      // SUPABASE_KEY: process.env.SUPABASE_KEY,
    }
  },
})
