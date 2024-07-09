<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>

    <div class="epx-title-sub">type:</div>
    <div class="flex items-center gap-2">
    <KTreeSelect v-model="value" :data="data" :multiple="true" :filterable="true" :clearable="true" :placeholder="'请选择'"></KTreeSelect>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTreeSelect } from '@components';

const value = ref();
</script>
<style scoped>
</style>