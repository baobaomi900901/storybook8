<!--
* @description  参数1
* @fileName  expPageTable
* @author userName
* @date 2024-07-23 15:16:18
* @version V3.0.0
!-->
<template>
  <div id="expPageTable" class="expPageTable">
    <KPageHead icon="IconAomMenuFWQXXColor" title="标题"></KPageHead>

    <KPageHead icon="IconAomMenuFWQXXColor" title="标题" info="描述信息">
      <template #extra>
        <KButton main>主要按钮</KButton>
        <KButton secondary>次级按钮</KButton>
      </template>
    </KPageHead>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KPageHead } from '../../../kswux/package/templates';
import { KButton } from '@components';
</script>
<style lang="less">
@import url('../../../kswux/package/style/variable.css');
@import url('../../../kswux/package/style/general.less');
.expPageTable {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: var(--k-rounded-sm);

  // display: flex;
  // justify-content: center;
  // align-items: start;
}

.left {
}
</style>
