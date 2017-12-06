import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Components
import home from './../components/home'
import NotFound from './../components/errors/not-found'

// Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
]


export default new Router({
  routes: routes
})