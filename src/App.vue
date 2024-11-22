<template>
  <div id="App" class="App flex flex-col">
    <div
      ref="showMenu"
      class="show-menu flex justify-center items-center text-center"
      @click="showMenuClick"
    >
      <span>👁</span>
    </div>
    <Menu :menuItem="data" :showProjectName="true" :customSort="true" />
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

const data = [];
const routerPath = router.options.routes;

routerPath.forEach((item) => {
  if (item.path == '/') return;
  data.push(item);
});

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
