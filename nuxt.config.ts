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
    'nuxt-delay-hydration',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Roboto': {
            wght: [400]
          }
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: true,
        overwriting: true,
        inject: true,
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n/i18n.config.js',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en'
          },
          {
            code: 'es',
            name: 'Español',
            iso: 'es'
          },
          {
            code: 'pt',
            name: 'Português',
            iso: 'pt-BR'
          }
        ]
      }
    ]
  ],
  delayHydration: { 
    mode: 'init',
    // enables nuxt-delay-hydration in dev mode for testing  
    debug: process.env.NODE_ENV === 'development'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  image: {
    presets: {
      profileImage: {
        modifiers: {
          format: 'webp',
          width: 150,
          height: 150
        }
      }
    }
  }
})
