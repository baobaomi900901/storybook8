<template>
    <KCheckbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      v-bind="$attrs"
    >
      Check all
    </KCheckbox>
    <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
      <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
        {{ city }}
      </KCheckbox>
    </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { KCheckbox, KCheckboxGroup } from "@components";

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
