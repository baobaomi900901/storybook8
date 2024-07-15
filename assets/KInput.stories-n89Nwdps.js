import"./button-e4jVQeVe.js";import{c as W}from"./tree_select-NFGLrUgD.js";import"./radio_group-DSe1KvYi.js";import{r as n,a as c,o as i,b as u,c as l,y as p}from"./vue.esm-bundler-BJoIvmbj.js";import"./index-nFJc4fXK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={class:"w-60"},z={__name:"disabled",setup(t){const e=n("");return(a,r)=>{const o=c("k-input");return i(),u("div",O,[l(o,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),placeholder:"Disabled Input",disabled:""},null,8,["modelValue"])])}}};z.__docgenInfo={exportName:"default",displayName:"disabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/disabled.vue"]};const q=`
<template>
  <div class="w-60">
    <k-input v-model="text" placeholder="Disabled Input" disabled> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped>
</style>`,A={class:"w-60"},K={__name:"clearable",setup(t){const e=n("");return(a,r)=>{const o=c("k-input");return i(),u("div",A,[l(o,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),placeholder:"请输入",clearable:""},null,8,["modelValue"])])}}};K.__docgenInfo={exportName:"default",displayName:"clearable",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/clearable.vue"]};const G=`
<template>
  <div class="w-60">
    <k-input v-model="text" placeholder="请输入" clearable> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped>
</style>`,H={class:"grid grid-cols-2 gap-4"},J=p("div",null,"密码输入框:",-1),M=p("div",null,"显示密码按钮:",-1),T={__name:"showPassword",setup(t){const e=n(""),a=n("");return(r,o)=>{const s=c("k-input");return i(),u("div",H,[J,M,l(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),type:"password"},null,8,["modelValue"]),l(s,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=d=>a.value=d),showPassword:""},null,8,["modelValue"])])}}};T.__docgenInfo={exportName:"default",displayName:"showPassword",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/showPassword.vue"]};const Q=`<template>
  <div class="grid grid-cols-2 gap-4">
    <div>密码输入框:</div>
    <div>显示密码按钮:</div>
    <k-input v-model="Password" type="password"></k-input>
    <k-input v-model="Password2" showPassword></k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const Password = ref('');
const Password2 = ref('');
<\/script>
<style scoped>
</style>`,X={class:"grid grid-cols-2 gap-4"},Y=p("div",null,"普通文本域:",-1),Z=p("div",null,"自适应高度:",-1),j={__name:"textarea",setup(t){const e=n(""),a=n("");return(r,o)=>{const s=c("k-input");return i(),u("div",X,[Y,Z,l(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),type:"textarea",placeholder:"Enter text"},null,8,["modelValue"]),l(s,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=d=>a.value=d),type:"textarea",placeholder:"Enter text",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])])}}};j.__docgenInfo={exportName:"default",displayName:"textarea",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/textarea.vue"]};const ee=`<template>
  <div class="grid grid-cols-2 gap-4">
    <div>普通文本域:</div>
    <div>自适应高度:</div>
    <k-input v-model="text" type="textarea" placeholder="Enter text"> </k-input>
    <k-input v-model="text2" type="textarea" placeholder="Enter text" :autosize="{ minRows: 2, maxRows: 4 }"> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const text = ref('');
const text2 = ref('');
<\/script>
<style scoped>
</style>`,te={class:"grid grid-cols-2 gap-4"},oe=p("div",null,"输入框:",-1),se=p("div",null,"文本域:",-1),C={__name:"maxInput",setup(t){const e=n("");return(a,r)=>{const o=c("k-input");return i(),u("div",te,[oe,se,l(o,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"]),l(o,{modelValue:e.value,"onUpdate:modelValue":r[1]||(r[1]=s=>e.value=s),type:"textarea",placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"])])}}};C.__docgenInfo={exportName:"default",displayName:"maxInput",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/maxInput.vue"]};const re=`
<template>
  <div class="grid grid-cols-2 gap-4">
    <div>输入框:</div>
    <div>文本域:</div>
    <k-input v-model="text" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
    <k-input v-model="text" type="textarea" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped>
