import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from './index.js';
import store from '../public/composables/CRUD_Operations.js';

createApp(App).use(store).use(router).mount('#app');
