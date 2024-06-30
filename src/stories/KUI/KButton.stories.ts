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
      options: ['base', 'sm']
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
      options: ['normal', 'main', 'secondary', 'text', 'icon']
    },
    color: {
      control: 'color'
    }
  },
  args: {}
} satisfies Meta<typeof KButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: '默认',
  args: {
    value: 'Button'
  }
};

export const KBtbType: Story = {
  name: '各类型按钮',
  args: {
    value: '新增',
    main: true
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd },
      setup() {
        return { args, IconAdd };
      },
      template: `
      <div class="grid grid-cols-2 gap-4 w-40 items-center">
        <span>普通按钮:</span> <KButton >取消</KButton>
        <span>主要按钮:</span> <KButton main >新增</KButton>
        <span>次级按钮:</span> <KButton secondary >导出</KButton>
        <span>文字按钮:</span> <KButton text >编辑</KButton>
        <span>icon按钮:</span> <KButton icon ><IconAdd /></KButton>
      </div>
      `
    };
  }
};
export const disabled: Story = {
  name: '禁用按钮',
  args: {
    disabled: true
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd },
      setup() {
        return { args, IconAdd };
      },
      template: `
      <div class="flex gap-4">
        <KButton disabled>按钮</KButton>
        <KButton main disabled>按钮</KButton>
        <KButton secondary disabled>按钮</KButton>
        <KButton text disabled>按钮</KButton>
        <KButton icon disabled>
          <IconAdd />
        </KButton>
      </div>
      `
    };
  }
};

export const loading: Story = {
  name: '加载中',
  args: {
    value: 'Button',
    loading: true
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd },
      setup() {
        return { args, IconAdd };
      },
      template: `
      <div class="flex gap-4">
        <KButton loading>按钮</KButton>
        <KButton loading main>按钮</KButton>
        <KButton loading secondary>按钮</KButton>
        <KButton loading text>按钮</KButton>
        <KButton loading icon>
          <IconAdd />
        </KButton>
      </div>
      `
    };
  }
};

export const size: Story = {
  name: '不同尺寸',
  args: {
    value: 'Button',
    size: 'base'
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd },
      setup() {
        return { args, IconAdd };
      },
      template: `
      <div class="flex gap-4">
        <KButton >按钮</KButton>
        <KButton main >按钮</KButton>
        <KButton secondary >按钮</KButton>
        <KButton text >按钮</KButton>
        <KButton icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton size='sm'>按钮</KButton>
        <KButton size='sm' main>按钮</KButton>
        <KButton size='sm' secondary>按钮</KButton>
        <KButton size='sm' text>按钮</KButton>
        <KButton size='sm' icon>
          <IconAdd />
        </KButton>
      </div>
      `
    };
  }
};

// el 颜色

export const elTypeColor: Story = {
  name: 'elTypeColor',
  args: {},
  render: (args: any) => {
    return {
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
      <div class="flex gap-4">
        <KButton type="primary" >按钮</KButton>
        <KButton type="primary" main >按钮</KButton>
        <KButton type="primary" secondary >按钮</KButton>
        <KButton type="primary" text >按钮</KButton>
        <KButton type="primary" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="success" >按钮</KButton>
        <KButton type="success" main >按钮</KButton>
        <KButton type="success" secondary >按钮</KButton> 
        <KButton type="success" text >按钮</KButton>
        <KButton type="success" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="warning" >按钮</KButton>
        <KButton type="warning" main >按钮</KButton>
        <KButton type="warning" secondary >按钮</KButton>
        <KButton type="warning" text >按钮</KButton>
        <KButton type="warning" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="danger" >按钮</KButton>
        <KButton type="danger" main >按钮</KButton>
        <KButton type="danger" secondary >按钮</KButton>
        <KButton type="danger" text >按钮</KButton>
        <KButton type="danger" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="info" >按钮</KButton>
        <KButton type="info" main >按钮</KButton>
        <KButton type="info" secondary >按钮</KButton>
        <KButton type="info" text >按钮</KButton>
        <KButton type="info" icon >
          <IconAdd />
        </KButton>
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
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
      <div class="flex gap-4">
        <KButton color="#ff5500" >按钮</KButton>
        <KButton color="#ff5500" main >按钮</KButton>
        <KButton color="#ff5500" secondary >按钮</KButton>
        <KButton color="#ff5500" text >按钮</KButton>
        <KButton color="#ff5500" icon >
          <IconAdd />
        </KButton>
      </div>
      `
    };
  }
};
