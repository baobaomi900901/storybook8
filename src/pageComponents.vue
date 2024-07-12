<!--
* @description  参数1
* @fileName  pageComponets
* @author userName
* @date 2024-07-12 09:56:17
* @version V3.0.0
!-->
<template>
  <div id="pageComponents" class="pageComponents">组件示例:</div>
  <Menu :menuItem="data" />
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from './components/menu.vue';
const data = [
  {
    name: 'button | 按钮',
    path: '/components/button',
  },
  {
    name: 'radio | 单选',
    path: '/components/radio',
  },
  {
    name: 'input | 输入框',
    path: '/components/input',
  },
  {
    name: 'tabs | 标签页',
    path: '/components/tabs',
  },
  {
    name: 'tree-select | 树选择器',
    path: '/components/tree-select',
  },
];
</script>
<style scoped></style>
