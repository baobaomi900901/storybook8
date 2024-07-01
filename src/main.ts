import { createApp } from 'vue';
import App from './App.vue';
import './output.css';
import elementPlus from 'element-plus';
import '../kswux/package/style/variable.css';

const app = createApp(App);
app.use(elementPlus);
app.mount('#app');
