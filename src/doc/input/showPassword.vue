<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>密码输入框:</div>
      <div>显示密码按钮:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="Password" type="password"></k-input>
      <k-input v-model="Password2" showPassword></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const Password = ref('');
const Password2 = ref('');
</script>
<style scoped></style>
