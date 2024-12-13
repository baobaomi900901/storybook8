<template>
  <DragCol width="100%" height="100%">
    <template #left>
      <!-- your content -->
      <DragCol width="100%" height="100%">
        <template #left>
          <div class="bg-blue-500 w-full h-full"></div>
        </template>
        <template #right>
          <DragRow width="100%" height="100%">
            <template #top>
              <!-- your content -->
            </template>
            <template #bottom>
              <!-- your content -->
            </template>
          </DragRow>
        </template>
      </DragCol>
    </template>

    <template #right>
      <div class="bg-blue-500 w-full h-full"></div>
    </template>
  </DragCol>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DragCol, DragRow, ResizeCol, ResizeRow, Resize } from 'vue-resizer';
</script>

<style scoped></style>
