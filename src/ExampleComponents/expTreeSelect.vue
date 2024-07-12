<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KTreeSelect</div>
    <div class="epx-title-sub">多选:</div>
    <div class="flex items-center gap-2 w-60">
      <!-- 
       * multiple:多选
       * filterable:可搜索
       * clearable:可清除
        !-->
      <KTreeSelect
        v-model="value"
        :data="data"
        :placeholder="'请选择'"
        show-checkbox
        multiple
        filterable
        clearable
      ></KTreeSelect>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTreeSelect } from '@components';

const value = ref();
const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
            icon: 'IconPlugInFirefoxColor',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
];
</script>
<style scoped></style>
