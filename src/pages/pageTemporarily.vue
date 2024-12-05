<!--
* @description  参数1
* @fileName  pageTemporarily
* @author userName
* @date 2024-11-21 11:52:01
* @version V3.0.0
!-->
<template>
  <div class="block">
    <KDetails class="mt-5" :abstract="lstInfo" direction="horizontal"></KDetails>

    <div ref="bbm" style="background-color: var(--k-theme-primary)">primary</div>
    <div style="background-color: var(--k-theme-info)">info</div>
    <div style="background-color: var(--k-theme-success)">success</div>
    <div style="background-color: var(--k-theme-danger)">danger</div>
    <div style="background-color: var(--k-theme-warning)">warning</div>

    <KSteps :active="actives" align-center capsule>
      <KStep v-for="item in ['基本信息', '工具配置']" :key="item" :title="item" />
    </KSteps>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive, computed } from 'vue';
import { KDetails, KSteps, KStep } from 'ksw-ux';
const stepActive = ref(0);
const stepList = reactive([
  // { key: 'paramsConfig', text: '工具参数', has: false, stepType: 3 }, // （暂不显示）
  { key: 'changeControl', text: '风险预测', has: false, stepType: 4, fun: () => {} },
  {
    key: 'pre',
    text: '前置准备',
    has: false,
    stepType: 1,
    fun: (res) => {
      setExecutionData('pre', res);
    },
  },
  {
    key: 'execution',
    text: '执行变更',
    has: false,
    stepType: 0,
    fun: (res) => {
      setExecutionData('execution', res);
    },
  },
  {
    key: 'post',
    text: '后置检查',
    has: false,
    stepType: 2,
    fun: (res) => {
      setExecutionData('post', res);
    },
  },
]);
const lstInfo = computed(() => {
  const data = [
    { label: '开始时间', value: 1, column: 1 },
    { label: '结束时间', value: 2, column: 1 },
    {
      label: '耗时',
      value: 4,
      column: 1,
    },
    {
      label: '执行进度',
      column: 10,
      render: () => {
        return (
          <KSteps active={stepActive.value} capsule process-status='finish' finish-status='success'>
            {stepList.map((item, index) => {
              return <KStep key={index} title={item.text} />;
            })}
          </KSteps>
        );
      },
    },
  ];
  if (0 === 0) {
    data.push({
      label: '错误信息',
      column: 3,
      value: 4,
    });
  }
  return data;
});

const actives = ref(0);
</script>

<style lang="less" scoped></style>
