<script setup>
const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <div class="contents">
    PageDetailSide {{ props.msg }}
  </div>
</template>

<style scoped>
.contents {
  width: 320px;
  min-height: 240px;;
  background-color: #FFFFFF; 
  border: solid;
  margin: 4px;
}

</style>
