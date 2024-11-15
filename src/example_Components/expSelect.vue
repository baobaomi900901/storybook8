<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container grid grid-cols-4 gap-4">
    <SBExamplePanel label="size" open>
      <div class="flex flex-col items-start gap-2 w-full">
        <KSelect v-model="value" size="sm">
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
        <KSelect v-model="value">
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
        <KSelect v-model="value" size="lg">
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="disabled" open>
      <div class="flex flex-col items-start gap-2 w-full">
        <KSelect v-model="value" size="sm" disabled>
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
        <KSelect v-model="value" size="base" disabled>
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
        <KSelect v-model="value" size="lg" disabled>
          <KOption
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></KOption>
        </KSelect>
      </div>
    </SBExamplePanel>
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
