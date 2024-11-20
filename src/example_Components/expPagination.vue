<!--
* @description  参数1
* @fileName  expPagination
* @author userName
* @date 2024-11-19 15:01:15
* @version V3.0.0
!-->

<template>
  <div class="epx-container">
    <div class="epx-title">分页</div>
    <SBExamplePanel label="默认" open>
      <KTreeTable
        class="w-full"
        :showHeaderTools="false"
        :widgets="[]"
        :transfer="true"
        :column="[]"
        :data="[]"
        :checkbox-config="{ checkField: 'isChecked' }"
        :pagination-config="{ layout: 'total, ->, prev, pager, next,sizes, jumper' }"
      ></KTreeTable>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>
<style scoped></style>
