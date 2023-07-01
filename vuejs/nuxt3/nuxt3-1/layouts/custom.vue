<template>
  <div>
    <nav>カスタムレイアウト
      <button>
        <NuxtLink to="/" style="text-decoration:none;">
          戻る
        </NuxtLink>
      </button>
    </nav>
    <slot />
  </div>
</template>