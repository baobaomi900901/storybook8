import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css'; // 引入 element-plus 样式
import elementPlus from 'element-plus';
import './output.css';
import '/public/font/result.css'; // 全局字体
import '../kswux/package/style/variable.css';
import install from '../kswux/package/index'; // 全局注册组件
import { KswIcon } from 'ksw-vue-icon';
import 'ksw-vue-icon/styles/icon.css';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(elementPlus);
app.use(KswIcon);
app.use(createPinia());
install(app);
app.mount('#app');
