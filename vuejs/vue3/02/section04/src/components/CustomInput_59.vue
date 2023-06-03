<script setup>
// https://ja.vuejs.org/guide/components/v-model.html

import { computed } from 'vue'

const props = defineProps(['value'])
const emit = defineEmits(['update:value'])


const value = computed({
  get() {
    console.log('emit from CustomInput_59',props.value)
    return props.value
  },
  set(value) {
    emit('update:value', value)
  }
})

</script>

<template>

  <div class="child">
    <input :value="value">
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