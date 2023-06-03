//import './assets/main.css'


import { createApp } from 'vue'

// グローバルコンポーネント
import Section04_50_Global from './Section04_50_Global.vue'

// ルートコンポーネント
import App from './Section04_Root.vue'
//import Section04 from './Section03_35_40.vue'
//import Section04 from './Section03_48.vue'

const app = createApp(App)

// グローバルコンポーネントを登録してマウント
app.component('GlobalComponent',Section04_50_Global)
.mount('#app')

