<template>
  <div>
      <h1>AboutSSRページ</h1>
      <h2>{{ subtitle }}</h2>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'original',
  });
  
  const subtitle = ref('この文書はNuxt.jsの基本的な使用方法について説明しています。')

</script>