<template>
  <div id="home" class="home ml-12 mt-2">👆🏻选择组件 or 模板👆🏻</div>
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style lang="less" scoped>
.home {
  font-size: 1rem;
  animation: floatAnimation 2s ease-in-out infinite;
}
@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.75rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
