<script setup>
const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <div class="summary">
    PageSummary {{ props.msg }}
  </div>
</template>

<style scoped>
.summary {
  width: 100vw;
  min-height: 200px;;
  background-color: #EEF1F1; 
}

</style>
