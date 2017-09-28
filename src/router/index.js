import Vue from 'vue'
import Router from 'vue-router'
import DemoHome from '@/components/DemoHome'
import DemoList from '@/components/DemoList'
import DemoAbout from '@/components/DemoAbout'
import DemoContact from '@/components/DemoContact'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
      {path: '/index.html',redirect: '/'},
      {path: '/', component: DemoHome},   //哪个路径打开哪个组件
      {path: '/list', component: DemoList},
      {path: '/about', component: DemoAbout},
      {path: '/contact', component: DemoContact}
  ]
}
)
