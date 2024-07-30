<template>
  <div class="sb-title-sub" @click="handleClick">min = 0, max = 2</div>
  <KCheckboxGroup v-model="checkedCities" :min="0" :max="2">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkedCities = ref([]);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
</script>
