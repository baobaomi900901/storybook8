<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>多行文本域:</div>
      <div>自适应高度:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="text" type="textarea" placeholder="Enter text"></k-input>
      <k-input
        v-model="text2"
        type="textarea"
        placeholder="Enter text"
        :autosize="{ minRows: 2, maxRows: 4 }"
      ></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const text = ref('');
const text2 = ref('');
</script>
<style scoped></style>
