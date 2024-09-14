import { createApp } from 'vue';
import App from './App.vue';
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 禁用
import './style.css';
import '../public/result.css'; // 全局字体
import install from '../kswux/package/index'; // 全局注册组件
import { KswIcon } from 'ksw-vue-icon';
import 'ksw-vue-icon/styles/icon.css';
import router from './router';
import { createPinia } from 'pinia';
import SBExamplePanel from './components/SBExamplePanel.vue';
// import KUI from '@ksware/ksw-ux';

const app = createApp(App);
app.use(router);
app.use(elementPlus);
app.use(KswIcon);
app.use(createPinia());
app.use(install); // 全局注册组件
app.mount('#app');
app.component('SBExamplePanel', SBExamplePanel);
