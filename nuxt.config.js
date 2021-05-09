import { join } from 'path'
export default {
  server: {
    host: process.env.SERVER_IP,
    port: process.env.SERVER_PORT,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Humane - Help to children',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/navigation',
    '~/components/banners',
    '~/components/company',
    '~/components/sections',
    '~/components/card_blocks',
    '~/components/footer',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/router',
      {
        path: join(__dirname, 'router'),
        fileName: 'index.js',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [
      'nuxt-i18n',
      {
        seo: true,
        locales: [
          {
            code: 'ru',
            iso: 'ru-RU',
            name: 'Русский',
            file: 'ru.json'
          },
          {
            code: 'uz',
            iso: 'uz-UZ',
            name: "O'zbekcha",
            file: 'uz.json'
          }
        ],
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: 'i18n_redirected'
        },
        defaultLocale: 'ru',
        lazy: true,
        langDir: 'static/lang/',
        fallbackLocale: ['ru', 'uz']
      }
    ],
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', { id: process.env.GTM_CODE }],
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  styleResources: {
    scss: ['@/assets/scss/_variables.scss', '@/assets/scss/breakpoints.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
