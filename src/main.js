import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import store from './vuex/store'
import { mock } from 'mockjs'

axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios
Vue.use(VueResource);
/*请求拦截*/
Vue.http.options.emulateJSON = true;

Vue.http.interceptors.push((request, next) => {    //resource 拦截器
  const isRapData = request.url.search('http://rap.taobao.org/mockjs/')

  next(response => {
    if( ! response.ok) return // 这里用return不用throw是防止在该阶段就捕获到错误，应该在vuex的action中进行错误处理

    if (isRapData == -1)  // json化
      response.body = JSON.parse(response.body)
    else  // 开发时，用到 mockjs
      response.body = mock(response.body)
  })
})

/*响应拦截*/
/*axios.interceptors.response.use((request, next) => {// 响应成功关闭loading
  console.log("已响应");
  const isRapData = request.url.search('http://rap.taobao.org/mockjs/')
   next(response => {
    console.log(response);
    if( ! response.ok) return // 这里用return不用throw是防止在该阶段就捕获到错误，应该在vuex的action中进行错误处理

    if (isRapData == -1)  // json化
      response.body = JSON.parse(response.body)
    else  // 开发时，用到 mockjs
      response.body = mock(response.body)
  })
 }, error => {
   loadinginstace.close()
   Message.error({
     message: '加载失败'
   })
   return Promise.reject(error)
 })*/


/*vue-resource拦截器的写法*/
/*Vue.http.interceptors.push((request, next) => {
  const isRapData = request.url.search('http://rap.taobao.org/mockjs/')
  next(response => {
    if( ! response.ok) return // 这里用return不用throw是防止在该阶段就捕获到错误，应该在vuex的action中进行错误处理

    if (isRapData == -1)  // json化
      response.body = JSON.parse(response.body)
    else  // 开发时，用到 mockjs
      response.body = mock(response.body)
  })
})*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
