<template>
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

      <div class="rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">Order completed</h3>
            <div class="mt-2 text-sm text-green-700">
              <p>ご購入ありがとうございました  🙌</p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button type="button" class="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                  <NuxtLink to="/">戻る</NuxtLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThanksPage'
})
</script>
