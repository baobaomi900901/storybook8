<!--
* @description  参数1
* @fileName  IDEPage
* @author userName
* @date 2024-11-15 11:19:03
* @version V3.0.0
!-->
<template>
  <div ref="IDEPage" class="IDEPage h-full flex flex-col">
    <moduleTop></moduleTop>
    <div class="IDEPage-content flex-1 flex bg-slate-100">
      <moduleLeft title="组件库">
        <div ref="TreeDemo" class="w-32 bg-blue-50">
          <div class="bg-red-500 w-10 h-10 rounded-full"></div>
          <el-tree-v2 style="max-width: 100%" :data="data3" :props="props" :width="300" />
        </div>
      </moduleLeft>
      <div class="flex flex-col flex-1 px-3">
        <moduleMain>
          <div class="bg-green-500 w-full h-full">main</div>
        </moduleMain>
        <moduleBottom :items="bottomItems">
          <template #a-action>
            <IconAdd size="1.25rem" />
            <IconAdd size="1.25rem" />
            <IconAdd size="1.25rem" />
          </template>
          <template #a>
            <div class="h-full bg-red-50">日志表格</div>
          </template>

          <template #b-action>
            <div class="h-full bg-red-50">按钮组2</div>
          </template>
          <template #b>
            <div class="h-full bg-red-50">表格2</div>
          </template>
        </moduleBottom>
      </div>
      <moduleRight title="属性" :items="rightItems">
        <template #a>
          <div class="h-full bg-red-50">aaaa</div>
        </template>
        <template #b>
          <div class="h-full bg-blue-50">bbbb</div>
        </template>
      </moduleRight>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import moduleTop from './module_top.vue';
import moduleLeft from './module_left.vue';
import moduleRight from './module_right.vue';
import moduleMain from './module_main.vue';
import moduleBottom from './module_bottom.vue';

const rightItems = [
  {
    label: '文件',
    name: 'a',
    icon: 'IconAdd',
  },
  {
    label: '属性',
    name: 'b',
    icon: 'IconAdd',
  },
  {
    label: '查询',
    name: 'c',
    icon: 'IconAdd',
  },
  {
    label: '资产',
    name: 'd',
    icon: 'IconAdd',
  },
];

const bottomItems = [
  {
    label: '日志',
    name: 'a',
    icon: 'IconAdd',
  },
  {
    label: '元素库',
    name: 'b',
    icon: 'IconAdd',
  },
  {
    label: '变量',
    name: 'c',
  },
  {
    label: '参数',
    name: 'd',
  },
];

const data = [
  {
    label: '组件',
    children: [
      {
        label: '按钮',
        children: [
          {
            label: '按钮1',
          },
          {
            label: '按钮2',
          },
          {
            label: '按钮3',
          },
        ],
      },
      {
        label: '表格',
        children: [
          {
            label: '表格1',
          },
          {
            label: '表格2',
          },
          {
            label: '表格3',
          },
        ],
      },
    ],
  },
];

const TreeDemo = ref();

// 在TreeDemo 中 添加 1000个 div 元素

let tableData1 = ref([
  {
    id: '10000',
    parentId: null,
    label: 'Test1',
    type: 'mp3',
    sizes: 1024,
    date: '2020-08-01',
    icon: 'IconFolderOpen',
    iconStyle: { color: '#f60' },
  },
  {
    id: 10050,
    hasChild: true,
    parentId: null,
    label: 'Test2',
    type: 'mp4',
    sizes: null,
    date: '2021-04-01',
    __folder: true,
    iconStyle: { color: '#f60' },
  },
  {
    id: 24300,
    parentId: 10050,
    hasChild: false,
    label: 'Test3',
    type: 'avi',
    sizes: 1024,
    date: '2020-03-01',
    __folder: true,
    iconStyle: { color: '#f60' },
  },
  { id: 20045, parentId: 24300, label: 'Test4', type: 'html', sizes: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, label: 'Test5', type: 'avi', sizes: null, date: '2021-04-01' },
  { id: 24330, parentId: 10053, label: 'Test6', type: 'txt', sizes: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, label: 'Test7', type: 'pdf', sizes: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, label: 'Test8', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, label: 'Test9', type: 'xlsx', sizes: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, label: 'Test10', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, label: 'Test11', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, label: 'Test12', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, label: 'Test13', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, label: 'Test14', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, label: 'Test15', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, label: 'Test16', type: 'avi', sizes: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, label: 'Test17', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, label: 'Test18', type: 'js', sizes: 1024, date: '2021-06-01' },
]);
const list = [10050, 23666, 24555];
for (let i = 0; i < 2000; i++) {
  const index = i % 3;
  tableData1.value.push({
    id: genRandomStr(8),
    parentId: list[index],
    label: genRandomStr(5),
    type: 'js',
    sizes: 1024,
    date: '2020-08-01',
  });
}

function genRandomStr(bit: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < bit; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`;
};

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node',
): Tree[] => {
  let id = 0;
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
      const nodeKey = getKey(key, ++id);
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      };
    });
};

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
};
const data3 = createData(4, 30, 40);
</script>
<style scoped></style>
