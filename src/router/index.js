import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
// createWebHistory
// createWebHashHistory, 带哈希值 #

// 引入示例组件
import {
  expButton,
  expRadio,
  expInput,
  expSelect,
  expTabs,
  expTreeSelect,
} from '../ExampleComponents';
import { flowPage } from '../ExamplePage';
import { home } from '../pages';
import pageComponents from '../pages/pageComponents.vue';
import pageTemplate from '../pages/pageTemplate.vue';

const routes = [
  {
    path: '/',
    component: home,
    name: 'home',
  },
  {
    path: '/components',
    component: pageComponents,
    name: 'components',
    children: [
      { path: 'button', component: expButton, name: 'button' },
      { path: 'radio', component: expRadio, name: 'radio' },
      { path: 'input', component: expInput, name: 'input' },
      { path: 'select', component: expSelect, name: 'select' },
      { path: 'tabs', component: expTabs, name: 'tabs' },
      { path: 'tree-select', component: expTreeSelect, name: 'tree-select' },
    ],
  },
  {
    path: '/template',
    component: pageTemplate,
    name: 'template',
    children: [{ path: 'flow-page', component: flowPage, name: 'flow-page' }],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
