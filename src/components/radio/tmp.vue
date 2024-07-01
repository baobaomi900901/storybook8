<template>
  <div class="mb-2 flex items-center text-sm">
    <k-radio-group v-model="radio" class="ml-4">
      <KRadio value="1">Option 1</KRadio>
      <KRadio value="2">Option 2</KRadio>
    </k-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '@/components/radio';

const radio = ref('1');
</script>