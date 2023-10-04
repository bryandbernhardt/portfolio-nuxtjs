// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Roboto': true
        },
        display: 'swap'
      }
    ]
  ]
})
