<!--
* @description  参数1
* @fileName  KPageTitle
* @author userName
* @date 2024-09-20 09:34:48
* @version V3.0.0
!-->
<template>
  <div id="KPageTitle" class="KPageTitle page-head mb-4" style="min-width: 0">
    <span class="page-head--title text-xl">
      <slot>{{ 页面标题 }}</slot>
    </span>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
