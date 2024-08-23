<template>
  <div class="flex flex-col items-star gap-4">
    <div class="w-80 flex gap-4">
      <KTag>标签1</KTag>
      <KTag point>标签2</KTag>
    </div>
    <div class="w-80 flex gap-4">
      <KTag size="sm">标签1</KTag>
      <KTag size="sm" point>标签2</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>
