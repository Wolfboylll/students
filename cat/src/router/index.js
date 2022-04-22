import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
      hidden: true
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home.vue'),
      hidden: true
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
      hidden: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue'),
      hidden: true
    },
    {
      // student
      path: '/students',
      name: 'student Management',
      redirect: '/students/Message',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/students/Message',
          name: 'student message',
          iconclass: 'fas fa-book-dead',
          component: () => import('@/components/students/Messagement.vue'),
          hidden:true
        },
        {
          path: '/students/information',
          name: 'student information',
          iconclass: 'fas fa-ghost',
          component: () => import('@/components/students/Studentinformation.vue'),
          hidden:true
        },
        {
          path: '/students/List',
          name: 'student List',
          iconclass: 'fas fa-spider',
          component: () => import('@/components/students/StudentList.vue'),
          hidden:true
        },
        {
          path: 'students/Work',
          name: 'student Work',
          iconclass: 'fas fa-cat',
          component: () => import('@/components/students/WorkList.vue'),
          hidden:true
        }
      ]
    }
  ],
  mode: 'history'
})
