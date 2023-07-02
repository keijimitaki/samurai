<template>
  <div class="m-8">
    <head>
      <title>Aboutページ</title>
      <meta name="description" content="Aboutページ" />
    </head>
    <h1>About Page</h1>
    <h2>Counter</h2>
    <div class="m-2 flex ">
      <span>Count:{{ counter }}</span>
      <button class="mx-3 rounded-full bg-slate-200 px-2" @click="counter++">+</button>
    </div>    
  </div>
</template>
<script setup>
  // const counter = ref(0);
  //const counter = useState('counter', () => 0);
  const counter = useCounter();
</script>