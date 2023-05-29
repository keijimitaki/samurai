<template>
  <div>
    <p class="text-blue-600">APIテスト</p>
    <button @click="fetchPosts" class="rounded-full">Fetch Posts</button>

    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>

    <br>
    <ul>
      <li>A6</li>
    </ul>

  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const state = reactive({
      posts: []
    })
    /*
    const state = reactive({
      posts: [{id:"1" ,title:"V1"}, {id:"2" ,title:"V2"}]
    })
    */

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        state.posts = response.data
        
        console.log(state.posts[0].title)
        console.log(state.posts.length)
        //console.log('Array.isArray(state.posts)', Array.isArray(state.posts))

      } catch (error) {
        console.error(error)
      }
    }

    return {
      posts: state.posts,
      fetchPosts
    }
  }
}
</script>