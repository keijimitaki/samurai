<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import MyComponent from './components/MyComponent.vue'
import ArrayTest from './components/ArrayTest.vue'
import EmitTest from './components/EmitTest.vue'
import CustomInput_58 from './components/CustomInput_58.vue'
import CustomInput_59 from './components/CustomInput_59.vue'
import SlotComponent_63 from './components/SlotComponent_63.vue'
import SlotComponent_64 from './components/SlotComponent_64.vue'

const parentTitle = '親側のタイトル'
const members = [
  {name: '久保'},
  {name: '南野'},
  {name: '堂安'},
]

function parentMethod(e) {
  console.log(e)
}

const parentValue = ref('');

</script>

<template>
  
  <div class="lesson-childcomponent">

    <div class="divider">53 props 直接書いてみる</div>  
    <div class="lesson">
      <MyComponent title="テスト"/>
      <MyComponent disabled="true"/>
      <MyComponent />
    </div>
    
    <div class="divider">54 propsとv-bind</div>  
    <div class="lesson">
      <MyComponent :title="parentTitle"/>
    </div>
    
    <div class="divider">55 propsで配列を渡す</div>  
    <div class="lesson">
      <ArrayTest class="child" 
        v-for="member in members"
        :key="member.name"
        :item="member"
      />
    </div>

    <div class="divider">57 $emitカスタムイベント</div>  
    <div class="lesson">
      <!-- https://ja.vuejs.org/guide/components/events.html -->
      <EmitTest class="child" @custom-event="parentMethod"/>
    </div>
        
    <div class="divider">58 コンポーネント間のフォーム</div>  
    <div class="lesson">
      
      <!---->
      <CustomInput_58 class="child" :value="parentValue" @input="parentValue = $event.target.value"/>
      
     <!-- 
      https://johobase.com/vue-js-component-implementation-v-model/
      -->
      <CustomInput_58 class="child" v-model:value="parentValue"/> 

      {{ parentValue }}
    </div>
      
    <div class="divider">59 子側でv-modelを使うパターン</div>  
    <div class="lesson">
      <CustomInput_59 class="child" :value="parentValue" @input="parentValue = $event.target.value"/>      

      {{ parentValue }}
    </div>
            
    <div class="divider">60 イベントバス</div>
    <!--
      // https://v3-migration.vuejs.org/breaking-changes/events-api.html
      // https://medium.com/@certosinolab/using-event-bus-in-vue-js-3-425aae8c21a6
    -->
    <div class="lesson">
      Vue3では廃止されたので省略　
      <a href="https://v3-migration.vuejs.org/breaking-changes/events-api.html" style="font-weight: bold;">参考</a>
    </div>
    
    <!--
      https://ja.vuejs.org/guide/components/slots.html#named-slots
    -->
    <div class="divider">63 名前付きslot</div>  
    <div class="lesson">
      <SlotComponent_63>
        <template v-slot:header>ヘッダー</template>
        mainに入ります<br>
        <template #footer>フッター</template>
        ここもmainに入ります<br>
      </SlotComponent_63>
    </div>

    <!--
      https://ja.vuejs.org/guide/components/slots.html#scoped-slots
    -->
    <div class="divider">64 スコープ付きslot</div>  
    <div class="lesson">
      <SlotComponent_64>
        <template v-slot:default="player">
          {{ player.member.name }}
        </template>
      </SlotComponent_64>
    </div>

  </div>

</template>

<style>
.done {
  text-decoration: line-through;
}

.divider {
  width: 100%;
  font-weight: bold;
  color: #6D4C41
}

.lesson {
  width: 100%;
  margin-bottom: 0.75rem;
  padding :1.25rem 3rem;
  background-color: #FFF9C4;
  border: none;
  border-radius: 10px 100px / 120px;
}

.lesson-childcomponent {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  .lesson-childcomponent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

</style>