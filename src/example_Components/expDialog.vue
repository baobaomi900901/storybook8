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
    <!-- <SBExamplePanel label="默认" open>
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
    </SBExamplePanel> -->

    <SBExamplePanel label="默认" open>
      <k-button plain @click="dialogVisible2 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible2" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible2 = false">Cancel</k-button>
          <k-button main @click="dialogVisible2 = false">Confirm</k-button>
        </template>
      </k-dialog>
      <k-button plain @click="dialogVisible3 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible3" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible3 = false">Cancel</k-button>
          <k-button main @click="dialogVisible3 = false">Confirm</k-button>
        </template>
      </k-dialog>
      <k-button plain @click="dialogVisible4 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible4" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible4 = false">Cancel</k-button>
          <k-button main @click="dialogVisible4 = false">Confirm</k-button>
        </template>
      </k-dialog>
      <k-button plain @click="dialogVisible5 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible5" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible5 = false">Cancel</k-button>
          <k-button main @click="dialogVisible5 = false">Confirm</k-button>
        </template>
      </k-dialog>
      <k-button plain @click="dialogVisible6 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible6" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible6 = false">Cancel</k-button>
          <k-button main @click="dialogVisible6 = false">Confirm</k-button>
        </template>
      </k-dialog>
      <k-button plain @click="dialogVisible7 = true">Click to open the Dialog</k-button>
      <k-dialog v-model="dialogVisible7" title="脚本输入框" width="500">
        <div class="flex flex-col gap-2">
          <k-script-input
            v-model="text"
            ref="scriptInput"
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
          <k-button @click="dialogVisible7 = false">Cancel</k-button>
          <k-button main @click="dialogVisible7 = false">Confirm</k-button>
        </template>
      </k-dialog>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KMessageBox } from '@ksware/ksw-ux';

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);
const dialogVisible5 = ref(false);
const dialogVisible6 = ref(false);
const dialogVisible7 = ref(false);

const handleClose = (done: () => void) => {
  KMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
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
</script>
<style scoped></style>
