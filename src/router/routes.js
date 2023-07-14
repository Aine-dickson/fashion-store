
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/home/main.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/dashboard/main.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('pages/cart/main.vue')
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import('pages/favorites/main.vue')
      },
      {
        path: '/notifications',
        name: 'notifications',
        component: () => import('pages/notifications/main.vue')
      },
      {
        path: '/accounts',
        name: 'accounts',
        component: () => import('pages/account/main.vue')
      },
      
    ]
  },

  // Fallback route
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
