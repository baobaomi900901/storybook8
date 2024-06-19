import{d as S,r as u,c as z,w as B,a as K,o as F,b as D,m as E}from"./vue.esm-bundler-CHOSw6HX.js";import{g as N}from"./index-0r_fcLWx.js";const c=S({name:"KSwitch",__name:"switch",props:{modelValue:{type:Boolean},switchOnColor:{default:""},switchOffColor:{default:""},activeText:{},inactiveText:{},disabled:{type:Boolean},width:{},loading:{type:Boolean},size:{}},emits:["update:modelValue","change"],setup(n,{expose:T,emit:k}){const e=n,i=k,l=u(),r=u(e.modelValue),V=z(()=>({width:e.width,loading:e.loading,disabled:e.disabled,activeText:e.activeText,inactiveText:e.inactiveText,size:N(e.size)}));B(()=>e.modelValue,t=>{r.value=t});function O(t){i("update:modelValue",t),i("change",t)}function b(){var t;(t=l.value)==null||t.focus()}return T({focus:b}),(t,d)=>{const y=K("el-switch");return F(),D(y,E({ref_key:"kSwitchRef",ref:l,modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),class:"k-switch"},V.value,{style:{"--el-switch-on-color":e.switchOnColor,"--el-switch-off-color":e.switchOffColor},"inline-prompt":"",onChange:O}),null,16,["modelValue","style"])}}});c.__docgenInfo={name:"KSwitch",exportName:"default",displayName:"switch",description:"",tags:{},expose:[{name:"focus"}],props:[{name:"switchOnColor",defaultValue:{func:!1,value:"''"}},{name:"switchOffColor",defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/switch/switch.vue"]};const P={title:"Data Entry(DE)/KSwitch",component:c,tags:["autodocs"],argTypes:{switchOnColor:{control:"color",description:"打开时的颜色"},switchOffColor:{control:"color",description:"关闭时的颜色"},activeText:{control:"text",description:"打开时的文字"},inactiveText:{control:"text",description:"关闭时的文字"}},args:{}},o={args:{size:"",modelValue:"1",disabled:!1,activeText:"开",inactiveText:"关"},render:n=>({components:{KSwitch:c},setup(){return{args:n}},template:`
        <k-switch v-bind="args" >直角disabled</k-switch>
      `})},a={args:{activeText:"开",inactiveText:"关"}},s={args:{switchOnColor:"#ff0000",switchOffColor:"#00ff00"}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,w,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    activeText: "开",
    inactiveText: "关"
  }
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var v,x,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    switchOnColor: "#ff0000",
    switchOffColor: "#00ff00"
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const U=["def","text","customColor"];export{U as __namedExportsOrder,s as customColor,o as def,P as default,a as text};
