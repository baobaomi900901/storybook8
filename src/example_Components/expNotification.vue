<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">expNotification</div>
    <SBExamplePanel label="默认" open>
      <k-button @click="open1">Top Right</k-button>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KNotification } from '@ksware/ksw-ux';

const value = ref();

const open1 = () => {
  KNotification({
    title: 'Error',
    message: `<span>12312312312311111111111111111111111111111</span>`,
    type: 'error',
    duration: 3000,
  });
};
</script>
<style scoped></style>
