import Sass from 'sass'
import Fiber from 'fibers'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nurie_web',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBSNhJDb4p14s6QoyLivkOhEWMzm9u2258",
          authDomain: "nurie-75640.firebaseapp.com",
          databaseURL: "https://nurie-75640-default-rtdb.firebaseio.com",
          projectId: "nurie-75640",
          storageBucket: "nurie-75640.appspot.com",
          messagingSenderId: "350970030067",
          appId: "1:350970030067:web:75ece8923ad777be839486"
        },
        services: {
          database: true,
          storage: true
        }
      },
      '@nuxtjs/axios'
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },


  css: [
    { src: '~/assets/scss/common.scss' }
  ]
}
