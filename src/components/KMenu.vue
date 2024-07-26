<template>
  <div id="KMenu" class="k-menu h-10 flex justify-start items-center">
    <router-link
      v-for="item in menuItem"
      :key="item.path"
      :to="item.path"
      class="k-menu-item h-10 flex items-center pl-4 pr-8 border-r"
    >
      <component :is="item.icon" class="mr-1 p flex-shrink-0" size="20" />
      <span :title="item.name" class="">{{ item.name }}</span>
      <IconClose class="close-icon" size="16" v-if="item.close" />
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import useMainStore from '../store';

const props = defineProps({
  menuItem: undefined,
});
</script>
<style lang="less" scoped>
@import url('../../kswux/package/style/variable.css');
@import url('../../kswux/package/style/general.less');
* {
  box-sizing: border-box;
}
.k-menu {
}

.k-menu-item {
  max-width: 10rem;
  overflow: hidden;
  position: relative;
  span {
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .close-icon {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    color: var(--k-gray-200);
    transition: all 0.2s ease-in-out;
    padding: 0.125rem;
    border-radius: 0.125rem;

    opacity: 0;
  }
  .close-icon:hover {
    background: var(--k-blue-100);
    color: var(--k-blue-400);
  }
  &.router-link-active {
    color: var(--k-status-primary);
    .close-icon {
      color: var(--k-status-primary);
      opacity: 1;
    }
  }
  &.router-link-active:hover {
    color: var(--k-status-primary);
    .close-icon {
      color: var(--k-status-primary);
    }
    .close-icon:hover {
      color: var(--k-blue-500);
    }
  }
  &:hover {
    color: var(--k-blue-400);
    .close-icon {
      opacity: 1;
    }
  }
}
</style>
