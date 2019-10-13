const path = require('path');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 使用bootstrap-vue
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   styleResources:{
    scss: 'assets/style/_global.scss'
   },
    extend (config, ctx) {
      config.resolve.alias['@pages']=path.resolve(__dirname,'pages');
      config.resolve.alias['@assets']=path.resolve(__dirname,'assets');
      config.resolve.alias['@components']=path.resolve(__dirname,'components');
      config.resolve.alias['@images']=path.resolve(__dirname,'assets','images');
    }
  }
}
