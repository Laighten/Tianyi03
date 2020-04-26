import Vue from 'vue'
import App from './App'
import router from './router'
//import mock from './mock' 
//import axios from 'axios' 
//axios.defaults.baseURL = 'http://mockjs.com/api' 


Vue.config.productionTip = false
//引入屏幕自适应插件
import 'lib-flexible'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/application.css'
//引入element-Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入词云
import 'echarts-wordcloud/dist/echarts-wordcloud.js'
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
