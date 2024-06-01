import{d as _,b,e as k,w as y,f as S,o as z,c as B,g as K,m as E}from"./vue.esm-bundler-B5kV1v7-.js";import{g as F}from"./index-De_4ewB0.js";const D={class:"k-switch"},c=_({name:"KSwitch",__name:"switch",props:{modelValue:{type:Boolean},switchOnColor:{default:""},switchOffColor:{default:""},activeText:{},inactiveText:{},disabled:{type:Boolean},width:{},loading:{type:Boolean},size:{}},emits:["update:modelValue","change"],setup(n,{emit:x}){const e=n,i=x,r=b(e.modelValue),C=k(()=>({width:e.width,loading:e.loading,disabled:e.disabled,activeText:e.activeText,inactiveText:e.inactiveText,size:F(e.size)}));y(()=>e.modelValue,t=>{r.value=t});const T=t=>{i("update:modelValue",t),i("change",t)};return(t,l)=>{const V=S("el-switch");return z(),B("div",D,[K(V,E({modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=O=>r.value=O)},C.value,{style:{"--el-switch-on-color":e.switchOnColor,"--el-switch-off-color":e.switchOffColor},"inline-prompt":"",onChange:T}),null,16,["modelValue","style"])])}}});c.__docgenInfo={name:"KSwitch",exportName:"default",displayName:"switch",description:"",tags:{},props:[{name:"switchOnColor",defaultValue:{func:!1,value:"''"}},{name:"switchOffColor",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/switch/switch.vue"]};const P={title:"Data Entry(DE)/KSwitch",component:c,tags:["autodocs"],argTypes:{switchOnColor:{control:"color",description:"打开时的颜色"},switchOffColor:{control:"color",description:"关闭时的颜色"},activeText:{control:"text",description:"打开时的文字"},inactiveText:{control:"text",description:"关闭时的文字"}},args:{}},o={args:{size:"",modelValue:"1",disabled:!1,activeText:"开",inactiveText:"关"},render:n=>({components:{KSwitch:c},setup(){return{args:n}},template:`
        <k-switch v-bind="args" >直角disabled</k-switch>
      `})},a={args:{activeText:"开",inactiveText:"关"}},s={args:{switchOnColor:"#ff0000",switchOffColor:"#00ff00"}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: '',
    modelValue: "1",
    disabled: false,
    activeText: "开",
    inactiveText: "关"
  },
  render: (args: any) => {
    return {
      components: {
        KSwitch
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-switch v-bind="args" >直角disabled</k-switch>
      \`
    };
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    activeText: "开",
    inactiveText: "关"
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,g,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    switchOnColor: "#ff0000",
    switchOffColor: "#00ff00"
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const U=["def","text","customColor"];export{U as __namedExportsOrder,s as customColor,o as def,P as default,a as text};
