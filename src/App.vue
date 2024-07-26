<template>
  <div id="App" class="App">
    <div
      ref="showMenu"
      class="show-menu flex justify-center items-center text-center"
      @click="showMenuClick"
    >
      <span>👁</span>
    </div>
    <Menu :menuItem="data" />
    <router-view />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from './components/menu.vue';
import { useRouter } from 'vue-router';
import useMainStore from './store';
const store = useMainStore();
const router = useRouter();
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

const showMenuClick = () => {
  store.showMenuType = !store.showMenuType;
};
</script>
<style scoped>
.App {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.show-menu {
  background-color: rgba(0, 0, 0, 0.5);
  width: 2rem;
  height: 1.5rem;
  opacity: 0.05;
  transition: all 0.2s ease-in-out;

  position: absolute;

  z-index: 9999;
}
.show-menu:hover {
  opacity: 1;
}
</style>
