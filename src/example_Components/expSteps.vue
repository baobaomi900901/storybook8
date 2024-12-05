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
      <div class="overflow-hidden">
        <k-steps style="width: 800px" :active="active" finish-status="success" useAntStyle>
          <k-step title="Step 1" />
          <k-step title="Step 2" />
          <k-step title="Step 3" />
        </k-steps>
        <k-button style="margin-top: 12px" @click="next">Next step</k-button>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="按钮类型">
      <div class="overflow-hidden w-full border">
        <k-steps style="width: 100%" :active="active" finish-status="success" useAntStyle>
          <k-step title="Step 1" />
          <k-step title="Step 2" />
          <k-step title="Step 3333333333333333332end" />
        </k-steps>
        <k-button style="margin-top: 12px" @click="next">Next step</k-button>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="按钮类型" open>
      <KSteps :active="active2" align-center capsule>
        <KStep v-for="item in ['基本信息', '工具配置']" :title="item" :key="item" />
      </KSteps>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);

const active2 = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};
</script>
<style scoped>
.bbm {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  display: -webkit-inline-flex;
  /* display: -ms-inline-flexbox; */
  /* display: inline-flex; */
}
</style>
