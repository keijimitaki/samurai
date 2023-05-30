<script setup>
import PageDetailTabs from './PageDetailTabs.vue'
import PageDetailMain from './PageDetailMain.vue'
import PageDetailSide from './PageDetailSide.vue'

const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <PageDetailTabs msg="tabs　☆彡☆彡" />
  <div class="detail">
    PageDetail {{ props.msg }}
    <div class="detailcontents">
      <PageDetailMain msg="main 🍖" />
      <PageDetailSide msg="sub 🍰" />
    </div>
  </div>
</template>

<style scoped>
.detail {
  width: 100vw;
  min-height: 240px;;
  background-color: #FFFFFF; 
}

.detailcontents{
  display: flex;
  justify-content: center;
}

</style>
