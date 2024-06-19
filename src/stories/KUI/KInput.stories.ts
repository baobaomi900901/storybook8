import type { Meta, StoryObj } from "@storybook/vue3";
import {KInput} from "@components/input";
import { ref } from "vue";
const meta = {
  title: "Data Entry(DE)/KInput",
  component: KInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "text",
      description: "双向绑定的值",
    },
    disabled: { control: "boolean", description: "是否禁用" },
    clearable: {
      control: "boolean",
      description: "是否展示删除按钮",
    },
    width: {
      control: "text",
      description: "输入框宽度",
    },
    readonly: { control: "boolean", description: "是否只读" },
    showWordLimit: {
      control: "boolean",
      description:
        "是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效",
    },
    autosize: {
      control: "boolean",
      description:
        "textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }",
    },
    showPassword: { control: "boolean", description: "是否可以展示密码" },
    autocomplete: {
      control: "select",
      options: [
        "off",
        "on",
        "name",
        "email",
        "username",
        "new-password",
        "current-password",
      ],
      description: "原生 autocomplete 属性/更多相关属性查看MDN",
    },
    validateEvent: { control: "boolean", description: "" },
  },
  args: {
    width: "200px",
    autosize: { minRows: 2, maxRows: 4 },
  },
} satisfies Meta<typeof KInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const def: Story = {
  name: "默认用法",
  render: (args: any) => {
    const text = ref("");
    return {
      components: { KInput },
      setup() {
        return { text };
      },
      template: `
          <k-input v-model="text">
          </k-input>
      `,
    };
  },
};
export const def1: Story = {
  name: "禁用状态",
  render: (args: any) => {
    const text = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `,
    };
  },
};
export const def2: Story = {
  name: "一键清空",
  render: (args: any) => {
    const text = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `,
    };
  },
};
export const def4: Story = {
  name: "密码框",
  render: (args: any) => {
    const text = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `,
    };
  },
};
export const def5: Story = {
  name: "文本域",
  render: (args: any) => {
    const text = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `,
    };
  },
};
export const def6: Story = {
  name: "自适应文本域",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text, text1 };
      },
      template: `
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      `,
    };
  },
};
export const def7: Story = {
  name: "插槽类型",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text, text1 };
      },
      template: `
      
      <div  style="margin:5px">输入框头部插槽</div>
            <k-input v-model="text" >
             <template #prepend>Http://</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框尾部插槽</div>
            <k-input v-model="text">
            <template #append>.com</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框前置内容插槽</div>
        <k-input v-model="text"  >
            <template #prepend>
       <div>前置内容</div>
      </template>
       <template #append>
          <div>后置内容</div>
      </template>
     </k-input>
  
      <div  style="margin:5px">输入框后置内容插槽</div>
        <k-input v-model="text">
             <template #prepend>
         <div>前置内容</div>
      </template>
      <template #append>
   <div>后置内容</div>
      </template>
  </k-input>
    
      `,
    };
  },
};
export const def8: Story = {
  name: "尺寸",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text, text1 };
      },
      template: `
          <div  style="margin:5px">默认大小</div>
          <k-input v-model="text" type="text" :width="args.width" >
          </k-input>
          <div />
         <div  style="margin:5px"> size = lg</div>
          <k-input v-model="text" type="text" :width="args.width" size="lg">
          </k-input>
           <div  style="margin:5px"> size = base</div>
          <k-input v-model="text" type="text" :width="args.width" size="base">
          </k-input>
           <div  style="margin:5px"> size = sm</div>
          <k-input v-model="text1" type="text" :width="args.width" size="sm">
          </k-input>
      `,
    };
  },
};
export const def9: Story = {
  name: "输入长度限制",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: { KInput },
      setup() {
        return { args, text, text1 };
      },
      template: `
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      `,
    };
  },
};
