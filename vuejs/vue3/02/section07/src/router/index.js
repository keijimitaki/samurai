import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewSub from '../views/AboutViewSub.vue'
import BookListView from '../views/BookListView.vue'
import BookDetailView from '../views/BookDetailView.vue'
import UserView from '../views/UserView.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      components: {
        aboutsub: AboutViewSub,
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        default: () => import('../views/AboutView.vue')
      },
      
    },
    {
      path: '/book',
      name: 'booklist',
      component: BookListView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookDetailView,
      props: route => ({ 
        id: Number(route.params.id),
        title: route.params.title,
        content: route.params.content }), 
     
    },
    {
      path: '/user',
      component: UserView,
      children: [
        {
          path:'profile',
          component: UserProfile
        },
        {
          path:'post',
          component: UserPost
        }
      ]
     
    },
    // https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next)=>{
  console.log('from', from)
  console.log('to', to)
  next()
})

export default router
