<!--
* @description  参数1
* @fileName  pageAntPro
* @author userName
* @date 2024-09-19 15:38:54
* @version V3.0.0
!-->
<template>
  <div id="pageAntPro" class="pageAntPro w-screen h-screen flex">
    <antMenu :menuData="data">
      <template #app-logo>
        <div class="ant-pro-sider-logo text-white text-xl flex gap-1 items-center">
          <img src="../../public/vite.svg" alt="" class="w-6 h-6" />
          Ant Design Pro
        </div>
      </template>
    </antMenu>
    <div class="right flex-1 h-screen flex flex-col" style="min-width: 0">
      <div
        class="status-bar h-12 flex items-center justify-between px-10 border-b border-gray-200 shrink-0"
      >
        <KButton text>
          <IconViewToggleDetails color="black" size="20" />
        </KButton>
        <div class="btn-bar flex gap-4 items-center">
          <KTag size="sm" color="#FFB273">测试环境</KTag>
          <KButton text size="lg">
            <IconSearch color="black" />
          </KButton>
          <KButton text size="lg">
            <IconQuestion color="black" />
          </KButton>
          <span class="text-base text-gray-700 ml-4">MobyTang</span>
        </div>
      </div>
      <router-view class="overflow-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import antMenu from '../components/antMenu.vue';
import { useRouter } from 'vue-router';
import { KTag } from '@ksware/ksw-ux';
const router = useRouter();
const data = [
  {
    name: '卡片视图',
    path: '/ant-pro/card-view',
    icon: 'IconCard',
  },
  {
    name: '表格视图',
    path: '/ant-pro/table-view',
    icon: 'IconViewToggleTable',
  },
];
</script>
<style scoped></style>
