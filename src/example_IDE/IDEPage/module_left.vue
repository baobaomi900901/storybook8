<!--
* @description  参数1
* @fileName  module_left
* @author userName
* @date 2024-11-15 12:00:38
* @version V3.0.0
!-->
<template>
  <div ref="RefModuleLeft" class="module_left bg-white px-3 relative flex flex-col w-72">
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
    <div
      ref="RefContent"
      class="content w-full pt-2 overflow-hidden flex-1"
      :class="{ 'is-colse': drawerStatus }"
    >
      <slot></slot>
    </div>
    <div
      class="handle-item right"
      @mousedown.prevent="(e) => initDrag('right', e, RefModuleLeft)"
    ></div>
    <!-- @mousedown.prevent="() => initDrag('right', $event, RefModuleLeft)" -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ModuleLeftProps } from './type';
import { width, initDrag, bbm } from './initeDrag.ts';

const props = withDefaults(defineProps<ModuleLeftProps>(), {});

console.log(initDrag);

const RefModuleLeft = ref();

const drawerStatus = ref(false);

onMounted(() => {
  RefModuleLeft.value.style.setProperty('--width', `${width.value}px`);
});
</script>
<style lang="less" scoped>
.module_left {
  --bgc: #fff;
  --scale: 1;
  --reScale: 1;
  position: relative;
  width: var(--width);
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: inset 0 0 0px 2px var(--bgc);
  transform: scaleX(var(--scale, 1));
  transform-origin: left center;
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
    transform: scaleX(var(--reScale, 1));
    transform-origin: left center;
    &.is-colse {
      width: 0;
      transition: all 0.2s ease-in-out 0.1s;
    }
  }
  .handle-item {
    position: absolute;
    &.right {
      top: 0;
      right: -0.75rem;
      bottom: 0;
      width: 0.75rem;
      cursor: ew-resize;
      background: transparent;
    }
  }
}
</style>
