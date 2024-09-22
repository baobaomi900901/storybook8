<!--
* @description  参数1
* @fileName  DetailsView
* @author userName
* @date 2024-09-20 09:22:04
* @version V3.0.0
!-->
<template>
  <div id="detailsView" class="detailsView flex-1" style="background-color: #f5f5f5; min-width: 0">
    <div class="bg-white rounded-md px-10 mb-6 shadow-sm" style="min-width: 0">
      <div class="crumbs py-6 flex gap-1 items-center text-gray-400 text-sm">
        <span
          class="py-1 px-0.5 cursor-pointer rounded-md select-none hover:bg-gray-100 hover:text-gray-500"
        >
          home
        </span>
        <span>/</span>
        <span
          class="py-1 px-0.5 cursor-pointer rounded-md select-none hover:bg-gray-100 hover:text-gray-500"
        >
          一级菜单
        </span>
        <span>/</span>
        <span class="text-gray-500 p-1">详情</span>
      </div>
      <div class="text-2xl mb-4 font-bold">详情页</div>
      <div class="items grid grid-cols-3 gap-4">
        <div class="item" v-for="item in data" :key="item.label">
          <k-form-item :label="item.label">{{ item.value }}</k-form-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import KPageTitle from './components/KPageTitle.vue';

const data = [
  { label: 'Id:', value: 'g0019801' },
  { label: '姓名:', value: '张三' },
  { label: '年龄:', value: '25' },
  { label: '地址:', value: '广州市天河区' },
  { label: '手机号:', value: '13800138000' },
  { label: 'email:', value: '13800138000@qq.com' },
  { label: '描述:', value: '这是一个描述' },
];
</script>
<style lang="less">
.detailsView {
  .el-form-item__label {
    width: auto;
    min-width: unset;
    text-align: left;
  }
}
</style>
