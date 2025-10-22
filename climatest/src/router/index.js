import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/ArchiveView.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/messages',
      name: 'Messages',
      component: () => import('../views/MessagesView.vue')
    }
  ],
})

export default router
