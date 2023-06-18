<script setup>
import { ref, reactive, computed, watch } from 'vue'

const props = defineProps({
  'books': {
    type: Array,
    default: ()=>{[]}
  }
  //'books': [],
  // https://qiita.com/hogesuke_1/items/c74463de1a1eee802ca8
})

// JavaScriptのConsoleに以下の警告が出るため、emitを定義
// BookIndex.vue?t=1686870133388:89 [Vue warn]: Extraneous non-emits event listeners (addBookList, updateBookInfo) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option. 
defineEmits(['add-book-list', 'update-book-info'])

const books = ref(props.books)

</script>

<template>

  <v-row>
    <v-col cols="6">
      <v-btn color="primary" to="/search">検索する</v-btn>
    </v-col>
  </v-row>
  <v-row>
      <v-col cols="12" sm="6" v-for="book in books" :key="book.id">
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              読んだ日：{{ book.readDate  }}
              感想：{{book.memo}}
              <v-spacer></v-spacer>
              ID: {{ book.id }}

              <v-spacer></v-spacer>
              <v-col cols="auto">
                <v-btn 
                  :to="{name: 'bookedit', params: {id: book.id}}"
                  icon="mdi:mdi-pencil" color="indigo" size="small">
                </v-btn>
              </v-col>

            </v-col>


                  
          </v-row>
        </v-card>

      
      </v-col>


    </v-row>

</template>

<style scoped>
</style>
