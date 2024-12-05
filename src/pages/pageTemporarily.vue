<template>
  <div class="container">
    <div class="left" ref="box">
      <div class="handle-item right" @mousedown.prevent="initDrag('right', $event)"></div>
      <div class="handle-item bottom" @mousedown.prevent="initDrag('bottom', $event)"></div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const box = ref();
const width = ref(400);
const height = ref(400);
let startX = 0;
let startY = 0;
let startWidth = 0;
let startHeight = 0;

function initDrag(side: string, event: MouseEvent) {
  startX = event.clientX;
  startY = event.clientY;
  startWidth = box.value ? box.value.offsetWidth : 0;
  startHeight = box.value ? box.value.offsetHeight : 0;
  const doDrag = (e: MouseEvent) => {
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    if (side === 'left') {
      width.value = startWidth + dx;
    }
    if (side === 'right') {
      width.value = startWidth + dx;
    }
    if (side === 'bottom') {
      height.value = startHeight + dy;
    }
  };
  const stopDrag = () => {
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
  };
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
}
</script>

<style scoped>
.right {
  flex: 1;
  background-color: skyblue;
  height: 400px;
}
.container {
  display: flex;
}
.left {
  position: relative;
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  background-color: #f60;
}
.handle-item {
  position: absolute;
}
.handle-item.bottom {
  left: 0;
  right: 0;
  height: 5px;
  cursor: ns-resize;
}
.handle-item.right {
  top: 0;
  bottom: 0;
  width: 5px;
  cursor: ew-resize;
}
.handle-item.right {
  right: 0;
}
.handle-item.bottom {
  bottom: 0;
}
</style>
