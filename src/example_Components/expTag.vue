<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container grid grid-cols-4 auto-rows-max gap-4">
    <div class="epx-title col-span-4">组件</div>

    <SBExamplePanel label="默认" open class="col-span-4">
      <div class="flex items-start gap-2">
        <KTag color="#93c5fd">待执行</KTag>
        <KTag color="#d3d4d5">禁用</KTag>
        <KTag color="primary">正在执行</KTag>
        <KTag color="success">成功</KTag>
        <KTag color="warning">超时</KTag>
        <KTag color="danger">失败</KTag>
        <KTag color="#f87171">部分失败</KTag>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="point" open class="col-span-4">
      <div class="flex items-start gap-2">
        <KTag point>default</KTag>
        <KTag type="primary" point>primary</KTag>
        <KTag type="success" point>success</KTag>
        <KTag type="warning" point>warning</KTag>
        <KTag type="info" point>info</KTag>
        <KTag type="danger" point>error</KTag>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="border" open class="col-span-4">
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-2">
          <KTag size="lg" closable>default</KTag>
          <KTag size="lg" type="success" closable>default</KTag>
          <KTag size="lg" type="warning" closable>default</KTag>
          <KTag size="lg" type="info" closable>default</KTag>
          <KTag size="lg" type="danger" closable>default</KTag>
        </div>
        <div class="flex items-start gap-2">
          <KTag size="lg" border closable>default</KTag>
          <KTag size="lg" type="success" border closable>default</KTag>
          <KTag size="lg" type="warning" border closable>default</KTag>
          <KTag size="lg" type="info" border closable>default</KTag>
          <KTag size="lg" type="danger" border closable>default</KTag>
        </div>
        <div class="flex items-start gap-2">
          <KTag size="lg" point closable>default</KTag>
          <KTag size="lg" type="success" point closable>default</KTag>
          <KTag size="lg" type="warning" point closable>default</KTag>
          <!-- <KTag size="lg" type="info" point closable>default</KTag> -->
          <!-- <KTag size="lg" type="danger" point closable>default</KTag> -->
        </div>
      </div>
    </SBExamplePanel>

    <!-- <SBExamplePanel label="closable" open>
      <div class="flex items-start gap-2">
        <KTag type="primary" closable>Primary</KTag>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="size" open>
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-2">
          <KTag type="primary" size="sm">Primary</KTag>
          <KTag type="primary">Primary</KTag>
          <KTag type="primary" size="lg">Primary</KTag>
        </div>
        <div class="flex items-start gap-2">
          <KTag type="primary" size="sm" closable>Primary</KTag>
          <KTag type="primary" closable>Primary</KTag>
          <KTag type="primary" size="lg" closable>Primary</KTag>
        </div>
        <div class="flex items-start gap-2">
          <KTag type="primary" point size="sm">Primary</KTag>
          <KTag type="primary" point>Primary</KTag>
          <KTag type="primary" point size="lg">Primary</KTag>
        </div>
        <div class="flex items-start gap-2">
          <KTag type="primary" point size="sm">Primary</KTag>
          <KTag type="primary" point>Primary</KTag>
          <KTag type="primary" point size="lg">Primary</KTag>
        </div>
      </div>
    </SBExamplePanel> -->
  </div>
</template>

<script setup>
import { KTag } from '@ksware/ksw-ux';
import { ref, reactive } from 'vue';

const value = ref();
</script>
<style scoped></style>
