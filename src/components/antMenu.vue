<!--
* @description  参数1
* @fileName  antMenu
* @author userName
* @date 2024-09-19 15:55:18
* @version V3.0.0
!-->
<template>
  <div id="antMenu" class="antMenu px-2" style="background-color: #051627">
    <div class="logo-box h-12 flex justify-start items-center p-4" v-if="$slots['app-logo']">
      <slot name="app-logo"></slot>
    </div>
    <router-link
      v-for="item in menuData"
      :key="item.path"
      :to="item.path"
      class="menu-item border-right w-60 px-4 py-2 flex items-center gap-2 text-lg rounded-md text-gray-500 hover:bg-blue-950"
      active-class="bg-blue-500 text-white"
    >
      <component :is="item.icon" size="20" />
      <span class="rounded-md">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, useSlots } from 'vue';
import useMainStore from '../store';
const store = useMainStore();

const props = defineProps({
  menuData: undefined,
});

onMounted(() => {
  // console.log('@', props.menuData);
});
</script>
<style scoped></style>
