<!--
* @description  参数1
* @fileName  IDEPage
* @author userName
* @date 2024-11-15 11:19:03
* @version V3.0.0
!-->
<template>
  <div ref="IDEPage" class="IDEPage h-full flex flex-col">
    <moduleTop></moduleTop>
    <div class="IDEPage-content flex-1 flex bg-slate-100">
      <moduleLeft title="组件库">
        <div class="bg-red-500 h-full">123</div>
      </moduleLeft>
      <div class="flex flex-col flex-1 px-3">
        <moduleMain>
          <div class="bg-green-500 w-full h-full">
            <IconIdeDigitalAsset></IconIdeDigitalAsset>
          </div>
        </moduleMain>
        <moduleBottom :items="bottomItems">
          <template #a-action>
            <IconAdd size="1.25rem" />
            <IconAdd size="1.25rem" />
            <IconAdd size="1.25rem" />
          </template>
          <template #a>
            <div class="h-full bg-red-50">日志表格</div>
          </template>

          <template #b-action>
            <div class="h-full bg-red-50">按钮组2</div>
          </template>
          <template #b>
            <div class="h-full bg-red-50">表格2</div>
          </template>
        </moduleBottom>
      </div>
      <moduleRight title="属性" :items="rightItems">
        <template #a>
          <div class="h-full bg-red-50">aaaa</div>
        </template>
        <template #b>
          <div class="h-full bg-blue-50">bbbb</div>
        </template>
      </moduleRight>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import moduleTop from './module_top.vue';
import moduleLeft from './module_left.vue';
import moduleRight from './module_right.vue';
import moduleMain from './module_main.vue';
import moduleBottom from './module_bottom.vue';

const rightItems = [
  {
    label: '文件',
    name: 'a',
    icon: 'IconAdd',
  },
  {
    label: '属性',
    name: 'b',
    icon: 'IconAdd',
  },
  {
    label: '查询',
    name: 'c',
    icon: 'IconAdd',
  },
  {
    label: '资产',
    name: 'd',
    icon: 'IconAdd',
  },
];

const bottomItems = [
  {
    label: '日志',
    name: 'a',
    icon: 'IconAdd',
  },
  {
    label: '元素库',
    name: 'b',
    icon: 'IconAdd',
  },
  {
    label: '变量',
    name: 'c',
  },
  {
    label: '参数',
    name: 'd',
  },
];
</script>
<style scoped></style>
