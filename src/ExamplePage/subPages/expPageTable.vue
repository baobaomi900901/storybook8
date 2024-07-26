<!--
* @description  参数1
* @fileName  expPageTable
* @author userName
* @date 2024-07-23 15:16:18
* @version V3.0.0
!-->
<template>
  <div id="expPageTable" class="expPageTable">
    <div class="left bbm123">left</div>
    <div class="right">right</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>
<style lang="less">
@import url('../../../kswux/package/style/variable.css');
@import url('../../../kswux/package/style/general.less');
.expPageTable {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: var(--k-rounded-sm);
}

.left {
}
</style>
