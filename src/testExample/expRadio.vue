<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">k-radio</div>
    <div class="epx-title-sub">单独使用:</div>
    <div class="flex items-star gap-4">
      <KRadio
        v-for="item in radioData"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        v-model="value"
      ></KRadio>
      <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
    </div>

    <div class="epx-title-sub">sm:</div>
    <div class="flex items-star gap-4">
      <KRadio
        v-for="item in radioData"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        v-model="value"
        size="sm"
      ></KRadio>
      <KRadio v-model="value" label="直角" value="直角" size="sm" disabled></KRadio>
    </div>

    <div class="epx-title-sub">k-radio-group:</div>
    <div class="flex items-star gap-4">
      <KRadioGroup v-model="value">
        <KRadio
          v-for="item in radioData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></KRadio>
        <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
      </KRadioGroup>
    </div>
    <div class="flex items-star gap-4">
      <KRadioGroup v-model="value">
        <KRadio
          v-for="item in radioData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          size="sm"
        ></KRadio>
        <KRadio v-model="value" label="直角" value="直角" size="sm" disabled></KRadio>
      </KRadioGroup>
    </div>

    <div class="epx-title-sub">k-radio-group, 按钮形式:</div>
    <div class="flex items-star gap-4">
      <KRadioGroup v-model="value">
        <KRadio
          v-for="item in radioData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          button
        ></KRadio>
        <KRadio v-model="value" label="直角" value="直角" button disabled></KRadio>
      </KRadioGroup>
    </div>
    <div class="flex items-star gap-4">
      <KRadioGroup v-model="value">
        <KRadio
          v-for="item in radioData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          size="sm"
          button
        ></KRadio>
        <KRadio v-model="value" label="直角" value="直角" size="sm" button disabled></KRadio>
      </KRadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KRadio, KRadioGroup } from '@components';

const value = ref();

const radioData = [
  {
    value: '直角',
    label: '直角'
  },
  {
    value: '锐角',
    label: '锐角'
  },
  {
    value: '钝角',
    label: '钝角'
  }
];
</script>
<style scoped>
</style>