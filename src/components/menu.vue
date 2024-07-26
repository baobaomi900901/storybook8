<template>
  <div id="menu" class="menu" :class="[{ show: store.showMenuType }]">
    <router-link v-for="item in menuItem" :key="item.path" :to="item.path" class="menu-item">
      <span class="">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import useMainStore from '../store';
const store = useMainStore();

const props = defineProps({
  menuItem: undefined,
});
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
  padding: 0.25rem 2rem;
  display: none;
}
.show {
  display: inline-block;
  /* visibility: hidden; */
}
.router-link-active {
  color: #1890ff;
}
.menu-item {
  border-right: 1px solid #eee;
  padding: 0 0.5rem;
}
</style>
