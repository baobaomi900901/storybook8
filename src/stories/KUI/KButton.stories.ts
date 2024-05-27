import type { Meta, StoryObj } from "@storybook/vue3";
import { KButton } from "../../kingsware-ui";
import { IconAdd, IconArrowBottom } from "ksw-vue-icon";
console.log("IconAdd =>>", IconAdd);
console.log("IconArrowBottom =>>", IconArrowBottom);

const meta = {
  title: "Base(B)/KButton",
  component: KButton,
  tags: ["autodocs"],
  // parameters: { // 这里是为了让文档中显示slot
  //   slots: {
  //     default: {
  //       description: "Default slot",
  //       template: `<p>{{ args.default }}</p>`,
  //     },
  //   },
  // },
  argTypes: {
    type: {
      control: "select",
      options: ["normal","main", "secondary", "text"],
      description: "按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }",
    },
    label: { control: "text", description: "按钮文字" },
    size: { control: "select", options: ["base", "sm"],description: "按钮大小" }, 
    iconLeft: { control: "object", description: "文字左边图标"},
    iconRight: { control: "object", description: "文字右边图标"},
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
} satisfies Meta<typeof KButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const normal: Story = {
  args: {
    label: "默认按钮",
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

export const main: Story = {
  args: {
    label: "主要按钮",
    type: "main",
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

export const secondary: Story = {
  args: {
    label: "次级按钮",
    type: "secondary",
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

// disabled
export const disabled: Story = {
  args: {
    label: "禁用按钮",
    disabled: true,
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

// text
export const text: Story = {
  args: {
    label: "文字按钮",
    type: "text",
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

// loading
export const loading: Story = {
  args: {
    label: "加载中",
    loading: true,
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

// icon and text
export const iconAndText: Story = {
  args: {
    label: "左边图标",
    iconLeft: IconAdd,
    iconRight: IconArrowBottom,
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        {{ args.label }}
        </k-button>`,
    };
  },
};

// only icon
export const onlyIcon: Story = {
  args: {
    iconLeft: IconAdd,
  },
  render: (args:any) => {
    return {
      components: { KButton },
      setup() {
        return { args };
      },
      template: `
        <k-button v-bind="args">
        </k-button>`,
    };
  },
};