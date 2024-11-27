<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">脚本输入框</div>
    <SBExamplePanel label="默认" open>
      <k-script-input ref="scriptInput" :options="options">
        <template #prepend>请输入脚本</template>
        <template #append><k-button main @click="clear">Clear</k-button></template>
      </k-script-input>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const options = ref([
  { label: 'Option1', value: 1 },
  { label: 'Option2', value: 2 },
  { label: 'Option3', value: 3 },
  { label: 'Option4', value: 4 },
]);

const scriptInput = ref();
function clear() {
  scriptInput.value?.clear();
}
</script>
<style scoped></style>
