<template>
  <div class="epx-container bg-gray-100">
    <div class="epx-title">折叠面板 | KCollapse</div>
    <SBExamplePanel label="useStepStyle" open>
      <KCollapse style="width: 100%" useStepStyle>
        <KCollapseItem title="步骤1" process>
          <template #title>
            process
            <component is="IconLoading" class="ml-1" />
            <span class="info">副标题</span>
          </template>
          内容1
        </KCollapseItem>
        <KCollapseItem title="wait" wait>
          <template #title>
            wait
            <span class="info">副标题</span>
          </template>
          内容 wait
        </KCollapseItem>
        <KCollapseItem title="finish" finish>
          <template #title>
            finish
            <component is="IconStatusSuccess" class="ml-1" />
            <span class="info">副标题</span>
          </template>
          内容 finish
        </KCollapseItem>
        <KCollapseItem title="error" error>
          <template #title>
            error
            <component is="IconStatusDanger" class="ml-1" />
            <span class="info">副标题</span>
          </template>
          内容 error
        </KCollapseItem>
        <KCollapseItem title="warning" warning>
          <template #title>
            warning
            <component is="IconStatusWarning" class="ml-1" />
            <span class="info">副标题</span>
          </template>
          内容 warning
        </KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="默认" open>
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
        <KCollapseItem title="自定义标题">
          <span>123</span>
        </KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="isOutline" open>
      <KCollapse style="width: 100%" isOutline>
        <KCollapseItem title="标题1">内容1</KCollapseItem>
        <KCollapseItem title="标题2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="block" open class="bg-white">
      <KCollapse style="width: 100%" block>
        <KCollapseItem title="标题1">
          <template #icon="{ isActive }">
            <span class="icon-ele">
              {{ isActive ? '收起' : '展开' }}
            </span>
          </template>
          内容1
        </KCollapseItem>
        <KCollapseItem title="标题2">
          <template #icon="{ isActive }">
            <span class="icon-ele">
              {{ isActive ? '收起' : '展开' }}
            </span>
          </template>
          内容2
        </KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="accordion|手风琴" open>
      <KCollapse style="width: 100%" accordion>
        <KCollapseItem title="标题1">内容1</KCollapseItem>
        <KCollapseItem title="标题2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="默认打开" open>
      <KCollapse style="width: 100%" v-model="activeNames">
        <KCollapseItem title="标题1" name="1">内容1</KCollapseItem>
        <KCollapseItem title="标题2" name="2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
    <SBExamplePanel label="useAntStyle" open>
      <KCollapse style="width: 100%" useAntStyle>
        <KCollapseItem title="标题1">
          <template #title>
            Consistency
            <component is="IconAdd" />
          </template>
          内容1
        </KCollapseItem>
        <KCollapseItem title="标题2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>

    <SBExamplePanel label="嵌套使用" open>
      <KCollapse style="width: 100%" useAntStyle>
        <KCollapseItem title="标题1">
          <KCollapse style="width: 100%" useAntStyle>
            <KCollapseItem title="标题1">
              <template #title>
                Consistency
                <component is="IconAdd" />
              </template>
              内容1
            </KCollapseItem>
            <KCollapseItem title="标题2">内容2</KCollapseItem>
          </KCollapse>
        </KCollapseItem>
        <KCollapseItem title="标题2">内容2</KCollapseItem>
      </KCollapse>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// import { KCollapse, KCollapseItem } from '@components';

const value = ref();
const activeNames = ref(['1']);
</script>
<style scoped></style>
