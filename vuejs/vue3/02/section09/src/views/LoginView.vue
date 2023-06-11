<script setup>
// https://github.com/vuejs/vuex/blob/main/examples/composition/shopping-cart/components/ProductList.vue

import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import TheWelcome from '../components/TheWelcome.vue'
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useStore, mapState, mapActions } from 'vuex'
import { useRouter } from 'vue-router'


const store = useStore()
const router = useRouter()

const loginUser = reactive({
  id: -1,
  name: '',
  isVisible: false,
});

//const { loginAction } = mapActions('auth',['loginAction'])

const loginAction = () => mapActions('auth',['loginAction'])
const loginAction2 = (user) => store.dispatch('auth/loginAction', user)

function login() {
  const userId = 1
  console.log(store.getters.getUserById(userId))
  loginUser.value = store.getters.getUserById(userId)

  //loginAction(loginUser)
  
  //login(loginUser.value)
 
  doLogin(loginUser.value)

  router.push('/setting')

}

const currentStore = computed(() => store.state)
const currentAuthStore = computed(() => store.state.auth)

// https://zukucode.com/2017/05/vuex-module-state.html
function doLogin(user) {
  console.log(store.state.auth.loginUser)
  //loginAction({id: 99, name: '🍖', isVisible: true})
  //loginAction2({id: 99, name: '🍖', isVisible: true})
  loginAction2(user)
  console.log(store.state.auth.loginUser)
  //console.log(store.state.moduleA)
  //console.log(store.state.moduleA.getters)
  //console.log(store.moduleA)

}


</script>

<template>
  <div class="login">

    <div class="contents">
      <h2><span style="text-decoration: overline;">Login</span></h2>
      <div style="display:flex; justify-content: center;">
        <div style="display:flex;padding-top:0.5rem;">
          <div style="min-width: 24px;margin:0 1rem">ユーザー名:</div>
          <div><input readonly value="大谷" 
            style="background-color: lightgray;border-radius: 4px; border-style:none;"/></div>
        </div>
      </div>
      <div style="display:flex; justify-content: center;">
        <div style="display:flex;padding-top:0.5rem;">
          <div style="min-width: 24px;margin:0 1rem">パスワード:</div>
          <div><input value="test"
            style="background-color: lightgray;border-radius: 4px; border-style:none; ;"/></div>
        </div>
      </div>
      <div style="margin-top: 1.25rem; display:flex; justify-content: center;">
        <button @click="login" style="border-radius: 4px; border: 1px solid gainsboro;padding:0.25rem 0.75rem; cursor: pointer;">ログイン</button>
      </div>

    </div>

  </div>
</template>

<style >
.contents {
  margin: auto;
  padding: 2rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: honeydew;
  width: 70%;
  height: 100%;
  border-radius: 16px;
  
}
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .contents {
    margin: auto;
    padding: 2rem;
    display:flex;
    justify-content: center;
    background-color: honeydew;
    width: 80%;
    height: 25%;
    border-radius: 16px;
  }
}

</style>
