<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KRadio, KRadioGroup</div>

    <SBExamplePanel label="单独使用">
      <div class="flex items-star gap-4">
        <KRadio
          v-for="item in radioData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-model="value"
        ></KRadio>
        <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="size">
      <div>
        <div class="flex items-star gap-4">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="value"
            size="sm"
          ></KRadio>
          <KRadio v-model="value" label="直角" value="直角" size="sm" disabled></KRadio>
        </div>
        <div class="flex items-star gap-4">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="value"
          ></KRadio>
          <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
        </div>
        <div class="flex items-star gap-4">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="value"
            size="lg"
          ></KRadio>
          <KRadio v-model="value" label="直角" value="直角" size="lg" disabled></KRadio>
        </div>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="group">
      <div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="sm"
            ></KRadio>
            <KRadio size="sm" v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="lg"
            ></KRadio>
            <KRadio size="lg" v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="group-size" open>
      <div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" size="sm">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="sm"
            ></KRadio>
            <KRadio size="sm" v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" size="lg">
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="lg"
            ></KRadio>
            <KRadio size="lg" v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="group__button" open>
      <div class="flex flex-row gap-4">
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" column button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="sm"
              button
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" size="sm" button disabled></KRadio>
          </KRadioGroup>
        </div>
        <br />
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" column button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              button
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" button disabled></KRadio>
          </KRadioGroup>
        </div>
        <br />
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" column button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="lg"
              button
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" size="lg" button disabled></KRadio>
          </KRadioGroup>
        </div>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="group__button2">
      <div>
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="sm"
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" size="sm" disabled></KRadio>
          </KRadioGroup>
        </div>
        <br />
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              button
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" disabled></KRadio>
          </KRadioGroup>
        </div>
        <br />
        <div class="flex items-star gap-4">
          <KRadioGroup v-model="value" button>
            <KRadio
              v-for="item in radioData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="lg"
              button
            ></KRadio>
            <KRadio v-model="value" label="直角" value="直角" size="lg" disabled></KRadio>
          </KRadioGroup>
        </div>
      </div>
    </SBExamplePanel>
    <SBExamplePanel label="自定义颜色" open>
      <div class="flex flex-col items-star gap-4">
        <KRadioGroup v-model="value">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            color="#ff5500"
          ></KRadio>
          <KRadio v-model="value" label="直角" value="直角" color="#ff5500" disabled></KRadio>
        </KRadioGroup>
        <KRadioGroup v-model="value" button>
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            color="#ff5500"
          ></KRadio>
          <KRadio v-model="value" label="直角" value="直角" color="#ff5500" disabled></KRadio>
        </KRadioGroup>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KRadio, KRadioGroup } from '@components';

const value = ref();

const radioData = [
  {
    value: '直角',
    label: '直角',
  },
  {
    value: '锐角',
    label: '锐角',
  },
  {
    value: '钝角',
    label: '钝角',
  },
];

const lstDateType = ['本月', '本季度', '本年'];
</script>
<style scoped></style>
