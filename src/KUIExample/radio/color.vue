<template>
  <!-- <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0" color="#ff5500">直角</KRadio>
    <KRadio v-model="radioValue" value="1" color="#ff5500">钝角</KRadio>
    <KRadio v-model="radioValue" value="2" color="#ff5500">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" color="#ff5500" disabled>90°</KRadio>
  </div>
  <br /> -->
  <KRadioGroup v-model="radio" button>
    <KRadio value="0" color="#ff5500">直角</KRadio>
    <KRadio value="1" color="#ff5500">钝角</KRadio>
    <KRadio value="2" color="#ff5500">锐角</KRadio>
    <KRadio value="0" color="#ff5500" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioValue = ref('1');
const radio = ref('1');
</script>