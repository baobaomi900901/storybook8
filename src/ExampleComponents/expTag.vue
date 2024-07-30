<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>

    <div class="epx-title-sub">type:</div>
    <div class="flex items-start gap-2">
      <KTag>default</KTag>
      <KTag type="primary">primary</KTag>
      <KTag type="success">success</KTag>
      <KTag type="warning">warning</KTag>
      <KTag type="info">info</KTag>
      <KTag type="danger">error</KTag>
      <br />
    </div>
    <div class="flex items-start gap-2">
      <KTag point>default</KTag>
      <KTag type="primary" point>primary</KTag>
      <KTag type="success" point>success</KTag>
      <KTag type="warning" point>warning</KTag>
      <KTag type="info" point>info</KTag>
      <KTag type="danger" point>error</KTag>
      <br />
    </div>
    <div class="flex items-start gap-2">
      <KTag>default</KTag>
      <KTag type="primary" closable>Primary</KTag>
      <KTag type="success" closable point>Success</KTag>
      <br />
    </div>
    <div class="flex items-start gap-2">
      <KTooltip placement="top">
        <template #reference>
          <span
            style="display: inline-flex; justify-content: center; align-items: center; gap: 0.25rem"
          >
            <span
              style="
                display: inline-flex;
                width: 1.25rem;
                height: 1.25rem;
                justify-content: center;
                align-items: center;
                background-color: #c9ebff;
                border-radius: 0.25rem;
              "
            >
              <IconScrip color="#2882FF" size="16" />
            </span>
            <span>500</span>
          </span>
        </template>
        脚本:500
      </KTooltip>
    </div>
  </div>

  <!-- <KTag color="#ff55cc" point>222</KTag>
  <KTag color="#ff55cc" textColor="#383838" point>333</KTag>
  <KTooltip placement="top">
    <template #reference>
      <KTag color="#ff55cc" textColor="#383838" text="444" point></KTag>
    </template>
    {{ bbm }}
  </KTooltip>
  <KTooltip placement="top-start">BBM900901</KTooltip> -->
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTag, KTooltip } from '@components';

const value = ref();
</script>
<style scoped></style>
