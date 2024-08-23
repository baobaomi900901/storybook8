<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>输入框:</div>
      <div>文本域:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="text" placeholder="请输入" :maxlength="10" showWordLimit></k-input>
      <k-input
        v-model="text"
        type="textarea"
        placeholder="请输入"
        :maxlength="10"
        showWordLimit
      ></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
</script>
<style scoped></style>
