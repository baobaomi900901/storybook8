<template>
  <div class="w-80 m-60">
    <KForm
      ref="formRef"
      :model="form"
      label-position="left"
      label-width="auto"
      :rules="{ file: [{ required: true, message: '请选择文件' }] }"
    >
      <KFormItem label="文件" prop="file">
        <KInput v-model="form.file" disabled>
          <template #suffix>
            <IconGfaomBGGL :size="18" @click="chooseFile" />
          </template>
        </KInput>
      </KFormItem>
      <KFormItem v-if="true" label="密码" prop="password">
        <KInput v-model="form.password" />
      </KFormItem>
      <!-- todo@huxin: 支持选择权限 -->
      <KFormItem v-if="true" label="权限" prop="">
        <KInput v-model="form.password">
          <template #suffix>
            <IconGfaomBGGL :size="18" />
          </template>
        </KInput>
      </KFormItem>
    </KForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormModel {
  file: string;
  password: string;
  auth?: string; // 可选字段
}

const props = defineProps<{
  hasPwd: boolean;
  hasAuth: boolean;
}>();

const formRef = ref(null);
const form = ref<FormModel>({
  file: '',
  password: '',
  auth: '', // 初始化权限字段
});

const chooseFile = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '*'; // 可以根据需要限制文件类型
  input.onchange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      form.value.file = file.name; // 这里可以根据需要存储文件对象或文件名
    }
  };
  input.click();
};

const submitForm = () => {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      // 执行提交逻辑，例如发送请求
      console.log('提交表单:', form.value);
    } else {
      console.error('表单验证失败');
      return false;
    }
  });
};
</script>

<style scoped></style>
