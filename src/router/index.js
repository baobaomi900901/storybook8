import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
// createWebHistory
// createWebHashHistory, 带哈希值 #

// 引入示例组件
import { expButton, expRadio, expInput, expSelect, expTabs, expTreeSelect } from '../testExample';
import flowPage from '../pageExamlp/flowPage.vue';

const routes = [
  {
    path: '/button',
    component: expButton,
    name: 'button',
  },
  {
    path: '/radio',
    component: expRadio,
    name: 'radio',
  },
  {
    path: '/input',
    component: expInput,
    name: 'input',
  },
  {
    path: '/select',
    component: expSelect,
    name: 'select',
  },
  {
    path: '/tabs',
    component: expTabs,
    name: 'tabs',
  },
  {
    path: '/treeSelect',
    component: expTreeSelect,
    name: 'treeSelect',
  },
  {
    path: '/flowPage',
    component: flowPage,
    name: 'flowPage',
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
