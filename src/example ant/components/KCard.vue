<!--
* @description  参数1
* @fileName  KCard
* @author userName
* @date 2024-09-19 21:53:25
* @version V3.0.0
!-->
<template>
  <div class="k-card bg-white rounded-md shadow-sm" :style="{ '--grid-column': col }">
    <div
      class="k-card-header flex justify-between items-center h-12 px-6 py-2 text-lg border-b border-gray-200"
    >
      <div class="k-card-header-title">{{ title }}</div>

      <div class="k-card-header-btns" v-if="$slots['extra-header-btns']">
        <slot name="extra-header-btns"></slot>
      </div>
    </div>

    <div class="k-card-body px-6 py-2" v-if="$slots['extra-body']">
      <slot name="extra-body"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '卡片标题',
  },
  col: {
    type: Number,
    default: 2,
  },
});
</script>
<style lang="less" scoped>
.k-card {
  width: 100%;
  height: auto;
  min-height: 20vh;
  grid-column: span var(--grid-column);

  .k-card-header {
  }
}
</style>
