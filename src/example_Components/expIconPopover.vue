<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">iconPopover</div>
    <SBExamplePanel label="默认" open>
      <k-icon-popover @updateIcon="handleUpdate">
        <div class="my-box">
          <component v-if="searchContent" :is="searchContent" />
        </div>
      </k-icon-popover>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';

let searchContent = ref('');
const handleUpdate = (copyContent: string) => {
  searchContent.value = copyContent;
  console.log(copyContent);
};
</script>
<style lang="less">
.my-box {
  width: 100px;
  height: 100px;
  background-color: black;
  .ksw-icon svg {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
}
</style>
