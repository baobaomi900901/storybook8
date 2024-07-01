<template>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0">直角</KRadio>
    <KRadio v-model="radioValue" value="1">钝角</KRadio>
    <KRadio v-model="radioValue" value="2">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
  </div>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0" size="sm">直角</KRadio>
    <KRadio v-model="radioValue" value="1" size="sm">钝角</KRadio>
    <KRadio v-model="radioValue" value="2" size="sm">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" size="sm" disabled>90°</KRadio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio } from '@/components/radio';

const radioValue = ref('1');
</script>