<!-- adaptive -->
<template>
  <div class="grid grid-cols-1 p-4 gap-4">
    <div class="">
      <bbm></bbm>
      <bbm2></bbm2>
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
        class="w-full grid grid-cols-2 gap-4"
        showColon
      >
        <k-form-item label="total" prop="" label-width="100px" class="col-span-2">
          <k-input v-model="formData.total" />
        </k-form-item>
        <k-form-item label="嵌套item" prop="" label-width="100px" class="col-span-2">
          <div class="flex gap-3">
            <k-form-item label="123" prop="" class="flex-1 h-8 w-40" :showLabel="false">
              <k-select v-model="formData.item">
                <k-option label="每天" value="1"></k-option>
                <k-option label="每周" value="2"></k-option>
              </k-select>
            </k-form-item>
            <k-form-item label="" prop="item1" class="flex-1 h-8 w-60" :showLabel="false">
              <k-input v-model="formData.item1" @input="handleInput">
                <template #append>
                  <k-select v-model="formData.item2" :style="{ width: '88px' }">
                    <k-option label="分钟" value="1"></k-option>
                    <k-option label="小时" value="2"></k-option>
                  </k-select>
                </template>
              </k-input>
            </k-form-item>
            <span>x</span>
            <k-form-item label="" prop="" :showLabel="false" class="flex-1 h-8 w-60">
              <k-input v-model.number="formData.item3" @input="handleInput">
                <template #append>人</template>
              </k-input>
            </k-form-item>
            <span>=</span>
            <k-form-item label="" prop="" :showLabel="false" class="flex-1 h-8 w-60">
              <k-input v-model.number="item4" @input="handleInput" disabled>
                <template #append>分钟</template>
              </k-input>
            </k-form-item>
          </div>
        </k-form-item>
        <k-form-item label="嵌套form" prop="" label-width="100px" class="col-span-2">
          <k-form
            :model="formData2"
            :rules="rules1"
            label-position="left"
            label-width="20px"
            :showColon="false"
            class="h-fit flex gap-3"
          >
            <k-form-item label="123" prop="" class="flex-1 h-8 w-40" :showLabel="false">
              <k-select v-model="formData2.item">
                <k-option label="每天" value="1"></k-option>
                <k-option label="每周" value="2"></k-option>
              </k-select>
            </k-form-item>
            <k-form-item label="123" prop="item1" class="flex-1 h-8 w-60">
              <k-input v-model="formData2.item1" @input="handleInput">
                <template #append>
                  <k-select v-model="formData2.item2" :style="{ width: '88px' }">
                    <k-option label="分钟" value="1"></k-option>
                    <k-option label="小时" value="2"></k-option>
                  </k-select>
                </template>
              </k-input>
            </k-form-item>
            <span>x</span>
            <k-form-item label="" prop="" :showLabel="false" class="flex-1 h-8 w-60">
              <k-input v-model.number="formData2.item3" @input="handleInput">
                <template #append>人</template>
              </k-input>
            </k-form-item>
            <span>=</span>
            <k-form-item label="" prop="" :showLabel="false" class="flex-1 h-8 w-60">
              <k-input v-model.number="item4" @input="handleInput" disabled>
                <template #append>分钟</template>
              </k-input>
            </k-form-item>
          </k-form>
        </k-form-item>
      </k-form>

      <div class="error" v-if="sumError">{{ sumError }}</div>

      <k-button main @click="submitForm">提交</k-button>
      <k-button @click="resetForm">重置</k-button>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive, computed } from 'vue';

const label =
  'a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123a123123123123123asdfasdfasfsfsaf123123123123123123123123123123123123123123123123123123123123123123123';
const label2 = '刘备abc123123123123';
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

const bbm2 = () => {
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

const handleInput = (value) => {
  formData2.item1 = value.replace(/[^\d]/g, '');
};
</script>
<style scoped></style>
