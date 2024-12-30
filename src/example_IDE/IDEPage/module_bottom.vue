<!--
* @description  参数1
* @fileName  module_bottom
* @author userName
* @date 2024-11-15 12:01:11
* @version V3.0.0
!-->
<template>
  <div class="module_bottom bg-white relative flex flex-col-reverse rounded-tl-lg rounded-tr-lg">
    <div class="menu-container h-10 flex items-center gap-4 px-4 text-sm">
      <div
        v-for="item in props.items"
        @click="handleClick(item)"
        :key="item.name"
        class="menu-item w-fit h-full px-2 text-center cursor-pointer relative flex justify-center items-center border-t-2 border-transparent box-border"
        :class="[{ '!border-blue-500 font-bold text-blue-500': active === item.name }]"
      >
        <component :is="item.icon" size="0.75rem" />
        <span v-if="item.label" class="text-center inline-block">
          {{ item.label }}
        </span>
      </div>
    </div>
    <div
      ref="RefModuleBottom"
      class="content p-3 relative overflow-hidden flex flex-col rounded-tl-lg rounded-tr-lg"
      :class="{ 'is-colse': drawerStatus }"
    >
      <div class="content-heard flex justify-between">
        <div class="module_bottom_title relative select-none" :class="{ 'is-colse': drawerStatus }">
          <span class="text-lg font-bold select-none">{{ activeTitle }}</span>
        </div>
        <div class="action-bar flex gap-1">
          <slot :name="`${active}-action`"></slot>
          <div
            class="drop_button h-5 w-5 flex justify-center items-center z-10"
            style="transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)"
            @click="
              () => {
                drawerStatus = !drawerStatus;
                active = null;
              }
            "
          >
            <IconArrowBottom size="20"></IconArrowBottom>
          </div>
        </div>
      </div>
      <div class="content-body px-3 pt-2 flex-1">
        <slot :name="active"></slot>
      </div>
    </div>
    <div
      class="handle-item top"
      @mousedown.prevent="initDrag('top', $event, RefModuleBottom, 100, 800)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { ModuleBottomProps } from './type';
import { height, initDrag } from './initeDrag.ts';

const drawerStatus = ref(false);

const props = withDefaults(defineProps<ModuleBottomProps>(), {
  items: () => [],
});

const RefModuleBottom = ref();

onMounted(() => {
  RefModuleBottom.value.style.setProperty('--height', `${height.value}px`);
});

const emits = defineEmits(['change']);

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
</script>
<style lang="less">
.module_bottom {
  position: relative;
  .menu-container {
  }
  .content {
    --bgc: #fff;
    --transition: width 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transition: var(--transition);
    height: var(--height);
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: inset 0 0 0px 2px var(--bgc);
    &.is-colse {
      transition: all 0.2s ease-in-out 0.1s;
      height: 0;
      padding: 0;
    }
    .content-heard {
      .module_bottom_title {
        span {
        }
        &.is-colse {
          span {
          }
        }
      }
      .action-bar {
        > .ksw-icon {
          width: 1.25rem;
          height: 1.25rem;
          padding: 0.0125rem;
        }
      }
    }
    .content-body {
    }
  }
  .handle-item {
    position: absolute;
    &.top {
      top: -0.75rem;
      left: 0;
      width: 100%;
      height: 0.75rem;
      cursor: ns-resize;
      background: transparent;
    }
  }
}
</style>
