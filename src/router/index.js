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
            title: '舟舟療心室 | 關於舟舟'
          } 
        },
        {
          path: 'services',
          component: () => import('../views/front/ServicesView.vue'),
          meta: {
            title: '舟舟療心室 | 療癒服務'
          } 
        },
        {
          path: 'service',
          // path: 'service/:id',
          component: () => import('../views/front/ServiceView.vue'),
          meta: {
            title: '舟舟療心室 | 療癒服務'
          } 
        },
        {
          path: 'courses',
          component: () => import('../views/front/CoursesView.vue'),
          meta: {
            title: '舟舟療心室 | 療癒課程'
          } 
        },
        {
          path: 'course',
          // path: 'course/:id',
          component: () => import('../views/front/CourseView.vue'),
          meta: {
            title: '舟舟療心室 | 療癒課程'
          } 
        },
        {
          path: 'appointment-success',
          component: () => import('../views/front/AppointmentSuccessView.vue'),
          meta: {
            title: '舟舟療心室 | 預約成功'
          } 
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsView.vue'),
          meta: {
            title: '舟舟療心室 | 最新消息'
          } 
        },
        {
          path: 'news/:id',
          component: () => import('../views/front/NewsArticleView.vue'),
          meta: {
            title: '舟舟療心室 | 最新消息'
          } 
        },
        {
          path: 'blog',
          component: () => import('../views/front/BlogView.vue'),
          meta: {
            title: '舟舟療心室 | 舟舟小療'
          } 
        },
        {
          path: 'blog_article',
          // path: 'blog/:id',
          component: () => import('../views/front/BlogArticleView.vue'),
          meta: {
            title: '舟舟療心室 | 舟舟小療'
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
          path: 'orders',
          component: () => import('../views/admin/AdminOrdersView.vue'),
          meta: {
            title: '舟舟療心室 | 預約管理'
          },
        },
        {
          path: 'services',
          component: () => import('../views/admin/AdminServices.vue'),
          meta: {
            title: '舟舟療心室 | 療癒服務管理'
          },
        },
        {
          path: 'courses',
          component: () => import('../views/admin/AdminCourses.vue'),
          meta: {
            title: '舟舟療心室 | 療癒課程管理'
          },
        },
        {
          path: 'blog',
          component: () => import('../views/admin/AdminBlogView.vue'),
          meta: {
            title: '舟舟療心室 | 部落格管理'
          },
        },
        {
          path: 'news',
          component: () => import('../views/admin/AdminBlogView.vue'),
          meta: {
            title: '舟舟療心室 | 最新消息管理'
          },
        },
        {
          path: 'coupons',
          component: () => import('../views/admin/AdminCouponsView.vue'),
          meta: {
            title: '舟舟療心室 | 優惠管理'
          },
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

// router 命名
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  window.scrollTo(0,0);
  next()
})

export default router
