<template>
    <div class="space-y-12">

      <div class="border-b border-gray-900/10 pb-12">
   <!-- <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> -->
        <div class="mt-2">



          <!-- image  -->
          <div class="col-span-full">
            <h2 class="text-base font-semibold leading-7 text-gray-900">OpenAI API Edit</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">画像生成</p>

            <div class="col-span-full mt-8">
              <label for="prompt" class="block text-sm font-medium leading-6 text-gray-900">Prompt</label>
              <div class="mt-2">
                <input id="prompt" name="prompt" type="text" v-model="state.prompt" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <!-- Original -->
              <div class="sm:col-span-2 sm:col-start-1">

                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                
                <div 
                  v-bind:class="['mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10', state.focusedOriginalImage ? 'border-dashed border-2 border-indigo-600' : '']"
                >

                  <div 
                    v-if="state.originalImage == null" 
                    class="text-center" 
                    draggable="true"
                    @dragenter="dragEnter($event, 'original')" 
                    @dragleave="dragLeave($event, 'original')"
                    @dragover.prevent @drop.prevent="dropFile($event, 'original')"
                  >
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <p class="pl-1 font-semibold text-indigo-600">Drag and drop</p>
                    </div>
                  </div>
                  <div 
                    v-else
                    draggable="true"
                    @dragenter="dragEnter($event, 'original')" 
                    @dragleave="dragLeave($event, 'original')"
                    @dragover.prevent @drop.prevent="dropFile($event, 'original')"
                  >
                    <img :src="state.originalImage"/>
                  </div>

                </div>

              </div>

              <!-- Mask -->
              <div class="sm:col-span-2">

                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Mask photo</label>
                <div 
                  v-bind:class="['mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10', state.focusedMaskImage ? 'border-dashed border-2 border-indigo-600' : '']"
                >
                  <div 
                    v-if="state.maskImage == null" 
                    class="text-center"
                    draggable="true"
                    @dragenter="dragEnter($event, 'mask')" 
                    @dragleave="dragLeave($event, 'mask')"
                    @dragover.prevent @drop.prevent="dropFile($event, 'mask')"                    
                  >
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <p class="pl-1 font-semibold text-indigo-600">Drag and drop</p>
                    </div>
                  </div>
                  <div 
                    v-else
                    draggable="true"
                    @dragenter="dragEnter($event, 'mask')" 
                    @dragleave="dragLeave($event, 'mask')"
                    @dragover.prevent @drop.prevent="dropFile($event, 'mask')"
                  >
                    <img :src="state.maskImage"/>
                  </div>

                </div>

              </div>

              <!-- Result -->
              <div class="sm:col-span-2">
              
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Result photo</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  
                  <div v-if="state.resultImage == null" class="text-center">
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <p class="pl-1">処理結果</p>
                    </div>
                  </div>
                  <div v-else>
                    <img :src="state.resultImage"/>
                  </div>

                </div>

              </div>


            </div>
          
          </div>

          <div class="col-span-full mt-2">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">レスポンス</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >{{ state.resultImage }}</textarea>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button @click="callApi" type="button" 
                v-bind:disabled="state.loading" 
                v-bind:class="['rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600', state.loading ? 'disabled:opacity-25' : '']">
                  <span v-if="state.loading">
                    処理中
                  </span>
                  <span v-else>
                    API実行
                  </span>                
                </button>
            </div>            
          </div>


          <!--
          <button @click="increment">Count is: {{ state.count }}</button>
          -->


        </div>
      </div>

    </div>
  
</template>

<script>

import { reactive, computed } from 'vue'
import axios from "axios";
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'


export default {
  setup() {

    const state = reactive({
      loading: false,
      prompt: null,
      originalImage: null,
      originalImageFile: null,
      focusedOriginalImage: false,
      maskImage: null,
      maskImageFile: false,
      focusedMaskImage: false,
      resultImage: null,
      count: 0,
      
    })


    const callApi = async () => {
      state.loading = true

      try {

        let form = new FormData()
        form.append('srcImage', state.originalImageFile)
        form.append('maskImage', state.maskImageFile)
        form.append('prompt', state.prompt)
        //console.log('state', state)

        //const response = await axios.get('./api/openaiweb1')
        const response = await axios.post('./api/openaiedit', form)
        console.log(response)

        if(response.data) {
          const resObj = response.data.data[0]
          state.resultImage = resObj.url
        }

        console.log(state.resultImage)
        
      } catch (error) {
        console.error(error)
      
      } finally {
        state.loading = false
      
      }


    }

    const increment = () => {
      state.count++;
    }

    const dragEnter = (event, target) => {
      console.log('enter ', target)

      if(target === 'original') {
        state.focusedOriginalImage = true;
        state.focusedMaskImage = false;
      } else {
        state.focusedOriginalImage = false;
        state.focusedMaskImage = true;
      }

    }

    const dragLeave = (event, target) => {
      console.log('leave ', target)

      if(target === 'original') {
        state.focusedOriginalImage = false;
      } else {
        state.focusedMaskImage = false;
      }

    }

    const dropFile = (event, target) => {
      console.log('drop ', target)
      
      const file = event.dataTransfer.files[0];

      if(target === 'original') {
        state.focusedOriginalImage = false;

        var reader = new FileReader();
        reader.onload = function(e) {
          //document.getElementById('thumbnail').setAttribute('src', e.target.result);
          state.originalImage = e.target.result
          state.originalImageFile = file
          console.log('画像保存 originalImageFile', state.originalImageFile)
        }
        reader.readAsDataURL(file);

      } else {
        state.focusedMaskImage = false;

        var reader = new FileReader();
        reader.onload = function(e) {
          state.maskImage = e.target.result
          state.maskImageFile = file
          console.log('画像保存 maskImageFile', state.maskImageFile)
        }
        reader.readAsDataURL(file);

      }

      



    }

    return {
      state,
      callApi,
      increment,
      dragEnter,
      dragLeave,
      dropFile,
    }
  
  }

}
</script>
