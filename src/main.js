import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// Override default theme for Vuetify
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    "primary": "#673ab7",
    "secondary": "#757575",
    "accent": "#d500f9",
    "error": "#ff1744",
    "info": "#d500f9",
    "success": "#4caf50",
    "warning": "#ff9100"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
