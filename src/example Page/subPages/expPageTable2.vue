<!--
* @description  参数1
* @fileName  expPageTable
* @author userName
* @date 2024-07-23 15:16:18
* @version V3.0.0
!-->
<template>
  <div id="expPageTable2" class="expPageTable2 h-full">
    <KPageDetails
      icon="IconAomMenuAOMRZColor"
      title="功能详情页"
      info="这里是功能详情页的描述信息"
      :abstract="abstract"
    >
      <template #extra-head-btn>
        <KButton main>保存</KButton>
        <KButton>取消</KButton>
      </template>
      <template #extra-head-body></template>
      <template #extra-body>
        <div class="KPageDetailsBody w-full flex flex-col bg-white rounded mt-3">extra-body</div>
      </template>
    </KPageDetails>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// import { KPageDetails } from '@templates';
import { KButton, KTreeTable } from '@components';

const abstract = [
  {
    label: '姓名',
    value: '张三',
  },
  {
    label: '年龄',
    value: '25',
  },
  {
    label: '性别',
    value: {
      type: 'tag',
      size: 'sm',
      color: 'blue',
      value: '男',
    },
  },
];
</script>
<style lang="less"></style>
