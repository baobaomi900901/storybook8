<template>
  <div class="w-80 grid grid-cols-2 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>普通按钮:</span>
      <span>主要按钮:</span>
      <span>次级按钮:</span>
      <span>文字按钮:</span>
      <span>icon按钮:</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton>取消</KButton>
      <KButton main>新增</KButton>
      <KButton secondary>导出</KButton>
      <KButton text>编辑</KButton>
      <KButton icon><IconAdd /></KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
