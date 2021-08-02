// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import start from './pages/start.vue'
Vue.use(VueRouter)
// 0. 모듈 시스템 (예: vue-cli)을 이용하고 있다면, Vue와 Vue 라우터를port 하세요
// 그리고 `Vue.use(VueRouter)`를 호출하세요

// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다.
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// import hello from './components/Hello.vue'

// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/',
      name: 'Home',
      component: start
    }
  ]
})


// 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.
// 추가 옵션을 여기서 전달해야합니다.
// 지금은 간단하게 유지하겠습니다.
// const router = new VueRouter({
//   routes // `routes: routes`의 줄임
// })

// 4. 루트 인스턴스를 만들고 mount 하세요.
// router와 router 옵션을 전체 앱에 주입합니다.
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})

export default router

// const app = new Vue({
//   router
// }).$mount('#app')

// Vue.use(router)

// 이제 앱이 시작됩니다!