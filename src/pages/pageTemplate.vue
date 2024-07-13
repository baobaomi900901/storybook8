<!--
* @description  参数1
* @fileName  pageComponets
* @author userName
* @date 2024-07-12 09:56:17
* @version V3.0.0
!-->
<template>
  <div id="pageTemplate" class="pageTemplate">模板示例:</div>
  <Menu :menuItem="data" />
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from '../components/menu.vue';
const data = [
  {
    name: 'flow-page | 流程节点动画',
    path: '/template/flow-page',
  },
];
</script>
<style scoped></style>
