<!--
* @description:
  - showViewBus: 是否显示左侧视图, 默认false
  - viewBusTitle: 视图名称, 默认'视图'
  - viewBusInfo: 视图描述信息, 默认'描述信息'
  - viewBusRefresh: 是否显示刷新按钮, 默认false
  - pageIcon: 页面图标, 默认'IconAomMenuAOMRZColor'
  - pageTitle: 页面名称, 默认'页面名称'
  - pageInfo: 页面描述信息, 默认'页面描述信息'

  slot:
  - extra-viewBus-body: 视图内容自定义渲染
  - extra-page-head-btn: 页面头部按钮自定义渲染
  - extra-page-body: 页面内容自定义渲染
* @fileName  expPageTable
* @author moby
* @date 2024-07-23 15:16:18
*       pageIcon="IconAomMenuAOMRZColor"
./vite.svg
!-->
<template>
  <div id="expPageTable" class="expPageTable h-full">
    <KPageTableView
      show-aside
      aside-title="视图"
      aside-info=""
      aside-refresh
      page-icon="IconAomMenuAOMRZColor"
      page-title="用户管理111"
      page-info=""
    >
      <template #aside>
        <div class="bg-gray-100 w-full">123</div>
      </template>
      <template #aside-toolbar>
        <KButton text>默认刷新按钮</KButton>
      </template>
      <template #toolbar>
        <div>
          工具栏插槽
          <KButton main>新增</KButton>
        </div>
      </template>

      <p>页面默认插槽123123123</p>
    </KPageTableView>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const column1 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
const tableData = reactive([
  {
    id: 1,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 20,
    },
  },
  {
    id: 2,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 42,
    address: 'Guangzhou',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  {
    id: 3,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);
</script>
<style lang="less"></style>
