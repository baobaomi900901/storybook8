import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 引入页面
import { home, pageComponents, pageTemplate } from '../pages';
// 引入示例组件
import {
  expButton,
  expRadio,
  expInput,
  expSelect,
  expTabs,
  expTreeSelect,
} from '../ExampleComponents';

// 引入示例页面
import { flowPage } from '../ExamplePage';

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

// createWebHistory, 无哈希值 #
// createWebHashHistory, 带哈希值 #
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
