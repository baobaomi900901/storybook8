<template>
  <k-button-group>
    <k-button @click="handleClick">按钮1</k-button>
    <k-button>按钮2</k-button>
    <k-button>按钮3</k-button>
  </k-button-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const handleClick = (_a, Message = '按钮被点击') => {
  console.log(Message);
};
</script>
<style scoped></style>
