import{_ as r}from"./radio-B593ZI12.js";import"./vue.esm-bundler-CHOSw6HX.js";import"./index-0r_fcLWx.js";const t={title:"Data Entry(DE)/KRadio",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"绑定值"},size:{control:"select",options:["base","sm"],description:"大小,['base', 'sm']"},disabled:{control:"boolean",description:"是否禁用"}},args:{}},e={args:{size:"",modelValue:"1",disabled:!1},render:i=>({components:{KRadio:r},setup(){return{args:i}},template:`
      <div style="display: flex; gap: 1rem">
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled="args.disabled" >直角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="1" :disabled="args.disabled" >锐角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="2" :disabled=true >钝角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled=true >直角disabled</k-radio>
      </div>
      `})};var a,s,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: '',
    modelValue: "1",
    disabled: false
  },
  render: (args: any) => {
    return {
      components: {
        KRadio
      },
      setup() {
        return {
          args
        };
      },
      template: \`
      <div style="display: flex; gap: 1rem">
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled="args.disabled" >直角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="1" :disabled="args.disabled" >锐角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="2" :disabled=true >钝角</k-radio>
        <k-radio v-model="args.modelValue" :size=args.size value="0" :disabled=true >直角disabled</k-radio>
      </div>
      \`
    };
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const u=["def"];export{u as __namedExportsOrder,e as def,t as default};
