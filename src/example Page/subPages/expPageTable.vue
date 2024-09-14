<!--
* @description  参数1
* @fileName  expPageTable
* @author userName
* @date 2024-07-23 15:16:18
* @version V3.0.0
!-->
<template>
  <div id="expPageTable" class="expPageTable h-full">
    <KPageTableView
      showViewBus
      viewBusTitle="视图"
      viewBusInfo="描述信息"
      viewBusRefresh
      pageIcon="IconAomMenuAOMRZColor"
      pageTitle="用户管理"
      pageInfo="用户管理页面描述信息"
    >
      <template #extra-page-head-btn>
        <KButton @click="() => console.log('新增')" main>新增</KButton>
        <KButton @click="() => console.log('导出')">导出</KButton>
      </template>
      <template #extra-page-body>
        <div class="h-full">
          <k-tree-table
            :data="tableData"
            :column="column1"
            :show-page="false"
            border
          ></k-tree-table>
        </div>
      </template>
    </KPageTableView>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KPageViewBus, KPageTableView } from '@templates';
import { KButton, KTreeTable } from '@components';

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
<style lang="less">
@import url('../../../kswux/package/style/variable.css');
@import url('../../../kswux/package/style/general.less');
.expPageTable {
}

.left {
}
</style>
