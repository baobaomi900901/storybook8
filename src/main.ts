import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './output.css';
import KUI from '../src/kingsware-ui';
import '../src/kingsware-ui/style.css';

const app = createApp(App)
app.use(KUI)
app.mount('#app')
