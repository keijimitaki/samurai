<script setup>
const emit = defineEmits(['customEvent'])

function childMethod() {
  emit('customEvent', '子の値');
}

</script>

<template>

  <div class="child">
    <button @click="childMethod">子側のボタン</button>
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