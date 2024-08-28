import type { Meta, StoryObj } from '@storybook/vue3';
import { KCheckbox, KCheckboxGroup } from '@components';
import { ref } from 'vue';

const meta = {
  title: 'Data Entry(DE)/KCheckbox',
  component: KCheckbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base'],
      description: '设置尺寸',
    },
    color: {
      control: 'color',
      description: '设置颜色',
    },
    min: {
      control: 'number',
      description: '设置最小值',
    },
    max: {
      control: 'number',
      description: '设置最大值',
    },
    label: {
      control: 'text',
      description: '设置标签',
    },
  },
  args: {},
} satisfies Meta<typeof KCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// default
export const def: Story = {
  name: '默认',
  args: {
    color: '',
    size: '',
  },
  render: (args: any) => {
    return {
      components: { KCheckbox },
      setup() {
        const value = ref();
        const value2 = ref();
        return { args, value, value2 };
      },
      template: `
      <div class="flex gap-4">
        <KCheckbox v-model="value" label="烧饼"></KCheckbox>
        <KCheckbox v-model="value2" label="包子"></KCheckbox>
        <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
      </div>
      `,
    };
  },
};

import { ATExample } from '../../hooks';
import Indeterminate from './Indeterminate.vue';
import IndeterminateDoc from './Indeterminate.vue?raw';
import minMaxCheckbox from './minMaxCheckbox.vue';
import minMaxCheckboxDoc from './minMaxCheckbox.vue?raw';
//  TODO:CustomColor
import CustomColor from './CustomColor.vue';
import CustomColorDoc from './CustomColor.vue?raw';
import { de } from 'element-plus/es/locale';

const doc1 = ATExample(Indeterminate, 'check all:全选', IndeterminateDoc);
export const example1: Story = {
  name: 'check all:全选',
  ...doc1,
};

const doc2 = ATExample(minMaxCheckbox, 'min&max: 最小与最大值', minMaxCheckboxDoc);
export const example2: Story = {
  name: 'min&max: 最小与最大值',
  ...doc2,
};

// TODO: check 需要添加 自定义颜色
// const customColor = ATExample(CustomColor, 'color:自定义颜色', CustomColorDoc);
// export const example3: Story = {
//   name: 'color:自定义颜色',
//   ...customColor,
// };
