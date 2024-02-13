import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/LayoutView.vue'),
      children: [
        {
          path: "", 
          component: () => import('@/views/login/NewEmailView.vue'),
        },
        
      ],
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/LayoutDashView.vue'),
      children: [
        {
          path: "info", 
          component: () => import('@/views/login/InfoUserViuw.vue'),
        },
        {
            path: "infoPost", 
            component: () => import('@/views/dashboard/PostUserView.vue'),
          },
          {
            path: "intiresting", 
            component: () => import('@/views/dashboard/intrestingInfo.vue'),
          },
        
      ],
    },
  ]
})

export default router
