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
export const GroupTypeBtn: Story = {
  name: 'Group控制radio形态',
  args: {},
  render: (args: any) => {
    return {
      components: { KRadioGroup, KRadio },
      setup() {
        const radio = ref(0);
        return { args, radio };
      },
      template: `
      <k-radio-group v-model="radio" :direction=args.direction button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      `
    };
  }
};

// 自定义颜色
export const GroupSize: Story = {
  name: 'Group控制radio大小',
  args: {},
  render: (args: any) => {
    return {
      components: { KRadioGroup, KRadio },
      setup() {
        const radio = ref(0);
        return { args, radio };
      },
      template: `
      <k-radio-group v-model="radio" :direction=args.direction size="sm">
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      `
    };
  }
};
