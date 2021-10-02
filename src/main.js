import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('numberPoint', value => {

  value = Number(value)
  if (!(isNaN(value)))
    return (value.toLocaleString('pt-BR'))

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')