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
    <SBExamplePanel label="默认" open>
      <k-form ref="myForm" :model="formData" :rules="rules" label-position="right" class="w-full">
        <k-form-item ref="myNameItem" label="姓名" prop="name">
          <k-input v-model="formData.name"></k-input>
        </k-form-item>
        <k-form-item label="性别" prop="sex">
          <k-input v-model="formData.sex"></k-input>
        </k-form-item>
        <k-form-item label="年龄" prop="age">
          <k-input v-model="formData.age"></k-input>
        </k-form-item>
        <k-form-item label="简述" prop="desc">
          <k-input
            v-model="formData.desc"
            @keyup.enter.native="() => console.log('简述')"
          ></k-input>
        </k-form-item>
        <k-form-item>
          <KInput v-model="value" placeholder="请输入url">
            <template #append>
              <KButtonGroup>
                <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
                <KButton main>
                  <IconArrowBottom />
                </KButton>
              </KButtonGroup>
            </template>
          </KInput>
        </k-form-item>
        <k-form-item>
          <div class="bbm">
            <k-checkbox label="111" value="1111">111</k-checkbox>
            <k-button main @click="submit(myForm)">submit</k-button>
            <k-button secondary @click="sds(myNameItem)">check</k-button>
          </div>
        </k-form-item>
      </k-form>
    </SBExamplePanel>

    <SBExamplePanel label="弹窗" open>
      <k-button main @click="showAFilter">show filter</k-button>
      <k-dialog v-model="visiblesd" title="数据分析" width="500">
        <k-form ref="myForm" :model="formData" :rules="rules" label-position="top" class="w-full">
          <k-form-item ref="myNameItem" label="姓名" prop="name">
            <k-input v-model="formData.name"></k-input>
          </k-form-item>
          <k-form-item label="性别" prop="sex">
            <k-input v-model="formData.sex"></k-input>
          </k-form-item>
          <k-form-item label="年龄" prop="age">
            <k-input v-model="formData.age"></k-input>
          </k-form-item>
          <k-form-item label="简述" prop="desc">
            <k-input
              v-model="formData.desc"
              @keyup.enter.native="() => console.log('简述')"
            ></k-input>
          </k-form-item>
          <k-form-item label="测试item">
            <KInput v-model="value" placeholder="请输入url">
              <template #append>
                <KButtonGroup>
                  <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
                  <KButton main>
                    <IconArrowBottom />
                  </KButton>
                </KButtonGroup>
              </template>
            </KInput>
          </k-form-item>
          <k-form-item label="测试item">
            <KInput v-model="value" placeholder="请输入url">
              <template #append>
                <KButtonGroup>
                  <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
                </KButtonGroup>
              </template>
            </KInput>
          </k-form-item>
          <k-form-item label="测试item">
            <KInput v-model="value" placeholder="请输入url">
              <template #append>
                <KButton disabled @click="handleClick('运行')">测试</KButton>
              </template>
            </KInput>
          </k-form-item>
          <k-form-item>
            <div class="bbm">
              <k-checkbox label="111" value="1111">111</k-checkbox>
              <k-button main @click="submit(myForm)">submit</k-button>
              <k-button secondary @click="sds(myNameItem)">check</k-button>
            </div>
          </k-form-item>
        </k-form>
      </k-dialog>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { KForm, KFormItem, KInput, KCheckbox, KButton } from '@components';

const formData = ref({
  name: '',
  sex: '',
  age: '',
  desc: '',
});

const visiblesd = ref(false);
function showAFilter() {
  visiblesd.value = true;
}
</script>
<style scoped>
.bbm {
  display: flex;
  gap: 1rem;
}
</style>
