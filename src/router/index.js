import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'services',
          component: () => import('../views/front/ServicesView.vue')
        },
        {
          path: 'service/:id',
          component: () => import('../views/front/ServiceView.vue')
        },
        {
          path: 'courses',
          component: () => import('../views/front/CoursesView.vue')
        },
        {
          path: 'course/:id',
          component: () => import('../views/front/CourseView.vue')
        },
        {
          path: 'appointment-success',
          component: () => import('../views/front/AppointmentSuccessView.vue')
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsView.vue')
        },
        {
          path: 'news/:id',
          component: () => import('../views/front/NewsArticleView.vue')
        },
        {
          path: 'blog',
          component: () => import('../views/front/BlogView.vue')
        },
        {
          path: 'blog/:id',
          component: () => import('../views/front/BlogArticleView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrdersView.vue')
        },
        {
          path: 'articles',
          component: () => import('../views/admin/AdminArticlesView.vue')
        },
        {
          path: 'article/:id',
          component: () => import('../views/admin/AdminArticleView.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/admin/AdminCouponsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

export default router
