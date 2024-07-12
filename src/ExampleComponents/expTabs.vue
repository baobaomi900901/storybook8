<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KTabs, KTabPane</div>

    <div class="epx-title-sub">type:</div>
    <div class="flex items-center gap-2">
      <KTabs v-model="activeName">
        <KTabPane label="tab1" name="tab1" closable>
          <template #label>tab1123123123123123</template>
          Curren tab is tab1
        </KTabPane>
        <KTabPane label="tab2" :icon="Edit" name="tab2" closable>Curren tab is tab2</KTabPane>
        <KTabPane label="tab3" name="tab3">Curren tab is tab3</KTabPane>
      </KTabs>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTabs, KTabPane } from '@components';
import { Edit, Star, Delete, Eleme } from '@element-plus/icons-vue';

const activeName = ref('tab1');
</script>
<style scoped></style>
