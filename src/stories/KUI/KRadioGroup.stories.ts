// @ts-ignore
import type { Meta, StoryObj } from "@storybook/vue3";
import { KRadio, KRadioGroup } from "@components";
// @ts-ignore
import { ref } from "vue";

const meta: Meta = {
  title: "Data Entry(DE)/KRadioGroup",
  component: KRadioGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      table: { // 显示文档信息
        type: {
          summary: "string", // 类型
        },
        defaultValue: { // 默认值
          summary: "row",
        },
      },
      control: "select",
      options: ["row", "column"],
      description: "布局方向",
    },
    change: {
      description: "? 事件说明",
    },
    'update:modelValue': {
      description: " ? 事件说明",
    },
  },
  args: {},
} satisfies Meta<typeof KRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {
    direction: "row",
  },
  render: (args: any) => {
    return {
      components: { KRadioGroup, KRadio },
      setup() {
        const modelValue = ref(0);
        return { args, modelValue };
      },
      template: `
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`,
    };
  },
};


export const column: Story = {
  args: {
    direction: "column",
  },
  render: (args: any) => {
    return {
      components: { KRadioGroup, KRadio },
      setup() {
        const modelValue = ref(0);
        return { args, modelValue };
      },
      template: `
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`,
    };
  },
};
