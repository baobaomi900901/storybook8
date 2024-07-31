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
    <div class="epx-title-sub">常规:</div>
    <div class="flex items-center gap-4">
      <KCheckbox v-model="value" label="烧饼"></KCheckbox>
      <KCheckbox v-model="value2" label="包子"></KCheckbox>
      <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
    </div>

    <div class="epx-title-sub">组:</div>
    <div class="flex flex-col items-start gap-2">
      <KCheckbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
        label="全部"
      ></KCheckbox>
      <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
        <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
          {{ city }}
        </KCheckbox>
      </KCheckboxGroup>
    </div>

    <div class="epx-title-sub">min/max:</div>
    <div class="flex items-center gap-4">
      <KCheckboxGroup v-model="checkedCities" :min="1" :max="2">
        <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
          {{ city }}
        </KCheckbox>
      </KCheckboxGroup>
    </div>

    <div class="epx-title-sub">单选:</div>
    <div class="flex items-center gap-4">
      <KCheckboxGroup v-model="checkedCities" :min="1" :max="2">
        <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
          {{ city }}
        </KCheckbox>
      </KCheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KCheckbox, KCheckboxGroup, KRadio, KRadioGroup } from '@components';

const value = ref(false);
const value2 = ref(false);
const value3 = ref(true);
const value4 = ref('1');
const value5 = ref('1');

const valueMoby = ref('1');

// 全选
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref([]);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const checkedCities2 = ref([]);
const cities2 = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};

const handleChange = (value) => {
  console.log(value);
  checkedCities2.value = value;
};
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
<style scoped></style>
