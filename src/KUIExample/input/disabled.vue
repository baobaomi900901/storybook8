
<template>
  <div class="w-60">
    <k-input v-model="text" placeholder="Disabled Input" disabled> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
</script>
<style scoped>
</style>