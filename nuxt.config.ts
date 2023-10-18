// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/reset.scss'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@nuxt/image',
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Roboto': true
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      }
    ]
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})
