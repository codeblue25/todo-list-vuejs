import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
