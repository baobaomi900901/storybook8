<template>
  <div id="App" class="App">
    <Menu :menuItem="data" />
    <router-view />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from './components/menu.vue';

const data = [
  {
    name: 'components | 组件',
    path: '/components',
  },
  {
    name: 'template | 模板',
    path: '/template',
  },
];
</script>
<style scoped></style>
