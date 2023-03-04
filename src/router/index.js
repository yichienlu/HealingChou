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
          component: () => import('../views/front/HomeView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'services',
          component: () => import('../views/front/ServicesView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'service',
          // path: 'service/:id',
          component: () => import('../views/front/ServiceView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'courses',
          component: () => import('../views/front/CoursesView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'course',
          // path: 'course/:id',
          component: () => import('../views/front/CourseView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'appointment-success',
          component: () => import('../views/front/AppointmentSuccessView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'news/:id',
          component: () => import('../views/front/NewsArticleView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'blog',
          component: () => import('../views/front/BlogView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'blog_article',
          // path: 'blog/:id',
          component: () => import('../views/front/BlogArticleView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue'),
          meta: {
            title: '舟舟療心室'
          } 
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: '舟舟療心室 後台'
      },
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue'),
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
