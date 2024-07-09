<script setup lang="ts">
import { ref } from 'vue';
import { KInput, KInputGroup } from '../kswux/package/components/input';
import { KButton } from '../kswux/package/components/button';
import { KSelect, KOption } from '../kswux/package/components/select';
import { KRadioGroup, KRadio } from '../kswux/package/components/radio';
import { Calendar, Search } from '@element-plus/icons-vue';
import { IconAdd, IconDelete, IconFlowNested, IconPlugInFirefoxColor } from 'ksw-vue-icon';
import { KTreeSelect } from '../kswux/package/components/tree_select';

const bbm = ref();
const value = ref();
const data = [
  {
    value: '1',
    label: 'Level one 1',

    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
            icon: 'IconPlugInFirefoxColor'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
];
</script>

<template>
  <KRadioGroup v-model="bbm" direction="vertical">
    <KRadio value="0" size="sm">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>

  <KRadioGroup v-model="bbm" size="sm" direction="vertical">
    <KRadio value="0" size="sm">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>

  <KRadioGroup v-model="bbm">
    <KRadio value="0" button size="sm">直角</KRadio>
    <KRadio value="1" button size="sm">钝角</KRadio>
    <KRadio value="2" button size="sm">锐角</KRadio>
    <KRadio value="0" button size="sm" disabled>直角</KRadio>
  </KRadioGroup>

  <KRadioGroup v-model="bbm" button size="sm" direction="vertical">
    <KRadio value="0" size="sm">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>

  <KRadioGroup v-model="bbm" button direction="vertical">
    <KRadio value="0" size="sm">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>

  <div class="w-full h-full flex justify-center items-center px-96 flex flex-col gap-4" style="height: 100vh">
    <KTreeSelect v-model="value" :data="data" check-strictly :render-after-expand="false" show-checkbox style="width: 240px"> </KTreeSelect>

    <!-- <KSelect placeholder="请选择" v-model="bbm">
      <KOption value="1"> 1</KOption>
      <KOption value="2"> 2</KOption>
    </KSelect> -->

    <!-- <KInput v-model="bbm" placeholder="请输入" :icon-left="IconAdd" :icon-right="IconDelete"> </KInput> -->

    <!-- <KInputGroup>
      <KInput v-model="bbm" placeholder="请输入" :icon-left="IconAdd" :icon-right="IconDelete"> </KInput>
    </KInputGroup> -->

    <KButton @click="console.log('click')" disabled main>按钮</KButton>

    <KInputGroup>
      <template #prepend>
        <KSelect placeholder="请选择" v-model="bbm" class="w-40">
          <KOption value="1"> 1</KOption>
          <KOption value="2"> 2</KOption>
        </KSelect>
      </template>
      <KInput v-model="bbm" placeholder="请输入"></KInput>
      <template #append>
        <KButton main>搜索</KButton>
      </template>
    </KInputGroup>

    <!-- <KInputGroup>
      <template #prepend>
        <KSelect placeholder="请选择" v-model="bbm">
          <KOption value="1"> 1</KOption>
          <KOption value="2"> 2</KOption>
        </KSelect>
      </template>
      <KInput v-model="bbm" placeholder="请输入"></KInput>
      <template #append>
        <KSelect placeholder="请选择" v-model="bbm">
          <KOption value="1"> 1</KOption>
          <KOption value="2"> 2</KOption>
        </KSelect>
      </template>
    </KInputGroup> -->

    <!-- <KInputGroup>
      <template #prepend>
        <KButton main iconLeft="IconAdd">搜索</KButton>
      </template>
      <KInput v-model="bbm" placeholder="请输入" :suffix-icon="IconAdd"></KInput>
      <template #append> .com </template>
    </KInputGroup> -->

    <!-- <KInputGroup>
      <template #prepend>
        <KButton>搜索</KButton>
      </template>
      <KInput v-model="bbm" placeholder="请输入"></KInput>
      <template #append>
        <KButton>搜索</KButton>
      </template>
    </KInputGroup> -->
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
