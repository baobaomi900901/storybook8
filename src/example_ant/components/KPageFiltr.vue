<!--
* @description  参数1
* @fileName  KPageFiltr
* @author userName
* @date 2024-09-20 09:38:43
* @version V3.0.0
!-->
<template>
  <div
    id="KPageFiltr"
    class="KPageFiltr bg-white rounded-md p-6 mb-4 shadow-sm"
    style="min-width: 0"
  >
    <div class="items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style scoped></style>
