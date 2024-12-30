<template>
  <div id="home" class="home ml-12 mt-2">👆🏻选择组件 or 模板👆🏻</div>
  <router-view />
  <div>
    <vxe-table
      border
      ref="tableRef2"
      :row-config="{ keyField: 'id', drag: true }"
      :column-config="{ resizable: true }"
      :data="tableData"
    >
      <vxe-column title="Name" field="name" width="400"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const tableData = [{ id: 1, name: '            Node1' }];
</script>
<style lang="less" scoped>
.home {
  font-size: 1rem;
  animation: floatAnimation 2s ease-in-out infinite;
}
@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.75rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
