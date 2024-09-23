<!--
* @description  参数1
* @fileName  SBExamplePanel
* @author userName
* @date 2024-08-20 16:01:08
* @version V3.0.0
!-->
<template>
  <div class="SBExamplePanel w-full pt-2">
    <div class="w-full rounded-2xl bg-white">
      <Disclosure v-slot="{ open }" :defaultOpen="open">
        <DisclosureButton
          class="DisclosureButton flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>{{ label }}</span>
          <IconArrowBottom
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
            size="20"
          />
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-200 ease-in-out"
          enter-from-class="transform opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition duration-200 ease-in-out "
          leave-from-class="transform opacity-1000"
          leave-to-class="transform opacity-0"
        >
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            <div class="flex items-star gap-2">
              <slot></slot>
            </div>
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
  label: {
    type: String,
    default: 'SBExamplePanel',
  },
  open: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped></style>
