<template>
  <div class="inputGroupdoc">
    <KInputGroup>
      <template #prepend>
        <KSelect placeholder="请选择" v-model="selectValue" class="w-40">
          <KOption value="全部">全部</KOption>
          <KOption value="组件">组件</KOption>
        </KSelect>
      </template>
      <KInput v-model="inputValue" placeholder="请输入" class=""></KInput>
      <template #append>
        <KButton main>搜索</KButton>
      </template>
    </KInputGroup>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const selectValue = ref('');
const inputValue = ref('');
</script>
<style scoped>
@import url('../../output.css');
</style>