<!-- adaptive -->
<template>
  <div class="scriptEditorMgr w-screen h-screen bg-red-200 flex flex-col min-h-0 min-w-0">
    <div class="top w-full h-12 flex border-b border-gray-200 flex-shrink-0">
      <div class="leftWrap ml-6 mr-20 flex items-center">
        <div
          class="logo bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center pr-1 text-base text-white font-bold italic"
        >
          K
        </div>
        <div class="ml-2 font-bold text-xl text-white italic">KingAutomate</div>
      </div>
      <div class="mainWrap">
        <div class="mybutton">navbar</div>
      </div>
    </div>
    <div class="content1 flex-1 flex bg-green-500 min-h-0 min-w-0 px-20">
      <div class="homePage flex-1 flex justify-center py-3 bg-yellow-500 min-h-0 min-w-0">
        <div class="welcome text-2xl font-bold my-6">欢迎使用 KingAutomate 🎉</div>

        <k-tree-table
          :data="tableData"
          :column="column"
          :showDescription="false"
          :row-config="{ isCurrent: true }"
          :column-config="{ resizable: false }"
          :widgets="['toolbar', 'search']"
          :show-page="false"
          :height="'unset'"
          class="flex-1 min-h-0 min-w-0"
        >
          <template #toolbar>
            <K-dropdown ref="myDropdown" trigger="click" class="!mr-1">
              <template #title>
                <k-button main>
                  <IconAdd color="#fff"></IconAdd>
                  创建
                  <IconArrowBottom color="#fff" />
                </k-button>
              </template>

              <k-dropdown-item @click="clickInfo(1)">
                <IconAdd color="var(--k-theme-primary)" class="mr-1"></IconAdd>
                创建应用
              </k-dropdown-item>
              <k-dropdown-item @click="clickInfo(0)">
                <IconAdd color="var(--k-theme-primary)" class="mr-1"></IconAdd>
                创建指令集
              </k-dropdown-item>
            </K-dropdown>
            <!-- <k-button icon-left="IconUpload" class="!mr-1">导入</k-button> -->
          </template>
        </k-tree-table>

        <!-- <vxe-table :data="tableData" class="flex-1 min-h-0 min-w-0">
        <vxe-column type="seq" width="70"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table> -->
      </div>
      <div class="w-64 bg-gray-500 text-white flex-shrink-0">example content</div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { width } from '@src/example_ide/IDEPage/initeDrag';
import { ref, reactive, computed } from 'vue';

// const tableData = [
//   { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10009, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10010, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10011, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10012, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10013, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10014, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10015, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10016, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10017, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10018, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10019, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10020, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10021, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10022, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10023, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10024, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10025, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10026, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10027, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10028, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10029, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10030, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10031, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10032, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10033, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10034, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10035, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10036, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10037, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10038, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10039, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10040, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10041, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10042, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10043, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10044, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10045, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10046, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10047, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10048, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10049, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10050, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10051, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10052, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10053, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10054, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10055, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10056, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10057, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10058, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10059, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//   { id: 10060, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
//   { id: 10061, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
//   { id: 10062, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
//   { id: 10063, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'test abc' },
//   { id: 10064, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//   { id: 10065, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//   { id: 10066, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//   { id: 10067, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
// ];

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column = ref([
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

const widgets = ref(['filter', 'sizeControl', 'transfer', 'refresh']);

const bbm1 =
  'a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123';
const bbm2 = '刘备abc123123123123';
const bbm = () => {
  const formProp = {
    label: '采集参数123',
    prop: 'Args',
    required: true,
    'label-position': 'left',
    'label-width': '100px',
  };
  return (
    <KForm showColon>
      <KFormItem {...formProp}>
        {{
          label: ({ label }) => {
            return <span>{label}</span>;
          },
          default: () => '测试内容',
        }}
      </KFormItem>
    </KForm>
  );
};

const bbm3 = () => {
  const formProp = {
    label: '采集参数',
    prop: 'Args',
    required: true,
    'label-position': 'left',
    required: true,
  };
  return (
    <KForm>
      <KFormItem {...formProp}>
        {{
          label: ({ label }) => {
            return <span>{label}</span>;
          },
          default: () => '测试内容',
        }}
      </KFormItem>
    </KForm>
  );
};

const myForm = ref(null);

interface FormData {
  total: string;
  subForm: {
    item1: number | null;
    item2: number | null;
  };
  item: string;
  item1: string | null;
  item2: string | null;
  item3: string | null;
  item4: string | null;
}

const formData = reactive<FormData>({
  total: '',
  subForm: {
    item1: null,
    item2: null,
  },
  item: '',
  item1: null,
  item2: null,
  item3: null,
  item4: null,
});

const rules = {
  item1: [{ required: true, message: '必须是大于0的整数11', trigger: 'blur' }],
};

interface FormData2 {
  item: string;
  item1: string | null;
  item2: string | null;
  item3: string | null;
  item4: string | null;
}

const formData2 = reactive<FormData2>({
  item: '',
  item1: null,
  item2: null,
  item3: null,
  item4: null,
});

const rules1 = {
  item1: [{ required: true, message: '必须是大于0的整数11', trigger: 'blur' }],
};

const item4 = computed(() => {
  return parseInt(formData2.item1 ?? 0) * parseInt(formData2.item3 ?? 0);
});

const sumError = ref<string>('');

const resetForm = () => {
  myForm.value?.resetFields();
  sumError.value = '';
};

// const lch_value = ref('1');
// const lch_value1 = ref();
// const lch_value2 = ref('1');
// const lch_value3 = ref('1');
// const lch_value4 = computed(() => {
//   return formData2.value.lch_value2 + formData2.value.lch_value3;
// });

const handleInput = (value) => {
  formData2.item1 = value.replace(/[^\d]/g, '');
};
</script>
<style scoped></style>
