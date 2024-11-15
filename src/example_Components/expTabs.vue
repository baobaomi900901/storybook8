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

    <SBExamplePanel label="默认" open>
      <!-- tab-position="left" -->
      <div style="width: 500px; overflow: hidden">
        <KTabs v-model="activeName" class="w-full" tab-position="top">
          <KTabPane
            v-for="i in 10"
            :key="i"
            :label="`tab_${i * 10000000000000000000}`"
            :name="`tab${i}`"
            :closable="i % 2 === 0"
          >
            Curren tab is tab{{ i }}
          </KTabPane>
        </KTabs>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <div class="p-4" style="width: 1000px">
        <KTabs v-model="activeName" type="card" class="w-full" tab-position="top">
          <KTabPane
            v-for="i in 10"
            :key="i"
            :label="`tab_${i * 10000000000000000000}`"
            :name="`tab${i}`"
            :closable="i % 2 === 0"
          >
            Curren tab is tab{{ i }}
          </KTabPane>
        </KTabs>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <!-- tab-position="left" -->
      <div style="width: 1000px; height: 300px; overflow: hidden">
        <KTabs v-model="activeName" class="w-full" tab-position="left">
          <KTabPane
            v-for="i in 10"
            :key="i"
            :label="`tab_${i * 10000000000000000000}`"
            :name="`tab${i}`"
            :closable="i % 2 === 0"
          >
            Curren tab is tab{{ i }}
          </KTabPane>
        </KTabs>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <div class="p-4" style="width: 1000px; height: 600px">
        <KTabs v-model="activeName" type="card" class="w-full" tab-position="left">
          <KTabPane
            v-for="i in 10"
            :key="i"
            :label="`tab_${i * 10000000000000000000}`"
            :name="`tab${i}`"
            :closable="i % 2 === 0"
          >
            Curren tab is tab{{ i }}
          </KTabPane>
        </KTabs>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="默认" open>
      <div class="w-full">
        <k-tabs
          v-model="editableTabsValue"
          type="card"
          editable
          class="demo-tabs"
          @edit="handleTabsEdit"
        >
          <k-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </k-tab-pane>
        </k-tabs>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { KTabs, KTabPane, KButton } from '@components';
import { Edit, Star, Delete, Eleme } from '@element-plus/icons-vue';
import { genRandomStr } from '../../kswux/package/utils/index';

const id = `_${genRandomStr(8)}`;
const activeName = ref('tab1');

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
  if (elTabsNav) {
    elTabsNavTTX = elTabsNav?.style?.transform;
    // 提取 elTabsNavTTX 中的数字
    elTabsNavTTXNum = elTabsNavTTX.match(/\d+/g) * 1;
    return;
  }

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

// docs 示例代码
let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
]);

const handleTabsEdit = (targetName: TabPaneName | undefined, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
};
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
