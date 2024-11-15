<!--
* @description  参数1
* @fileName  tableView
* @author userName
* @date 2024-09-19 15:07:20
* @version V3.0.0
!-->
<template>
  <div
    id="tableView"
    class="tableView flex-1 px-10 pt-8"
    style="background-color: #f5f5f5; min-width: 0"
  >
    <KPageTitle>表格视图123</KPageTitle>
    <div class="page-body flex-col flex-1" style="min-width: 0">
      <KPageFiltr>
        <div class="filtr-items" ref="filtrItems">
          <div class="filtr-item">
            <k-form-item label="Id:">
              <el-input v-model="form.name" />
            </k-form-item>
          </div>
          <div class="filtr-item">
            <k-form-item label="Name:">
              <el-input v-model="form.name" />
            </k-form-item>
          </div>
          <div class="filtr-item">
            <k-form-item label="Role:">
              <el-input v-model="form.name" />
            </k-form-item>
          </div>
          <div class="filtr-item">
            <k-form-item label="Sex:">
              <el-input v-model="form.name" />
            </k-form-item>
          </div>
          <div class="filtr-item">
            <k-form-item label="Age:">
              <el-input v-model="form.name" />
            </k-form-item>
          </div>
          <div class="filtr-btns flex gap-2" ref="filtrBtns">
            <KButton>重置</KButton>
            <KButton color="#1890ff" main>查询</KButton>
            <KButton text :iconRight="handleExpandBtnIcon" @click="handleExpand">
              {{ handleExpandBtnText }}
            </KButton>
          </div>
        </div>
      </KPageFiltr>

      <div class="table-container bg-white rounded-md p-6 mb-4 shadow-sm" style="height: 70vh">
        <div style="min-width: 0; height: 100%">
          <k-tree-table
            :data="tableData"
            :column="column"
            :show-page="false"
            :widgets="widgets"
            :border="false"
            size="small"
            :showOverflow="false"
            border
          >
            <template #custom1>custom1插槽</template>
          </k-tree-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import KPageTitle from './components/KPageTitle.vue';
import KPageFiltr from './components/KPageFiltr.vue';

const widgets = ref([
  {
    id: 'custom1',
    widget: () => {
      return (
        <KButton main color='#1890ff' iconLeft='IconAdd'>
          新建
        </KButton>
      );
    },
  },
  {
    id: 'custom2',
    widget: () => {
      return (
        <KTooltip content='高级搜索'>
          <KButton text size='sm' color='black'>
            <IconSearch size='20' />
          </KButton>
        </KTooltip>
      );
    },
  },
  {
    id: 'custom3',
    widget: () => {
      return (
        <KTooltip content='表头控制器'>
          <KButton text size='sm' color='black'>
            <IconSetting size='20' />
          </KButton>
        </KTooltip>
      );
    },
  },
]);

const tableData = reactive([
  {
    id: 1,
    name: 'Test1',
    role: 'Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1---Develop1--Develop1--Develop1--Develop1',
    sex: 'Man',
    age: 28,
    address: 'test abc',
  },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  {
    id: 4,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 18,
    address:
      'Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1--Develop1---Develop1--Develop1--Develop1--Develop1',
  },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column = ref([
  {
    type: 'checkbox',
    width: '50',
  },
  {
    title: 'Id',
    field: 'id',
    width: '50',
    sortable: true,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    sortable: true,
    cellRender: {},
    render: ({ row, column }) => {
      return (
        <span style={{ color: 'red' }}>
          <k-tag point>标签</k-tag>
        </span>
      );
    },
    dataType: 'string',
  },
  {
    title: 'Role',
    field: 'role',
    showIcon: true,
    // showOverflow: false,
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return `${cellValue}-${row.id}-${column.field}`;
    },
    align: 'center',
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
    showIcon: true,
    __folder: true,
    align: 'right',
  },
  {
    title: 'Address',
    field: 'address',
    dataType: 'string',
  },
]);

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const onSubmit = () => {
  console.log('submit!');
};

const filtrItems = ref();
const filtrBtns = ref();

const handleExpandBtnText = ref('展开');
const handleExpandBtnIcon = ref('IconArrowBottom');

const handleExpand = () => {
  console.log(1);

  filtrBtns?.value.classList.toggle('is-expand');
  filtrItems?.value.classList.toggle('is-expand');
  handleExpandBtnText.value = handleExpandBtnText.value === '展开' ? '收起' : '展开';
  handleExpandBtnIcon.value =
    handleExpandBtnIcon.value === 'IconArrowBottom' ? 'IconArrowTop' : 'IconArrowBottom';
};
</script>
<style lang="less" scoped>
.el-button.k-button + .el-button.k-button {
  margin-left: 0;
}

.k-tree-table .k-tree-table__header {
  margin-bottom: 0.75rem;
}

.k-tree-table .k-tree-table__header .k-table-func .el-button--text {
  padding: 0 0 !important;
}

.filtr-items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 33%);
  grid-column-gap: 1rem;
  grid-auto-rows: 1fr;
  overflow: hidden;
  height: 2rem;
  transition: all 0.3s ease-in-out;
  &.is-expand {
    height: auto;
    transition: all 0.3s ease-in-out;
  }
}

.filtr-btns {
  // width: 30%;
  grid-column: -1;
  grid-row: -1;
  justify-self: end;
  &.is-expand {
    grid-row: unset;
  }
}
.el-form-item__label {
  display: inline-block;
  min-width: 4rem;
  text-align: right;
}
</style>
