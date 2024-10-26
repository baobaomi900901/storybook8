<!--
* @description  参数1
* @fileName  toolMarket
* @author userName
* @date 2024-10-18 14:47:05
* @version V3.0.0
!-->
<template>
  <div ref="toolMarket" class="toolMarket p-6 bg-gray-100 flex-1">
    <div class="bg-white rounded-md h-full">
      <k-view
        default-active="free"
        :data="viewData"
        @change="(value) => console.log('change', value)"
        @remove="(value) => console.log('remove', value)"
        @refresh="() => console.log('refresh')"
        @drag="(value) => console.log('drag', value)"
      >
        <template #label="{ data }">
          <k-tag :color="data.color" size="sm" text-color="#000" point>{{ data.label }}</k-tag>
        </template>
        <template #all>all</template>
        <template #free>
          <div
            class="content flex-1 p-6 grid xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 auto-rows-min gap-4"
          >
            <div
              v-for="item in cardData"
              :key="item.title"
              class="toolCard h-fit rounded-md border border-gray-200 text-base"
            >
              <div class="toolCard-header px-4 py-2 border-b border-gray-200 text-lg font-bold">
                标题
              </div>
              <div class="toolCard-body px-4 py-2 flex">
                <div
                  class="toolCard-image w-24 h-24 bg-gray-100 row-span-2 mr-2 flex-shrink-0"
                ></div>
                <div class="h-24 flex flex-col grow break-all text-gray-500">
                  <div class="overflow-hidden text-ellipsis mb-3 line-clamp-3 flex-1">
                    描述:{{ item.desc }}
                  </div>
                  <div class="toolCard-body-footer flex justify-between flex-shrink-0">
                    <div class="toolCard-body-footer-item">版本:{{ item.version }}</div>
                    <div class="toolCard-body-footer-item">使用次数: {{ item.useCount }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #active>active</template>
        <template #outline>outline</template>
        <template #destory>destory</template>
        <template #production1>production1</template>
        <template #production2>production2</template>
      </k-view>
    </div>
    <!-- <div class="toolMarket-container bg-white h-full flex rounded-md">
      <div
        class="nav p-2 h-full border-r border-gray-200 relative flex-shrink-0"
        :class="{ 'is-collapse': showViewBtn }"
      >
        <k-view
          v-model="activeView"
          :data="viewData"
          @change="(value) => console.log('change', value, activeView)"
          @remove="(value) => console.log('remove', value)"
          @refresh="() => console.log('refresh')"
          :style="{ display: !showViewBtn ? 'block' : 'none' }"
        >
          <k-view-item
            v-for="(item, index) in viewData"
            :key="item.value"
            :label="item.label"
            :count="item.count"
            :value="item.value"
            :is-custom="item.custom"
            :disabled="index === 2"
          >
            <template #label>
              <k-tag :color="item.color" size="sm" text-color="#000" point>{{ item.label }}</k-tag>
            </template>
          </k-view-item>
        </k-view>
        <div
          class="showViewBtn flex justify-center items-center rounded-full"
          @click="changeShowViewBtn"
        >
          <IconArrowRight :class="{ 'is-collapse': showViewBtn }" />
        </div>
      </div>
      <div
        class="content flex-1 p-6 grid xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 auto-rows-min gap-4"
      >
        <div
          v-for="item in cardData"
          :key="item.title"
          class="toolCard h-fit rounded-md border border-gray-200 text-base"
        >
          <div class="toolCard-header px-4 py-2 border-b border-gray-200 text-lg font-bold">
            标题
          </div>
          <div class="toolCard-body px-4 py-2 flex">
            <div class="toolCard-image w-24 h-24 bg-gray-100 row-span-2 mr-2 flex-shrink-0"></div>
            <div class="h-24 flex flex-col grow break-all text-gray-500">
              <div class="overflow-hidden text-ellipsis mb-3 line-clamp-3 flex-1">
                描述:{{ item.desc }}
              </div>
              <div class="toolCard-body-footer flex justify-between flex-shrink-0">
                <div class="toolCard-body-footer-item">版本:{{ item.version }}</div>
                <div class="toolCard-body-footer-item">使用次数: {{ item.useCount }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { translate } from 'element-plus';
import { IconArrowRight } from 'ksw-vue-icon';
import { ref, reactive } from 'vue';
const activeView = ref('view1');

const showViewBtn = ref(false);
const viewData = reactive([
  {
    label: '全部',
    value: 'all',
    count: 10000,
    color: '',
  },
  {
    label: '活跃',
    value: 'active',
    count: 7750,
    color: '#2882FF',
  },
  {
    label: '空闲',
    value: 'free',
    count: 1274,
    color: '#69B4FF',
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
  {
    label: '产品一部',
    value: 'production1',
    count: 524,
    custom: true,
    color: '',
  },
  {
    label: '产品二部',
    value: 'production2',
    count: 472,
    custom: true,
    color: '',
  },
  {
    label: '产品三部',
    value: 'production3',
    count: 356,
    custom: true,
    color: '',
  },
]);
const cardData = [
  {
    title: '标题1',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题2',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题3',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题4',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题5',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题6',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题7',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题8',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题9',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题10',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题11',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题12',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题13',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题14',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题15',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题16',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题17',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题18',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题19',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题20',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题21',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题22',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题23',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题24',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
  {
    title: '标题25',
    desc: '12312311231111111112312311231111123df1234534534534534534512312311231111111112312311231111123df12345345345345345345',
    version: 'v1.0.0',
    useCount: '10000',
  },
];

const changeShowViewBtn = () => {
  showViewBtn.value = !showViewBtn.value;
};
</script>
<style lang="less" scoped>
.nav {
  width: 15rem;
  transition: all 0.125s ease-in-out;
  &.is-collapse {
    transition: all 0.125s ease-in-out;
    width: 2rem;
  }

  .showViewBtn {
    --size: 1.5rem;
    --padding: 0.5rem;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid var(--k-gray-200);
    cursor: pointer;

    right: calc((var(--padding) + var(--size)) / 2 * -1 + var(--size) / 8);
    top: 2.125rem;

    .ksw-icon {
      transition: all 0.125s ease-in-out;
      &.is-collapse {
        transition: all 0.125s ease-in-out;
        transform: rotate(180deg);
      }
    }

    &:hover {
      color: var(--k-theme-primary);
      border-color: var(--k-theme-primary);
      box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
