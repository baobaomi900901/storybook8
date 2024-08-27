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

    <SBExamplePanel label="默认" open>
      <KSelect v-model="value" placeholder="请选择">
        <KOption value="1">选项1</KOption>
        <KOption value="2">选项2</KOption>
        <KOption value="3">选项3</KOption>
      </KSelect>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { KTooltip, KSelect, KOption, KButton } from '@components';

const value = ref();
</script>
<style scoped></style>
