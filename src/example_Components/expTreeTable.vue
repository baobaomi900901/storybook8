<template>
  <div class="epx-container grid auto-rows-max gap-4 w-full">
    <div class="epx-title">树表格</div>
    <SBExamplePanel label="antd风格" open>
      <div :style="{ height: '100%', width: '100%' }">
        <k-tree-table
          :column-config="{ resizable: true }"
          :data="tableData2"
          :column="column2"
          :widgets="widgets"
          :showDescription="false"
          size="medium"
          useAntStyle
        ></k-tree-table>
      </div>
      <KTreeTable :data="tableData" :column="column" use-ant-style>
        <template #enabled="{ row }">
          {{ row.enabled === 1 ? '启用' : '禁用' }}
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
    </SBExamplePanel>
    <!-- <SBExamplePanel label="默认">
      <div :style="{ height: '300px', width: '100%' }">
        <k-tree-table
          :data="tableData"
          :column="column1"
          :show-page="false"
          :column-config="{ resizable: true }"
          border="inner"
          round
        >
          <template #address>
            <k-button-container>
              <k-button text>编辑</k-button>
              <k-button text>删除</k-button>
              <k-button text>详情</k-button>
              <k-button text>编辑</k-button>
              <k-button text>删除</k-button>
              <k-button text>详情</k-button>
            </k-button-container>
          </template>
        </k-tree-table>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="多列头">
      <div :style="{ height: '300px', width: '100%' }">
        <k-tree-table
          :data="tableData"
          :column="columnPro"
          :show-page="false"
          :column-config="{ resizable: true }"
          border
          round
        >
          <template #address>
            <k-button-container>
              <k-button text>编辑</k-button>
              <k-button text>删除</k-button>
              <k-button text>详情</k-button>
              <k-button text>编辑</k-button>
              <k-button text>删除</k-button>
              <k-button text>详情</k-button>
            </k-button-container>
          </template>
        </k-tree-table>
      </div>
    </SBExamplePanel> -->
  </div>
</template>

<script lang="tsx" setup>
import { IconAdd } from 'ksw-vue-icon';
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

const columnPro = [
  {
    title: 'Id',
    field: 'id',
    width: '50px',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    render: ({ row }) => {
      return <span style={{ color: 'green' }}>{row.name}</span>;
    },
  },
  {
    title: 'Role',
    field: 'role',
    dataType: 'string',
  },
  {
    title: 'Other1',
    field: 'other1',
    group: [
      {
        title: 'Other2',
        field: 'other2',
        group: [
          {
            title: 'Age',
            field: 'age',
            dataType: 'number',
            showIcon: true,
            __folder: true,
          },
          {
            title: 'Sex',
            field: 'sex',
            dataType: 'string',
            render: ({ row }) => {
              return <span style={{ color: 'red' }}>{row.sex}</span>;
            },
          },
        ],
      },
      {
        title: 'Address',
        field: 'address',
        width: '250px',
        dataType: 'string',
      },
    ],
  },
];
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

const column2 = ref([
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

const tableData2 = [
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
];

const widgets = ref([
  {
    id: 'customRefresh',
    widget: () => (
      <KButton
        text
        onCilck={() => {
          console.log('refresh');
        }}>
        <IconRefresh color='gray' />
      </KButton>
    ),
  },
  {
    id: 'sizeControl',
    widget: () => (
      <KButton text>
        <IconSizeControls color='gray' />
      </KButton>
    ),
  },
  {
    id: 'transfer',
    widget: () => (
      <KButton text>
        <IconSetting color='gray' />
      </KButton>
    ),
  },
]);
</script>
<style scoped></style>
