import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 引入页面
import { home, pageComponents, pageTemplate, pageIDE, pageExample } from '../pages';

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
  expCollapse,
  expFilterForm,
  expDetails,
  expSteps,
  expSwitch,
  expView,
  expSliderButton,
  expDialog,
  expPagination,
  expTree,
  expUpload,
  expScriptInput,
  expDateTimePicker,
  expDropdown,
  expIconPopver,
} from '../example_components';

import { expTreeTable, useAntStyle } from '../example_components/expTreeTable';

// 引入示例页面
import { flowPage, stashLayout, PageTableView, PageDetails, KMenuView } from '../example_template';

// 引入仿 ant pro 的页面
import { pageAntPro, tableView, cardView, detailsView, toolMarket } from '../example_ant';

// 引入 IDE 页面
import { IDEPage } from '../example_ide';

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
      {
        path: 'tree-table',
        component: expTreeTable,
        name: 'tree-table',
        children: [{ path: 'use-ant-style', component: useAntStyle, name: 'use-ant-style' }],
      },
      { path: 'collapse', component: expCollapse, name: 'collapse' },
      { path: 'filter-form', component: expFilterForm, name: 'filter-form' },
      // expDetails
      { path: 'details', component: expDetails, name: 'details' },
      { path: 'steps', component: expSteps, name: 'steps' },
      { path: 'switch', component: expSwitch, name: 'switch' },
      { path: 'view', component: expView, name: 'view' },
      { path: 'slider-button', component: expSliderButton, name: 'slider-button' },
      { path: 'dialog', component: expDialog, name: 'dialog' },
      { path: 'pagination', component: expPagination, name: 'pagination' },
      { path: 'tree', component: expTree, name: 'tree' },
      { path: 'upload', component: expUpload, name: 'upload' },
      { path: 'script-input', component: expScriptInput, name: 'script-input' },
      { path: 'date-time-picker', component: expDateTimePicker, name: 'date-time-picker' },
      { path: 'dropdown', component: expDropdown, name: 'dropdown' },
      { path: 'icon-popover', component: expIconPopver, name: 'icon-popover' },
    ],
  },
  // template
  {
    path: '/template',
    component: pageTemplate,
    name: 'template',
    children: [
      { path: 'flow-page', component: flowPage, name: 'flow-page' },
      {
        path: 'stash-layout',
        component: stashLayout,
        name: 'stash-layout',
        children: [
          { path: 'page-table-view', component: PageTableView, name: '视图页面' },
          { path: 'page-details', component: PageDetails, name: '详情页面' },
        ],
      },
      { path: 'k-menu-view', component: KMenuView, name: 'k-menu-view' },
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
  // pageExample
  {
    path: '/example',
    component: pageExample,
    name: 'example',
  },
];

// createWebHistory, 无哈希值 #
// createWebHashHistory, 带哈希值 #
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
