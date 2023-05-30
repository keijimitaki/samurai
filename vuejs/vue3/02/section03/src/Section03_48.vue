<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { debounce } from 'lodash';

const url = 'https://dog.ceo/api/breeds/image/random'
const options = {
  method: 'get'
}

async function getDogImage(){
  const response = await fetch(url, options)
  .then( response => response.json() )
  dogImage.value = response.message
}

const dogImage = ref('')
const watchTest = ref('')

let watchDogImage =  debounce(getDogImage, 1000)

watch(watchTest, async () => {
  watchDogImage()
})

</script>

<template>
  <div class="lesson-v-model-form v-cloak">

    <div class="row">
      <div style="margin-bottom:0.5rem;">
        <input type="text" v-model="watchTest" placeholder="文字を入力してください">
      </div>
    </div>

    <div class="row">
      <div>
        <img :src="dogImage">
      </div>
    </div>

  </div>

</template>

<style scoped>
  [v-cloak]{
    display:none;
  }

.lesson-v-model-form {
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  width: 100%;
}

</style>
