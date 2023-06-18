<script setup>

const emit = defineEmits(['delete-local-storage'])

function deleteLocalStorage(){
  emit('delete-local-storage')
}

</script>

<template>

  <div>

    <v-app-bar
      app
      color="indigo"
    >
      <v-spacer></v-spacer>

      <v-btn 
        color="error"
        @click="deleteLocalStorage">
        削除する
      </v-btn>

    </v-app-bar>
        
  </div>

</template>

<style scoped>
</style>
