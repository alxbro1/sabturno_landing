import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/terminos-y-condiciones',
    name: 'TermsAndConditions',
    component: () => import('../pages/TermsAndConditions.vue'),
  },
  {
    path: '/politica-de-privacidad',
    name: 'PrivacyPolicy',
    component: () => import('../pages/PrivacyPolicy.vue'),
  },
  {
    path: '/eliminar-cuenta',
    name: 'DeleteAccount',
    component: () => import('../pages/DeleteAccount.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
