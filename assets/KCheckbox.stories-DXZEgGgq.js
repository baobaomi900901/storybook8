import{a as t}from"./dropdown_item-DyleUnbW.js";import"./vue.esm-bundler-BuMKoFJh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m={title:"Data Entry(DE)/KCheckbox",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm","lg"],description:"大小, sm: 小尺寸、base: 默认尺寸"}},args:{size:"base"}},e={args:{label:"Checkbox"},render:a=>({components:{KCheckbox:t},setup(){return{args:a}},template:`
          <k-checkbox v-bind="args" />
      `})};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Checkbox"
  },
  render: (args: any) => {
    return {
      components: {
        KCheckbox
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <k-checkbox v-bind="args" />
      \`
    };
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["def"];export{b as __namedExportsOrder,e as def,m as default};
