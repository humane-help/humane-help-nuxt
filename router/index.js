import Vue from 'vue'
import Router from 'vue-router'
import { courseRoutes } from './courseRoutes'

Vue.use(Router)

export function createRouter() {
  function addLocalesToRoutes(routes) {
    const newRoutes = []
    const locales = ['uz', 'ru']
    if (Object.assign([], routes).length) {
      locales.forEach((lang) => {
        routes.forEach((item) => {
          if (item.notChangePath) {
            newRoutes.push({
              name: `${item.name}___${lang}`,
              path: item.path,
              component: item.component,
              meta: item.meta,
            })
          } else if (lang === 'ru') {
            newRoutes.push({
              name: `${item.name}___${lang}`,
              path: item.path,
              component: item.component,
              meta: item.meta,
            })
            newRoutes.push({
              name: `${item.name}`,
              path: item.path,
              component: item.component,
              meta: item.meta,
            })
          } else {
            newRoutes.push({
              name: `${item.name}___${lang}`,
              path: `/${lang}${item.path}`,
              component: item.component,
              meta: item.meta,
            })
          }
        })
      })
    }
    return newRoutes
  }
  const router = new Router({
    mode: 'history',
    routes: [...addLocalesToRoutes(courseRoutes)],
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
