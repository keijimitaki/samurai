<template>
  <nav class="py-2 bg-slate-200">
    <span style="margin:0.5rem">
      <NuxtLink to="/">Home</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <nuxt-link :to="{ name: 'posts' }">API [一般API]</nuxt-link>
    </span>
    <span style="margin:0.5rem">
      <NuxtLink to="/mybackendapi">API [独自システム]</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <NuxtLink to="/about">About</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <a href="/_tailwind/">tailwind</a>
    </span>
  </nav>
</template>