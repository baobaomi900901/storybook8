import type { Meta, StoryObj } from "@storybook/vue3";
import KSelect from "../../package/components/select/select.vue";
import KOption from "../../package/components/select/option.vue";
import { ref } from "vue";
const meta = {
  title: "Data Entry(DE)/KSelect",
  component: KSelect,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "text",
      description:
        "适用广泛的基础单选 v-model 的值为当前被选中的 el-option 的 value 属性值",
    },
    multiple: {
      control: "boolean",
      description: "是否多选",
    },
    disabled: { control: "boolean", description: "是否禁用" },
    valueKey: {
      control: "text",
      description: "作为 value 唯一标识的键名，绑定值为对象类型时必填",
    },
    size: {
      control: "select",
      options: ["", "large", "default", "small"],
      description: "输入框尺寸",
    },
    collapseTags: {
      control: "boolean",
      description: "多选时是否将选中值按文字的形式展示",
    },
    collapseTagsTooltip: {
      control: "boolean",
      description:
        "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
    },
    multipleLimit: {
      control: "number",
      description:
        "multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制",
    },
    name: {
      control: "text",
      description: "Select 输入框的原生 name 属性",
    },
    effect: {
      control: "select",
      options: ["dark", "light"],
      description: "tooltip 主题，内置了 dark / light 两种",
    },
    autocomplete: {
      control: "select",
      options: ["off", "on"],
      description: "Select 输入框的原生 autocomplete 属性,更多查看MDN",
    },
    placeholder: {
      control: "text",
      description: "占位符，默认为“Select”",
    },
    filterable: {
      control: "boolean",
      description: "Select 组件是否可筛选",
    },
    allowCreate: {
      control: "boolean",
      description:
        "是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。",
    },
    filterMethod: {
      description: "自定义筛选方法",
    },
    remote: {
        control: "boolean",
        description: "其中的选项是否从服务器远程加载",
      },
  },
  args: {},
} satisfies Meta<typeof KSelect>;
export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: "默认用法",
  args: {
    modelValue: "",
  },
  render: (args) => {
    const text = ref("");

    return {
      components: { KSelect, KOption },
      setup() {
        return { args, text };
      },
      template: `
            <k-select v-model="text">
             <k-option :value="'1'" :key="'1'"  :label="'1'"/>
             <k-option :value="'2'" :key="'2'"  :label="'2'"/>
             <k-option :value="'3'" :key="'3'"  :label="'3'"/>
            </k-select>
        `,
    };
  },
};
export const def1: Story = {
  name: "默认用法",
  args: {
    modelValue: "",
  },
  render: (args) => {
    const text = ref("");

    return {
      components: { KSelect, KOption },
      setup() {
        return { args, text };
      },
      template: `
              <k-select v-model="text">
               <k-option :value="'1'" :key="'1'"  :label="'1'"/>
               <k-option :value="'2'" :key="'2'"  :label="'2'"/>
               <k-option :value="'3'" :key="'3'"  :label="'3'"/>
              </k-select>
          `,
    };
  },
};
