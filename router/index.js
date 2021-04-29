import Vue from 'vue'
import Router from 'vue-router'
import { courseRoutes } from './courseRoutes'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [...courseRoutes],
    linkActiveClass: 'nuxt-link-active',
  })
  // router.beforeEach((to, from, next) => {
  //   const lang = to.params.lang
  //   if (!['uz', 'ru', 'en'].includes(lang)) return next('ru')
  //   return next()
  // })

  router.afterEach((to, from) => {
    if (process.client) {
      if (to.matched.some(({ meta }) => meta.disableScroll)) return
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  })

  return router
}
