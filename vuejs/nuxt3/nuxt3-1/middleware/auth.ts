export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware[auth]called　') 
});