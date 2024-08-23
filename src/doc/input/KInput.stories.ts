import type { Meta, StoryObj } from '@storybook/vue3';
import { KInput } from '@components';
import { ref } from 'vue';
const meta = {
  title: 'Data Entry(DE)/KInput',
  component: KInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      description: '原生input类型',
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空',
    },
    showPassword: {
      control: 'boolean',
      description: '是否显示密码',
    },
    maxlength: {
      control: 'number',
      description: '最大输入长度',
    },
    showWordLimit: {
      control: 'boolean',
      description: '显示输入字数限制',
    },
    autosize: {
      control: 'object',
      description: '文本域自适应高度, 接收对象例如 { minRows: 2, maxRows: 6 }',
    },
    blur: {
      description: 'el, 使 input 失去 焦点',
    },
    focus: {
      description: 'el, 使 input 获取 焦点',
    },
    select: {
      description: 'el, 选中 input 中的文字',
    },
    resizeTextarea: {
      description: 'el, 改变 textarea 大小',
    },
  },
  args: {},
} satisfies Meta<typeof KInput>;
export default meta;

type Story = StoryObj<typeof meta>;
export const def: Story = {
  name: '默认用法',
  args: {
    type: 'text',
    clearable: false,
  },
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      `,
    };
  },
};

import { ATExample } from '../../hooks';
import disabled from './disabled.vue';
import disabledDoc from './disabled.vue?raw';
const doc1 = ATExample(disabled, 'disabled : 禁止输入', disabledDoc);
export const example1: Story = {
  name: 'disabled : 禁止输入',
  ...doc1,
};

import clearable from './clearable.vue';
import clearableDoc from './clearable.vue?raw';
const clearableSB = ATExample(clearable, 'clearable : 一键清空', clearableDoc);
export const example2: Story = {
  name: 'clearable : 一键清空',
  ...clearableSB,
};

import showPassword from './showPassword.vue';
import showPasswordDoc from './showPassword.vue?raw';
const showPasswordSB = ATExample(showPassword, 'showPassword : 显示密码', showPasswordDoc);
export const example3: Story = {
  name: 'showPassword : 显示密码',
  ...showPasswordSB,
};

import ktextarea from './textarea.vue';
import textareaDoc from './textarea.vue?raw';
const textareaSB = ATExample(ktextarea, 'textarea : 文本域', textareaDoc);
export const example4: Story = {
  name: 'textarea : 文本域',
  ...textareaSB,
};

import maxInput from './maxInput.vue';
import maxInputDoc from './maxInput.vue?raw';
const maxInputSB = ATExample(maxInput, 'maxInput : 最大输入长度', maxInputDoc);
export const example5: Story = {
  name: 'maxInput : 最大输入长度',
  ...maxInputSB,
};

import frontAndRearSlots from './frontAndRearSlots.vue';
import frontAndRearSlotsDoc from './frontAndRearSlots.vue?raw';
const frontAndRearSlotsSB = ATExample(frontAndRearSlots, '组合使用&前后插槽', frontAndRearSlotsDoc);
export const example6: Story = {
  name: '组合使用&前后插槽',
  ...frontAndRearSlotsSB,
};
