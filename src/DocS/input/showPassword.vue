<template>
  <div class="grid grid-cols-2 gap-4">
    <div>密码输入框:</div>
    <div>显示密码按钮:</div>
    <k-input v-model="Password" type="password"></k-input>
    <k-input v-model="Password2" showPassword></k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const Password = ref('');
const Password2 = ref('');
</script>
<style scoped>
</style>