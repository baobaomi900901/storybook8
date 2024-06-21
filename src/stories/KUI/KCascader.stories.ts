import type { Meta, StoryObj } from "@storybook/vue3";
import { KCascader } from "@components";
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta = {
  title: "Data Entry(DE)/KCascader",
  component: KCascader,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof KCascader>;

export default meta;

type Story = StoryObj<typeof meta>;

import Basics from '@src/components/cascader/basics.vue';
import BasicsCode from '@src/components/cascader/basics.vue?raw';
export const basics: Story = {
  name: "基础用法",
  render: (args: any) => ({
    components: { Basics },
    setup() {
      return { args };
    },
    template: '<Basics v-bind="args" />',
  }),
  parameters: {
    docs: {
      source: {
        code: BasicsCode,
      },
    },
  },
};
