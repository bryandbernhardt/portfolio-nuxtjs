// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Roboto': true
        },
        display: 'swap'
      }
    ]
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
