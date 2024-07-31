<template>
  <div class="sb-title-sub">图标(prefix-icon, suffix-icon)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>
    </div>
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete"></KInput>
    </div>
  </div>
  <div class="sb-title-sub" @click="handleClick">默认: 插槽(prefix, suffix)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入url">
        <template #prepend>http://</template>
        <template #append>.com</template>
      </KInput>
    </div>
  </div>
  <div class="sb-title-sub" @click="handleClick">组合按钮与选择器: 插槽(prefix, suffix)</div>
  <div class="flex items-star gap-2">
    <div class="w-full">
      <KInput v-model="value" placeholder="选择运行机器">
        <template #prepend>
          <KSelect v-model="selectValue" placeholder="请选择类型" style="width: 168px">
            <KOption value="windows">windows</KOption>
            <KOption value="linux">linux</KOption>
          </KSelect>
        </template>
        <template #append>
          <KButton main icon-left="IconIdePlay">运行</KButton>
        </template>
      </KInput>
    </div>
  </div>
</template>

<script setup>
import { KSelect } from '@/components';
import { ref, reactive } from 'vue';
const text = ref('');
const value = ref('');
const selectValue = ref('windows');
</script>
<style scoped></style>
