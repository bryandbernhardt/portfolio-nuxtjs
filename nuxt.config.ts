// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }, //SSG for static pages
    '/pt': { prerender: true }, //SSG for static pages
    '/es': { prerender: true }, //SSG for static pages
    '/history': { prerender: true }, //SSG for static pages
    '/pt/history': { prerender: true }, //SSG for static pages
    '/es/history': { prerender: true }, //SSG for static pages
    '/settings': { prerender: true }, //SSG for static pages
    '/pt/settings': { prerender: true }, //SSG for static pages
    '/es/settings': { prerender: true }, //SSG for static pages
  },
  css: ['~/assets/styles/reset.scss', '~/assets/styles/theme.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
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
        subsets: 'latin',
        display: 'swap',
        prefetch: true,
        preconnect: true,
        preload: true,
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
  ui: {
    global: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ["/api"]
    }
  },
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
  }
})