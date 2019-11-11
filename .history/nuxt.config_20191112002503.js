const path = require('path');
console.log(process.env)
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  env: {
    npm_package_name:'Beer',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'reset-css/reset.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/global-components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    // 使用bootstrap-vue
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  //https://axios.nuxtjs.org/setup
  axios: {
    // proxyHeaders: false
    retry: {retries: 3}
  },
  styleResources: {
    // your settings here
    sass: [],
    scss: ['./assets/style/_global.scss'],
    less: [],
    stylus: []
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@pages'] = path.resolve(__dirname, 'pages');
      config.resolve.alias['@assets'] = path.resolve(__dirname, 'assets');
      config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
      config.resolve.alias['@images'] = path.resolve(__dirname, 'assets', 'images');
    }
  },
  serverMiddleware: [
    '~/api/auth'
  ]
}
