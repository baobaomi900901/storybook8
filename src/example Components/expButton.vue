<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KButton</div>

    <SBExamplePanel label="按钮类型" defaultOpen>
      <KButton @click="handleClick">普通</KButton>
      <KButton @click="handleClick" main>主要</KButton>
      <KButton @click="handleClick" secondary>按钮</KButton>
      <KButton @click="handleClick" text>按钮</KButton>
      <KButton icon>
        <IconAdd />
      </KButton>
    </SBExamplePanel>

    <SBExamplePanel label="尺寸" defaultOpen>
      <KButton size="sm">普通</KButton>
      <KButton size="sm" main>主要</KButton>
      <KButton size="sm" secondary>按钮</KButton>
      <KButton size="sm" text>按钮</KButton>
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
    </SBExamplePanel>

    <SBExamplePanel label="禁止" defaultOpen>
      <div class="flex flex-col gap-2">
        <div class="flex items-star gap-4">
          <KButton disabled>普通</KButton>
          <KButton disabled main>主要</KButton>
          <KButton disabled secondary>按钮</KButton>
          <KButton disabled text>按钮</KButton>
          <KButton disabled icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="sm" disabled>普通</KButton>
          <KButton size="sm" disabled main>主要</KButton>
          <KButton size="sm" disabled secondary>按钮</KButton>
          <KButton size="sm" disabled text>按钮</KButton>
          <KButton size="sm" disabled icon>
            <IconAdd />
          </KButton>
        </div>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="el-颜色" defaultOpen>
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
    </SBExamplePanel>

    <SBExamplePanel label="自定义颜色" defaultOpen>
      <KButton color="#ff5500" main>按钮</KButton>
      <KButton color="#ff5500" secondary>按钮</KButton>
      <KButton color="#ff5500" text>按钮</KButton>
      <br />
      <KButton color="#ff5500" size="sm" main>按钮</KButton>
      <KButton color="#ff5500" size="sm" secondary>按钮</KButton>
      <KButton color="#ff5500" size="sm" text>按钮</KButton>
    </SBExamplePanel>

    <SBExamplePanel label="icon-参数" defaultOpen>
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
    </SBExamplePanel>

    <SBExamplePanel label="icon-slot" defaultOpen>
      <KButton iconRight="IconArrowBottom">
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight>
          <IconArrowBottom />
        </template>
        普通
      </KButton>
      <KButton main>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        主要
      </KButton>
      <KButton secondary>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        按钮
      </KButton>
      <KButton text>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        按钮
      </KButton>
      <KButton icon>
        <IconAdd />
      </KButton>

      <br />
      <KButton size="sm">
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        普通
      </KButton>
      <KButton size="sm" main>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        主要
      </KButton>
      <KButton size="sm" secondary>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        按钮
      </KButton>
      <KButton size="sm" text>
        <template #iconLeft>
          <IconAdd />
        </template>
        <template #iconRight><IconArrowBottom /></template>
        按钮
      </KButton>
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
    </SBExamplePanel>

    <SBExamplePanel label="button-group" defaultOpen>
      <div class="flex flex-col gap-2">
        <KButtonGroup>
          <KButton @click="handleClick('运行')">普通</KButton>
          <KButton>普通</KButton>
          <KButton>普通</KButton>
        </KButtonGroup>
        <KButtonGroup>
          <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">主要1</KButton>
          <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">主要2</KButton>
          <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">主要3</KButton>
        </KButtonGroup>
        <KButtonGroup>
          <KButton secondary>次要1</KButton>
          <KButton secondary>次要2</KButton>
          <KButton secondary>次要3</KButton>
        </KButtonGroup>
        <KButtonGroup>
          <KButton icon-left="IconIdePlay" @click="handleClick('运行')" disabled>禁用</KButton>
          <KButton icon-left="IconIdePlay" @click="handleClick('运行')" disabled>禁用</KButton>
          <KButton icon-left="IconIdePlay" @click="handleClick('运行')" disabled>禁用</KButton>
        </KButtonGroup>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KButton } from '@components';

const handleClick = () => {
  console.log('click');
};
</script>
<style scoped>
.vvn {
  position: relative;
}
.vvn::after {
  content: attr(title);
  position: absolute;
  top: 100%;
  left: 20px;
  background-color: red;
  padding: 0.125rem 0.25rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.vvn:hover::after {
  opacity: 1;
}
</style>
