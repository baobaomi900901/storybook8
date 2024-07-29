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

    <div class="epx-title-sub">type:</div>
    <div class="flex items-start gap-2">
      <KTag type="primary">primary</KTag>
      <KTag type="success">success</KTag>
      <KTag type="warning" point>111</KTag>
      <KTag color="#ff55cc" point>222</KTag>
      <KTag color="#ff55cc" textColor="#383838" point>333</KTag>
      <KTooltip placement="top">
        <template #reference>
          <KTag color="#ff55cc" textColor="#383838" text="444" point></KTag>
        </template>
        BBM900901
      </KTooltip>
      <KTooltip placement="top-start">BBM900901</KTooltip>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTag, KTooltip } from '@components';

const value = ref();
</script>
<style scoped></style>
