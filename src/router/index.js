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
  expCheckbox,
  expTag,
  expInputNumber,
  expTooltip,
  expForm,
  expResult,
  expTreeTable,
} from '../example Components';

// 引入示例页面
import {
  flowPage,
  customColor,
  stashLayout,
  expPageTable,
  expPageTable2,
  echartsDemo,
  customColorHooksDev,
  webStatus,
} from '../example Page';

const routes = [
  {
    path: '/',
    component: home,
    name: 'home',
  },
  // components
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
      { path: 'checkbox', component: expCheckbox, name: 'checkbox' },
      { path: 'tag', component: expTag, name: 'tag' },
      { path: 'input-number', component: expInputNumber, name: 'input-number' },
      { path: 'tooltip', component: expTooltip, name: 'tooltip' },
      { path: 'form', component: expForm, name: 'form' },
      { path: 'result', component: expResult, name: 'result' },
      { path: 'tree-table', component: expTreeTable, name: 'tree-table' },
    ],
  },
  // template
  {
    path: '/template',
    component: pageTemplate,
    name: 'template',
    children: [
      { path: 'flow-page', component: flowPage, name: 'flow-page' },
      { path: 'custom-color', component: customColor, name: 'custom-color' },
      { path: 'echarts-demo', component: echartsDemo, name: 'echarts-Demo' },
      {
        path: 'custom-color-hooks-dev',
        component: customColorHooksDev,
        name: 'custom-color-hooks-dev',
      },
      {
        path: 'stash-layout',
        component: stashLayout,
        name: 'stash-layout',
        children: [
          { path: 'exp-page-table', component: expPageTable, name: '一级页面' },
          { path: 'exp-page-table2', component: expPageTable2, name: '详情页' },
        ],
      },
      { path: 'web-status', component: webStatus, name: 'web-status' },
    ],
  },
];

// createWebHistory, 无哈希值 #
// createWebHashHistory, 带哈希值 #
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
