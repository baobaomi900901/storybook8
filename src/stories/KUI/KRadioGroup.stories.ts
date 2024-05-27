// @ts-ignore
import type { Meta, StoryObj } from "@storybook/vue3";
import { KRadioGroup,KRadio } from "../../kingsware-ui";
// @ts-ignore
import { ref } from "vue";

const meta: Meta = {
  title: "Data Entry(DE)/KRadioGroup",
  component: KRadioGroup,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof KRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  args: {
  },
  render: (args: any) => {
    return {
      components: { KRadioGroup,KRadio },
      setup() {
        const modelValue = ref(0);
        return { args, modelValue };
      },
      template: `
      <k-radio-group v-model="modelValue">
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