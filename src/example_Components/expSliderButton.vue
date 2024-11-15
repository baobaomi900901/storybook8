<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>
    <SBExamplePanel label="默认" open>
      <div class="p-10 w-full">
        <KSliderButton :items="value" active="btn1" @change="(a) => console.log(a)"></KSliderButton>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { Checked } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
// import { KSliderButton } from '@ksware/ksw-ux';

const value = [
  {
    label: '按钮1',
    name: 'btn1',
  },
  {
    label: '按钮2',
    name: 'btn2',
  },
  {
    label: '按钮3',
    name: 'btn3',
  },
];
</script>
<style scoped></style>
