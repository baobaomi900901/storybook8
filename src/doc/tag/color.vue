<template>
  <div class="flex items-star gap-2">
    <div class="w-80 flex gap-4">
      <KTag type="success">标签1</KTag>
      <KTag point type="success">标签2</KTag>
      <KTag color="#ff5500">标签1</KTag>
      <KTag point color="#ff5500">标签2</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>
