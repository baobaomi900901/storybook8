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

    <SBExamplePanel label="自定义颜色" open>
      <KButton color="danger" main>按钮</KButton>
      <!-- <KButton color="#success" secondary>按钮</KButton>
      <KButton color="#success" text>按钮</KButton>
      <br />
      <KButton color="#success" size="sm" main>按钮</KButton>
      <KButton color="#success" size="sm" secondary>按钮</KButton>
      <KButton color="#success" size="sm" text>按钮</KButton> -->
    </SBExamplePanel>

    <SBExamplePanel label="按钮类型">
      <div class="flex gap-2">
        <KButton @click="handleClick">普通</KButton>
        <KButton @click="handleClick" main>主要</KButton>
        <KButton @click="handleClick" secondary>按钮</KButton>
        <KButton @click="handleClick" text>按钮</KButton>
        <KButton @click="handleClick" icon>
          <IconAdd />
        </KButton>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="禁止" open>
      <div class="flex flex-col gap-2">
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" iconLeft="IconAdd">普通1</KButton>
          <KButton size="lg" color="danger" main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" loading iconLeft="IconAdd">普通2</KButton>
          <KButton size="lg" color="danger" loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" loading secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" loading icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" disabled iconLeft="IconAdd">普通3</KButton>
          <KButton size="lg" color="danger" disabled main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" disabled secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" disabled icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" disabled loading iconLeft="IconAdd">普通4</KButton>
          <KButton size="lg" color="danger" disabled loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" disabled loading secondary iconLeft="IconAdd">
            按钮
          </KButton>
          <KButton size="lg" color="danger" disabled loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" disabled loading icon>
            <IconAdd />
          </KButton>
        </div>
        <hr />
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" iconLeft="IconAdd">普通2</KButton>
          <KButton size="lg" color="danger" main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" loading iconLeft="IconAdd">普通3</KButton>
          <KButton size="lg" color="danger" loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" loading secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" loading icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" disabled iconLeft="IconAdd">普通4</KButton>
          <KButton size="lg" color="danger" disabled main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" disabled secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" disabled icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" color="danger" disabled loading iconLeft="IconAdd">普通5</KButton>
          <KButton size="lg" color="danger" disabled loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" color="danger" disabled loading secondary iconLeft="IconAdd">
            按钮
          </KButton>
          <KButton size="lg" color="danger" disabled loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" color="danger" disabled loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" color="danger" disabled loading icon>
            <IconAdd />
          </KButton>
        </div>
        <hr />
        <div class="flex items-star gap-4">
          <KButton size="lg" type="danger" iconLeft="IconAdd">普通</KButton>
          <KButton size="lg" type="danger" main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" type="danger" secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" text iconLeft="IconAdd"></KButton>
          <KButton size="lg" type="danger" icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" type="danger" loading iconLeft="IconAdd">普通</KButton>
          <KButton size="lg" type="danger" loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" type="danger" loading secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" type="danger" loading icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" type="danger" disabled iconLeft="IconAdd">普通</KButton>
          <KButton size="lg" type="danger" disabled main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" type="danger" disabled secondary iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" disabled text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" disabled text iconLeft="IconAdd"></KButton>
          <KButton size="lg" type="danger" disabled icon>
            <IconAdd />
          </KButton>
        </div>
        <div class="flex items-star gap-4">
          <KButton size="lg" type="danger" disabled loading iconLeft="IconAdd">普通</KButton>
          <KButton size="lg" type="danger" disabled loading main iconLeft="IconAdd">主要</KButton>
          <KButton size="lg" type="danger" disabled loading secondary iconLeft="IconAdd">
            按钮
          </KButton>
          <KButton size="lg" type="danger" disabled loading text iconLeft="IconAdd">按钮</KButton>
          <KButton size="lg" type="danger" disabled loading text iconLeft="IconAdd"></KButton>
          <KButton size="lg" type="danger" disabled loading icon>
            <IconAdd />
          </KButton>
        </div>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="loading" open>
      <div class="flex gap-2">
        <KButton @click="handleClick" loading>普通</KButton>
        <KButton @click="handleClick" loading main>主要</KButton>
        <KButton @click="handleClick" loading secondary>次级按钮</KButton>
        <KButton @click="handleClick" loading text>文字按钮</KButton>
        <KButton @click="handleClick" loading icon>
          <IconAdd />
        </KButton>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="loading + disabled">
      <div class="flex gap-2">
        <KButton @click="handleClick" loading disabled>普通</KButton>
        <KButton @click="handleClick" loading disabled main>主要</KButton>
        <KButton @click="handleClick" loading disabled secondary>按钮</KButton>
        <KButton @click="handleClick" loading disabled text>按钮</KButton>
        <KButton @click="handleClick" loading icon>
          <IconAdd />
        </KButton>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="尺寸">
      <KButton size="sm" iconLeft="IconAdd" iconRight="IconArrowBottom">普通</KButton>
      <KButton size="sm" iconLeft="IconAdd" iconRight="IconArrowBottom" main>主要</KButton>
      <KButton size="sm" iconLeft="IconAdd" iconRight="IconArrowBottom" secondary>按钮</KButton>
      <KButton size="sm" iconLeft="IconAdd" iconRight="IconArrowBottom" text>按钮</KButton>
      <KButton size="sm" icon>
        <IconAdd />
      </KButton>
      <KButton size="lg">普通</KButton>
      <KButton size="lg" main>主要</KButton>
      <KButton size="lg" secondary>按钮</KButton>
      <KButton size="lg" text>按钮</KButton>
      <KButton size="lg" icon>
        <IconAdd />
      </KButton>
    </SBExamplePanel>

    <SBExamplePanel label="el-颜色">
      <KButton type="danger" main>主要</KButton>
      <KButton type="danger" main>成功</KButton>
      <KButton type="danger" main>警告</KButton>
      <KButton type="danger" main>危险</KButton>
      <KButton type="danger" main>信息</KButton>
      <br />
      <KButton type="danger" secondary>按钮</KButton>
      <KButton type="danger" secondary>按钮</KButton>
      <KButton type="danger" secondary>按钮</KButton>
      <KButton type="danger" secondary>按钮</KButton>
      <KButton type="danger" secondary>按钮</KButton>
      <br />
      <KButton type="danger" text>按钮</KButton>
      <KButton type="danger" text>按钮</KButton>
      <KButton type="danger" text>按钮</KButton>
      <KButton type="danger" text>按钮</KButton>
      <KButton type="danger" text>按钮</KButton>
      <br />
      <KButton type="danger" icon><IconAdd /></KButton>
      <KButton type="danger" icon><IconAdd /></KButton>
      <KButton type="danger" icon><IconAdd /></KButton>
      <KButton type="danger" icon><IconAdd /></KButton>
      <KButton type="danger" icon><IconAdd /></KButton>
    </SBExamplePanel>

    <SBExamplePanel label="icon-参数">
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

    <SBExamplePanel label="icon-slot">
      <KButton iconRight="IconArrowBottom" iconLeft="IconAdd">普通</KButton>
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

    <SBExamplePanel label="button-group" open>
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
import KButtonGroup from '../components/ButtonGroup.vue';

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
