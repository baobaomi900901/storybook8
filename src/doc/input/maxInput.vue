
<template>
  <div class="grid grid-cols-2 gap-4">
    <div>输入框:</div>
    <div>文本域:</div>
    <k-input v-model="text" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
    <k-input v-model="text" type="textarea" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
</script>
<style scoped>
</style>