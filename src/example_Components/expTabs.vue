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

    <SBExamplePanel label="top卡片" open>
      <div class="w-full">
        <k-tabs
          v-model="editableTabsValue"
          type="folder"
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

    <SBExamplePanel label="卡片" open>
      <div class="p-4" style="width: 100%">
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

    <SBExamplePanel label="左边" open>
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

    <SBExamplePanel label="左边卡片" open>
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
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';
import { Edit, Star, Delete, Eleme } from '@element-plus/icons-vue';

const activeName = ref('tab1');

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
