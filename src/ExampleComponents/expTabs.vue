<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KTabs, KTabPane</div>

    <div class="epx-title-sub">type:</div>
    <div class="flex items-center gap-2">
      <KTabs v-model="activeName">
        <KTabPane label="tab1" name="tab1" closable>
          <template #label>tab1123123123123123</template>
          Curren tab is tab1
        </KTabPane>
        <KTabPane label="tab2" :icon="Edit" name="tab2" closable>Curren tab is tab2</KTabPane>
        <KTabPane label="tab3" name="tab3">Curren tab is tab3</KTabPane>
      </KTabs>
    </div>

    <div class="epx-title-sub">antV</div>
    <KButton @click="fromTo(5)">跳转到 5 页</KButton>
    <KButton @click="fromTo(19)">跳转到 20 页</KButton>
    <div class="flex items-center gap-2">
      <div ref="boxCenter" class="boxCenter w-80">
        <KTabs v-model="activeName2" :id="id">
          <k-tab-pane v-for="index in 20" :label="'tab' + index" :name="'tab' + index">
            Curren tab is tab{{ index }}
          </k-tab-pane>
        </KTabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { KTabs, KTabPane, KButton } from '@components';
import { Edit, Star, Delete, Eleme } from '@element-plus/icons-vue';
import { genRandomStr } from '../../kswux/package/utils/index';

const id = `_${genRandomStr(8)}`;
const activeName = ref('tab1');
const activeName2 = ref('tab1');

let type = true;
//  监听 item 位置
const itemPosition = [];
let boxScrollX = 0; // box 的滚动位置
const boxCenter = ref(); // boxCenter
let boxWidth;
// let boxWidth = boxCenter.value.offsetWidth; // box 的宽度
let tabItems;
let elTabsNav;
let elTabsNavTTX, elTabsNavTTXNum;
nextTick(() => {
  boxWidth = boxCenter.value.offsetWidth;
  // console.log('boxWidth', boxWidth);

  // 监听 el-tabs__nav-scroll 位置
  tabItems = document.querySelectorAll(`#${id} .el-tabs__item`);
  elTabsNav = document.querySelector(`#${id} .el-tabs__nav`);
  elTabsNavTTX = elTabsNav.style.transform;
  // 提取 elTabsNavTTX 中的数字
  elTabsNavTTXNum = elTabsNavTTX.match(/\d+/g) * 1;
  // console.log('tabItems', tabItems.length);
  // console.log(elTabsNav, elTabsNavTTX, elTabsNavTTXNum);
  tabItems.forEach((item, index) => {
    const itemWidth = item.offsetWidth;
    itemPosition.push(itemWidth);
  });
  // console.log('itemPosition', itemPosition);
});

const fromTo = (index) => {
  const total = itemPosition.slice(0, index + 0).reduce((acc, cur) => acc + cur, 0);
  console.log('total', total);
  setTimeout(() => {
    let { res, scrollNum } = isItemInBox(tabItems[index], index, boxWidth, elTabsNavTTXNum);

    // console.log(tabItems[index], index, boxWidth, elTabsNavTTXNum);
    // if (!res) {
    //   console.log();
    //   // smoothScroll(box, box.scrollLeft, scrollNum);
    // }
  }, 1);
};

// 平滑滚动
function smoothScroll(target, start, end, duration = 250) {
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    target.style.transform = `translateX(${start + (end - start) * progress}px)`;
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
}

// 判断 item 是否在 box 中
const isItemInBox = (item, index, boxW, boxSX) => {
  const total = itemPosition.slice(0, index + 1).reduce((acc, cur) => acc + cur, 0);
  let itemW = itemPosition[index];
  let res;
  let scrollNum = 0;

  console.log(total, itemW, boxW, boxSX);
  if (total - boxSX >= itemW && total - boxSX <= boxW) {
    console.log('在中间');
    res = true;
  } else if (total - boxSX < itemW) {
    console.log('在左边');
    scrollNum = total - itemW;
    res = false;
  } else if (total - boxSX > boxW) {
    console.log('在右边');
    scrollNum = total - boxW;
    res = false;
  }
  return { res, scrollNum };
};
</script>
<style scoped></style>
