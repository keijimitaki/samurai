<script setup>
const props = defineProps(['msg'])

console.log(props.msg)
</script>

<template>
  <div class="detailtabs">
    PageDetailTabs {{ props.msg }}
    <div>
      <ul class="tabs">
        <li class="tab active">メニュー１</li>
        <li class="tab">メニュー２</li>
        <li class="tab">メニュー３</li>
        <li class="tab">メニュー４</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.detailtabs {
  width: 100vw;
  background-color: #EEF1F1;
  border: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #0A49A8;
}

.tabs {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.tab {
  margin: 0 8px;
  min-width:160px;
  min-height:48px;
  border-radius: 9px 9px 0 0;
  background-color: #C2D1D1;
}

.tab.active {
  border: solid;
  background-color: #FFF;
  border-width: 2px 2px 0 2px;  
  border-color: #0A49A8;
}

</style>
