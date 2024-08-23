<template>
  <div class="w-80 grid grid-cols-2 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>icon-left</span>
      <span>icon-right</span>
      <span>自定义插槽-left</span>
      <span>自定义插槽-right</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton iconLeft="IconAdd" main>普通按钮</KButton>
      <KButton iconRight="IconArrowBottom" main>主要按钮</KButton>
      <KButton type="success" main>主要按钮</KButton>
      <KButton type="warning" main>主要按钮</KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
