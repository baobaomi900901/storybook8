<script setup lang="ts">
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '../kswux/package/components/radio';

console.log(KRadio);

const radioValue = ref(0);
</script>

<template>
  <div>
    <KRadioGroup v-model="radioValue" size="sm">
      <KRadio value="0">直角</KRadio>
      <KRadio value="1">钝角</KRadio>
      <KRadio value="2">锐角</KRadio>
      <KRadio value="0" disabled>90°</KRadio>
    </KRadioGroup>
  </div>
</template>

<style lang="less" scoped>
// @import './package/style/general.css';

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
