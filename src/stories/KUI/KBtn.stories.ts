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
      options: ["normal", "main", "secondary", "text", "icon"],
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

const mytype = "secondary";
const mysize = "sm";
const mylabel = "按钮";
const myloading = false;
const mydisabled = false;

// default
export const def: Story = {
  name: "default",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KBtn v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      `,
    };
  },
};

// default
export const namedSlot: Story = {
  name: "icon传参",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
    iconLeft: IconAdd,
    iconRight: IconArrowBottom,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KBtn v-bind='args'>
            {{args.label}}
          </KBtn>
      `,
    };
  },
};

// icon left
export const iconLeft: Story = {
  name: "icon left",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
        <KBtn v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KBtn>
    `,
    };
  },
};

// icon right
export const iconRight: Story = {
  name: "icon right",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KBtn v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      `,
    };
  },
};

// sm
export const sm: Story = {
  name: "sm",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KBtn v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KBtn>
      `,
    };
  },
};
// icon and text
export const icon: Story = {
  name: "icon",
  args: {
    label: mylabel,
    type: "icon",
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KBtn, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KBtn v-bind='args'>
            <IconAdd />
          </KBtn>
      `,
    };
  },
};
