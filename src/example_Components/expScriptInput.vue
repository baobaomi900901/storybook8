<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div>
      <IconRPADataColor />
    </div>
    <div class="epx-title">脚本输入框</div>
    <SBExamplePanel label="默认" open class="">
      <k-script-input
        v-model="text"
        ref="scriptInput"
        :options="data"
        expandAll
        use-tree
        class="vvn !w-80"
        @change="changeValueAndMode"
        primitive
      >
        <template #append>
          <k-button>123</k-button>
        </template>
      </k-script-input>
    </SBExamplePanel>
    <SBExamplePanel label="返显" open>
      <div class="flex flex-col">
        <span>mode:{{ modeStatus ? 'true' : 'false' }}</span>
        <span>value:{{ text }}</span>

        <br />

        <k-script-input
          v-model="text2"
          :options="data"
          ref="scriptInput2"
          expandAll
          use-tree
          class="vvn !w-80"
        ></k-script-input>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive, nextTick } from 'vue';

const text = ref('');
const text2 = ref('');

const scriptInput = ref();
const modeStatus = ref();

const scriptInput2 = ref();

// optional 控制是否可选
const data = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1' },
  { label: 'option1-2', value: 'value1-2', pid: 'value1' },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2', optional: false },
  { label: 'option1-2-2', value: 'value1-2-2', pid: 'value1-2' },
  { label: 'option1-2-3', value: 'value1-2-3', pid: 'value1-2' },
  { label: 'option1-3', value: 'value1-3', pid: 'value1' },
  { label: 'option2', value: 'value2', pid: null },
  { label: 'option2-1', value: 'value2-1', pid: 'value2' },
  { label: 'option2-2', value: 'value2-2', pid: 'value2' },
  { label: 'option2-3', value: 'value2-3', pid: 'value2' },
  { label: 'option3', value: 'value3', pid: null },
  { label: 'option3-1', value: 'value3-1', pid: 'value3' },
  { label: 'option3-2', value: 'value3-2', pid: 'value3' },
  { label: 'option3-3', value: 'value3-3', pid: 'value3' },
];

function changeValueAndMode(params: type) {
  modeStatus.value = scriptInput.value?.isStringMode();

  // 返显
  nextTick(() => {
    scriptInput2.value?.setStringMode(modeStatus.value);
    text2.value = text.value;
  });
}

// 清除
function clear() {
  scriptInput.value?.clear();
}

// 切换模式
function toggleMode() {
  scriptInput.value?.toggleMode();
}

// 显示弹窗
function showPopper() {
  scriptInput.value?.showPopper?.();
}
</script>
<style scoped></style>
