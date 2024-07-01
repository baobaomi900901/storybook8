<script setup lang="ts">
import { ref } from 'vue';
import { KInput } from '../kswux/package/components/input';
import { KButton } from '../kswux/package/components/button';
import { Calendar, Search } from '@element-plus/icons-vue';
const bbm = ref('');
</script>

<template>
  <div class="w-full h-full flex justify-center items-center px-96 flex flex-col gap-4" style="height: 100vh">
    <KButton main iconLeft="IconAdd">按钮</KButton>
    <KInput v-model="bbm" placeholder="请输入" iconLeft="IconAdd" :prefix-icon="IconAdd">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </KInput>
    <KInput v-model="bbm" placeholder="请输入" disabled :suffix-icon="Calendar" />
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
