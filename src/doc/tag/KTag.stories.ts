import type { Meta, StoryObj } from '@storybook/vue3';
import { KTag } from '@components';
import { ref } from 'vue';

const meta = {
  title: 'Data Entry(DE)/KTag',
  component: KTag,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['base', 'sm'],
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
  },
  args: {
    size: 'base',
    direction: 'row',
  },
} satisfies Meta<typeof KTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: 'Default',
  render: (args: any) => {
    return {
      components: { KTag },
      setup() {
        return { args };
      },
      template: `
     <KTag>123</KTag>`,
    };
  },
};
console.log(def);

import { ATExample } from '../../hooks';
import blockComp from './block.vue';
import blockCompDoc from './block.vue?raw';
const doc1 = ATExample(blockComp, '块状标签', blockCompDoc);
export const blockExample: Story = {
  name: '块状标签',
  ...doc1,
};

import pointComp from './point.vue';
import pointCompDoc from './point.vue?raw';
const doc2 = ATExample(pointComp, '点状标签', pointCompDoc);
export const pointExample: Story = {
  name: '点状标签',
  ...doc2,
};

import color from './color.vue';
import colorDoc from './color.vue?raw';
const doc3 = ATExample(color, 'color: 自定义颜色', colorDoc);
export const colorExample: Story = {
  name: 'color: 自定义颜色',
  ...doc3,
};

// size
import size from './size.vue';
import sizeDoc from './size.vue?raw';
const doc4 = ATExample(size, 'size: 标签大小', sizeDoc);
export const sizeExample: Story = {
  name: 'size: 标签大小',
  ...doc4,
};
