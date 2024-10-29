import { createApp } from 'vue';
import App from './App.vue';
// import elementPlus from 'element-plus';
// import 'element-plus/dist/index.css'; // 禁用
import './style.css';
import '../public/result.css'; // 全局字体
import router from './router';
import { createPinia } from 'pinia';
// 图标
import { KswIcon } from 'ksw-vue-icon';
import 'ksw-vue-icon/styles/icon.css';
import SBExamplePanel from './components/SBExamplePanel.vue';

// 源码
import install from '../kswux/package/index'; // 源码

// 打包
// import install from '../kswux/kingsware-ui/index'; // npm包
// import '../kswux/kingsware-ui/style.css'; // 样式

const app = createApp(App);
app.use(router);
// app.use(elementPlus);
app.use(KswIcon);
app.use(createPinia());
app.use(install, { styleModule: 'AOM' }); // 全局注册组件 GFAOM, AOM
app.mount('#app');
app.component('SBExamplePanel', SBExamplePanel);
