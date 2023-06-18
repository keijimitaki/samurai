//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// vuetify icon
// https://vuetifyjs.com/en/features/icon-fonts/#multiple-icon-sets
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' 
import '@fortawesome/fontawesome-free/css/all.css' 

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
