// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入axios
import axios from 'axios'

Vue.prototype.$axios = axios;

//导入ele的组件
import ElementUI from 'element-ui'
//导入ele的样式
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
//全局css导入
import "../static/css/style.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
