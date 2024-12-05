<template>
  <div id="menu" class="menu" :class="[{ show: store.showMenuType }]">
    <router-link v-for="item in menuItems" :key="item.path" :to="item.path" class="menu-item">
      <span class="">{{ item.name }}</span>
    </router-link>
    <span v-show="showProjectName" class="theme-name"></span>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import useMainStore from '../store';
const store = useMainStore();

const props = defineProps({
  menuItem: {
    type: Array,
    default: () => [],
  },
  customSort: {
    type: Boolean,
    default: false,
  },
  showProjectName: {
    type: Boolean,
    default: false,
  },
});

const menuItems = computed(() => {
  if (props.customSort) {
    // 如果 customSort 为 true，直接返回原数组
    return props.menuItem;
  } else {
    // 如果 customSort 为 false，返回排序后的数组
    return [...props.menuItem].sort((a, b) => {
      return a.path.localeCompare(b.path);
    });
  }
});
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.menu {
  font-size: 0.75rem;
  gap: 0.5rem;
  border: 1px solid #eee;
  padding: 0.25rem 1rem;
  display: none;
  position: relative;
}
.show {
  display: inline-flex;
  flex-wrap: wrap;
  /* visibility: hidden; */
  transition: visibility 0.3s ease-in-out;
}
.menu-item {
  margin: 0 0.5rem;
  position: relative;
  box-sizing: border-box;
  border-bottom: 2px dotted transparent;
  &::after {
    content: '';
    position: absolute;
    right: -0.75rem;
    height: 100%;
    width: 1px;
    background: #eee;
  }
}
.router-link-active {
  color: var(--k-theme-test);
  border-bottom-color: var(--k-theme-test);
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
