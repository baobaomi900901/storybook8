<!--
* @description  参数1
* @fileName  module_left
* @author userName
* @date 2024-11-15 12:00:38
* @version V3.0.0
!-->
<template>
  <div ref="module_left" class="module_left bg-white px-3 relative flex flex-col">
    <div
      class="drop_button absolute h-6 w-6 top-4 right-3 flex justify-center items-center z-10"
      style="transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)"
      :class="{ 'rotate-180': drawerStatus }"
      @click="
        () => {
          drawerStatus = !drawerStatus;
        }
      "
    >
      <IconArrowLeft size="20"></IconArrowLeft>
    </div>
    <div
      class="module_left_title relative pt-4 pb-2 select-none"
      :class="{ 'is-colse': drawerStatus }"
    >
      <span class="text-lg font-bold select-none">{{ title }}</span>
    </div>
    <div class="content w-72 pt-2 overflow-hidden flex-1" :class="{ 'is-colse': drawerStatus }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ModuleLeftProps } from './type';

const drawerStatus = ref(false);
const props = withDefaults(defineProps<ModuleLeftProps>(), {});
</script>
<style lang="less" scoped>
.module_left {
  .module_left_title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: all 0.2s ease-in-out 0.1s;
    min-width: 1rem;
    width: 10rem;
    span {
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    &.is-colse {
      opacity: 0;
      width: 24px;
      transition: all 0.2s ease-in-out 0.1s;
      span {
        transition: all 0.2s ease-in-out;
        opacity: 0;
      }
    }
  }
  .content {
    transition: all 0.2s ease-in-out 0.1s;
    &.is-colse {
      width: 0;
      transition: all 0.2s ease-in-out 0.1s;
    }
  }
}
</style>
