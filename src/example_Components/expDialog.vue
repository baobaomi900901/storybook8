<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>
    <SBExamplePanel label="默认" open>
      <k-button plain @click="dialogVisible = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <k-button @click="dialogVisible = false">Cancel</k-button>
            <k-button main @click="dialogVisible = false">Confirm</k-button>
          </div>
        </template>
      </k-dialog>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <k-button plain @click="dialogVisible2 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible2" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInputBBM"
            :options="data"
            use-tree
            class="vvn w-full"
          >
            <template #prepend></template>
            <template #append></template>
            <!-- <template #append><k-button main @click="clear">Clear</k-button></template> -->
          </k-script-input>
          <k-script-input
            v-model="text2"
            ref="scriptInput"
            :options="data2"
            use-tree
            class="vvn w-full"
          >
            <template #prepend></template>
            <template #append></template>
            <!-- <template #append><k-button main @click="clear">Clear</k-button></template> -->
          </k-script-input>
          <k-script-input
            v-model="text3"
            ref="scriptInput"
            :options="data3"
            use-tree
            class="vvn w-full"
          >
            <template #prepend></template>
            <template #append></template>
            <!-- <template #append><k-button main @click="clear">Clear</k-button></template> -->
          </k-script-input>
          <k-input ref="bbm"></k-input>
          <k-script-input
            v-model="text4"
            ref="scriptInput"
            :options="data4"
            use-tree
            class="vvn w-full"
          >
            <template #prepend></template>
            <template #append></template>
            <!-- <template #append><k-button main @click="clear">Clear</k-button></template> -->
          </k-script-input>
          <k-script-input
            v-model="text5"
            ref="scriptInput"
            :options="data5"
            use-tree
            class="vvn w-full"
          >
            <template #prepend></template>
            <template #append></template>
            <!-- <template #append><k-button main @click="clear">Clear</k-button></template> -->
          </k-script-input>
        </div>
        <template #footer>
          <k-button @click="scriptInputBBM.blur()">blur</k-button>
          <k-button @click="dialogVisible2 = false">Cancel</k-button>
          <k-button main @click="dialogVisible2 = false">Confirm</k-button>
        </template>
      </k-dialog>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, watch } from 'vue';
// import { KMessageBox, KMessage } from '@ksware/ksw-ux';
// import { KMessageBox, KMessage } from '../../kswux/packages';
import { KMessageBox, KMessage } from '../../kswux/kingsware-ui/index';
// import { ElMessageBox } from 'element-plus';

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);

const handleClose = (done: () => void) => {
  KMessageBox.confirm('Are you sure to close this dialog?');
  //     .then(() => {
  //       done();
  //     })
  //     .catch(() => {
  //       // catch error
  // });
  // KMessage.info('关闭弹窗');
  // done();
};

const data = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1', optional: false },
  { label: 'option1-2', value: 'value1-2', pid: 'value1', optional: true },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2' },
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
const data2 = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1', optional: false },
  { label: 'option1-2', value: 'value1-2', pid: 'value1', optional: true },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2' },
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
const data3 = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1', optional: false },
  { label: 'option1-2', value: 'value1-2', pid: 'value1', optional: true },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2' },
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
const data4 = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1', optional: false },
  { label: 'option1-2', value: 'value1-2', pid: 'value1', optional: true },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2' },
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
const data5 = [
  { label: 'option1', value: 'value1', pid: null },
  { label: 'option1-1', value: 'value1-1', pid: 'value1', optional: false },
  { label: 'option1-2', value: 'value1-2', pid: 'value1', optional: true },
  { label: 'option1-2-1', value: 'value1-2-1', pid: 'value1-2' },
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

const text = ref('');
const text2 = ref('');
const text3 = ref('');
const text4 = ref('');
const text5 = ref('');

const scriptInputBBM = ref();

watch(
  () => dialogVisible2.value,
  () => {
    if (dialogVisible2.value) {
      nextTick(() => {
        scriptInputBBM.value.focus();
      });
    }
  },
);
</script>
<style scoped></style>
