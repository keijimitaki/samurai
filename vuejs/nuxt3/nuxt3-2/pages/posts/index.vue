<template>
  <div class="m-8">
    <h1>Post 一覧</h1>
    <div>
      <p v-if="error">{{ error }}</p>
      <p v-if="pending">Loading...</p>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup>
  definePageMeta({
    layout: 'custom',
  });

  const {
    data: posts,
    error,
    pending,
  } = await useLazyAsyncData('jsonplaceholder.posts', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts/')
  );

  //console.log(useNuxtApp().payload.data);

</script>