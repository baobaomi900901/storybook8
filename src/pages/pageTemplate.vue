<!--
* @description  参数1
* @fileName  pageComponets
* @author userName
* @date 2024-07-12 09:56:17
* @version V3.0.0
!-->
<template>
  <div id="pageTemplate" class="pageTemplate"></div>
  <Menu :menuItem="data" />
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue';
import Menu from '../components/menu.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const data = [];
// 读取router 结构
const routerPath = router.currentRoute.value.matched[0].children;
routerPath.forEach((item) => {
  if (!item.path.includes('/template/')) {
    item.path = '/template/' + item.path;
  }
  data.push(item);
});
// 读取路由结构
// const route = reactive(router.currentRoute.value);
</script>
<style scoped></style>
