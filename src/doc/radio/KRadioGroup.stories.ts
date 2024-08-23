import type { Meta, StoryObj } from '@storybook/vue3';
import { KRadio, KRadioGroup } from '@components/radio';
import { ref } from 'vue';

const meta = {
  title: 'Data Entry(DE)/KRadioGroup',
  component: KRadioGroup,
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
} satisfies Meta<typeof KRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {},
  render: (args: any) => {
    return {
      components: { KRadioGroup, KRadio },
      setup() {
        const radio = ref(0);
        return { args, radio };
      },
      template: `
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>`,
    };
  },
};

import { ATExample } from '../../hooks';
// button : 控制不同样式
import btn from './RGbutton.vue';
import btnDoc from './RGbutton.vue?raw';
const doc1 = ATExample(btn, 'button : 控制不同样式', btnDoc);
export const example2: Story = {
  name: 'button : 控制不同样式',
  ...doc1,
};

// size : 不同尺寸
import RGsize from './RGsize.vue';
import RGsizeDoc from './RGsize.vue?raw';
const doc2 = ATExample(RGsize, 'size : 不同尺寸', RGsizeDoc);
export const example1: Story = {
  name: 'size : 不同尺寸',
  ...doc2,
};
