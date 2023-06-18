import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookIndex from '@/pages/BookIndex.vue'
import BookSearch from '@/pages/BookSearch.vue'
import BookEdit from '@/pages/BookEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bookindex',
      component: BookIndex
    },
    {
      path: '/search',
      name: 'booksearch',
      component: BookSearch
    },
    {
      path: '/edit/:id',
      name: 'bookedit',
      component: BookEdit
    },
    // https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
  ]
})

export default router
