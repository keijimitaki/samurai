<template>
  <div class="lesson-router">Item
    <router-link to="1">Item1</router-link><br>
    <router-link to="2">Item2</router-link><br>
    {{ $route.params.id }}
  </div>
</template>

<!-- 
  Option API 

<script> 
export default {
  created(){
    console.log('created')
  },
  watch:{
    $route(to, from){
      console.log('Called Item.vue watch')
      console.log(to)
      console.log(from)
    }
  }
}
</script>
-->


<!-- 
  Composition API 
-->
<script setup>
import { ref, reactive, watch, watchEffect } from 'vue'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
console.log('created')

const watchRouter = reactive(router)

// リンク切替毎に動作する
watch(watchRouter, (newValue, oldValue) => {
  console.log('Called Item.vue watch')
  console.log(newValue)
  console.log(oldValue)  
})

// リンク切替毎に動作しない
watchEffect(() => {
  console.log('Called Item.vue watchEffect')
  console.log(watchRouter)
})

// リンク切替毎に動作する
// https://router.vuejs.org/guide/advanced/composition-api.html
onBeforeRouteUpdate(async (to, from) => {
  // only fetch the user if the id changed as maybe only the query or the hash changed
  console.log('Called Item.vue onBeforeRouteUpdate')
  console.log(to)
  console.log(from)  

})


</script>


<style scoped>
.lesson-router {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: darkblue;
  font-weight: bold;
}

</style>