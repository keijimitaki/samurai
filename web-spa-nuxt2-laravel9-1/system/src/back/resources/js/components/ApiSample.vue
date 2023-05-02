<template>
  <div>
    <p class="text-blue-600">APIテスト</p>

    <div class="m-4">
      <h1>
        <span>🎮</span>
      </h1>

      <button @click="fetchInternalStudents" class="rounded-full">Internal/students</button>
      <ul>
        <li v-for="student in students" :key="student.id">{{ student.name }}</li>
      </ul>
    </div>

    <div class="m-4">
      <h1>
        <span>外部</span>
      </h1>

      <button @click="fetchExternalPosts" class="rounded-full">External/posts</button>

      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>


  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const state = reactive({
      posts: [],
      students: [],
    })

    const fetchExternalPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        response.data.forEach(element => {
        
          const user_id = element.user_id;
          const id = element.id;
          const title = element.title;

          let obj = {
            'user_id': user_id,
            'id': id,
            'title': title
          }
          state.posts.push(obj)
        
        })

        //state.posts = response.data
        
        console.log(state.posts)
        console.log(state.posts.length)
        //console.log('Array.isArray(state.posts)', Array.isArray(state.posts))

      } catch (error) {
        console.error(error)
      }
    }

    const fetchInternalStudents = async () => {
      try {
        const response = await axios.get('./api/students')
        
        response.data.forEach(element => {
        
          const id = element.id;
          const name = element.name;

          let obj = {
            'id': id,
            'name': name
          }
          state.students.push(obj)
        
        })

        console.log(state.students)
        console.log(state.students.length)

      } catch (error) {
        console.error(error)
      }
    }

    return {
      posts: state.posts,
      students: state.students,
      fetchExternalPosts,
      fetchInternalStudents,
    }
  }
}
</script>