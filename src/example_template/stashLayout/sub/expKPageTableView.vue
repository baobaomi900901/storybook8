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
      <div :style="{ height: '100%', width: '100%' }">
        <KTreeTable :data="tableData2" :column="column2" use-ant-style>
          <template #enabled="{ row }">
            <KTag v-if="row.enabled === 1" type="success">启用</KTag>
            <KTag v-else type="info">禁用</KTag>
          </template>
          <template #collectType="{ row }">
            {{ row.collectType === 0 ? '全部采集' : '部分采集' }}
          </template>
          <template #opt="{ row }">
            <KButton text @click="onEdit(row)">编辑</KButton>
            <KPopconfirm title="您确定要删除吗?" @confirm="onDel(row)">
              <template #reference>
                <KButton text type="danger">删除</KButton>
              </template>
            </KPopconfirm>
          </template>
        </KTreeTable>
      </div>
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

const column2 = ref([
  // {
  // type: 'checkbox',
  // width: '48px',
  // },
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
  {
    title: '状态',
    field: 'enabled',
  },
  {
    title: '操作',
    field: 'opt',
  },
]);

const tableData2 = [
  {
    id: 10001,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10002,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 0 },
  {
    id: 10004,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10005,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10006,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10008,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10009,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10010,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10011, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10012,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10013,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10014,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10015, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10016,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10017,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10018,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10019, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10020,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10021,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10022,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10023, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10024,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10025,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10026,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10027, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10028,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10029,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10030,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10031, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10032,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10033,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10034,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10035, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10036,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10037,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10038,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10039, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10040,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10041,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10042,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10043, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10044,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10045,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10046,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10047, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10048,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10049,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10050,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10051, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10052,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10053,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10054,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10055, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10056,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10057,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10058,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10059, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
  {
    id: 10060,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 23,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10061,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'Guangzhou',
    enabled: 1,
  },
  {
    id: 10062,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Shanghai',
    enabled: 1,
  },
  { id: 10063, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc', enabled: 1 },
  {
    id: 10064,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    enabled: 1,
  },
  {
    id: 10065,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    enabled: 1,
  },
  {
    id: 10066,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    enabled: 1,
  },
  { id: 10067, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', enabled: 1 },
];

const widgets = ref(['filter', 'sizeControl', 'transfer']);

const ass = [
  {
    label: '添加',
    handler: () => {
      console.log('添加');
    },
  },
  {
    label: '删除',
    handler: () => {
      console.log('删除');
    },
  },
  {
    label: '更新',
    disabled: true,
    handler: () => {
      console.log('更新');
    },
  },
  {
    label: '使能',
    handler: () => {
      console.log('使能');
    },
  },
  {
    label: '检测',
    handler: () => {
      console.log('检测');
    },
  },
  {
    label: '禁用',
    handler: () => {
      console.log('禁用');
    },
  },
  {
    label: '返回',
    handler: () => {
      console.log('返回');
    },
  },
  {
    label: '解禁',
    disabled: true,
    handler: () => {
      console.log('解禁');
    },
  },
  {
    label: '回显',
    handler: () => {
      console.log('回显');
    },
  },
];
</script>
<style lang="less"></style>
