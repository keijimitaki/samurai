<script setup>
import { ref, reactive, computed } from 'vue'

const newItem = ref('')
const query = ref('')
const todos = reactive([])

function addItem() {

  if (!newItem.value) return
  const todo = {
    item: newItem.value,
    isDone: false,
  }

  todos.push(todo)
  newItem.value = ''
  query.value = ''
}

function deleteItem(index) {
  todos.splice(index,1)  
}

const filteredList = computed(() => {
  return todos.filter( todo => { return todo.item.indexOf(query.value) !== -1 } )
})

</script>

<template>
  <div class="lesson-v-model-form v-cloak">

    <div class="row">
      <div style="margin: 0">
        <input type="text" v-model="newItem" style="width:200px;">
        <button @click.prevent="addItem" style="margin-left:0.25rem;">追加</button>
      </div>
      <div style="margin: 0 4rem;">
        <input type="text" v-model="query" >
        <span style="margin-left:0.25rem;">検索</span>
      </div>
    </div>

    <div class="row">
      <div style="width:100%;">
        <ul style="list-style: none; padding:0;">
          <li v-for="(todo, index) in filteredList" style="margin-top:0.5rem">
            <div style="display:flex;"> 
              <div style="min-width:180px;">
                <input type="checkbox" v-model="todo.isDone" v-bind:id="'item-' + index">
                <label :class="{done: todo.isDone}" v-bind:for="'item-' + index" style="margin-left:0.125rem;">{{ todo.item }} </label>
              </div>
              <div>
                <button @click.prevent="deleteItem(index)" 
                  style="margin-left:1rem; border:none; padding:0.125rem 0.75rem;border-radius:10%;">削除</button>
              </div>

            </div>
          </li>
        </ul>
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

.done {
  text-decoration: line-through;
}

</style>
