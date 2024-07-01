import type { Meta, StoryObj } from '@storybook/vue3';
import { KInput } from '@components';
import { ref } from 'vue';
const meta = {
  title: 'Data Entry(DE)/KInput',
  component: KInput,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof KInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const def: Story = {
  name: '默认用法',
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { text };
      },
      template: `
      <div class="w-60">
        <k-input v-model="text" >
        </k-input>
      </div>
      `
    };
  }
};
export const def1: Story = {
  name: '禁用状态',
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `
    };
  }
};
export const def2: Story = {
  name: '一键清空',
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `
    };
  }
};
export const def4: Story = {
  name: '密码框',
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `
    };
  }
};
export const def5: Story = {
  name: '文本域',
  render: (args: any) => {
    const text = ref('');
    return {
      components: { KInput },
      setup() {
        return { args, text };
      },
      template: `
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `
    };
  }
};
export const def6: Story = {
  name: '自适应文本域',
  render: (args: any) => {
    const text = ref('');
    const text1 = ref('');
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
      `
    };
  }
};
export const def7: Story = {
  name: '插槽类型',
  render: (args: any) => {
    const text = ref('');
    const text1 = ref('');
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
    
      `
    };
  }
};
export const def8: Story = {
  name: '尺寸',
  render: (args: any) => {
    const text = ref('');
    const text1 = ref('');
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
      `
    };
  }
};
export const def9: Story = {
  name: '输入长度限制',
  render: (args: any) => {
    const text = ref('');
    const text1 = ref('');
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
      `
    };
  }
};
