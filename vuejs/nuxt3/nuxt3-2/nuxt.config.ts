// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      proxy: {
        "/topics/": {
          target: "http://localhost:11213/",
          secure: false
        }
      }
    }
  },
  css: ['/assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss'],
})
