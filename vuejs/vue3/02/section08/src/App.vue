<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'


import HelloWorld from './components/HelloWorld.vue'
import Header from './global/Header.vue'
import Footer from './global/Footer.vue'


const router = useRouter()

const STORAGE_KEY = 'books'
const newBook = ref('')
const books = ref([])

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY)) {
    try {
      books.value = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch(e) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }
})

function addBook(e) {

  books.value.push({
    id: books.value.length,
    title: e.title,
    image: e.image,
    description: e.description,
    readDate: '',
    memo: ''
  })
  saveBooks()
  // 最後に追加したidの取得コード
  console.log('saveBooks',books.value.slice(-1)[0].id)
  goToEditPage(books.value.slice(-1)[0].id)
  //router.push(`/edit/5`)
}

function removeBook(x) {
  books.value.splice(x, 1)
  saveBooks()
}

function saveBooks() {
  const parsed = JSON.stringify(books.value)
  localStorage.setItem(STORAGE_KEY, parsed)
}

function updateBookInfo(e){
  const updateInfo = {
    id: e.id,
    readDate: e.readDate,
    memo: e.memo,
    title: books.value[e.id].title,
    image: books.value[e.id].image,
    description: books.value[e.id].description
  }
  books.value.splice(e.id, 1, updateInfo)
  saveBooks()
  router.push('/')
  //goToEditPage(books.value.slice(-1)[0].id)
}

function goToEditPage(id){
  router.push(`/edit/${id}`)
}

function deleteLocalStorage(){
  const isDeleted = 'LocalStorageのデータを削除してもいいですか？'
  if(window.confirm(isDeleted)){
    localStorage.setItem(STORAGE_KEY, '')
    localStorage.removeItem(STORAGE_KEY)
    books.value.splice(0, books.value.length)
    // spliceなら this.books.splice(0, this.books.length)
    window.location.reload() 
  }
}


</script>

<template>
  <v-app>
    <Header @delete-local-storage="deleteLocalStorage"/>
    <v-main>
      <v-container>
        <RouterView 
        :books="books"
        @add-book-list="addBook"
        @update-book-info="updateBookInfo" />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>


</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
