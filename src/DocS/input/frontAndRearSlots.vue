<template>
  <div class="w-60">
    <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>

    <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete" disabled></KInput>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
</script>
<style scoped></style>
