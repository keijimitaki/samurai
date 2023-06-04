<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const books = reactive([
  {id:1, title:'タイトル１', content:'本の内容１'},
  {id:2, title:'タイトル２', content:'本の内容２'},
  {id:3, title:'タイトル３', content:'本の内容３'},
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
    <h2>本の一覧</h2>
    <ul>
      <li
        @click="showBookDetail(book.id)" 
        v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

.lesson-router {
  margin: 4rem;
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
