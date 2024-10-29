<!--
* @description  参数1
* @fileName  expSteps
* @author userName
* @date 2024-10-28 08:23:17
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">步骤条</div>
    <SBExamplePanel label="按钮类型" open>
      <div class="">
        <k-steps style="width: 800px" :active="active" finish-status="success" useAntStyle>
          <k-step title="Step 1" />
          <k-step title="Step 2" />
          <k-step title="Step 3" />
        </k-steps>
        <k-button style="margin-top: 12px" @click="next">Next step</k-button>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};
</script>
<style scoped></style>
