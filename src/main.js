// import Vue from "vue";
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App';

import './assets/main.css';

createApp(App).use(createPinia()).mount('#app');
