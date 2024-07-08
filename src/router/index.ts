import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { AppLayoutsEnum } from '@/layouts/layouts.types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/data/:name',
      name: 'dataTable',
      component: () => import('@/views/data/AppDataTable.vue'),
      props: true,
    },
    {
      path: '/edit/:name/:id',
      name: 'dataEdit',
      component: () => import('@/views/edit/AppDataEdit.vue'),
      props: true,
    },
  ],
})

router.beforeEach(loadLayoutMiddleware)

export default router
