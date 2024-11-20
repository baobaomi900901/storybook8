<template>
  <div class="epx-container overflow-auto">
    <SBExamplePanel label="默认" open class="w-full h-fit">
      <div ref="expView" class="expView h-fit w-full">
        <div ref="toolMarket" class="toolMarket p-6 bg-gray-200 flex-1 w-full h-96">
          <div class="bg-white rounded-md w-full h-full">
            <k-view
              default-active=""
              :data="viewData"
              @change="(value) => console.log('change', value)"
              @remove="(value) => console.log('remove', value)"
              @refresh="() => console.log('refresh')"
              @drag="(value) => console.log('drag', value)"
            >
              <template #label="{ data }">
                <k-tag :color="data.color" size="sm" text-color="#000" point>
                  {{ data.label }}
                </k-tag>
              </template>
              <template #all>all</template>
              <template #free>free</template>
              <template #active>active</template>
              <template #outline>outline</template>
              <template #destory>destory</template>
              <template #production1>production1</template>
              <template #production2>production2</template>
            </k-view>
          </div>
        </div>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="渲染树形结构" open>
      <div ref="expView" class="expView h-fit w-full">
        <div ref="toolMarket" class="toolMarket p-6 bg-gray-200 flex-1 w-full h-96">
          <div class="bg-white rounded-md w-full h-full">
            <k-view
              default-active="free"
              :collapse="false"
              :data="viewData1"
              :use-tree="true"
              :tree-config="{
                nodeKey: 'value', // 节点唯一标识
                indent: 20, // 节点缩进距离, 默认20
                icon: 'IconAdd', // 节点图标
                expandIcon: 'IconFolderOpen', // 展开图标
                collapseIcon: 'IconFolderClose', // 收起图标
                showArrow: true,
              }"
              @change="(value) => console.log('change', value)"
              @node-expand="(value) => console.log('node-expand', value)"
              @node-collapse="(value) => console.log('node-collapse', value)"
              @remove="(value) => console.log('remove', value)"
              @refresh="() => console.log('refresh')"
              @drag="(value) => console.log('drag', value)"
              @visible="handleVisible"
              :showArrow="false"
            >
              <template #all>all</template>
              <template #free>free</template>
              <template #active>active</template>
              <template #outline>outline</template>
              <template #destory>destory</template>
              <template #production1>production1</template>
              <template #production2>production2</template>
              <template #parent>parent</template>
              <template #children1>children1</template>
              <template #children2>children2</template>
              <template #children3>children3</template>
              default
            </k-view>
          </div>
        </div>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script lang="ts" setup>
import { translate } from 'element-plus';
import { IconArrowRight } from 'ksw-vue-icon';
import { ref, reactive } from 'vue';
import { NOOP } from '@vue/shared';

const showViewBtn = ref(false);
const viewData = reactive([
  {
    label: '全部',
    value: 'all',
    count: 10000,
    color: '',
  },
  {
    label: '空闲',
    value: 'free',
    count: 1274,
    color: '#69B4FF',
  },
  {
    label: '活跃',
    value: 'active',
    count: 7750,
    color: '#2882FF',
  },
  {
    label: '离线',
    value: 'outline',
    count: 679,
    color: '#6B7280',
  },
  {
    label: '停用',
    value: 'destory',
    count: 297,
    color: '#EF4444',
  },
  // {
  //   label: '产品一部',
  //   value: 'production1',
  //   count: 524,
  //   custom: true,
  //   color: '',
  // },
  // {
  //   label: '产品二部',
  //   value: 'production2',
  //   count: 472,
  //   custom: true,
  //   showCustomControl: true,
  //   color: '',
  // },
  // {
  //   label: '产品三部',
  //   value: 'production3',
  //   count: 356,
  //   custom: true,
  //   color: '',
  // },
]);

const changeShowViewBtn = () => {
  showViewBtn.value = !showViewBtn.value;
};

function handleVisible(visible: boolean) {
  console.log('visible', visible);
}

const viewData1 = reactive([
  {
    label: '全部',
    value: 'parent',
    count: 10000,
    color: '',
    children: [
      {
        label: 'Children1',
        value: 'children1',
        count: 7750,
        children: [
          {
            label: 'Children1-1',
            value: 'children1-1',
            count: 8811,
          },
          {
            label: 'Children1-2',
            value: 'children1-2',
            count: 8811,
          },
          {
            label: 'Children1-3',
            value: 'children1-3',
            count: 8811,
          },
        ],
      },
      {
        label: 'Children2',
        value: 'children2',
        count: 1274,
      },
      {
        label: 'Children3',
        value: 'children3',
        count: 679,
      },
      {
        label: 'Children4',
        value: 'children4',
        count: 297,
      },
      {
        label: 'Children5',
        value: 'children5',
        count: 524,
      },
      {
        label: 'Children6',
        value: 'children6',
        count: 472,
      },
      {
        label: 'Children7',
        value: 'children7',
        count: 356,
      },
    ],
  },
]);
</script>
<style lang="less" scoped></style>
