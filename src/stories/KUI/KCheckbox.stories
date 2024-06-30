import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from 'vue'
import { KCheckbox, KCheckboxGroup } from "@components";
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta = {
  title: "Data Entry(DE)/KCheckbox",
  component: KCheckbox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["base", "sm", "lg"],
      description: "大小, sm: 小尺寸、base: 默认尺寸",
    },
  },
  args: {
    size: "base",
  },
} satisfies Meta<typeof KCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: "基础用法",
  args: {
    label: "复选框",
  },
  render: (args: any) => {
    return {
      components: { KCheckbox },
      setup() {
        const checkboxes = ref({
          checked1: true,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false,
          checked6: false,
          checked7: false,
          checked8: false,
        });
        return { args, checkboxes };
      },
      template: `
          <div>
            <KCheckbox :label="args.label" v-model="checkboxes.checked1" size="lg"/>
            <KCheckbox :label="args.label" v-model="checkboxes.checked2" size="lg"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked3"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked4"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked5" size="sm"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked6" size="sm"/>
          </div>
          <div>
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked7" />
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked8" disabled/>
          </div>
      `,
    };
  },
};

export const disabled: Story = {
  name: "禁用状态",
  args: {
    name: "禁用",
    disabled: false,
  },
  render: (args: any) => {
    return {
      components: { KCheckbox },
      setup() {
        return { args };
      },
      template: `
          <KCheckbox v-bind="args" disabled >
            {{args.name}}
          </KCheckbox>
          <KCheckbox v-bind="args" >
            不{{args.name}}
          </KCheckbox>
      `,
    };
  },
};

export const checkboxGropu: Story = {
  name: "多选框组",
  args: {
    Checkbox1: "复选框 1",
    Checkbox2: "复选框 2",
    Checkbox3: "复选框 3",
    Checkbox4: "禁用",
    Checkbox5: "选择和禁用",
  },
  render: (args: any) => {
    return {
      components: { KCheckboxGroup, KCheckbox },
      setup() {
        const checkList = ref([
          '复选框 1',
          '选择和禁用',
        ]);
        return { args, checkList };
      },
      template: `
          <KCheckboxGroup v-model="checkList">
            <KCheckbox :label="args.Checkbox1" value="复选框 1" />
            <KCheckbox :label="args.Checkbox2" />
            <KCheckbox :label="args.Checkbox3" />
            <KCheckbox :label="args.Checkbox4" disabled />
            <KCheckbox :label="args.Checkbox5" value="选择和禁用" disabled />
          </KCheckboxGroup>
      `,
    };
  },
};

import Indeterminate from '@src/components/checkbox/Indeterminate.vue';
import IndeterminateCode from '@src/components/checkbox/Indeterminate.vue?raw';
export const indeterminate: Story = {
  name: "中间状态",
  render: (args: any) => ({
    components: { Indeterminate },
    setup() {
      return { args };
    },
    template: '<Indeterminate v-bind="args" />',
  }),
  parameters: {
    docs: {
      source: {
        code: IndeterminateCode,
      },
    },
  },
};

import minMaxCheckbox from '../../components/checkbox/minMaxCheckbox.vue';
import minMaxCheckboxCode from '../../components/checkbox/minMaxCheckbox.vue?raw';
export const minMax: Story = {
  name: "可选项目数量的限制",
  render: (args: any) => ({
    components: { minMaxCheckbox },
    setup() {
      return { args };
    },
    template: '<minMaxCheckbox v-bind="args" />',
  }),
  parameters: {
    docs: {
      source: {
        code: minMaxCheckboxCode,
      },
    },
  },
};