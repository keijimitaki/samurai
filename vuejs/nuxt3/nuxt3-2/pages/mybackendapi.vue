<template>
  <div class="m-8">
    <h1>バックエンド API 呼び出し</h1>
  
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th>名称</th>
          <th>内容</th>
          <th>メモ</th>
          <th>作成日時</th>
          <th>更新日時</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.toc }}</td>
          <td>{{ user.memo }}</td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<script setup>

definePageMeta({
  layout: 'custom',
});

import { ref } from 'vue'
const users = ref([])

const fetchUsers = async() => {
  const response = await useFetch(`topics/api/topics`)
  console.log(response.data.value)

  if (response.data) {
    users.value = response.data.value
  }

}

fetchUsers()





</script>
