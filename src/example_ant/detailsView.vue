<!--
* @description  参数1
* @fileName  DetailsView
* @author userName
* @date 2024-09-20 09:22:04
* @version V3.0.0
!-->
<template>
  <div id="detailsView" class="detailsView flex-1" style="background-color: #f5f5f5; min-width: 0">
    <div class="bg-white rounded-md px-10 shadow-sm" style="min-width: 0">
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
    </div>

    <GFPageDetails
      ref="ks"
      icon="IconAomMenuAOMRZColor"
      title="功能详情页"
      descriptions="这里是功能详情页的描述信息"
      :abstract="abstract"
      :columns="4"
      :tabs="tabs"
      class="w-full h-full flex flex-col"
      :tabs-config="{
        defaultActive: 'desc',
      }"
      direction="vertical"
      useItemCollapse
    >
      <!-- <template #head-title>123</template> -->
      <template #head-toolbar>
        <KButton main @click="() => ks.toggleActiveTab('other')">保存</KButton>
        <KButton>取消</KButton>
      </template>
      <template #basic>基本信息</template>
      <template #basic-label>基本信息-zhj</template>
      <template #desc>描述信息</template>
      <template #other>其他信息</template>
    </GFPageDetails>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';

const ks = ref();
const abstract = [
  {
    label: '姓名',
    value: '张三',
    direction: 'vertical',
  },
  {
    label: '性别',
    value: '男',
  },
  {
    label: '职业',
    column: 2,
    render: () => {
      return <KTag>设计师</KTag>;
    },
  },
  {
    label: '年龄',
    value: '25',
  },
  {
    label: '职业',
    render: () => {
      return <KTag>设计师</KTag>;
    },
  },
  {
    label: '年龄',
    value: '25',
  },
];

const tabs = ref([
  { label: '基本信息', name: 'basic' },
  { label: '描述信息', name: 'desc' },
  { label: '其他信息', name: 'other' },
]);

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
