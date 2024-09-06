<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">组件</div>
    <SBExamplePanel label="网络" open>
      <KResult></KResult>
      <KResult status="403"></KResult>
      <KResult status="404"></KResult>
      <KResult status="500"></KResult>

      <KResult status="500" title="自定义title" subTitle="自定义subTitle">
        <template #extra>
          <KButton>关闭</KButton>
          <KButton main>刷新</KButton>
        </template>
      </KResult>

      <KResult status="500" title="自定义title" subTitle="自定义subTitle">
        <template #icon>
          <img src="../assets/vue.svg" alt="" style="width: 100vw; height: 100vw" />
        </template>
        <template #extra>
          <KButton>关闭</KButton>
          <KButton main>刷新</KButton>
        </template>
      </KResult>
    </SBExamplePanel>

    <SBExamplePanel label="状态" open>
      <KResult status="success"></KResult>

      <KResult status="info"></KResult>

      <KResult status="warning"></KResult>

      <KResult status="error"></KResult>

      <KResult status="error" title="自定义title" subTitle="自定义subTitle">
        <template #extra>
          <KButton>关闭</KButton>
          <KButton main>刷新</KButton>
        </template>
      </KResult>

      <KResult status="error" title="自定义title" subTitle="自定义subTitle">
        <template #icon>
          <img src="../assets/vue.svg" alt="" style="width: 100vw; height: 100vw" />
        </template>
        <template #extra>
          <KButton>关闭</KButton>
          <KButton main>刷新</KButton>
        </template>
      </KResult>
    </SBExamplePanel>

    <SBExamplePanel label="k-result" open>
      <KResult status="error" title="自定义title" subTitle="自定义subTitle">
        <template #icon>
          <img src="../assets/vue.svg" alt="" style="width: 100vw; height: 100vw" />
        </template>
        <template #extra>
          <KButton>关闭</KButton>
          <KButton main>刷新</KButton>
        </template>
      </KResult>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { KButton, KResult } from '@components';

const value = ref();
</script>
<style scoped></style>
