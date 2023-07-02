<template>
  <div>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <div class="m-8">
        <h1>Main Page　データフェッチ</h1>
        <h2>{{ data }}</h2>
        <hr/> 
        <p>
          <div class="m-2 flex ">
            <span>Count:{{ counter }}</span>
            <button class="mx-3 rounded-full bg-slate-200 px-2" @click="counter++">+</button>
          </div>
        </p>
        <hr/> 
        <ul class="my-3">
          <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
        </ul>
        <form @submit.prevent="addTask">
          <div class="my-3">
            <input class="border-2" v-model="task" />
          </div>
          <div class="my-3">
            <button class="rounded-full bg-slate-200 px-3 py-2" type="submit">タスクを登録</button>
          </div>
        </form>
      </div>

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
  const counter = useCounter();
</script>

