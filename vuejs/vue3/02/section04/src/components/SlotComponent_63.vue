<script setup>



</script>

<template>

  <div class="child">
    <div>
      <div>
        <slot name="header">footer</slot>
      </div>
      <div>
        <slot>main contents</slot>
      </div>
      <div>
        <slot name="footer">footer</slot>
      </div>
    </div>
  </div>

</template>

<style scoped>
.child {
  margin :0.5rem;
  padding :0.25rem 1rem;
  border-radius:12px;
  background: rgb(234, 235, 189);
  background: linear-gradient(90deg, rgba(211,166,241,1) 0%, rgba(204,192,131,1) 36%, rgba(252,176,69,1) 100%);}

</style>