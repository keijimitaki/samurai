<template>
  <div>
    <h1 class="text-rose:200">サンプル</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">記事データ{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const state = reactive({
      posts: []
    })

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        state.posts = response.data[0]
        console.log('fetchPosts', state.posts)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      fetchPosts()
      console.log('onMounted')
    })

    return {
      posts: state.posts
    }
  }
}
</script>
