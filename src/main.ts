import { createApp } from 'vue';
import App from './App.vue';
import './output.css';
import elementPlus from 'element-plus';
import '../kswux/package/style/variable.css';
// 引入 element-plus 样式
import 'element-plus/dist/index.css';
import install from '../kswux/package/index'; // 全局注册组件
import { KswIcon } from 'ksw-vue-icon';

const app = createApp(App);
app.use(elementPlus);
app.use(KswIcon);
// install(app);
app.mount('#app');
