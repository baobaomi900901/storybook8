<!--
* @description  参数1
* @fileName  KButton
* @author userName
* @date 2024-05-21 15:26:57
* @version V3.0.0
!-->
<template>
  <div id="bbm" class="bbm text-red-500 h-4 w-4">
    <slot>{{ label }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
const props = withDefaults(
  defineProps<{
    label: string;
  }>(),
  { label: "bbm1" }
);
</script>
<style scoped>
</style>