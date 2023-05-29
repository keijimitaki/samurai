<script setup>

import { reactive, computed } from 'vue'

const contact = reactive({
  yourName: '', 
  tel: '', 
  email: '', 
  gender: '', 
  age: '', 
  message: '',
  attracts: [],
  caution: false,
})

const errors = reactive([])
const hasError = reactive({ yourName: false })

function validate() {

  errors.splice(0)

  if (!contact.yourName) {
    errors.push('氏名は必須です')
  } else if (contact.yourName.length > 20) {
    errors.push('氏名は20文字以下で入力してください')
  }

  if (!contact.gender) {
    errors.push('性別を選択してください')
  }

  if (!contact.caution) {
    errors.push('注意事項にチェックを入れてください')
  }

}


const yourName = computed({
  get() {
    return contact.yourName
  },
  set(newValue) {
    
    if (newValue.length<=20) {
      hasError.yourName = false
    } else {
      hasError.yourName = true
    }

    contact.yourName = newValue

  }

})


</script>

<template>
  <div class="lesson-v-model-form v-cloak">

    <div class="row">
      <div v-if="errors.length" style="color:red;margin-bottom: 1rem; min-width: 560px;">
        <ul style="list-style: none; padding:0;">
          <li class="error" v-for="error in errors">{{error}}</li>
        </ul>
      </div>
    </div>

    <form @submit.prevent="validate">

      <div class="row">
        <div class="label">氏名</div>
        <div class="value">
          <input type="text" v-model="yourName" />
          <span :class="{error: hasError.yourName}" style="margin-left:1rem;">{{contact.yourName.length}}/20</span>
        </div>
      </div>
      <div class="row">
        <div v-show="hasError.yourName" class="error" style="font-size:0.85rem;margin:2px;">氏名は20文字以下で入力してください</div>
      </div>
      <div class="row">
        <div class="label">電話番号</div>
        <div class="value"><input type="tel" v-model.number="contact.tel" /></div>
      </div>
      <div class="row">
        <div class="label">メールアドレス</div>
        <div class="value"><input type="email" v-model.lazy.trim="contact.email" /></div>
      </div>
      <div class="row">
        <div class="label">性別</div>
        <div class="value">
          <input type="radio" value="male" v-model="contact.gender" />男性
          <input type="radio" value="female" v-model="contact.gender" />女性
          <input type="radio" value="other" v-model="contact.gender" />その他
        </div>
      </div>
      <div class="row">
        <div class="label">年齢</div>
        <div class="value">
          <select v-model="contact.age" >
            <option>10代</option>
            <option>20代</option>
            <option>30代</option>
            <option>40代～</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="label">メッセージ</div>
        <div class="value">
          <textarea v-model="contact.message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="label">このサイトを知った理由</div>
        <div class="value">
          <input type="checkbox" value="Webサイト" v-model="contact.attracts">Webサイト
          <input type="checkbox" value="チラシ" v-model="contact.attracts">チラシ
          <input type="checkbox" value="その他" v-model="contact.attracts">その他
        </div>
      </div>
      <div class="row">
        <div class="label">注意事項に同意する</div>
        <div class="value">
          <input type="checkbox" v-model="contact.caution">
        </div>
      </div>
      <div class="row">
        <div style="margin-top: 1rem; min-width: 560px;">
          <input type="submit" value="送信" style="padding:0.5rem 2rem;">
        </div>
      </div>

    </form>

  </div>

</template>

<style scoped>

  [v-cloak]{
    display:none;
  }

.lesson-v-model-form {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.label {
  min-width: 200px;
}
.value {
  min-width: 360px;
}

.error {
  color: red;
}


</style>
