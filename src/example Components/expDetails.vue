<!--
* @description  参数1
* @fileName  expDetails
* @author userName
* @date 2024-10-25 09:51:33
* @version V3.0.0
!-->
<template>
  <div class="epx-container w-full grid grid-cols-1 auto-rows-max gap-4">
    <div class="epx-title col-span-2">组件</div>
    <SBExamplePanel label="默认" open>
      <div
        ref="box"
        class="box w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
      >
        <KDetailsItem
          v-for="(item, index) in abstract"
          :key="index"
          :label="item.label"
          :value="item.value"
          :column="item.column"
          :render="item.render"
          line
        ></KDetailsItem>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
import { ref, onMounted, onUnmounted, provide, watch, computed } from 'vue';

const abstract = [
  // {
  //   label: '姓名',
  //   value: '张三',
  // },
  // {
  //   label: '性别',
  //   value: '男',
  // },
  // {
  //   label: '职业',
  //   render: () => {
  //     return <KTag>设计师</KTag>;
  //   },
  // },
  // {
  //   label: '年龄',
  //   value: '25',
  // },
  // {
  //   label: '职业(2)',
  //   render: () => {
  //     return <KTag>开发</KTag>;
  //   },
  // },
  {
    label: '详情',
    column: 3,
    value:
      '这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容',
  },
  // {
  //   label: '年龄',
  //   value: '25',
  // },
];

const box = ref<HTMLDivElement>();

const maxColumn = ref<number | undefined>();

// 监测窗口发生变化后
window.addEventListener('resize', computeMaxColumn);

onMounted(() => {
  computeMaxColumn();
});

onUnmounted(() => {
  window.removeEventListener('resize', computeMaxColumn);
});

function computeMaxColumn() {
  if (!box.value) return;
  let count = 1;
  const gridTemplateColumns = getComputedStyle(box.value).gridTemplateColumns.split(' ');
  console.log(gridTemplateColumns);
  for (let i = 1; i < gridTemplateColumns.length; i++) {
    if (gridTemplateColumns[i] != gridTemplateColumns[i - 1]) {
      maxColumn.value = count;
      break;
    }
    count++;
  }
  maxColumn.value = count;
  // console.log('@', maxColumn.value);
}

provide('__maxColumn__', maxColumn);
</script>
<style scoped></style>
