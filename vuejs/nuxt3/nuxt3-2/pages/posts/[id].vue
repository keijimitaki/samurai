<template>
  <div class="m-8">
    <h3>投稿情報</h3>
    <div>
      <span>ID:{{ $route.params.id  }}</span>
      <span>名前:{{ user.name  }}</span>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const users = ref([
    {id:1, name:'大谷', isVisible: true},
    {id:2, name:'ダルビッシュ', isVisible: false },
    {id:3, name:'錦織', isVisible: true },
  ])
  const id = ref(route.params.id)
  const user = ref(users.value.find((user) => user.id == id.value))

</script>