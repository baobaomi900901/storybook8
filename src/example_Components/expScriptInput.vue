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
      <div class="flex flex-col gap-4 justify-center items-center">
        <div class="flex gap-4">
          <div class="flex flex-col gap-4 justify-center items-center">
            <k-button main @click="showModeSwitch = !showModeSwitch">
              {{ showModeSwitch ? '显示模式切换' : '隐藏模式切换' }}
            </k-button>
            <k-button @click="toggleMode" :disabled="!showModeSwitch" class="!ml-0">
              toggleMode
            </k-button>
          </div>
          <k-script-input
            v-model="text"
            ref="scriptInput"
            :show-popper-switch="showPopperSwitch"
            :show-mode-switch="showModeSwitch"
            default-mode="string"
            :options="data"
            height="100px"
            use-tree
            :tree-config="{ expandAll: true }"
            @change="onChange"
            class="vvn w-80"
          >
            <!-- <template #prepend><k-button @click="change">Change</k-button></template> -->
            <template #append><k-button @click="clear">Clear</k-button></template>
          </k-script-input>

          <div class="flex flex-col gap-4 justify-center items-center">
            <k-button main @click="showPopperSwitch = !showPopperSwitch">
              {{ showPopperSwitch ? '显示弹窗' : '隐藏弹窗' }}
            </k-button>
            <k-button @click="showPopper" :disabled="!showPopperSwitch" class="!ml-0">
              showPopper
            </k-button>
          </div>
        </div>
        <k-button main @click="change">change</k-button>
        <k-button main @click="changeMode">changeMode</k-button>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import SBExamplePanel from '@src/components/SBExamplePanel.vue';
import { computed, ref, watch, nextTick } from 'vue';

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

const scriptInput = ref();
const showPopperSwitch = ref(false);
const showModeSwitch = ref(false);

const text = ref('');

function search() {
  scriptInput.value?.showPopper?.();
}

function onChange(value: any) {
  console.log(value);
}

let i = 1;
function change() {
  text.value += `fx(value1-1) fx(zhj) 1111`;
}

function changeMode() {
  scriptInput.value?.toggleMode();
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
