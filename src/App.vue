<script setup lang="ts">
import { ref } from 'vue';
import { KInput, KInputGroup } from '../kswux/package/components/input';
import { KButton } from '../kswux/package/components/button';
import { KSelect, KOption } from '../kswux/package/components/select';
import { Calendar, Search } from '@element-plus/icons-vue';
import { IconAdd, IconDelete } from 'ksw-vue-icon';

const bbm = ref('');
</script>

<template>
  <div class="w-full h-full flex justify-center items-center px-96 flex flex-col gap-4" style="height: 100vh">
    <!-- <KSelect placeholder="请选择" v-model="bbm">
      <KOption value="1"> 1</KOption>
      <KOption value="2"> 2</KOption>
    </KSelect> -->

    <!-- <KInput v-model="bbm" placeholder="请输入" :icon-left="IconAdd" :icon-right="IconDelete"> </KInput> -->

    <!-- <KInputGroup>
      <KInput v-model="bbm" placeholder="请输入" :icon-left="IconAdd" :icon-right="IconDelete"> </KInput>
    </KInputGroup> -->

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
