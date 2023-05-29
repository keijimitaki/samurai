<template>
  <div id="app">


    <h1 class="text-green-600">サンプル</h1>
     <h2 class="text-sky-700">記事データ</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <br/>

     <h2>error</h2>
     {{ error }}

     <h2>message</h2>
     {{ message }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      posts: [],
      error: [],
      message: [],
    }
  },
  mounted(){
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then( response =>  this.posts = response.data )
      .catch( e => this.error = e )
      .finally( msg => this.message = {title: "finallyを実行しました", message: msg} )
  },
  me

}
</script>

<style scoped>

</style>