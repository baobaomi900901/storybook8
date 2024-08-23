<template>
  <div class="w-80 grid grid-cols-4 gap-4 justify-items-center" style="width: 32rem">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>el:primary</span>
      <span>el:info</span>
      <span>el:success</span>
      <span>el:warning</span>
      <span>el:danger</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" main>主要按钮</KButton>
      <KButton type="info" main>主要按钮</KButton>
      <KButton type="success" main>主要按钮</KButton>
      <KButton type="warning" main>主要按钮</KButton>
      <KButton type="danger" main>主要按钮</KButton>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" secondary>次级按钮</KButton>
      <KButton type="info" secondary>次级按钮</KButton>
      <KButton type="success" secondary>次级按钮</KButton>
      <KButton type="warning" secondary>次级按钮</KButton>
      <KButton type="danger" secondary>次级按钮</KButton>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" text>文字按钮</KButton>
      <KButton type="info" text>文字按钮</KButton>
      <KButton type="success" text>文字按钮</KButton>
      <KButton type="warning" text>文字按钮</KButton>
      <KButton type="danger" text>文字按钮</KButton>
    </div>
  </div>
  <div
    class="w-80 grid grid-cols-4 gap-4 justify-items-center"
    style="width: 32rem; padding-top: 1rem"
  >
    <div class="grid grid-flow-col auto-cols-fr justify-items-center items-center gap-4">
      <span>自定义颜色</span>
    </div>
    <KButton color="#9966cc" main>文字按钮</KButton>
    <KButton color="#9966cc" secondary>文字按钮</KButton>
    <KButton color="#9966cc" text>文字按钮</KButton>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
