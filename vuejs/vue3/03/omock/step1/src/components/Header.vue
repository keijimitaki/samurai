<script setup>
const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <div class="header">
    Header {{ props.msg }}
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  min-height: 64px;;
  background-color: #273637; 
  color: #fff;
}

</style>
