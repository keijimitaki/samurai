<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = computed(() => {
  return store.state.count
})

</script>

<template>
  <div class="greetings">
    <h1 class="green" style="color:darkblue">{{ msg }}</h1>
    <!-- <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3> -->
    <h2 class="green" style="color:darkblue;text-align: center;">{{ count }} times</h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
