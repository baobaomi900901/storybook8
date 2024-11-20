<template>
  <div id="menu" class="menu" :class="[{ show: store.showMenuType }]">
    <router-link
      v-for="item in menuItemSort"
      :key="item.path"
      :to="item.path"
      class="menu-item"
      style="color: var(--k-theme-test)"
    >
      <span class="">{{ item.name }}</span>
    </router-link>
    <span v-show="showProjectName" class="theme-name"></span>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import useMainStore from '../store';
const store = useMainStore();

const props = defineProps({
  menuItem: undefined,
  showProjectName: false,
});

const menuItemSort = props.menuItem.sort((a, b) => {
  return a.path.localeCompare(b.path);
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
  position: relative;
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
.theme-name {
  display: inline-block;
  position: absolute;
  right: 1rem;
}
.theme-name::after {
  content: var(--theme-name);
  background: var(--k-theme-test);
  color: #fff;
  padding: 0.225rem 1rem;
  border-radius: 0.25rem;
}
</style>
