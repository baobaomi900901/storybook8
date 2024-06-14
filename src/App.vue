<script setup lang="ts">
import KButton from "./package/components/button/button.vue"
import { IconAdd, IconArrowBottom } from "ksw-vue-icon";
</script>

<template>
  <div style="display: flex; gap: .75rem;">
    <KButton type="" :iconLeft="IconAdd" color="#ff5500">123</KButton>
    <KButton type="main" :iconLeft="IconAdd" color="">123</KButton>
    <KButton type="main" :iconLeft="IconAdd" color="#ff5500">123</KButton>
    <KButton type="secondary" :iconLeft="IconAdd" color="#ff5500">123</KButton>
    <KButton type="text" color="#ff5500">123</KButton>
    <KButton type="icon" color="#ff5500">
      <IconAdd />
    </KButton>
  </div>
</template>

<style lang="less" scoped>
@import "./package/style/general.css";

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
