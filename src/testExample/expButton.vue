<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">k-button</div>

    <div class="epx-title-sub">按钮类型:</div>
    <div class="flex items-star gap-4">
      <KButton>普通</KButton>
      <KButton main>主要</KButton>
      <KButton secondary>按钮</KButton>
      <KButton text>按钮</KButton>
      <KButton icon>
        <IconAdd />
      </KButton>
    </div>

    <div class="epx-title-sub">按钮尺寸:</div>
    <div class="flex items-star gap-4">
      <KButton size="sm">普通</KButton>
      <KButton size="sm" main>主要</KButton>
      <KButton size="sm" secondary>按钮</KButton>
      <KButton size="sm" text>按钮</KButton>
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
    </div>

    <div class="epx-title-sub">el-颜色:</div>
    <div class="flex items-star gap-4">
      <KButton type="primary" main>主要</KButton>
      <KButton type="success" main>成功</KButton>
      <KButton type="warning" main>警告</KButton>
      <KButton type="danger" main>危险</KButton>
      <KButton type="info" main>信息</KButton>
      <br />
      <KButton type="primary" secondary>按钮</KButton>
      <KButton type="success" secondary>按钮</KButton>
      <KButton type="warning" secondary>按钮</KButton>
      <KButton type="danger" secondary>按钮</KButton>
      <KButton type="info" secondary>按钮</KButton>
      <br />
      <KButton type="primary" text>按钮</KButton>
      <KButton type="success" text>按钮</KButton>
      <KButton type="warning" text>按钮</KButton>
      <KButton type="danger" text>按钮</KButton>
      <KButton type="info" text>按钮</KButton>
    </div>

    <div class="epx-title-sub">自定义颜色:</div>
    <div class="flex items-star gap-4">
      <KButton color="#ff5500" main>按钮</KButton>
      <KButton color="#ff5500" secondary>按钮</KButton>
      <KButton color="#ff5500" text>按钮</KButton>
      <br />
      <KButton color="#ff5500" size="sm" main>按钮</KButton>
      <KButton color="#ff5500" size="sm" secondary>按钮</KButton>
      <KButton color="#ff5500" size="sm" text>按钮</KButton>
    </div>

    <div class="epx-title-sub">icon-参数:</div>
    <div class="flex items-star gap-4">
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom">普通</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" main>主要</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" secondary>按钮</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" text>按钮</KButton>
      <KButton icon>
        <IconAdd />
      </KButton>

      <br />
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" size="sm">普通</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" size="sm" main>主要</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" size="sm" secondary>按钮</KButton>
      <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" size="sm" text>按钮</KButton>
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
    </div>

    <div class="epx-title-sub">icon-slot:</div>
    <div class="flex items-star gap-4">
      <KButton iconRight="IconArrowBottom">
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight>
          <IconArrowBottom />
        </template>
        普通</KButton
      >
      <KButton main>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        主要</KButton
      >
      <KButton secondary>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        按钮</KButton
      >
      <KButton text>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        按钮</KButton
      >
      <KButton icon>
        <IconAdd />
      </KButton>

      <br />
      <KButton size="sm">
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        普通</KButton
      >
      <KButton size="sm" main>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        主要</KButton
      >
      <KButton size="sm" secondary>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        按钮</KButton
      >
      <KButton size="sm" text>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight> <IconArrowBottom /> </template>
        按钮</KButton
      >
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KButton } from '@components';
</script>
<style scoped>
</style>