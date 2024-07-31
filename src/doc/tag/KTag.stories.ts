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
  args: {},
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

import { ATExample } from '../../hooks';
import blockComp from './block.vue';
import blockCompDoc from './block.vue?raw';
import pointComp from './point.vue';
import pointCompDoc from './point.vue?raw';

export const blockExample = ATExample(blockComp, '块状标签', blockCompDoc);
export const pointExample = ATExample(pointComp, '点状标签', pointCompDoc);
