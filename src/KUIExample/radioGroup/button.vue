<template>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0">直角</KRadio>
    <KRadio v-model="radioValue" value="1">钝角</KRadio>
    <KRadio v-model="radioValue" value="2">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
  </div>
  <br />
  <KRadioGroup v-model="radio" button>
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '@/components/radio';

const radioValue = ref('1');
const radio = ref('1');
</script>