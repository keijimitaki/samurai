<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="lesson-component">
    <div class="row">
      グローバルコンポーネントです
      <button class="g-button" @click="count++">You clicked me {{ count }} times.</button>
    </div>    
  </div>
</template>

<style scoped>
.lesson-component {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: azure;
}

.g-button {
  margin: 0.5rem 1.2rem;
  padding:0.75rem;
  border-radius: 8px;
  border-style:none;
}

</style>
