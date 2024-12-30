<template>
  <div id="App" class="App flex flex-col h-screen">
    <div
      ref="showMenu"
      class="show-menu flex justify-center items-center text-center"
      @click="showMenuClick"
    >
      <span>👁</span>
    </div>
    <span
      ref="themeName"
      class="theme-name"
      :class="{ 'is-show': themeNameStatus }"
      @mouseenter="
        () => {
          themeNameStatus = true; // 设置为 true，触发 watch
        }
      "
      @click="
        () => {
          store.styleModule = 'GFAOM';
        }
      "
    ></span>
    <Menu :menuItem="data" :customSort="true" />

    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick, onBeforeUnmount } from 'vue';
import Menu from './components/menu.vue';
import { useRouter } from 'vue-router';
import useMainStore from './store';
const store = useMainStore();
const router = useRouter();

const data = [];
const routerPath = router.options.routes;

const themeName = ref();
const themeNameStatus = ref(false);
let timer = null; // 定义一个变量来存储定时器 ID

// 监视 themeNameStatus 的变化
watch(themeNameStatus, (newValue) => {
  if (newValue) {
    // 清除之前的定时器（如果存在）
    if (timer) {
      clearTimeout(timer);
    }

    // 设置新的定时器
    timer = setTimeout(() => {
      themeNameStatus.value = false; // 将状态改为 false
    }, 2000);
  }
});

// 在组件卸载前清除定时器
onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer);
  }
});

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
.theme-name {
  display: inline-block;
  position: absolute;
  right: 1rem;
  top: 0.125rem;
  z-index: 10;
  opacity: 0.05;
  transition: all 0.2s ease-in-out;
}
.theme-name::after {
  content: var(--theme-name);
  background: var(--k-theme-test);
  color: #fff;
  padding: 0.125rem 1rem;
  border-radius: 0.25rem;
}

.theme-name.is-show {
  opacity: 1;
}
</style>
