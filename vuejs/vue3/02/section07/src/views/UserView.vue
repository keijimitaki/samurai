<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'


const route = useRoute()
const router = useRouter()

const books = reactive([
  {id:1, title:'タイトル1', content:'本の内容１'},
  {id:2, title:'タイトル2', content:'本の内容２'},
  {id:3, title:'タイトル3', content:'本の内容３'},
])

const bookIndex = ref(-1)

// https://v3.router.vuejs.org/ja/guide/essentials/named-routes.html
function showBookDetail(id) {
  bookIndex.value = id - 1
  console.log(books[bookIndex.value].title)
  router.push({
    name: 'book',
    params: {
      id: books[bookIndex.value].id,
      // ignored 
      // https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
      // title: books[bookIndex.value].title,
      // content: books[bookIndex.value].content,
    },

    // state: {
    //   id: books[bookIndex.value].id,
    //   title: books[bookIndex.value].title,
    //   content: books[bookIndex.value].content,
    // } 

  })

}

</script>

<template>
  <div class="lesson-router">
    <h2>ユーザー情報</h2>
    <nav>
      <router-link to="profile">プロフィール</router-link> | 
      <router-link to="post">記事</router-link> | 
    </nav>
    <div class="green-b">
      <router-view/>
    </div>

  </div>

</template>

<style scoped>

.lesson-router {
  margin: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  margin: 0.75rem;
  padding: 0;
  list-style: none;
}
ul li {
  margin-top: 0.75rem;
  padding: 0;
  border-bottom: 1px solid green;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  width: 100%;
}

</style>
