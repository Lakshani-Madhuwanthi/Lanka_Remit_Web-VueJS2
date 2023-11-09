import Vue from 'vue'
import VueRouter from 'vue-router'
import Pipeline from '@/helpers/middlewarePipeline'
import store from "@/store"
import routes from "@/router/routes"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware
  const context = { to, from, next, router, store }

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: Pipeline(context, middleware, 1),
  });
});

export default router
