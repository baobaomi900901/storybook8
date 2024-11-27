<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">上传 | upload</div>
    <SBExamplePanel label="默认" open>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :before-upload="beforeUpload"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只支持 jpg/png 文件，且不超过 500kb</div>
      </el-upload>
    </SBExamplePanel>

    <k-script-input ref="scriptInput" :options="options">
      <template #prepend>请输入脚本</template>
      <template #append><k-button main @click="clear">Clear</k-button></template>
    </k-script-input>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const value = ref();

function handleChange(file, fileList) {
  console.log('文件信息:', file);
  console.log('文件列表:', fileList);
  // 你可以在这里处理文件信息，例如文件名
  console.log('文件名称:', file.name);
  // 注意：无法获取本地绝对路径
}

function beforeUpload(file) {
  const isLt10MB = file.size / 1024 / 1024 < 500;
  if (!isLt10MB) {
    console.log('文件大小超出限制!');
    return false;
  }
  return isLt10MB;
}

const options = ref([
  { label: 'Option1', value: 1 },
  { label: 'Option2', value: 2 },
  { label: 'Option3', value: 3 },
  { label: 'Option4', value: 4 },
]);
</script>
<style scoped></style>
