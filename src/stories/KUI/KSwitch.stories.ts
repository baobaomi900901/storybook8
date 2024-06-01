import type { Meta, StoryObj } from "@storybook/vue3";
import KSwitch from "../../package/components/switch/switch.vue";
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta = {
  title: "Data Entry(DE)/KSwitch",
  component: KSwitch,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    switchOnColor: { control: "color", description: "打开时的颜色",
     },
    switchOffColor: { control: "color", description: "关闭时的颜色" },
    activeText: { control: "text", description: "打开时的文字" },
    inactiveText: { control: "text", description: "关闭时的文字" },
  },
  args: {},
} satisfies Meta<typeof KSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {
    size: '',
    modelValue: "1",
    disabled: false,
    activeText: "开",
    inactiveText: "关",
  },
  render: (args: any) => {
    return {
      components: { KSwitch },
      setup() {
        return { args };
      },
      template: `
        <k-switch v-bind="args" >直角disabled</k-switch>
      `,
    };
  },
};

export const text: Story = {
  args: {
    activeText: "开",
    inactiveText: "关",
  },
};
export const customColor: Story = {
  args: {
    switchOnColor: "#ff0000",
    switchOffColor: "#00ff00",
  },
};
