<script setup>

// 上手くいかなかった点 - propsで渡される値
// ・VueRouterでpropsとしてidしか渡って来ない。Vue-Routerの仕様と思われる
// 上手くいかなかった点 - 存在しないbook idが指定された場合の対応
// ・ライフサイクルメソッドのcreatedは無い
// ・watchでrouteを監視する方法が動作しない

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const books = reactive([
  {id:1, title:'タイトル1', content:'本の内容１'},
  {id:2, title:'タイトル2', content:'本の内容２'},
  {id:3, title:'タイトル3', content:'本の内容３'},
])

const props = defineProps({
  id: -1,
  // title: '',
  // content: '',
})

const bookIndex = ref(props.id - 1)
const illegalIndex = ref(bookIndex.value > books.length)
const book = ref( illegalIndex.value ? {} : books[bookIndex.value])

if ( illegalIndex.value ) {
  router.push('/book')
}

</script>

<template>
  <div class="lesson-router">

    <h2>本の詳細</h2>
    <ul>
      <!-- <li>id：{{ books[bookIndex].id }}</li> -->
      <li>タイトル：{{ book.title }}</li>
      <li>内容：{{ book.content }}</li>
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

</style>
