<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">expDateTimePicker</div>
    <SBExamplePanel label="默认" open>
      <k-date-picker v-model="value1" type="datetime" placeholder="Select date and time" />
    </SBExamplePanel>

    <SBExamplePanel label="快捷选项" open>
      <k-date-picker v-model="value1" type="datetimerange" placeholder="Select date and time" />
      <k-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="Start date"
        end-placeholder="End date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="YYYY/MM/DD ddd"
        time-format="A hh:mm:ss"
      />
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
const value1 = ref('');
const value2 = ref('');
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      return date;
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date();
      date.setDate(date.getDate() - 7);
      return date;
    },
  },
];
</script>
<style scoped></style>
