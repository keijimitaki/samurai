<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function increment() {
  console.log('increment from App.vue')
  store.commit('increment')
}

const logoutAction = () => store.dispatch('auth/logoutAction')
const isLogin = () => store.getters['auth/isLogin']

function logout(){
  logoutAction()
  router.push('/')
  //console.log(store.state.auth.isLogin)
}

function check(){
  console.log(store.getters['auth/isLogin'])
}


</script>

<template>
  <header>
    <span @click="increment" style="cursor: pointer;">
      <HelloWorld msg="You push it!" /> 
      <img alt="push button1" class="logo" src="@/assets/button.png" width="125" height="125" />
    </span>

    <div class="wrapper">

      <nav style="margin: 0 0.5rem; padding:0.25rem 2rem;">
        <RouterLink v-if="!isLogin()" to="/">Login</RouterLink>
        <RouterLink v-if="isLogin()" to="/setting">Setting</RouterLink>
        <RouterLink v-if="isLogin()" to="/add">Add User</RouterLink>
      </nav>


    </div>
  </header>

  <RouterView />

  
  <div style="margin:1rem 0; padding: 0.5rem 0;">
    <hr/>
    <div style="display:flex; justify-content:space-between;padding: 1rem 0.5rem;">
      <div><span style="font-weight: bold;">ログインユーザー： </span>{{ store.state.auth.loginUser }}</div>
      {{ store.state.auth.isLogin }}
      <div @click="logout" style="padding:0 1rem;cursor:pointer;display:flex;">
        <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        <span style="margin-left:0.25rem;">Logout</span>
      </div>
    </div>
  </div>

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
