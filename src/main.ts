import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import '../public/result.css'; // 全局字体
import router from './router';
import { createPinia } from 'pinia';
// 图标
import { KswIcon } from 'ksw-vue-icon';
import 'ksw-vue-icon/styles/icon.css';
import SBExamplePanel from './components/SBExamplePanel.vue';

// 源码
// import install from '../kswux/packages/index';

// 打包
import install from '../kswux/kingsware-ui/index';
import '../kswux/kingsware-ui/style.css';

// npm 包
// import install from '@ksware/ksw-ux';
// import '@ksware/ksw-ux/kingsware-ui/style.css';

// npm 测试包
// import install from 'ksw-ux';
// import 'ksw-ux/kingsware-ui/style.css';

const app = createApp(App);
app.use(router);
// app.use(elementPlus);
app.use(KswIcon, { projectName: 'Guangfa' }); // 图标引入添加项目名称
app.use(createPinia());
app.use(install, { styleModule: 'GFAOM' }); // 全局注册组件 GFAOM, AOM, KingAutometa
app.mount('#app');
app.component('SBExamplePanel', SBExamplePanel);
