<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container grid grid-cols-4 gap-4 auto-rows-max bg-slate-50">
    <div class="epx-title col-span-4">KInput</div>

    <SBExamplePanel label="默认" open>
      <div class="w-80 flex flex-col gap-2">
        <KInput v-model="value" size="sm" placeholder="请输入内容">
          <template #prepend>
            <KSelect v-model="selectValue">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>
        <KInput v-model="value" placeholder="请输入内容">
          <template #prepend>
            <KSelect v-model="selectValue">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>
        <KInput v-model="value" size="lg" placeholder="请输入内容">
          <template #prepend>
            <KSelect v-model="selectValue">
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
    </SBExamplePanel>

    <SBExamplePanel label="文本域" open>
      <div class="w-80 flex flex-col gap-2">
        <KInput v-model="value" size="sm" placeholder="请输入内容" type="textarea"></KInput>
        <KInput v-model="value" placeholder="请输入内容" type="textarea"></KInput>
        <KInput v-model="value" size="lg" placeholder="请输入内容" type="textarea"></KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="图标(prefix-icon, suffix-icon)">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete" disabled></KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" disabled>
          <template #prefix>
            <IconAdd @click="handleClick('add')"></IconAdd>
          </template>
          <template #suffix>
            <IconDelete @click="handleClick('delete')"></IconDelete>
          </template>
        </KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="嵌入 button-group">
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-4">
          <KButtonGroup class="flex">
            <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
            <KButton main>
              <IconArrowBottom />
            </KButton>
          </KButtonGroup>
        </div>
        <div class="flex gap-4">
          <KInput v-model="value" placeholder="选择运行机器">
            <template #prefix>
              <IconBot color="#2882FF" @click="handleClick('bot')" />
            </template>
            <template #append>
              <KButtonGroup>
                <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
                <KButton main>
                  <IconArrowBottom />
                </KButton>
              </KButtonGroup>
            </template>
          </KInput>
        </div>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="密码">
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
    </SBExamplePanel>

    <SBExamplePanel label="文本域">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入" type="textarea" showWordLimit></KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="限制字数">
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
    </SBExamplePanel>

    <SBExamplePanel label="Size:sm">
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
      <div class="w-80">
        <KInput
          v-model="value"
          placeholder="请输入文本域"
          type="textarea"
          size="sm"
          showWordLimit
        ></KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="组合插槽(prepend)" open>
      <div class="w-full flex flex-col gap-2">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>http://</template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')">普通按钮1</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')" :type="type" disabled>普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
        </KInput>

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
        </KInput>

        <KInput v-model="value" placeholder="请输入url1">
          <template #prepend>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url2">
          <template #prepend>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
        </KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="组合插槽(append)" open>
      <div class="w-full flex flex-col gap-2">
        <KInput v-model="value" placeholder="请输入url">
          <template #append>http://</template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('查询')" main>查询</KButton>
          </template>
        </KInput>

        <el-input v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('普通按钮')">普通按钮1</KButton>
          </template>
        </el-input>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('普通按钮')" :type="type" disabled>普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url">
          <template #append>
            <KSelect v-model="selectValue" class="w-60">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>
        <KInput v-model="value" placeholder="请输入url">
          <template #append>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

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
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="组合插槽(prepend + append)" open>
      <div class="w-full flex flex-col gap-2">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>http://</template>
          <template #append>http://</template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')">普通按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('普通按钮')">普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')" :type="type" disabled>普通按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('普通按钮')" :type="type" disabled>普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
        </KInput>

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
            <KSelect v-model="selectValue" class="w-60">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
          <template #append>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
          <template #append>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')" disabled>
                运行
              </KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
          <template #append>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')" disabled>
                运行
              </KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
        </KInput>
      </div>
    </SBExamplePanel>

    <SBExamplePanel label="组合插槽(双边 size:sm)" open>
      <div class="w-full flex flex-col gap-2">
        <KInput v-model="value" placeholder="请输入url" size="sm">
          <template #prepend>http://</template>
          <template #append>http://</template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')">普通按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('普通按钮')">普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('普通按钮')" disabled>普通按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('普通按钮')" disabled>普通按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('主要按钮')" :type="type" main disabled>主要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary>次要按钮</KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('次要按钮')" :type="type" secondary disabled>
              次要按钮
            </KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton @click="handleClick('icon')" :type="type" icon disabled><IconAdd /></KButton>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url" size="sm">
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
            <KSelect v-model="selectValue" class="w-60">
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url" size="sm">
          <template #prepend>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
          <template #append>
            <KSelect v-model="selectValue" class="w-60" disabled>
              <KOption
                v-for="item in data"
                :key="item.selectValue"
                :value="item.selectValue"
                :label="item.label"
              ></KOption>
            </KSelect>
          </template>
        </KInput>

        <KInput v-model="value" placeholder="请输入url" size="sm">
          <template #append>
            <KButtonGroup>
              <KButton main icon-left="IconIdePlay" @click="handleClick('运行')">运行</KButton>
              <KButton main>
                <IconArrowBottom />
              </KButton>
            </KButtonGroup>
          </template>
        </KInput>
      </div>
    </SBExamplePanel>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { KInput, KButton, KSelect, KOption } from '@components';
import { IconArrowBottom } from 'ksw-vue-icon';

const value = ref();

const selectValue = ref();

const data = [
  {
    selectValue: '1',
    label: 'Option 1',
  },
  {
    selectValue: '2',
    label: 'Option 2',
  },
  {
    selectValue: '3',
    label: 'Option 3',
  },
];

const handleClick = (type) => {
  console.log('click ==>', type);
};

// const type = ['primary', 'success','warning', 'danger', 'info'];
const type = ref('danger');
</script>
<style lang="less"></style>
