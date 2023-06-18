<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'

const route = useRoute()
const router = useRouter()

function checkRouteInfo() {
  console.log(route)
}

function goToHome() {
  router.push('/')
}

const isBookListMenu = ref(false)
const activeManu = ref(0)

function checkProcessEnv() {
  //console.log(process.env)
  console.log(import.meta.env)
  
}

</script>

<template>
  <header>

    <Transition mode="out-in" :duration="{ enter: 150, leave: 180 }">
        <img v-if="activeManu == 0" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <img v-else-if="activeManu == 1" alt="Vue logo" class="logo" src="@/assets/auto_stories_black_24dp.svg" width="125" height="125" />
        <img v-else="activeManu == 2" alt="Vue logo" class="logo" src="@/assets/account_circle_black_24dp.svg" width="125" height="125" />
    </Transition>
   
    <div class="wrapper">

      <HelloWorld :msg="activeManu == 0 ? 'You did it!' : (activeManu == 1 ? 'You read it!' : 'You find it!') " />

      <nav>
        <RouterLink to="/" @click="activeManu = 0" >Home</RouterLink>
        <RouterLink to="/about" @click="activeManu = 0">About</RouterLink>
        <RouterLink to="/book" @click="activeManu = 1">BookList</RouterLink>
        <RouterLink to="/user/profile" @click="activeManu = 2">User</RouterLink>
        <router-link to="/item/1">Item</router-link>
      </nav>

      <!-- 
      <button @click="checkRouteInfo">ルート情報</button>
      <button @click="goToHome">戻る</button> 
      -->
      <button @click="checkProcessEnv">process.envを表示</button>

    </div>
  </header>

  <Transition>
    <RouterView />
  </Transition>

  <Transition>
    <RouterView name="aboutsub"/>
  </Transition>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