</style>`,ie={title:"Data Entry(DE)/KInput",component:W,tags:["autodocs"],argTypes:{type:{control:"text",description:"原生input类型"},clearable:{control:"boolean",description:"是否可清空"},showPassword:{control:"boolean",description:"是否显示密码"},maxlength:{control:"number",description:"最大输入长度"},showWordLimit:{control:"boolean",description:"显示输入字数限制"},autosize:{control:"object",description:"文本域自适应高度, 接收对象例如 { minRows: 2, maxRows: 6 }"},blur:{description:"el, 使 input 失去 焦点"},focus:{description:"el, 使 input 获取 焦点"},select:{description:"el, 选中 input 中的文字"},resizeTextarea:{description:"el, 改变 textarea 大小"}},args:{}},m={name:"默认用法",args:{type:"text",clearable:!1},render:t=>{const e=n("");return{components:{KInput:W},setup(){return{args:t,text:e}},template:`
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      `}}},v={name:"disabled : 禁止输入",render:t=>({components:{disabled:z},setup(){return{args:t}},template:'<disabled v-bind="args" />'}),parameters:{docs:{source:{code:q}}}},x={name:"clearable : 一键清空",render:t=>({components:{clearable:K},setup(){return{args:t}},template:'<clearable v-bind="args" />'}),parameters:{docs:{source:{code:G}}}},_={name:"showPassword : 显示密码",render:t=>({components:{showPassword:T},setup(){return{args:t}},template:'<showPassword v-bind="args" />'}),parameters:{docs:{source:{code:Q}}}},g={name:"textarea : 文本域",render:t=>({components:{ktextarea:j},setup(){return{args:t}},template:'<ktextarea v-bind="args" />'}),parameters:{docs:{source:{code:ee}}}},b={name:"maxInput : 文本域",render:t=>({components:{maxInput:C},setup(){return{args:t}},template:'<maxInput v-bind="args" />'}),parameters:{docs:{source:{code:re}}}};var w,k,y;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '默认用法',
  args: {
    type: 'text',
    clearable: false
  },
  render: (args: any) => {
    const text = ref('');
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
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      \`
    };
  }
}`,...(y=(k=m.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,h,V;v.parameters={...v.parameters,docs:{...(f=v.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'disabled : 禁止输入',
  render: (args: any) => ({
    components: {
      disabled
    },
    setup() {
      return {
        args
      };
    },
    template: '<disabled v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: disabledDoc
      }
    }
  }
}`,...(V=(h=v.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var I,P,S;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'clearable : 一键清空',
  render: (args: any) => ({
    components: {
      clearable
    },
    setup() {
      return {
        args
      };
    },
    template: '<clearable v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: clearableDoc
      }
    }
  }
}`,...(S=(P=x.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var D,B,$;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'showPassword : 显示密码',
  render: (args: any) => ({
    components: {
      showPassword
    },
    setup() {
      return {
        args
      };
    },
    template: '<showPassword v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: showPasswordDoc
      }
    }
  }
}`,...($=(B=_.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var N,E,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'textarea : 文本域',
  render: (args: any) => ({
    components: {
      ktextarea
    },
    setup() {
      return {
        args
      };
    },
    template: '<ktextarea v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: textareaDoc
      }
    }
  }
}`,...(U=(E=g.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var R,F,L;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'maxInput : 文本域',
  render: (args: any) => ({
    components: {
      maxInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<maxInput v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: maxInputDoc
      }
    }
  }
}`,...(L=(F=b.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const ue=["def","disabledSB","clearableSB","showPasswordSB","textareaSB","maxInputSB"];export{ue as __namedExportsOrder,x as clearableSB,m as def,ie as default,v as disabledSB,b as maxInputSB,_ as showPasswordSB,g as textareaSB};
