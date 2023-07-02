<template>
  <p>ユーザID: {{ $route.params.id }}</p>
</template>
<script setup>
  const router = useRoute();
  const title = ref(`ユーザーページ　👦${router.params.id}`);
  const description = ref('ユーザーページ');
  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: `Use ID: ${router.params.id}`,
      },
    ],
  });
  console.log(router.params.id);
</script>