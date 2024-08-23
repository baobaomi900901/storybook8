<template>
  <div class="w-80 grid grid-cols-3 gap-4 justify-items-center items-center">
    <span>普通按钮:</span>
    <KButton>取消</KButton>
    <KButton size="sm">取消</KButton>
    <span>主要按钮:</span>
    <KButton main>新增</KButton>
    <KButton size="sm" main>新增</KButton>
    <span>次级按钮:</span>
    <KButton secondary>导出</KButton>
    <KButton size="sm" secondary>导出</KButton>
    <span>文字按钮:</span>
    <KButton text>编辑</KButton>
    <KButton size="sm" text>编辑</KButton>
    <span>icon按钮:</span>
    <KButton icon><IconAdd /></KButton>
    <KButton size="sm" icon><IconAdd /></KButton>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
