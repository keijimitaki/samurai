<template>
  <h1>About Pages</h1>
</template>

<script setup>
  const title = ref('Aboutページ');
  const description = ref('Aboutページ');  
  
  definePageMeta({
    layout: 'custom',
    middleware: 'auth',

  });

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
    ],
  });

</script>
