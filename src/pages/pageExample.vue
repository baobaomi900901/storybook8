<!-- adaptive -->
<template>
  <div class="grid grid-cols-4 p-4 gap-4">
    <div class="">
      <!-- <bbm></bbm>
      <bbm3></bbm3> -->
    </div>
    <div class="">
      <div class="bg-gray-200">left</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="left"
        label-width="auto"
        class="w-full"
        showColon
      >
        <k-form-item label="total" prop="total" label-width="100px">
          <k-input v-model="formData.total" />
        </k-form-item>
        <k-form-item label="items" prop="item" label-width="100px">
          <!--             :showLabel="false" -->
          <k-form
            :model="formData.subForm"
            :rules="rules1"
            label-position="left"
            label-width="20px"
            :showColon="false"
            class="flex gap-2"
          >
            <k-form-item label="item1" prop="item1" label-width="100px">
              <k-input v-model.number="formData.subForm.item1" />
            </k-form-item>
            <k-form-item label="item2" prop="item2" label-width="100px" :showLabel="false">
              <k-input v-model.number="formData.subForm.item2" />
            </k-form-item>
          </k-form>
        </k-form-item>
      </k-form>

      <div class="error" v-if="sumError">{{ sumError }}</div>

      <k-button main @click="submitForm">提交</k-button>
      <k-button @click="resetForm">重置</k-button>
    </div>

    <!-- <div class="">
      <div class="bg-gray-200">right</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="right"
        label-width="auto"
        class="w-full"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <div class="bg-gray-200">top</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="top"
        label-width="auto"
        class="w-full"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <bbm></bbm>
    </div>
    <div class="">
      <div class="bg-gray-200">left</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="left"
        label-width="auto"
        class="w-full"
        size="sm"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>
            {{ bbm1 }}
          </template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <div class="bg-gray-200">right</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="right"
        label-width="auto"
        class="w-full"
        size="sm"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <div class="bg-gray-200">top</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="top"
        label-width="auto"
        class="w-full"
        size="sm"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <bbm></bbm>
    </div>
    <div class="">
      <div class="bg-gray-200">left</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="left"
        label-width="auto"
        class="w-full"
        size="lg"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>
            {{ bbm1 }}
          </template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <div class="bg-gray-200">right</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="right"
        label-width="auto"
        class="w-full"
        size="lg"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div>
    <div class="">
      <div class="bg-gray-200">top</div>
      <br />
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="top"
        label-width="auto"
        class="w-full"
        size="lg"
        showColon
      >
        <k-form-item label="name" prop="name" label-width="100px">
          <template #label>name</template>
          <k-input v-model="nameValue" />
        </k-form-item>
        <k-form-item label="age" prop="age" label-width="100px">
          <k-input v-model="ageValue" />
        </k-form-item>
      </k-form>
    </div> -->
  </div>
  <!-- <div style="height: 600px; padding: 20px; overflow-y: scroll">
    <k-tree-table
      :data="tableData"
      :column="column"
      :show-search-input="false"
      :show-filter="false"
      :edit-config="{ trigger: 'dblclick', mode: 'cell' }"
      :widgets="widgets"
      adaptive
      use-ant-style
      border
    ></k-tree-table>
  </div> -->
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const tableData = [
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
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

// const tableData = [];

// const column = ref([
//   // {
//   // type: 'checkbox',
//   // width: '48px',
//   // },
//   {
//     title: 'Id',
//     field: 'id',
//     width: '100',
//     dataType: 'number',
//   },
//   {
//     title: 'Name',
//     field: 'name',
//   },
//   {
//     title: 'Role',
//     field: 'role',
//   },
//   {
//     title: 'Sex',
//     field: 'sex',
//   },
//   {
//     title: 'Age',
//     field: 'age',
//     dataType: 'number',
//   },
//   {
//     title: 'Address',
//     field: 'address',
//   },
// ]);

// const widgets = ref(['filter', 'sizeControl', 'transfer', 'refresh']);

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
}

const formData = reactive<FormData>({
  total: '',
  subForm: {
    item1: null,
    item2: null,
  },
});

const rules = {
  total: [{ required: true, message: '请输入 total', trigger: 'blur' }],
  item: [{ required: true, message: '请输入 item', trigger: 'blur' }],
};

const rules1 = {
  item1: [
    { required: true, message: '请输入 item1', trigger: 'blur' },
    { type: 'number', message: '请输入数字值', trigger: 'blur' },
  ],
  item2: [
    { required: true, message: '请输入 item2', trigger: 'blur' },
    { type: 'number', message: '请输入数字值', trigger: 'blur' },
  ],
};

const sumError = ref<string>('');

const validateSum = () => {
  if (formData.subForm.item1 + (formData.subForm.item2 ?? 0) <= 6) {
    sumError.value = 'item1 和 item2 的和必须大于6';
    return false;
  }
  sumError.value = '';
  return true;
};

const submitForm = () => {
  if (!validateSum()) return;

  myForm.value?.validate((valid) => {
    if (valid) {
      alert('提交成功!');
    } else {
      console.log('表单验证失败');
    }
  });
};

const resetForm = () => {
  myForm.value?.resetFields();
  sumError.value = '';
};
</script>
<style scoped></style>
