<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>
    <SBExamplePanel label="默" open>
      <KCollapse style="width: 320px">
        <KCollapseItem title="自定义标题">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
            <div class="item">
              <span>label:</span>
              <span>value</span>
            </div>
            <div class="item">
              <span>label:</span>
              <span>value</span>
            </div>
          </div>
        </KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="默" open>
      <KCollapse style="width: 100%">
        <KCollapseItem title="标题1">内容1</KCollapseItem>
        <KCollapseItem title="标题2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// import { KCollapse, KCollapseItem } from '@components';

const value = ref();
</script>
<style scoped></style>
