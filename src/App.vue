
<template>
  <div id="App" class="App">
    <Menu />
    <router-view />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from './menu.vue';
</script>
<style scoped>
</style>