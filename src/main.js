// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import Viewer from 'v-viewer'



import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'viewerjs/dist/viewer.css'

require ('./assets/font/iconfont.js')

Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(Viewer)

Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
