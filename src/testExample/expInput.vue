<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">k-input</div>
    <!--  -->
    <div class="epx-title-sub">默认</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容"></KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" disabled></KInput>
      </div>
    </div>
    <!--  -->
    <div class="epx-title-sub">密码:</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入密码" type="password"></KInput>
      </div>
      <div class="w-80">
        <KInput
          v-model="value"
          placeholder="请输入密码, 显示密码"
          type="password"
          showPassword
        ></KInput>
      </div>
    </div>
    <!--  -->
    <div class="epx-title-sub">文本域:</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入" type="textarea" showWordLimit></KInput>
      </div>
    </div>

    <div class="epx-title-sub">限制字数:</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" showWordLimit :maxlength="255"></KInput>
      </div>
      <div class="w-80">
        <KInput
          v-model="value"
          placeholder="请输入内容"
          type="textarea"
          showWordLimit
          :maxlength="255"
        ></KInput>
      </div>
    </div>
    <!--  -->
    <div class="epx-title-sub">Size:sm</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入密码" type="password" size="sm"></KInput>
      </div>
      <div class="w-80">
        <KInput
          v-model="value"
          placeholder="请输入密码, 显示密码"
          type="password"
          size="sm"
          showPassword
        ></KInput>
      </div>
    </div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput
          v-model="value"
          placeholder="请输入"
          type="textarea"
          size="sm"
          showWordLimit
        ></KInput>
      </div>
    </div>
    <!--  -->
    <div class="epx-title-sub">组合插槽:</div>
    <div class="flex flex-col items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>http://</template>
          <template #append>.com</template>
        </KInput>
      </div>
      <!-- 默认使用 -->
      <div>
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton type="primary" main>按钮123</KButton>
          </template>
          <template #append>
            <KSelect v-model="selectValue" placeholder="请选择" class="w-80">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>
      </div>
      <!-- -->
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>
            <KSelect v-model="selectValue" class="w-60">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
          <template #append>
            <KButton type="primary" main>按钮123</KButton>
          </template>
        </KInput>
      </div>
      <KSelect v-model="selectValue">
        <KOption
          v-for="item in data"
          :key="item.selectValue"
          :value="item.selectValue"
          :label="item.label"
        ></KOption>
      </KSelect>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KInput, KButton, KSelect, KOption } from '@components';

const value = ref();

const selectValue = ref();

const data = [
  {
    selectValue: '1',
    label: 'Option 1'
  },
  {
    selectValue: '2',
    label: 'Option 2'
  },
  {
    selectValue: '3',
    label: 'Option 3'
  }
];
</script>
<style scoped>
</style>