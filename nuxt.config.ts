export default defineNuxtConfig({
  app: {
    baseURL: '/i',
    buildAssetsDir: 'assets',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }],
      script: [],
    },
  },
  css: ['@/assets/scss/style.scss'],
  modules: [
    '@nuxtjs/google-fonts',
  ],

})
