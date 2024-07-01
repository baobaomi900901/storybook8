import type { Meta, StoryObj } from '@storybook/vue3';
import { KRadio, KRadioGroup } from '@components/radio';
import { ref } from 'vue';

const meta: Meta = {
  title: 'Data Entry(DE)/KRadioGroup',
  component: KRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['base', 'sm']
    },
    direction: {
      control: 'select',
      options: ['row', 'column']
    },
    button: {
      control: 'boolean'
    }
  },
  args: {
    size: 'base',
    direction: 'row',
    button: false
  }
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
      </k-radio-group>`
    };
  }
};

// 自定义颜色
import btn from './button.vue';
import btnDoc from './button.vue?raw';
export const sizeSB2: Story = {
  name: 'button : 控制不同样式',
  render: (args: any) => ({
    components: { btn },
    setup() {
      return { args };
    },
    template: '<btn v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: btnDoc
      }
    }
  }
};

import size from './size.vue';
import sizeDoc from './size.vue?raw';
export const sizeSB: Story = {
  name: 'size : 不同尺寸',
  render: (args: any) => ({
    components: { size },
    setup() {
      return { args };
    },
    template: '<size v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: sizeDoc
      }
    }
  }
};
