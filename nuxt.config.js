import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Italiano',
          code: 'it',
          iso: 'it-IT',
          file: 'it-IT.js',
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'it',
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  transition: {
    name: 'about',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
}
