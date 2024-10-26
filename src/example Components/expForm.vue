<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container grid grid-cols-2 auto-rows-max gap-4">
    <div class="epx-title col-span-2">组件</div>
    <SBExamplePanel label="默认" open>
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="left"
        label-width="auto"
        class="w-full"
      >
        <k-form-item ref="myNameItem" label="姓名" prop="name">
          <k-input v-model="formData.name"></k-input>
        </k-form-item>
        <k-form-item label="性别" prop="sex">
          <k-select v-model="formData.sex">
            <k-option label="男" value="male"></k-option>
            <k-option label="女" value="female"></k-option>
          </k-select>
        </k-form-item>
        <k-form-item label="年龄" prop="age">
          <k-input-number v-model="formData.age"></k-input-number>
        </k-form-item>
        <k-form-item label="简述" prop="desc">
          <k-input
            v-model="formData.desc"
            type="textarea"
            @keyup.enter.native="() => console.log('简述')"
          ></k-input>
        </k-form-item>
        <k-form-item>
          <KInput v-model="formData.url" placeholder="请输入url">
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
        <k-form-item label="主食">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="radioValue"
          ></KRadio>
        </k-form-item>
        <k-form-item label="配菜">
          <k-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >
            Check all
          </k-checkbox>
          <k-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <k-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
              {{ city }}
            </k-checkbox>
          </k-checkbox-group>
        </k-form-item>
        <k-form-item>
          <div class="bbm w-full border-t pt-4 flex items-center">
            <k-checkbox label="111" value="1111">不再更改</k-checkbox>
            <k-button main @click="submit(myForm)">submit</k-button>
            <k-button secondary @click="sds(myNameItem)">check</k-button>
          </div>
        </k-form-item>
      </k-form>
    </SBExamplePanel>

    <SBExamplePanel label="size" open>
      <k-form
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="top"
        label-width="6rem"
        class="w-full"
        size="sm"
      >
        <k-form-item ref="myNameItem" label="姓名" prop="name">
          <k-input v-model="formData.name"></k-input>
        </k-form-item>
        <k-form-item label="性别" prop="sex">
          <k-select v-model="formData.sex">
            <k-option label="男" value="male"></k-option>
            <k-option label="女" value="female"></k-option>
          </k-select>
        </k-form-item>
        <k-form-item label="年龄" prop="age">
          <k-input-number v-model="formData.age"></k-input-number>
        </k-form-item>
        <k-form-item label="简述" prop="desc">
          <k-input
            v-model="formData.desc"
            type="textarea"
            @keyup.enter.native="() => console.log('简述')"
          ></k-input>
        </k-form-item>
        <k-form-item>
          <KInput v-model="formData.url" placeholder="请输入url">
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
        <k-form-item label="主食">
          <KRadio
            v-for="item in radioData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-model="radioValue"
          ></KRadio>
        </k-form-item>
        <k-form-item label="配菜">
          <k-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >
            Check all
          </k-checkbox>
          <k-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <k-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
              {{ city }}
            </k-checkbox>
          </k-checkbox-group>
        </k-form-item>
        <k-form-item>
          <div class="bbm w-full border-t pt-4 flex items-center">
            <k-checkbox label="111" value="1111">不再更改</k-checkbox>
            <k-button main @click="submit(myForm)">submit</k-button>
            <k-button secondary @click="sds(myNameItem)">check</k-button>
          </div>
        </k-form-item>
      </k-form>
    </SBExamplePanel>

    <!-- <SBExamplePanel label="弹窗" open>
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
    </SBExamplePanel> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { KForm, KFormItem, KInput, KCheckbox, KButton } from '@components';

const formData = ref({
  name: '',
  sex: '',
  age: undefined,
  desc: '',
  url: '',
});

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  desc: [
    { required: true, message: '请输入简述', trigger: 'blur' },
    { min: 5, max: 100, message: '长度在 5 到 100 个字符', trigger: 'blur' },
  ],
};

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['包子', '饺子', '油条'];

const radioValue = ref('直角');
const radioData = [
  {
    value: '炒饭',
    label: '炒饭',
  },
  {
    value: '面条',
    label: '面条',
  },
  {
    value: '肠粉',
    label: '肠粉',
  },
];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};

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
