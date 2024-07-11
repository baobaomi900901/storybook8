<template>
  <div id="menu" class="menu">
    <!-- :class="{ active: $route.path === '/Button' }" -->
    <router-link to="/button" class="menu-item">
      <span class="">button</span>
    </router-link>
    <router-link to="/radio" class="menu-item">
      <span class="">radio</span>
    </router-link>
    <router-link to="/input" class="menu-item">
      <span class="">input</span>
    </router-link>
    <router-link to="/select" class="menu-item">
      <span class="">select</span>
    </router-link>
    <!-- expTabs -->
    <router-link to="/tabs" class="menu-item">
      <span class="">tabs</span>
    </router-link>
    <!-- expTreeSelect -->
    <router-link to="/treeSelect" class="menu-item">
      <span class="">tree-select</span>
    </router-link>

    <router-link to="/flowPage" class="menu-item">
      <span class="">flowPage</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.menu {
  font-size: 0.75rem;
  gap: 0.5rem;
  display: flex;
  border: 1px solid #eee;
  padding: 0.25rem 0.75rem;
}
.router-link-active {
  color: #1890ff;
}
.menu-item {
  border-right: 1px solid #eee;
  padding: 0 0.5rem;
}
</style>
