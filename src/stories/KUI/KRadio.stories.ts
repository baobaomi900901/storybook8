import type { Meta, StoryObj } from "@storybook/vue3";
import { KRadio } from "../../kingsware-ui";
import { ref } from "vue";

const meta: Meta = {
  title: "Data Entry(DE)/KRadio",
  component: KRadio,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean", description: "是否禁用" },
    "v-model": { control: "text", description: "绑定值" },
    value: { control: "text", description: "控件值" },
    label: { control: "text", description: "控件文字" },
  },
  args: {},
} satisfies Meta<typeof KRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {
    disabled: false,
  },
  render: (args: any) => {
    return {
      components: { KRadio },
      setup() {
        const modelValue = ref(0);
        return { args, modelValue };
      },
      template: `
      <div class="flex gap-4">
        <k-radio v-model="modelValue" :value="0" >直角
        </k-radio>
        <k-radio v-model="modelValue" :value="1" >锐角
        </k-radio>
        <k-radio v-model="modelValue" :value="2" >钝角
        </k-radio>
        </ div>`,
    };
  },
};