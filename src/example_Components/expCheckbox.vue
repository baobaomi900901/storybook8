<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">多选</div>
    <SBExamplePanel label="按钮类型" open>
      <div class="flex flex-col gap-4">
        <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange" size="sm">
          <KCheckbox
            v-for="item in radioData"
            :key="item"
            :label="item.value"
            :value="item.value"
            color="success"
          >
            {{ item.label }}
          </KCheckbox>
        </KCheckboxGroup>
        <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
          <KCheckbox
            v-for="item in radioData"
            :key="item"
            :label="item.value"
            :value="item.value"
            color="success"
          >
            {{ item.label }}
          </KCheckbox>
        </KCheckboxGroup>
        <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange" size="lg">
          <KCheckbox
            v-for="item in radioData"
            :key="item"
            :label="item.value"
            :value="item.value"
            color="success"
          >
            {{ item.label }}
          </KCheckbox>
        </KCheckboxGroup>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="按钮类型" open>
      <div>
        <div class="flex">
          <KCheckbox v-model="value" label="烧饼"></KCheckbox>
          <KCheckbox v-model="value2" label="包子"></KCheckbox>
          <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
        </div>
        <hr />
        <div class="flex items-center gap-4">
          <KCheckbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            size="sm"
            label="全部"
            color="success"
          ></KCheckbox>
          <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
            <KCheckbox
              v-for="item in radioData"
              :key="item"
              :label="item.value"
              :value="item.value"
              size="sm"
              color="success"
            >
              {{ item.label }}
            </KCheckbox>
          </KCheckboxGroup>
        </div>
        <div class="flex items-center">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="radioValue"
            size="sm"
          ></KRadio>
        </div>
        <hr />
        <div class="flex items-center gap-4">
          <KCheckbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            label="全部"
            color="red"
          ></KCheckbox>
          <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
            <KCheckbox
              v-for="item in radioData"
              :key="item"
              :label="item.value"
              :value="item.value"
              color="red"
            >
              {{ item.label }}
            </KCheckbox>
          </KCheckboxGroup>
        </div>
        <div class="flex items-center">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="radioValue"
          ></KRadio>
        </div>
        <hr />
        <div class="flex items-center gap-4">
          <KCheckbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            size="lg"
            label="全部"
            color="#ff5500"
          ></KCheckbox>
          <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
            <KCheckbox
              v-for="item in radioData"
              :key="item"
              :label="item.value"
              :value="item.value"
              size="lg"
              color="#ff5500"
            >
              {{ item.label }}
            </KCheckbox>
          </KCheckboxGroup>
        </div>
        <div class="flex items-center">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="radioValue"
            size="lg"
            color="#ff5500"
          ></KRadio>
        </div>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="group" open>
      <div class="flex flex-col items-start gap-2">
        <KCheckbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
          label="全部"
        ></KCheckbox>
        <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
          <KCheckbox v-for="item in radioData" :key="item" :label="item.value" :value="item.value">
            {{ item.label }}
          </KCheckbox>
        </KCheckboxGroup>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="min/max:" open>
      <div class="flex items-center gap-4">
        <KCheckboxGroup v-model="checkedCities" :min="0" :max="2">
          <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
            {{ city }}
          </KCheckbox>
        </KCheckboxGroup>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="disabled:" open>
      <div class="flex items-center gap-4">
        <KCheckboxGroup v-model="checkedCities" :min="0" :max="2">
          <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city" disabled>
            {{ city }}
          </KCheckbox>
        </KCheckboxGroup>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="disabled:" open>
      <div class="flex items-center gap-4">
        <k-checkbox v-model="checked1" label="Option 1" size="large" disabled />
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="按钮类型" open>
      <k-checkbox v-model="checked1" label="Option 1" border color="red" />
      <k-button>按钮类型</k-button>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// import { KCheckbox, KCheckboxGroup, KRadio, KRadioGroup } from '@components';

const radioValue = ref();

const radioData = [
  {
    value: '直角',
    label: '直角',
  },
  {
    value: '锐角',
    label: '锐角',
  },
  {
    value: '钝角',
    label: '钝角',
  },
  {
    value: '圆角',
    label: '圆角',
  },
];

const value = ref(false);
const value2 = ref(false);
const value3 = ref(true);
const value4 = ref('1');
const value5 = ref('1');

const valueMoby = ref('1');

const checked1 = ref(true);

// 全选
const checkAll = ref(false);
const isIndeterminate = ref(false);
const checkedCities = ref(['Shanghai']);
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
