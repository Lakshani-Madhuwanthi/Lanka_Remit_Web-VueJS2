import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from "buefy"
import 'buefy/dist/buefy.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import Global from "@/mixins/global"
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.mixin(Global)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOgPcz0lMH325jBnqVdX7tuaST1V9QIuw',
    libraries: 'places',
  },
  installComponents: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
