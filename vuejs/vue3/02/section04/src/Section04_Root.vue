<script setup>

import LocalComponent from './Section04_51_64_Local.vue'

</script>

<template>

  <GlobalComponent/>

  <div class="lesson-component v-cloak">
    
    <LocalComponent/>

    <div class="row" style="padding:1rem 0; margin-top:2rem; width:100%; border-top: 1px salmon solid;color:#6D4C41;font-weight: bold;">
      ルートコンポーネントです
    </div>

  </div>

</template>

<style scoped>

  [v-cloak]{
    display:none;
  }

.lesson-component {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}


</style>
