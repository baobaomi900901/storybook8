<template>
  <div class="epx-container gap-4 w-full overflow-auto flex">
    <SBExamplePanel label="antd风格" open>
      <div :style="{ height: '100%', width: '100%' }">
        <KTreeTable :data="tableData2" :column="column2" use-ant-style hasSpace>
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
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <!-- <div :style="{ height: '300px', width: '100%' }"> -->
      <k-tree-table
        :data="tableData2"
        :column="column1"
        :show-page="true"
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
      <!-- </div> -->
    </SBExamplePanel>
    <SBExamplePanel label="多列头" open>
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
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Menu from '../../components/menu.vue';
const router = useRouter();
const data = [];

const routerPath = reactive(router.currentRoute.value.matched[1].children);

routerPath.forEach((item) => {
  if (!item.path.includes('/components/')) {
    item.path = '/components/tree-table/' + item.path;
  }
  data.push(item);
});

onMounted(() => {
  // 如果存在连接, 则跳转到连接
  const url = window.location.href;
  const index = url.indexOf('?');
  if (index > 0) {
    const link = url.substring(index + 1);
    const linkItem = data.find((item) => item.path === link);
    if (linkItem) {
      router.push(linkItem.path);
    }
  }
});

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
    role: 'Develop123',
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
  { id: 5, name: 'Test5', role: 'Develop123', sex: 'Man', age: 39, address: 'test abc' },
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
]);
const tableData2 = [
  {
    id: 10001,
    name: 'Test1',
    role: '    Develop[空格]    ',
    sex: 'Man',
    age: 28,
    address: 'test abc',
  },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10009, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10010, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10011, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10012, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10013, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10014, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10015, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10016, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10017, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10018, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10019, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10020, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10021, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10022, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10023, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10024, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10025, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10026, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10027, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10028, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10029, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10030, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10031, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10032, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10033, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10034, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10035, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10036, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10037, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10038, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10039, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10040, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10041, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10042, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10043, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10044, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10045, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10046, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10047, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10048, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10049, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10050, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10051, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10052, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10053, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10054, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10055, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10056, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10057, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10058, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10059, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10060, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10061, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10062, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
  { id: 10063, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
  { id: 10064, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10065, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10066, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10067, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
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
<style scoped></style>
