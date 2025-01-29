// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // BASE_URL: process.env.API_BASE_URL,
    BASE_URL : 'http://localhost:8000',
  },
 
})
