<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">dropdown</div>
    <SBExamplePanel label="默认" open>
      <!-- style="
                border-left: 1px solid var(--k-theme-primary);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
              " -->
      <k-button-group>
        <k-button main>
          <IconAdd color="#fff"></IconAdd>
          创建
        </k-button>
        <K-dropdown
          ref="myDropdown"
          trigger="click"
          title="Click Here"
          @command="(command) => console.log(command)"
          @click="() => console.log(111)"
        >
          <template #title>
            <k-button main>
              <IconArrowBottom color="#fff" />
            </k-button>
          </template>

          <k-dropdown-item command="a" @click="console.log('click Action 1')">
            创建应用
          </k-dropdown-item>
          <k-dropdown-item command="b" @click="console.log('click Action 2')">
            创建分组
          </k-dropdown-item>
          <k-dropdown-item command="c" @click="console.log('click a')">Action 3</k-dropdown-item>
          <k-dropdown-item command="d" disabled>Action 4</k-dropdown-item>
          <k-dropdown-item command="e" @click="console.log('click Action 5')" divided>
            Action 5
          </k-dropdown-item>
        </K-dropdown>
      </k-button-group>
    </SBExamplePanel>
    <SBExamplePanel label="默认" open>
      <K-dropdown
        ref="myDropdown"
        title="Click Here"
        @command="(command) => console.log(command)"
        @click="() => console.log(111)"
      >
        <template #title>
          <k-button main>
            <IconAdd color="#fff"></IconAdd>
            创建
            <IconArrowBottom color="#fff" />
          </k-button>
        </template>

        <k-dropdown-item command="a" @click="console.log('click Action 1')">
          <IconAdd color="var(--k-theme-primary)" class="mr-1"></IconAdd>
          创建应用
        </k-dropdown-item>
        <k-dropdown-item command="b" @click="console.log('click Action 2')">
          <IconAdd color="var(--k-theme-primary)" class="mr-1"></IconAdd>
          创建分组
        </k-dropdown-item>
      </K-dropdown>
    </SBExamplePanel>
    <SBExamplePanel label="split-button | 样式待优化" open>
      <!-- style="
                border-left: 1px solid var(--k-theme-primary);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
              " -->

      <K-dropdown
        ref="myDropdown"
        trigger="click"
        title="Click Here"
        split-button
        @command="(command) => console.log(command)"
        @click="() => console.log(111)"
      >
        <template #title>
          <IconAdd color="var(--k-theme-primary)"></IconAdd>
          捕获新元素
        </template>

        <k-dropdown-item command="a" @click="console.log('click Action 1')">
          Action 1
        </k-dropdown-item>
        <k-dropdown-item command="b" @click="console.log('click Action 2')">
          Action 2
        </k-dropdown-item>
        <k-dropdown-item command="c" @click="console.log('click a')">Action 3</k-dropdown-item>
        <k-dropdown-item command="d" disabled>Action 4</k-dropdown-item>
        <k-dropdown-item command="e" @click="console.log('click Action 5')" divided>
          Action 5
        </k-dropdown-item>
      </K-dropdown>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const value = ref();
</script>
<style scoped></style>
