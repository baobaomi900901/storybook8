import { createApp } from 'vue';
import App from './App.vue';
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 禁用
import './style.css';
import '../public/result.css'; // 全局字体
import router from './router';
import { createPinia } from 'pinia';
// 图标
import { KswIcon } from 'ksw-vue-icon';
import 'ksw-vue-icon/styles/icon.css';
import SBExamplePanel from './components/SBExamplePanel.vue';

// 测试分支
// import install from '../kswux/package/index'; // dev
import install from '../kswux-ant/package/index'; // dev-ant

const app = createApp(App);
app.use(router);
app.use(elementPlus);
app.use(KswIcon);
app.use(createPinia());
app.use(install); // 全局注册组件
app.mount('#app');
app.component('SBExamplePanel', SBExamplePanel);
