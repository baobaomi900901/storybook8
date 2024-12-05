<!--
* @description  参数1
* @fileName  module_right
* @author userName
* @date 2024-11-15 12:01:11
* @version V3.0.0
!-->
<template>
  <div ref="module_right" class="module_right bg-white relative flex flex-row-reverse">
    <div class="menu-container w-14 flex flex-col items-center pt-6 gap-4 border-l border-gray-200">
      <div
        v-for="(item, index) in props.items"
        @click="handleClick(item)"
        :class="{ 'bg-blue-100': active === item.name }"
        class="menu-item w-8 h-8 rounded flex justify-center items-center text-center text-gray-500 cursor-pointer relative"
      >
        <component :is="item.icon" size="1.25rem" />
      </div>
    </div>
    <div
      ref="RefModuleRight"
      class="content relative overflow-hidden flex flex-col w-80"
      :class="{ 'is-colse': drawerStatus }"
    >
      <div
        class="drop_button absolute h-6 w-6 top-4 left-2 flex justify-center items-center z-10"
        style="transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)"
        @click="
          () => {
            drawerStatus = !drawerStatus;
            active = null;
          }
        "
      >
        <IconArrowRight size="20"></IconArrowRight>
      </div>
      <div
        class="module_right_title relative pt-4 pb-2 select-none"
        :class="{ 'is-colse': drawerStatus }"
      >
        <span class="text-lg font-bold select-none pl-8">{{ activeTitle }}</span>
      </div>
      <div class="px-3 pt-2 flex-1">
        <slot :name="active"></slot>
      </div>
    </div>
    <div
      class="handle-item left"
      @mousedown.prevent="initDrag('left', $event, RefModuleRight)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { ModuleRightProps } from './type';
import { width, initDrag } from './initeDrag.ts'

const props = withDefaults(defineProps<ModuleRightProps>(), {});

const drawerStatus = ref(false);

const RefModuleRight = ref();
onMounted(() => {
  RefModuleRight.value.style.setProperty('--width', `${width.value}px`);
});

const active = ref(props.active ?? props.items[0].name);

const activeTitle = computed(() => {
  return props.items.find((item) => item.name === active.value)?.label;
});

function handleClick(item: any) {
  if (active.value !== item.name) {
    active.value = item.name;
    drawerStatus.value = false;
  }
}

const emits = defineEmits(['change']);
</script>
<style lang="less" scoped>
.module_right {
  position: relative;
  .content {
    --bgc: #fff;
    --transition: width 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transition: var(--transition);
    width: var(--width);
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: inset 0 0 0px 2px var(--bgc);
    &.is-colse {
      width: 0;
      transition: all 0.2s ease-in-out 0.1s;
    }
    .module_right_title {
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
  }
  .handle-item {
    position: absolute;
    &.left {
      top: 0;
      left: -0.75rem;
      bottom: 0;
      width: 0.75rem;
      cursor: ew-resize;
      background: transparent;
    }
  }
}
</style>
