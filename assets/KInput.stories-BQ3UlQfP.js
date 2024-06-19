import{d as q,r,a as G,o as J,c as Q,b as U,e as X,m as Y,u as Z,w as ee,f as te,n as ne,g as re}from"./vue.esm-bundler-i_Gm276z.js";import{g as ae}from"./index-BA0qWRNh.js";const a=q({name:"KInput",__name:"input",props:{size:{default:"base"}},setup(t,{expose:e}){const s=t,u=r(null);return e({focus:()=>{var n;(n=u.value)==null||n.focus()},blur:()=>{var n;(n=u.value)==null||n.blur()},select:()=>{var n;(n=u.value)==null||n.select()},clear:()=>{var n;(n=u.value)==null||n.clear()},resizeTextarea:()=>{var n;(n=u.value)==null||n.resizeTextarea()}}),(n,de)=>{const O=G("el-input");return J(),Q(O,Y({ref_key:"inputRef",ref:u,class:"k-input"},n.$attrs,{size:Z(ae)(s.size)}),U({_:2},[X(n.$slots,(me,g)=>({name:g,fn:ee(j=>[te(n.$slots,g,ne(re(j)))])}))]),1040,["size"])}}});a.__docgenInfo={name:"KInput",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"select"},{name:"clear"},{name:"resizeTextarea"}],props:[{name:"size",defaultValue:{func:!1,value:"'base'"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/input/input.vue"]};const xe={title:"Data Entry(DE)/KInput",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"双向绑定的值"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否展示删除按钮"},width:{control:"text",description:"输入框宽度"},readonly:{control:"boolean",description:"是否只读"},showWordLimit:{control:"boolean",description:"是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效"},autosize:{control:"boolean",description:"textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }"},showPassword:{control:"boolean",description:"是否可以展示密码"},autocomplete:{control:"select",options:["off","on","name","email","username","new-password","current-password"],description:"原生 autocomplete 属性/更多相关属性查看MDN"},validateEvent:{control:"boolean",description:""}},args:{width:"200px",autosize:{minRows:2,maxRows:4}}},p={name:"默认用法",render:t=>{const e=r("");return{components:{KInput:a},setup(){return{text:e}},template:`
          <k-input v-model="text">
          </k-input>
      `}}},o={name:"禁用状态",render:t=>{const e=r("");return{components:{KInput:a},setup(){return{args:t,text:e}},template:`
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `}}},i={name:"一键清空",render:t=>{const e=r("");return{components:{KInput:a},setup(){return{args:t,text:e}},template:`
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `}}},d={name:"密码框",render:t=>{const e=r("");return{components:{KInput:a},setup(){return{args:t,text:e}},template:`
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `}}},m={name:"文本域",render:t=>{const e=r("");return{components:{KInput:a},setup(){return{args:t,text:e}},template:`
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `}}},l={name:"自适应文本域",render:t=>{const e=r(""),s=r("");return{components:{KInput:a},setup(){return{args:t,text:e,text1:s}},template:`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      `}}},c={name:"插槽类型",render:t=>{const e=r(""),s=r("");return{components:{KInput:a},setup(){return{args:t,text:e,text1:s}},template:`
      
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
    
      `}}},x={name:"尺寸",render:t=>{const e=r(""),s=r("");return{components:{KInput:a},setup(){return{args:t,text:e,text1:s}},template:`
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
      `}}},v={name:"输入长度限制",render:t=>{const e=r(""),s=r("");return{components:{KInput:a},setup(){return{args:t,text:e,text1:s}},template:`
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      `}}};var k,w,h;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(h=(w=p.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var y,f,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var b,E,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var F,I,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var K,_,C;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var S,A,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,P,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,N,$;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(N=x.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var H,V,M;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(V=v.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const ve=["def","def1","def2","def4","def5","def6","def7","def8","def9"];export{ve as __namedExportsOrder,p as def,o as def1,i as def2,d as def4,m as def5,l as def6,c as def7,x as def8,v as def9,xe as default};
