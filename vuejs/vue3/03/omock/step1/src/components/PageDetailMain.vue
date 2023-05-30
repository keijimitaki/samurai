<script setup>

const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <div class="contents">
    PageDetailMain {{ props.msg }}
  </div>
</template>

<style scoped>
.contents {
  width: 720px;
  min-height: 240px;;
  background-color: #FFFFFF;
  border: solid;
  margin: 4px;
  
}

</style>
