<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ja } from 'date-fns/locale';

const route = useRoute()
const props = defineProps({
  'books': {
    type: Array,
    default: ()=>{[]}
  }
  //'books': [],
  // https://qiita.com/hogesuke_1/items/c74463de1a1eee802ca8
})

const emit = defineEmits(['update-book-info'])

const date = ref(props.books[route.params.id].readDate)
//const book = ref('')
const book = ref(props.books[route.params.id])

function updateBookInfo(){

  let readDate = ''
  if (date.value) {
    readDate = new Date(date.value).toLocaleDateString()
  }

  emit('update-book-info',{
    id: route.params.id,
    readDate: readDate,
    memo: book.value.memo
  })
}

// https://qiita.com/azukiazusa/items/9f467fdea7298baf3476
// onBeforeRouteEnterは提供されていない
// https://ja.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
// https://v3.router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99
// https://v3.router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%83%AB%E3%83%BC%E3%83%88%E5%8D%98%E4%BD%8D%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99
// https://router.vuejs.org/guide/advanced/composition-api.html

// onBeforeRouteUpdate((to, from, next) => {
//   console.log('onBeforeRouteUpdate',to)
//   next(vm => {
//     // `vm` を通じてコンポーネントインスタンスにアクセス
//     vm.$nextTick(()=>{
//       vm.book = vm.books[vm.$route.params.id]
//       if(vm.book.readDate){
//         vm.date = vm.book.readDate
//       } else {
//         vm.date = new Date().toISOString().substr(0, 10)
//       }
//       console.log(vm.book)
//     })
//   })
// })

console.log(props.books[route.params.id])

// In case of a range picker, you'll receive [Date, Date]
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
}

</script>

<template>

  <v-row class="mt-4">

    <v-col cols="12">
      <v-card class="mx-auto pb-16">
        <v-row>
          <v-col cols="4">
            <v-img :src="book.image"></v-img>
          </v-col>
          <v-col cols="8">
            <v-card-title>
              タイトル：{{ book.title }}
            </v-card-title>
            <v-card-text>

            読んだ日： 
            <VueDatePicker 
              v-model="date" 
              :enable-time-picker="false"
              :auto-position="false"
              :format-locale="ja" 
              format="yyyy/MM/dd" 
              style="width:240px; margin:1rem;"></VueDatePicker>
            <v-spacer></v-spacer>

            感想：<v-textarea bg-color="" color="" active-color="red"
            class="mx-2" v-model="book.memo">
            {{book.memo }}
            </v-textarea>
            
            <v-card-actions>
              <v-btn color="secondary" to="/">一覧に戻る</v-btn>
              <v-btn color="info" 
              @click="updateBookInfo">保存する</v-btn>
            </v-card-actions> 

            </v-card-text>
          </v-col>

        </v-row>

      </v-card>
    </v-col>
  </v-row>

</template>


