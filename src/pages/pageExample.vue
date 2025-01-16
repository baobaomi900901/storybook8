<template>
  <k-button @click="cache" main>缓存数据</k-button>
  <k-button @click="getData" secondary>设置数据</k-button>
  <k-button @click="getTableData" secondary>获取数据</k-button>
  <div :style="{ height: '400px', marginTop: '10px' }">
    <k-tree-table
      ref="treeTableRef"
      :data="tableData1"
      :column="column1"
      :show-column-menu="false"
      :use-tree="true"
      :show-size-control="true"
      :show-transfer="true"
      :show-refresh="true"
      :show-filter="true"
      :simple="false"
      :tree-config="{ parentField: 'parentId' }"
      size="mini"
      :edit-config="{ mode: 'cell', trigger: 'click', showIcon: true }"
      :checkbox-config="{ showHeader: true, checkRowKeys: [1], checkAll: false }"
      :row-config="{ isCurrent: true, drag: true }"
      :column-config="{ resizable: true }"
      border
      :tooltip-config="{ theme: 'dark' }"
      :show-page="true"
      :show-overflow="true"
      :show-header-tools="true"
      :show-batch-operation="false"
      :batch-operations="batchOptions"
      :on-transfer-change="(a) => {}"
      :expand-config="{ reserve: true }"
      :show-description="true"
      :row-drag-config="{
        isCrossDrag: true,
        isSelfToChildDrag: true,
        isToChildDrag: true,
      }"
      :cell-click-toggle-highlight="true"
      :sort-config="{ multiple: true, chronological: true }"
      :pagination-config="{ total: 100 }"
      :defaultTransferData="getData"
      :menu-config="menuConfig"
      @menu-click="menuClickEvent"
      @server-paging="(a) => {}"
      @size-change="(a) => {}"
      @change="(a) => {}"
      @remote-query="(a) => {}"
      @cell-click="(a) => {}"
      @hide-column="(col) => {}"
      @highlight-clear="(a) => {}"
      @advanced-filter-clear="(a) => {}"
      @advanced-filter-confirm="(a) => {}"
      :advanced-filter-config="advanceFilterConfig"
      align="center"
    ></k-tree-table>
  </div>
</template>

<script setup lang="tsx">
import { ref, reactive } from 'vue';
// import { KMessage } from '../../packages/components/message';
// import { KTreeTable } from '../../packages/components/tree_table';

window.addEventListener('keydown', function (event) {
  console.log(`Key pressed: ${event.key}`, event.code);

  // 你可以根据按下的键执行不同的操作
  if (event.key === 'Enter') {
    console.log('Enter key was pressed');
  }
});

const treeTableRef = ref();
const showDialog = ref(false);
// 常规表格数据
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
    age: '28',
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
  { id: 7, name: 'Test99', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 17, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 18, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 19, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 20, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 21, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 22, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 23, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 24, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 25, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 26, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 27, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 28, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 29, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 30, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 31, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 32, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 33, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 34, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 35, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 36, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 37, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 38, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 39, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 40, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 41, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 42, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 43, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 44, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 45, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 46, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 47, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 48, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);
// 常规表格列配置
const column = ref([
  {
    title: '',
    type: 'checkbox',
    width: '50',
    dataType: 'number',
    visible: true,
  },
  {
    title: 'Name',
    field: 'name',
    sortable: true,
    cellRender: {},
    dataType: 'string',
    visible: true,
  },
  {
    title: 'Role',
    field: 'role',
    showIcon: true,
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return `${cellValue}-${column.field}`;
    },
    align: 'center',
    showOverflow: true,
  },
  {
    title: 'Sex',
    field: 'sex',
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return cellValue === 'Man' ? '男' : '女';
    },
    align: 'left',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
    showIcon: false,
    align: 'right',
    editRender: {},
    showOverflow: true,
  },
  {
    title: 'Address',
    field: 'address',
    dataType: 'string',
  },
]);
// 树形表格数据
let tableData1 = ref([
  {
    id: '10000',
    parentId: null,
    name: 'Test1',
    type: 'mp3',
    sizes: 1024,
    date: '2020-08-01',
    icon: 'IconFolderOpen',
    iconStyle: { color: '#f60' },
  },
  {
    id: 10050,
    hasChild: true,
    parentId: null,
    name: 'Test2',
    type: 'mp4',
    sizes: null,
    date: '2021-04-01',
    __folder: true,
    iconStyle: { color: '#f60' },
  },
  {
    id: 24300,
    parentId: 10050,
    hasChild: false,
    name: 'Test3',
    type: 'avi',
    sizes: 1024,
    date: '2020-03-01',
    __folder: true,
    iconStyle: { color: '#f60' },
  },
  { id: 20045, parentId: 24300, name: 'Test4', type: 'html', sizes: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', sizes: null, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', sizes: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', sizes: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test8', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', sizes: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test10', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test11', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test12', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test13', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test14', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test15', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'Test16', type: 'avi', sizes: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test17', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test18', type: 'js', sizes: 1024, date: '2021-06-01' },
]);
function getTableData() {
  const { fullData } = treeTableRef.value.getTableData();
  console.log(fullData);
}
// 树形表格列配置
const column1 = [
  {
    title: '',
    width: '52px',
    dragSort: true,
  },
  {
    title: 'Id',
    field: 'id',
    width: '100px',
    treeNode: true,
    showIcon: true,
    showColumnMenu: false,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    editRender: { autofocus: '#my_input' },
    renderEdit() {
      return <input id='my_input'></input>;
    },
    dataType: 'string',
  },
  {
    title: 'Type',
    field: 'type',
  },
  {
    title: 'Size',
    field: 'sizes',
    dataType: 'number',
  },
  {
    title: 'Date',
    field: 'date',
  },
];
// 高级筛选配置
const advanceFilterConfig = {
  filterAll: false,
  exclude: [],
  remote: [],
  ignoreCase: true,
  filterColumns: [
    {
      title: 'Age',
      field: 'age',
      dataType: 'number',
      options: [
        {
          label: '22',
          value: 22,
        },
        {
          label: '23',
          value: 23,
        },
        {
          label: '24',
          value: 24,
        },
        {
          label: '25',
          value: 25,
        },
      ],
    },
    {
      title: 'Sex',
      field: 'sex',
      dataType: 'string',
      options: [
        {
          label: '男',
          value: 'Man',
        },
        {
          label: '女',
          value: 'Women',
        },
      ],
    },
    {
      title: 'num',
      field: 'num',
      dataType: 'number',
      options: [
        { label: '已发布', value: 0 },
        { label: '未发布', value: 1 },
      ],
    },
  ],
};
// 批量操作配置
const batchOptions = [
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

function cache() {
  const data = treeTableRef.value.getHeaderControllerData();
  localStorage.setItem('headerData', JSON.stringify(data));
}
function getData() {
  let data = localStorage.getItem('headerData');
  if (data) {
    return JSON.parse(data);
    // treeTableRef.value.setHeaderControllerData(JSON.parse(data));
  }
  return [];
}
const menuConfig = reactive({
  header: {
    options: [
      [
        { code: 'myBtn1', name: '按钮1' },
        { code: 'myBtn2', name: '按钮2' },
      ],
    ],
  },
});
const menuClickEvent = ({ menu }) => {
  switch (menu.code) {
    case 'myBtn1':
      KMessage.success('点击了按钮1');
      break;
    case 'myBtn2':
      KMessage.success('点击了按钮2');
      break;
  }
};
</script>
