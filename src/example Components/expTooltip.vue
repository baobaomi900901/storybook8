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
      <!-- visible -->
      <KTooltip
        content="默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息,默认提示信息"
      >
        <KButton>123</KButton>
      </KTooltip>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref();
</script>
<style scoped></style>
