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
import clearable from './clearable.vue';
import clearableDoc from './clearable.vue?raw';
import showPassword from './showPassword.vue';
import showPasswordDoc from './showPassword.vue?raw';
import ktextarea from './textarea.vue';
import textareaDoc from './textarea.vue?raw';
import maxInput from './maxInput.vue';
import maxInputDoc from './maxInput.vue?raw';
import frontAndRearSlots from './frontAndRearSlots.vue';
import frontAndRearSlotsDoc from './frontAndRearSlots.vue?raw';

export const disabledSB = ATExample(disabled, 'disabled : 禁止输入', disabledDoc);
export const clearableSB = ATExample(clearable, 'clearable : 一键清空', clearableDoc);
export const showPasswordSB = ATExample(showPassword, 'showPassword : 显示密码', showPasswordDoc);
export const textareaSB = ATExample(ktextarea, 'textarea : 文本域', textareaDoc);
export const maxInputSB = ATExample(maxInput, 'maxInput : 最大输入长度', maxInputDoc);
export const frontAndRearSlotsSB = ATExample(
  frontAndRearSlots,
  '组合使用&前后插槽',
  frontAndRearSlotsDoc,
);

setTimeout(() => {}, 1);

// console.log(bbm(disabled, 'BBMdisabled', disabledDoc));

// TODO: 开发, input 尺寸
// export const def8: Story = {
//   name: '尺寸',
//   render: (args: any) => {
//     const text = ref('');
//     const text1 = ref('');
//     return {
//       components: { KInput },
//       setup() {
//         return { args, text, text1 };
//       },
//       template: `
//           <div  style="margin:5px">默认大小</div>
//           <k-input v-model="text" type="text" :width="args.width" >
//           </k-input>
//           <div />
//          <div  style="margin:5px"> size = lg</div>
//           <k-input v-model="text" type="text" :width="args.width" size="lg">
//           </k-input>
//            <div  style="margin:5px"> size = base</div>
//           <k-input v-model="text" type="text" :width="args.width" size="base">
//           </k-input>
//            <div  style="margin:5px"> size = sm</div>
//           <k-input v-model="text1" type="text" :width="args.width" size="sm">
//           </k-input>
//       `
//     };
//   }
// };
