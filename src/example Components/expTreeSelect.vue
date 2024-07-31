<!--
* @description  参数1
* @fileName  button
* @author userName
* @date 2024-07-06 16:05:58
* @version V3.0.0
!-->
<template>
  <div class="epx-container">
    <div class="epx-title">KTreeSelect</div>
    <div class="epx-title-sub">多选:</div>
    <div class="flex items-center gap-2 w-60">
      <!-- 
       * multiple:多选
       * filterable:可搜索
       * clearable:可清除
        !-->
      <KTreeSelect
        v-model="value"
        :data="data"
        :placeholder="'请选择'"
        show-checkbox
        check-strictly
        multiple
        filterable
        clearable
        @change="handleChange"
      ></KTreeSelect>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { KTreeSelect } from '@components';

const value = ref();
const handleChange = (val) => {
  console.log(value.value);
};
const data = [
  {
    value: '1',
    label: '金融科技部',
    children: [
      {
        value: '1-1',
        label: '运维1组',
        children: [
          {
            value: '1-1-1',
            label: '测试专用机器',
            icon: 'IconSystemTypeWindowsColor',
          },
          {
            value: '1-1-2',
            label: '测试专用机器2',
            icon: 'IconSystemTypeLinuxColor',
          },
          {
            value: '1-1-3',
            label: '测试专用机器3',
            icon: 'IconSystemTypeAndroidColor',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
];

const data2 = [
  {
    id: 'E31C9C62685347C2A6CD82A7D342ACA3',
    pid: '',
    name: '测试分组',
    label: '测试分组',
    value: 'E31C9C62685347C2A6CD82A7D342ACA3',
    disabled: false,
    children: [
      {
        id: '5EA33DD672934E5F99447B38CE4E0C7B',
        pid: 'E31C9C62685347C2A6CD82A7D342ACA3',
        name: '分组1',
        label: '分组1',
        value: '5EA33DD672934E5F99447B38CE4E0C7B',
        disabled: false,
        children: [
          {
            id: 'AFD6DB5D95B34FF593A717D9113AA0E4',
            pid: '5EA33DD672934E5F99447B38CE4E0C7B',
            name: '分组1-1',
            label: '分组1-1',
            value: 'AFD6DB5D95B34FF593A717D9113AA0E4',
            disabled: false,
            children: [
              {
                id: 'D86D7064AD4C4FB5AA870322D19C505B',
                pid: 'AFD6DB5D95B34FF593A717D9113AA0E4',
                name: '分组1-1-1',
                label: '分组1-1-1',
                value: 'D86D7064AD4C4FB5AA870322D19C505B',
                disabled: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '82DDAAA5EDD44CD691557A245BDF254C',
    pid: '',
    name: '测试分组1',
    label: '测试分组1',
    value: '82DDAAA5EDD44CD691557A245BDF254C',
    disabled: false,
    children: [],
  },
  {
    id: '0EDEF360B7BD440089181A4E402EA18A',
    pid: '',
    name: '任务分组',
    label: '任务分组',
    value: '0EDEF360B7BD440089181A4E402EA18A',
    disabled: false,
    children: [
      {
        id: 'DD8F2CF539294D31A77B9B3005C16854',
        pid: '0EDEF360B7BD440089181A4E402EA18A',
        name: '任务分组1',
        label: '任务分组1',
        value: 'DD8F2CF539294D31A77B9B3005C16854',
        disabled: false,
        children: [],
      },
    ],
  },
  {
    id: 'D7751745303C4921B5573B8B8AEEA756',
    pid: '',
    name: 'Test',
    label: 'Test',
    value: 'D7751745303C4921B5573B8B8AEEA756',
    disabled: false,
    children: [],
  },
  {
    id: 'BD0477D52BC94FDEBA50240DF2313448',
    pid: '',
    name: '敏捷任务',
    label: '敏捷任务',
    value: 'BD0477D52BC94FDEBA50240DF2313448',
    disabled: false,
    children: [],
  },
  {
    id: '5EA33DD672934E5F99447B38CE4E0C7B',
    pid: 'E31C9C62685347C2A6CD82A7D342ACA3',
    name: '分组1',
    label: '分组1',
    value: '5EA33DD672934E5F99447B38CE4E0C7B',
    disabled: false,
    children: [
      {
        id: 'AFD6DB5D95B34FF593A717D9113AA0E4',
        pid: '5EA33DD672934E5F99447B38CE4E0C7B',
        name: '分组1-1',
        label: '分组1-1',
        value: 'AFD6DB5D95B34FF593A717D9113AA0E4',
        disabled: false,
        children: [
          {
            id: 'D86D7064AD4C4FB5AA870322D19C505B',
            pid: 'AFD6DB5D95B34FF593A717D9113AA0E4',
            name: '分组1-1-1',
            label: '分组1-1-1',
            value: 'D86D7064AD4C4FB5AA870322D19C505B',
            disabled: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 'DD8F2CF539294D31A77B9B3005C16854',
    pid: '0EDEF360B7BD440089181A4E402EA18A',
    name: '任务分组1',
    label: '任务分组1',
    value: 'DD8F2CF539294D31A77B9B3005C16854',
    disabled: false,
    children: [],
  },
  {
    id: 'AFD6DB5D95B34FF593A717D9113AA0E4',
    pid: '5EA33DD672934E5F99447B38CE4E0C7B',
    name: '分组1-1',
    label: '分组1-1',
    value: 'AFD6DB5D95B34FF593A717D9113AA0E4',
    disabled: false,
    children: [
      {
        id: 'D86D7064AD4C4FB5AA870322D19C505B',
        pid: 'AFD6DB5D95B34FF593A717D9113AA0E4',
        name: '分组1-1-1',
        label: '分组1-1-1',
        value: 'D86D7064AD4C4FB5AA870322D19C505B',
        disabled: false,
        children: [],
      },
    ],
  },
  {
    id: 'D86D7064AD4C4FB5AA870322D19C505B',
    pid: 'AFD6DB5D95B34FF593A717D9113AA0E4',
    name: '分组1-1-1',
    label: '分组1-1-1',
    value: 'D86D7064AD4C4FB5AA870322D19C505B',
    disabled: false,
    children: [],
  },
];
</script>
<style scoped></style>
