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
    <div style="display:flex; justify-content:space-between;padding: 1rem;">
      <div>ログインユーザー： {{ store.state.auth.loginUser }}</div>
      {{ store.state.auth.isLogin }}
      <div @click="logout" >Logout</div>
      <!-- <button @click="check" >check</button> -->
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
