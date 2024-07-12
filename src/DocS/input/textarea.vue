<template>
  <div class="grid grid-cols-2 gap-4">
    <div>普通文本域:</div>
    <div>自适应高度:</div>
    <k-input v-model="text" type="textarea" placeholder="Enter text"> </k-input>
    <k-input v-model="text2" type="textarea" placeholder="Enter text" :autosize="{ minRows: 2, maxRows: 4 }"> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const text = ref('');
const text2 = ref('');
</script>
<style scoped>
</style>