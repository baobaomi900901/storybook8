<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KInput</div>
    <div class="epx-title-sub">默认</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容"></KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容"></KInput>
      </div>
    </div>

    <div class="epx-title-sub" @click="handleClick">图标(prefix-icon, suffix-icon)</div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete" disabled></KInput>
      </div>
    </div>
    <div class="epx-title-sub" @click="handleClick">插槽(prefix, suffix)</div>
    <div class="flex items-star gap-2">
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
    </div>
    <div class="flex items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="选择运行机器">
          <template #prefix>
            <IconBot color="#2882FF" @click="handleClick('bot')" />
          </template>
          <template #append>
            <KButton main icon-left="IconIdePlay">运行</KButton>
          </template>
        </KInput>
      </div>
    </div>

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
          placeholder="请输入文本域"
          type="textarea"
          size="sm"
          showWordLimit
        ></KInput>
      </div>
    </div>

    <div class="epx-title-sub">组合插槽(left):</div>
    <div class="flex flex-col items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>http://</template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton>普通按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton main>主要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton secondary>次要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton icon><IconAdd /></KButton>
          </template>
        </KInput>
      </div>
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
        </KInput>
      </div>
    </div>

    <div class="epx-title-sub">组合插槽(right):</div>
    <div class="flex flex-col items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url">
          <template #append>http://</template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton>普通按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton main>主要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton secondary>次要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #append>
            <KButton icon><IconAdd /></KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
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
      </div>
    </div>

    <div class="epx-title-sub">组合插槽(双边):</div>
    <div class="flex flex-col items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url">
          <template #prepend>http://</template>
          <template #append>.com</template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton>普通按钮</KButton>
          </template>
          <template #append>
            <KButton>普通按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton main>主要按钮</KButton>
          </template>
          <template #append>
            <KButton main>主要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton secondary>次要按钮</KButton>
          </template>
          <template #append>
            <KButton secondary>次要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select">
          <template #prepend>
            <KButton icon><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton icon><IconAdd /></KButton>
          </template>
        </KInput>
      </div>
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
      </div>
    </div>

    <div class="epx-title-sub">组合插槽(双边 size:sm):</div>
    <div class="flex flex-col items-star gap-2">
      <div class="w-80">
        <KInput v-model="value" placeholder="请输入url" size="sm">
          <template #prepend>http://</template>
          <template #append>.com</template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton>普通按钮</KButton>
          </template>
          <template #append>
            <KButton>普通按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton main>主要按钮</KButton>
          </template>
          <template #append>
            <KButton main>主要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton secondary>次要按钮</KButton>
          </template>
          <template #append>
            <KButton secondary>次要按钮</KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
        <KInput v-model="value" placeholder="btn, select" size="sm">
          <template #prepend>
            <KButton icon><IconAdd /></KButton>
          </template>
          <template #append>
            <KButton icon><IconAdd /></KButton>
          </template>
        </KInput>
      </div>
      <div class="w-80">
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
      </div>
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
</script>
<style lang="less">
// .k-input {
//   .el-input-group__prepend,
//   .el-input-group__append {
//     .k-input-slot--string {
//       color: red;
//     }
//   }
// }
</style>
