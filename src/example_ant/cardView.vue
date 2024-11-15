<!--
* @description  参数1
* @fileName  cardView
* @author userName
* @date 2024-09-19 17:17:50
* @version V3.0.0
!-->
<template>
  <div
    id="cardView"
    class="cardView flex-1 px-10 pt-8"
    style="background-color: #f5f5f5; min-width: 0"
  >
    <KCard :title="'自定义标题' + ' ' + i" v-for="i in 3" :key="i">
      <template #extra-header-btns>
        <KButton text>
          <IconMore color="black" />
        </KButton>
      </template>
      <template #extra-body>
        <span class="text-gray-400">{{ '自定义内容' + ' ' + i }}</span>
      </template>
    </KCard>
    <KCard :title="'自定义标题' + ' ' + i" v-for="i in 2" :key="i" col="3">
      <template #extra-header-btns>
        <KButton text>
          <IconMore color="black" />
        </KButton>
      </template>
      <template #extra-body>
        <span class="text-gray-400">{{ '自定义内容' + ' ' + i }}</span>
      </template>
    </KCard>
    <KCard :title="'自定义标题' + ' ' + i" v-for="i in 1" :key="i" col="6">
      <template #extra-header-btns>
        <KButton text>
          <IconMore color="black" />
        </KButton>
      </template>
      <template #extra-body>
        <span class="text-gray-400">{{ '自定义内容' + ' ' + i }}</span>
      </template>
    </KCard>
    <KCard :title="'自定义标题' + ' ' + i" v-for="i in 1" :key="i" col="6">
      <template #extra-header-btns>
        <KButton text>
          <IconMore color="black" />
        </KButton>
      </template>
      <template #extra-body>
        <span class="text-gray-400">{{ '自定义内容' + ' ' + i }}</span>
      </template>
    </KCard>
    <KCard :title="'自定义标题' + ' ' + i" v-for="i in 1" :key="i" col="6">
      <template #extra-header-btns>
        <KButton text>
          <IconMore color="black" />
        </KButton>
      </template>
      <template #extra-body>
        <span class="text-gray-400">{{ '自定义内容' + ' ' + i }}</span>
      </template>
    </KCard>
  </div>
</template>

<script setup>
import { IconMore } from 'ksw-vue-icon';
import { ref, reactive } from 'vue';
import KCard from './components/KCard.vue';
</script>
<style lang="less" scoped>
.cardView {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 1.5rem;
}
</style>
