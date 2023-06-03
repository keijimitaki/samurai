<script setup>
import { ref } from 'vue'

const member = ref({ 
  name: '堂安', 
  height: 170, 
  hobby: 'サッカー',    
})

</script>

<template>

  <div class="child">
    <div>
      <slot :member="member">ここが差し変わる</slot>
    </div>
  </div>

</template>

<style scoped>
.child {
  margin :0.5rem;
  padding :0.25rem 1rem;
  border-radius:12px;
  background: rgb(234, 235, 189);
  background: linear-gradient(90deg, rgba(211,166,241,1) 0%, rgba(204,192,131,1) 36%, rgba(252,176,69,1) 100%);}

</style>