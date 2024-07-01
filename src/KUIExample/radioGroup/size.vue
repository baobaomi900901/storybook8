<template>
  <KRadioGroup v-model="radioValue" size="sm">
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>90°</KRadio>
  </KRadioGroup>
  <br />
  <KRadioGroup v-model="radio" size="sm" button>
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '@/components/radio';

const radio = ref('1');
const radioValue = ref('1');
</script>
<style>
</style>