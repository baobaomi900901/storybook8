<template>
  <KCheckboxGroup v-model="checkedCities" :min="1" :max="2">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
</script>
