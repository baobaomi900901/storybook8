import type { Meta, StoryObj } from '@storybook/vue3';
import { KInput, KInputGroup, KSelect, KOption, KButton } from '@components';
import { ref } from 'vue';
import { de } from 'element-plus/es/locale';
import '../../output.css';

const meta = {
  title: 'Data Entry(DE)/KInputGroup',
  component: KInputGroup,
  tags: ['autodocs'],
  argTypes: {
    prepend: {
      description: '前置插槽, 放置 button, select'
    },
    append: {
      description: '后置插槽, 放置 button, select'
    },
    default: {
      description: '放置 input'
    }
  },
  args: {}
} satisfies Meta<typeof KInputGroup>;
export default meta;

type Story = StoryObj<typeof meta>;
export const def: Story = {
  name: '默认用法',
  args: {},
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInputGroup, KInput, KSelect, KOption, KButton },
      setup() {
        return { args, text };
      },
      template: `
        <KInputGroup>
          <template #prepend>
          https://
          </template>
          <KInput v-model="bbm" placeholder="请输入"></KInput>
          <template #append>
          .com
          </template>
        </KInputGroup>
      `
    };
  }
};

import inputGroupdoc from './inputGroupdoc.vue';
import inputGroupdocDoc from './inputGroupdoc.vue?raw';
export const inputGroupdocSB: Story = {
  name: 'inputGroupdoc :  slot 插入其他组件',
  render: (args: any) => ({
    components: { inputGroupdoc },
    setup() {
      return { args };
    },
    template: '<inputGroupdoc v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: inputGroupdocDoc
      }
    }
  }
};

// TODO: 开发, inputGroup 控制 input 尺寸
