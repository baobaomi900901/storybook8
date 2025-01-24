<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
* onlyOneInput, 默认 false  // 限制只能选择一个值
* checkVariableName, 默认 false  // 限制变量名只能包含字母、数字、下划线
* showPassword, 默认 false  // 密码输入模式
!-->
<template>
  <div class="epx-container">
    <SBExamplePanel label="默认" open class="">
      <div class="flex flex-col gap-4">
        <k-select v-model="selectValue" placeholder="请选择" class="!w-80">
          <k-option value="">空</k-option>
          <k-option value="number">number</k-option>
          <k-option value="string">string</k-option>
          <k-option value="boolean">boolean</k-option>
        </k-select>

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
            <div class="w-80">
              <k-script-input
                v-model="text"
                ref="scriptInput"
                :show-popper-switch="showPopperSwitch"
                :show-mode-switch="showModeSwitch"
                default-mode="string"
                :options="data"
                use-tree
                :onlyOneInput="['expression', 'string']"
                :tree-config="{ expandAll: true }"
                script-key="id"
                @change="onChange"
                placeholder="请输入脚本"
                :optionRepeatable="false"
                checkContentType
                :contentType="selectValue"
                :min="2"
                :max="100"
              >
                <!-- contentType="string" -->
                <!-- <template #prepend><k-button @click="change">Change</k-button></template> -->
                <template #append><k-button @click="clear">Clear</k-button></template>
              </k-script-input>
            </div>

            <div class="flex flex-col gap-4 justify-center items-center">
              <k-button main @click="showPopperSwitch = !showPopperSwitch">
                {{ showPopperSwitch ? '显示弹窗' : '隐藏弹窗' }}
              </k-button>
              <k-button @click="showPopper" :disabled="!showPopperSwitch" class="!ml-0">
                showPopper
              </k-button>
            </div>
          </div>
          <k-button main @click="change">edit</k-button>
          <k-button main @click="changeMode">changeMode</k-button>
          <k-button main @click="showPassword = !showPassword">Password</k-button>
        </div>

        <k-form>
          <k-form-item label="脚本输入框">
            <k-script-input
              v-model="text"
              ref="scriptInput"
              :show-popper-switch="showPopperSwitch"
              :show-mode-switch="showModeSwitch"
              default-mode="string"
              :options="data"
              use-tree
              :onlyOneInput="['expression', 'string']"
              :tree-config="{ expandAll: true }"
              script-key="id"
              @change="onChange"
              placeholder="请输入脚本"
              :optionRepeatable="false"
              checkContentType
              :contentType="selectValue"
              :min="2"
              :max="100"
            >
              <template #append><k-button @click="clear">Clear</k-button></template>
            </k-script-input>
          </k-form-item>
          <k-form-item label="输入框">
            <k-input></k-input>
          </k-form-item>
        </k-form>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import SBExamplePanel from '@src/components/SBExamplePanel.vue';
import { computed, ref, watch, nextTick } from 'vue';
import Tag from '../../kswux/packages/components/tag/tag.vue';

const selectValue = ref('');

// optional 控制是否可选
// const data = [
//   { label: 'option1', value: 'value1', pid: null, bbm: 'bbm-1' },
//   { label: 'option1-1', value: 'value1-1', pid: 'value1', bbm: 'bbm-2' },
//   { label: 'option1-2', value: 'value1-2', pid: 'value1', bbm: 'bbm-3' },
//   { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2', optional: false, bbm: 'bbm-4' },
//   { label: 'option1-2-2', value: 'value1-2-2', pid: 'value1-2', bbm: 'bbm-5' },
//   { label: 'option1-2-3', value: 'value1-2-3', pid: 'value1-2', bbm: 'bbm-6' },
//   { label: 'option1-3', value: 'value1-3', pid: 'value1', bbm: 'bbm-7' },
//   { label: 'option2', value: 'value2', pid: null, bbm: 'bbm-8' },
//   { label: 'option2-1', value: 'value2-1', pid: 'value2', bbm: 'bbm-9' },
//   { label: 'option2-2', value: 'value2-2', pid: 'value2', bbm: 'bbm-9' },
//   { label: 'option2-3', value: 'value2-3', pid: 'value2', bbm: 'bbm-9' },
//   { label: 'option3', value: 'value3', pid: null, bbm: 'bbm-12' },
//   { label: 'option3-1', value: 'value3-1', pid: 'value3', bbm: 'bbm-10' },
//   { label: 'option3-2', value: 'value3-2', pid: 'value3', bbm: 'bbm-10' },
//   { label: 'option3-3', value: 'value3-3', pid: 'value3', bbm: 'bbm-10' },
// ];

const data = [
  {
    // 非tag数据
    id: 'bbm0001',
    value: 'bbm1value',
    label: 'bbm1label',
    name: 'bbm1name',
    type: null,
    pid: null,
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
    tag: false,
  },
  {
    // 非tag数据
    id: 'bbm0002',
    value: 'bbm2value',
    label: 'bbm2label',
    name: 'bbm2name',
    type: null,
    pid: null,
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
    tag: false,
  },
  {
    id: '051DC769F4404585A4F097D198647597',
    value: 'LoopIndex',
    fxName: '',
    label: '变量集',
    name: '变量集',
    type: null,
    pid: null,
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
  },
  {
    id: '24FD9C812AB448A88170E62F0EDCCEF6123123',
    value: 'LoopIndex2',
    fxName: 'fx(myVarWebObj)',
    label: 'WebObj',
    name: 'LoopIndex',
    type: '2',
    optional: true, // 非叶子节点可选
    pid: 'LoopIndex',
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
  },
  {
    id: 'sadfdsaf4234123123',
    value: 'subOptionsValue',
    fxName: 'fx(subOptionsFxName)',
    label: '该网页的地址(字符串)',
    name: 'LoopIndex',
    type: '1',
    pid: 'LoopIndex2',
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
  },
  {
    id: 'asdfasdf1234123123',
    value: 'subOptions2',
    fxName: 'fx(subOptions)',
    label: '该网页的标题(字符串)',
    name: 'subOptions',
    type: '1',
    pid: 'LoopIndex2',
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
  },
  {
    id: '24FD9C812AB448A88170E62F0EDCCEF62',
    value: 'myVar2Value',
    fxName: 'fx(myVar2fxName)',
    label: 'myVar2',
    name: 'myVar2name',
    type: '2',
    pid: 'LoopIndex',
    icon: 'IconFn',
    children: [],
    _X_ROW_CHILD: [],
  },
];

const scriptInput = ref();
const showPopperSwitch = ref(true);
const showModeSwitch = ref(true);
const showPassword = ref(false);

const text = ref('');

function search() {
  scriptInput.value?.showPopper?.();
}

function onChange(value: any) {
  console.log(value);
}

let i = 1;
function change() {
  text.value += `'''fx(C5C20FD0C698406185E647197D8A8AED)'''`;
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
