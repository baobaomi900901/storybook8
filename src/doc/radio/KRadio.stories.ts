import type { Meta, StoryObj } from '@storybook/vue3';
import { KRadio, KRadioGroup } from '@components/radio';
import { ref } from 'vue';

const meta = {
  title: 'Data Entry(DE)/KRadio',
  component: KRadio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base'],
    },
    color: {
      control: 'color',
    },
  },
  args: {},
} satisfies Meta<typeof KRadio>;

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
      components: { KRadio },
      setup() {
        const radioValue = ref('1');
        return { args, radioValue };
      },
      template: `
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `,
    };
  },
};

import size from './size.vue';
import sizeDoc from './size.vue?raw';
export const sizeSB: Story = {
  // name: 'size : 不同尺寸',
  render: (args: any) => ({
    components: { size },
    setup() {
      return { args };
    },
    template: '<size v-bind="args" />',
  }),
  parameters: {
    docs: {
      source: {
        code: sizeDoc,
      },
    },
  },
};

import color from './color.vue';
import colorDoc from './color.vue?raw';
export const colorSB: Story = {
  name: 'color : 自定义颜色',
  render: (args: any) => ({
    components: { color },
    setup() {
      return { args };
    },
    template: '<color v-bind="args" />',
  }),
  parameters: {
    docs: {
      source: {
        code: colorDoc,
      },
    },
  },
};
