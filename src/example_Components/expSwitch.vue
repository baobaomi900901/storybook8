<!--
* @description  参数1
* @fileName  expSwitch
* @author userName
* @date 2024-10-29 15:21:55
* @version V3.0.0
!-->
<template>
  <div class="epx-title">switch</div>
  <SBExamplePanel label="默认" open>
    <k-switch v-model="switchValue"></k-switch>
  </SBExamplePanel>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const switchValue = ref(false);
</script>
<style scoped></style>
