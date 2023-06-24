<template>
  <div>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>Main Page　データフェッチ</h1>
      <h2>{{ data }}</h2>
      <hr/> 
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
      </ul>
      <form @submit.prevent="addTask">
        <div>
          <input v-model="task" />
        </div>
        <div>
          <button type="submit">タスクを登録</button>
        </div>
      </form>

    </NuxtLayout>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: false,
  });

  const { data } = useFetch('/api/hello');
  const { data: tasks, refresh } = useFetch('/api/task');
  const task = ref('');

  const addTask = () => {
    const { data } = useFetch('/api/task', {
      method: 'post',
      body: { task: task.value },
    });
    refresh();
    task.value = '';

  };

</script>


<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  th {
    color: white;
    background-color: #1e90ff;
  }
</style>