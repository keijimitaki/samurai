<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import ChildComp from './components/ChildComp.vue'

/*
算出プロパティー 8/15
*/
let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

/*
ライフサイクルとテンプレート参照 9/15
*/
const p = ref(null)

onMounted(() => {
  p.value.textContent = 'mounted!'
})

/*
ウォッチャー 10/15
*/
const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  console.log('api fetch start')
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  console.log('api fetch end', res)

  todoData.value = await res.json()
}
fetchData()
watch(todoId, fetchData)


/*
コンポーネント 11/15
*/
/*
プロパティ 12/15
*/
const greeting = ref('Hello from parent')

/*
イベントの発行 13/15
*/
const childMsg = ref('No child msg yet')

/*
スロット 14/15
*/
const msg = ref('from parent')

</script>

<template>
  

  <div class="divider">算出プロパティー 8/15</div>  
  <div class="lesson">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.id }}
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>

  <div class="divider">ライフサイクルとテンプレート参照 9/15</div>
  <div class="lesson">
    <p ref="p">hello</p>
  </div>

  <div class="divider">ウォッチャー 10/15</div>  
  <div class="lesson">
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>

  <div class="divider">コンポーネント 11/15</div>  
  <div class="lesson">
    <ChildComp />
  </div>

  <div class="divider">プロパティ 12/15</div>  
  <div class="lesson">
    <ChildComp :msg="greeting" />
  </div>

  <div class="divider">イベントの発行 13/15</div>  
  <div class="lesson">
    <ChildComp @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>  
  </div>

  <div class="divider">スロット 14/15</div>  
  <div class="lesson">
    <ChildComp>Message: {{ msg }}</ChildComp>
    <ChildComp>🐶</ChildComp>
  </div>

</template>

<style>
.done {
  text-decoration: line-through;
}

.divider {
  width: 100%;
  font-weight: bold;
  color: #6D4C41
}

.lesson {
  width: 100%;
  margin-bottom: 0.75rem;
  padding :1.25rem 3rem;
  background-color: #FFF9C4;
  border: none;
  border-radius: 10px 100px / 120px;
}

</style>