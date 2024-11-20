import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 引入页面
import { home, pageComponents, pageTemplate, pageAntPro, pageIDE } from '../pages';
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
  expCollapse,
  expFilterForm,
  expDetails,
  expSteps,
  expSwitch,
  expView,
  expSliderButton,
  expDialog,
  expPagination,
} from '../example_Components';

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
} from '../example_Page';

// 引入仿 ant pro 的页面
import { tableView, cardView, detailsView, toolMarket } from '../example_ant';

// 引入 IDE 页面
import { IDEPage } from '../example_IDE';

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
      { path: 'collapse', component: expCollapse, name: 'collapse' },
      { path: 'filter-form', component: expFilterForm, name: 'filter-form' },
      { path: 'details', component: expDetails, name: 'details' },
      { path: 'steps', component: expSteps, name: 'steps' },
      { path: 'switch', component: expSwitch, name: 'switch' },
      { path: 'view', component: expView, name: 'view' },
      { path: 'slider-button', component: expSliderButton, name: 'slider-button' },
      { path: 'dialog', component: expDialog, name: 'dialog' },
      { path: 'pagination', component: expPagination, name: 'pagination' },
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
  // ant pro
  {
    path: '/ant-pro',
    component: pageAntPro,
    name: 'ant-pro',
    children: [
      { path: 'table-view', component: tableView, name: 'table-view' },
      { path: 'card-view', component: cardView, name: 'card-view' },
      { path: 'details-view', component: detailsView, name: 'details-view' },
      { path: 'tool-market', component: toolMarket, name: 'tool-market' },
    ],
  },
  // IDEPage
  {
    path: '/ide',
    component: pageIDE,
    name: 'IDE',
    children: [{ path: 'ide_page', component: IDEPage, name: 'ide_page' }],
  },
];

// createWebHistory, 无哈希值 #
// createWebHashHistory, 带哈希值 #
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
