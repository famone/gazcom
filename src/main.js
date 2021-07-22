import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import VueTyperPlugin from 'vue-typer'
import YmapPlugin from 'vue-yandex-maps'
import * as basicScroll from 'basicscroll'



import 'swiper/css/swiper.css'

const settings = {
  apiKey: '8c4059db-3b8d-4535-a15e-569ee80fc827',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(VueTyperPlugin)
Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo)
Vue.use(VueTheMask)
Vue.use(YmapPlugin, settings)

// const basicScroll = require('basicscroll')




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
