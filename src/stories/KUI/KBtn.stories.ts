import type { Meta, StoryObj } from "@storybook/vue3";
import { KButton } from "@components";
import { IconAdd, IconArrowBottom } from "ksw-vue-icon";

const meta = {
  title: "Base(B)/KButton",
  component: KButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["normal", "main", "secondary", "text", "icon"],
    },
    label: { control: "text", description: "按钮文字" },
    size: {
      control: "select",
      options: ["base", "sm"],
    },
    disabled: "boolean",
    loading: "boolean",
    color: { control: "color", description: "按钮颜色" },
  },
} satisfies Meta<typeof KButton>;

export default meta;
type Story = StoryObj<typeof meta>;
const mytype = "secondary";
const mysize = "sm";
const mylabel = "按钮";
const myloading = false;
const mydisabled = false;

// default
export const def: Story = {
  name: "icon传参",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
    value: "",
    color: "",
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args, IconAdd, IconArrowBottom };
      },
      template: `
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom :color="args.color">
            {{args.label}}
          </KButton>
      `,
    };
  },
};

// 具名插槽
export const namedSlot: Story = {
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
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
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
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
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
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
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
    size: "sm",
    loading: myloading,
    disabled: mydisabled,
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
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
    iconLeft: IconAdd,
  },
  render: (args: any) => {
    return {
      components: { KButton, IconAdd, IconArrowBottom },
      setup() {
        return { args };
      },
      template: `
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      `,
    };
  },
};

// <IconAdd />
