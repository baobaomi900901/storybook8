<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KSelect</div>
    <div class="epx-title-sub">size:</div>
    <div class="flex items-start gap-2 w-60">
      <KSelect v-model="value">
        <KOption
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></KOption>
      </KSelect>
      <KSelect v-model="value" size="sm">
        <KOption
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></KOption>
      </KSelect>
    </div>

    <div class="epx-title-sub">禁用:</div>
    <div class="flex items-start gap-2 w-60">
      <KSelect v-model="value" disabled>
        <KOption
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></KOption>
      </KSelect>
      <KSelect v-model="value" size="sm" disabled>
        <KOption
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></KOption>
      </KSelect>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KSelect, KOption } from '@components';

const value = ref();
const data = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
  },
];

const handleClick = () => {
  console.log('click');
};
</script>
<style scoped></style>
