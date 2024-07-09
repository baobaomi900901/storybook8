import type { Meta, StoryObj } from '@storybook/vue3';
import { KSelect, KOption } from '@components';
import { ref } from 'vue';
import '../../output.css';

const meta = {
  title: 'Data Entry(DE)/KSelect',
  component: KSelect,
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
} satisfies Meta<typeof KSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// default
export const def: Story = {
  name: '默认',
  args: {},
  render: (args: any) => {
    return {
      components: { KSelect, KOption },
      setup() {
        const selectValue = ref('1');
        const options = [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '菜单'
          },
          {
            value: '2',
            label: '组件'
          },
          {
            value: '3',
            label: '流程'
          },
          {
            value: '4',
            label: '执行历史'
          }
        ];
        return { args, options, selectValue };
      },
      template: `
      <div class="flex gap-4">
        <KSelect v-model="selectValue">
          <KOption
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </KSelect>
      </div>
      `
    };
  }
};
