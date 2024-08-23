import type { Meta, StoryObj } from '@storybook/vue3';
import { KButton } from '@components/button';
import { IconAdd, IconArrowBottom } from 'ksw-vue-icon';

const meta = {
  title: 'Base(B)/KButton',
  component: KButton,
  tags: ['autodocs'],
  argTypes: {
    value: 'text',
    size: {
      control: 'select',
      options: ['base', 'sm'],
    },
    main: 'boolean',
    secondary: 'boolean',
    text: 'boolean',
    icon: 'boolean',
    disabled: 'boolean',
    loading: 'boolean',
    iconLeft: '',
    iconRight: '',
    type: {
      control: 'select',
      options: ['normal', 'main', 'secondary', 'text', 'icon'],
    },
    color: {
      control: 'color',
    },
  },
  args: {},
} satisfies Meta<typeof KButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: '默认',
  args: {
    value: 'Button',
  },
};

import { ATExample } from '../../hooks';
import btnType from './btnType.vue';
import btnTypeDoc from './btnType.vue?raw';
import btnSize from './btnSize.vue';
import btnSizeDoc from './btnSize.vue?raw';
import btnGroup from './btnGroup.vue';
import btnGroupDoc from './btnGroup.vue?raw';
// btnDisabled
import btnDisabled from './btnDisabled.vue';
import btnDisabledDoc from './btnDisabled.vue?raw';
// btnLoading
import btnLoading from './btnLoading.vue';
import btnLoadingDoc from './btnLoading.vue?raw';
// btnIconSlot
import btnIconSlot from './btnIconSlot.vue';
import btnIconSlotDoc from './btnIconSlot.vue?raw';
// btnColor
import btnColor from './btnColor.vue';
import btnColorDoc from './btnColor.vue?raw';
// btnIcon
import btnIcon from './btnIcon.vue';
import btnIconDoc from './btnIcon.vue?raw';

const doc1 = ATExample(btnType, '各种类型按钮', btnTypeDoc);
export const example1: Story = {
  name: '各种类型按钮',
  ...doc1,
};

const doc2 = ATExample(btnSize, 'size: sm', btnSizeDoc);
export const example2: Story = {
  name: 'size: sm',
  ...doc2,
};

const doc3 = ATExample(btnDisabled, 'disabled:禁用按钮', btnDisabledDoc);
export const example3: Story = {
  name: 'disabled:禁用按钮',
  ...doc3,
};

const doc4 = ATExample(btnLoading, 'loading:加载中', btnLoadingDoc);
export const example4: Story = {
  name: 'loading:加载中',
  ...doc4,
};

const doc5 = ATExample(btnIconSlot, 'icon:按钮左右侧图标', btnIconSlotDoc);
export const example5: Story = {
  name: 'icon:按钮左右侧图标',
  ...doc5,
};

const doc6 = ATExample(btnColor, 'color:支持 el-type 类型 与 自定义颜色', btnColorDoc);
export const example6: Story = {
  name: 'color:支持 el-type 类型 与 自定义颜色',
  ...doc6,
};

const doc7 = ATExample(btnIcon, 'icon:插入图标', btnIconDoc);
export const example7: Story = {
  name: 'icon:插入图标',
  ...doc7,
};

const doc9 = ATExample(btnGroup, 'btnGroup:按钮组', btnGroupDoc);
export const example9: Story = {
  name: 'btnGroup:按钮组',
  ...doc9,
};
