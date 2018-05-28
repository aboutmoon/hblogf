// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'

//css
//todo: 应该可以通过webpack直接打包css文件的.
require('bulma/css/bulma.css')

//core
import axios from 'axios'
import Form from '@/core/Form'

window.axios = axios;
window.Form = Form;

//test
import mock from './mock'

//设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  methods: {

  }
})
