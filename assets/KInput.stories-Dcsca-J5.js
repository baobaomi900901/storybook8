import{_ as r}from"./tree_transfer-jB80NPzD.js";import{r as n}from"./vue.esm-bundler-CDHMm6MS.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j={title:"Data Entry(DE)/KInput",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"双向绑定的值"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否展示删除按钮"},width:{control:"text",description:"输入框宽度"},readonly:{control:"boolean",description:"是否只读"},showWordLimit:{control:"boolean",description:"是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效"},autosize:{control:"boolean",description:"textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }"},showPassword:{control:"boolean",description:"是否可以展示密码"},autocomplete:{control:"select",options:["off","on","name","email","username","new-password","current-password"],description:"原生 autocomplete 属性/更多相关属性查看MDN"},validateEvent:{control:"boolean",description:""}},args:{width:"200px",autosize:{minRows:2,maxRows:4}}},p={name:"默认用法",render:e=>{const t=n("");return{components:{KInput:r},setup(){return{text:t}},template:`
          <k-input v-model="text">
          </k-input>
      `}}},u={name:"禁用状态",render:e=>{const t=n("");return{components:{KInput:r},setup(){return{args:e,text:t}},template:`
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `}}},s={name:"一键清空",render:e=>{const t=n("");return{components:{KInput:r},setup(){return{args:e,text:t}},template:`
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `}}},i={name:"密码框",render:e=>{const t=n("");return{components:{KInput:r},setup(){return{args:e,text:t}},template:`
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `}}},o={name:"文本域",render:e=>{const t=n("");return{components:{KInput:r},setup(){return{args:e,text:t}},template:`
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `}}},d={name:"自适应文本域",render:e=>{const t=n(""),a=n("");return{components:{KInput:r},setup(){return{args:e,text:t,text1:a}},template:`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      `}}},m={name:"插槽类型",render:e=>{const t=n(""),a=n("");return{components:{KInput:r},setup(){return{args:e,text:t,text1:a}},template:`
      
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
    
      `}}},l={name:"尺寸",render:e=>{const t=n(""),a=n("");return{components:{KInput:r},setup(){return{args:e,text:t,text1:a}},template:`
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
      `}}},c={name:"输入长度限制",render:e=>{const t=n(""),a=n("");return{components:{KInput:r},setup(){return{args:e,text:t,text1:a}},template:`
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      `}}};var x,v,g;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "默认用法",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          text
        };
      },
      template: \`
          <k-input v-model="text">
          </k-input>
      \`
    };
  }
}`,...(g=(v=p.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,w,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "禁用状态",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      \`
    };
  }
}`,...(h=(w=u.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var y,f,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "一键清空",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      \`
    };
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,F,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "密码框",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      \`
    };
  }
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var z,I,K;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "文本域",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      \`
    };
  }
}`,...(K=(I=o.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var b,A,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "自适应文本域",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      \`
    };
  }
}`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var C,L,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "插槽类型",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
      
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
    
      \`
    };
  }
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,R,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "尺寸",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
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
      \`
    };
  }
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var H,M,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "输入长度限制",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      \`
    };
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const q=["def","def1","def2","def4","def5","def6","def7","def8","def9"];export{q as __namedExportsOrder,p as def,u as def1,s as def2,i as def4,o as def5,d as def6,m as def7,l as def8,c as def9,j as default};
