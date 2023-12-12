// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/reset.scss', '~/assets/styles/theme.scss'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-delay-hydration',
    '@nuxtjs/device',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Inter': {
            wght: [400, 700]
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
        legacy: false,
        locale: 'en',
        defaultLocale: 'en',
        fallbackLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
          redirectOn: 'root',  // recommended
        },
        langDir: 'i18n',
        lazy: false,
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en-us.json',
          },
          {
            code: 'es',
            name: 'Español',
            iso: 'es-AR',
            file: 'es-ar.json'
          },
          {
            code: 'pt',
            name: 'Português',
            iso: 'pt-BR',
            file: 'pt-br.json'
          }
        ],
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/variables.scss";'
        }
      }
    }
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons'
    ]
  }
})
