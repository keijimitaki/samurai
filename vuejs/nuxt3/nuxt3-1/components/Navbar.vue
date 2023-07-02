<template>
  <nav>
    <span style="margin:0.5rem">
      <NuxtLink to="/">Home</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <!-- client middleware NOT called-->
      <NuxtLink to="/about">About(NuxtLink)</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <!-- client middleware called-->
      <a href="/about">About(Aタグ)</a>
    </span>
    <span style="margin:0.5rem">
      <NuxtLink to="/aboutssr">AboutSSR</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <NuxtLink :to="{ name: 'users-list' }">Users</NuxtLink>
    </span>
    <span style="margin:0.5rem">
      <NuxtLink to="https://google.com" target="_blank">
        外部サイト起動
      </NuxtLink>
    </span>
  </nav>
</template>

