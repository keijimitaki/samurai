<script setup>
const props = defineProps(['value'])
const emit = defineEmits(['update:value'])

function childEvent(e) {
  console.log('emit from CustomInput_58',e.target.value)
  emit('update:value', e.target.value)
}


</script>

<template>

  <div class="child">
    <input :value="value" @input="childEvent">
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