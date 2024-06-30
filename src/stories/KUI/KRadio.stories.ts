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
      options: ['sm', 'base']
    },
    color: {
      control: 'color'
    }
  },
  args: {}
} satisfies Meta<typeof KRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

// default
export const def: Story = {
  name: '默认',
  args: {
    color: '',
    size: ''
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
      `
    };
  }
};

// 尺寸
export const size: Story = {
  name: '不同尺寸',
  args: {},
  render: (args: any) => {
    return {
      components: { KRadio },
      setup() {
        const radioValue = ref('1');
        return { args, radioValue };
      },
      template: `
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0">直角</KRadio>
        <KRadio v-model="radioValue" value="1">钝角</KRadio>
        <KRadio v-model="radioValue" value="2">锐角</KRadio>
        <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
      </div>
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" size='sm'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" size='sm'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" size='sm'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" size='sm' disabled>90°</KRadio>
      </div>
      `
    };
  }
};

// 自定义颜色
export const customColor: Story = {
  name: '自定义颜色',
  args: {},
  render: (args: any) => {
    return {
      components: { KRadio, KRadioGroup },
      setup() {
        const radioValue = ref('1');
        const radio = ref(0);
        return { args, radioValue, radio };
      },
      template: `
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" color='#ff5500'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" color='#ff5500'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" color='#ff5500'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" color='#ff5500' disabled>90°</KRadio>
      </div>
      <br />
      <k-radio-group v-model="radio" :direction="args.direction">
        <KRadio :value="0" color="#ff5500" button>直角</KRadio>
        <KRadio :value="1" color="#ff5500" button>钝角</KRadio>
        <KRadio :value="2" color="#ff5500" button>锐角</KRadio>
        <KRadio :value="0" disabled color="#ff5500" button>直角</KRadio>
      </k-radio-group>

      
      `
    };
  }
};
