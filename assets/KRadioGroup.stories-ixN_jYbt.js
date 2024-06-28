import{a as n,b as c}from"./tree_transfer-jB80NPzD.js";import{r as m}from"./vue.esm-bundler-CDHMm6MS.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v={title:"Data Entry(DE)/KRadioGroup",component:n,tags:["autodocs"],argTypes:{direction:{table:{type:{summary:"string"},defaultValue:{summary:"row"}},control:"select",options:["row","column"],description:"布局方向"},change:{description:"? 事件说明"},"update:modelValue":{description:" ? 事件说明"}},args:{}},r={args:{direction:"row"},render:e=>({components:{KRadioGroup:n,KRadio:c},setup(){const a=m(0);return{args:e,modelValue:a}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})},o={args:{direction:"column"},render:e=>({components:{KRadioGroup:n,KRadio:c},setup(){const a=m(0);return{args:e,modelValue:a}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})};var d,i,t;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: "row"
  },
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const modelValue = ref(0);
        return {
          args,
          modelValue
        };
      },
      template: \`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>\`
    };
  }
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var u,s,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: "column"
  },
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const modelValue = ref(0);
        return {
          args,
          modelValue
        };
      },
      template: \`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>\`
    };
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const V=["def","column"];export{V as __namedExportsOrder,o as column,r as def,v as default};
