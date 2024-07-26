<!--
* @description  参数1
* @fileName  pageComponets
* @author userName
* @date 2024-07-12 09:56:17
* @version V3.0.0
!-->
<template>
  <div id="pageComponents" class="pageComponents"></div>
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
// components路由下的子路由
const routerPath = reactive(router.currentRoute.value.matched[0].children);
routerPath.forEach((item) => {
  // console.log(item);
  if (!item.path.includes('/components/')) {
    item.path = '/components/' + item.path;
  }
  data.push(item);
});
</script>
<style scoped></style>
