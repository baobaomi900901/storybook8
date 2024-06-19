import type { Meta, StoryObj } from "@storybook/vue3";
import KRadio from "../../../k-component-lib/package/components/radio/radio.vue";

const meta: Meta = {
  title: "Data Entry(DE)/KRadio",
  component: KRadio,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text", description: "绑定值" },
    size: {
      control: "select",
      options: ["base", "sm"],
      description: "大小,['base', 'sm']",
    },
    disabled: { control: "boolean", description: "是否禁用" },
  },
  args: {},
} satisfies Meta<typeof KRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {
    size: '',
    modelValue: "1",
    disabled: false,
  },
  render: (args: any) => {
    return {
      components: { KRadio },
      setup() {
        return { args };
      },
      template: `
      <div style="display: flex; gap: 1rem">
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled="args.disabled" >直角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="1" :disabled="args.disabled" >锐角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="2" :disabled=true >钝角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled=true >直角disabled</k-radio>
      </div>
      `,
    };
  },
};
