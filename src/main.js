import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//让标签都展示成一样效果
import 'normalize.css'
//自己写的样式文件
import './style/index.scss'

//挂载上面使用的东西
createApp(App).use(router).use(store).mount('#app')
