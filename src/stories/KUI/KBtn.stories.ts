import type { Meta, StoryObj } from "@storybook/vue3";
import KBtn from "../../package/components/btn/btn.vue";
import { IconAdd, IconArrowBottom } from "ksw-vue-icon";

const meta = {
  title: "Base(B)/KBtn",
  component: KBtn,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["normal", "main", "secondary", "text"],
      description:
        "按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }",
    },
    label: { control: "text", description: "按钮文字" },
    size: {
      control: "select",
      options: ["base", "sm"],
      description: "按钮大小",
    },
    iconLeft: { control: "object", description: "文字左边图标" },
    iconRight: { control: "object", description: "文字右边图标" },
    disabled: { control: "boolean", description: "是否禁用" },
    loading: { control: "boolean", description: "是否加载中" },
    loadingIcon: { control: "object", description: "加载图标" },
  },
  args: {
    type: "normal",
    label: "按钮1",
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof KBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const normal: Story = {
  args: {
    label: "默认按钮",
  },
  render: (args: any) => {
    return {
      components: { KBtn },
      setup() {
        return { args };
      },
      template: `
        <k-btn>
        {{ args.label }}
        </k-btn>`,
    };
  },
};
// icon and text
export const iconAndText: Story = {
  name: "具名插槽写法",
  args: {
    label: "双边图标",
    iconLeft: IconAdd,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
        <KBtn>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            123
        </KBtn>
    `,
    };
  },
};
// only icon
export const onlyIcon: Story = {
  args: {
    iconLeft: IconAdd,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd },
      setup() {
        return { args };
      },
      template: `
        <k-btn >
            <IconAdd />
        </k-btn>`,
    };
  },
};
