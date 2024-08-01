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
import pointComp from './point.vue';
import pointCompDoc from './point.vue?raw';

const doc = ATExample(blockComp, '块状标签', blockCompDoc);
export const blockExample: Story = {
  name: '块状标签',
  ...doc,
};

const doc1 = ATExample(pointComp, '点状标签', pointCompDoc);
export const pointExample: Story = {
  name: '点状标签',
  ...doc1,
};
