<script setup>
import { onBeforeRouteLeave } from 'vue-router'

// https://v3.router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99
// https://www.webdesignleaves.com/pr/plugins/vue-basic-04.html
onBeforeRouteLeave((to, from, next) => {
  const checkLeave = window.confirm('このページを離れますか？')
  if(checkLeave) {
    next();
  } else {
    next(false);
  }

})

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
