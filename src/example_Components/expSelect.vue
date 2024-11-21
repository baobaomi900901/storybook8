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
    <SBExamplePanel label="disabled" open>
      <div class="flex flex-col items-start gap-2 w-full">
        <k-select
          v-model="value2"
          multiple
          clearable
          collapse-tags
          placeholder="Select"
          popper-class="custom-header"
          :max-collapse-tags="10"
          style="width: 240px"
          size="lg"
        >
          <template #header>
            <k-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
              All
            </k-checkbox>
          </template>
          <k-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </k-select>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
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

import type { CheckboxValueType } from 'element-plus';

const checkAll = ref(false);
const indeterminate = ref(false);
const value2 = ref<CheckboxValueType[]>([]);
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]);

watch(value2, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === cities.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false;
  if (val) {
    value2.value = cities.value.map((_) => _.value);
  } else {
    value2.value = [];
  }
};
</script>
<style scoped></style>
