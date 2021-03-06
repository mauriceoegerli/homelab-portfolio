export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  loading: false,

  router: {
    base: '/2020/ina4a/gruppe14/',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Homelab :: Portfolio :: Maurice Oegerli',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/2020/ina4a/gruppe14/favicon.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/fonts/librebaskerville/librebaskerville.css',
    '~/assets/fonts/notosans/notosans.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/html-validator',
  ],

  htmlValidator: {
    usePrettier: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content', '@nuxtjs/style-resources'],

  content: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
