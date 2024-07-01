<template>
  <KRadioGroup v-model="radio" button>
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('1');
</script>