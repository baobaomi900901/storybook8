import{_ as B}from"./button-e4jVQeVe.js";import{b as y,K as v,c as O,_ as h,a as k}from"./tree_select-NFGLrUgD.js";import"./radio_group-DSe1KvYi.js";import{r as l,a as o,o as w,b as D,c as t,w as e,d as c}from"./vue.esm-bundler-BJoIvmbj.js";/* empty css               */import"./index-nFJc4fXK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={class:"inputGroupdoc"},g={__name:"inputGroupdoc",setup(n){const p=l(""),d=l("");return(C,r)=>{const m=o("KOption"),V=o("KSelect"),b=o("KInput"),S=o("KButton"),x=o("KInputGroup");return w(),D("div",E,[t(x,null,{prepend:e(()=>[t(V,{placeholder:"请选择",modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=s=>p.value=s),class:"w-40"},{default:e(()=>[t(m,{value:"全部"},{default:e(()=>[c("全部")]),_:1}),t(m,{value:"组件"},{default:e(()=>[c("组件")]),_:1})]),_:1},8,["modelValue"])]),append:e(()=>[t(S,{main:""},{default:e(()=>[c("搜索")]),_:1})]),default:e(()=>[t(b,{modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=s=>d.value=s),placeholder:"请输入",class:""},null,8,["modelValue"])]),_:1})])}}},N=y(g,[["__scopeId","data-v-685ec3dc"]]);g.__docgenInfo={exportName:"default",displayName:"inputGroupdoc",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/inputGroupdoc.vue"]};const $=`<template>
  <div class="inputGroupdoc">
    <KInputGroup>
      <template #prepend>
        <KSelect placeholder="请选择" v-model="selectValue" class="w-40">
          <KOption value="全部">全部</KOption>
          <KOption value="组件">组件</KOption>
        </KSelect>
      </template>
      <KInput v-model="inputValue" placeholder="请输入" class=""></KInput>
      <template #append>
        <KButton main>搜索</KButton>
      </template>
    </KInputGroup>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const selectValue = ref('');
const inputValue = ref('');
<\/script>
<style scoped>
@import url('../../output.css');
</style>`,H={title:"Data Entry(DE)/KInputGroup",component:v,tags:["autodocs"],argTypes:{prepend:{description:"前置插槽, 放置 button, select"},append:{description:"后置插槽, 放置 button, select"},default:{description:"放置 input"}},args:{}},a={name:"默认用法",args:{},render:n=>{const p=l("");return{components:{KInputGroup:v,KInput:O,KSelect:h,KOption:k,KButton:B},setup(){return{args:n,text:p}},template:`
        <KInputGroup>
          <template #prepend>
          https://
          </template>
          <KInput v-model="bbm" placeholder="请输入"></KInput>
          <template #append>
          .com
          </template>
        </KInputGroup>
      `}}},u={name:"inputGroupdoc :  slot 插入其他组件",render:n=>({components:{inputGroupdoc:N},setup(){return{args:n}},template:'<inputGroupdoc v-bind="args" />'}),parameters:{docs:{source:{code:$}}}};var i,K,_;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '默认用法',
  args: {},
  render: (args: any) => {
    const text = ref('');
    return {
      components: {
        KInputGroup,
        KInput,
        KSelect,
        KOption,
        KButton
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
        <KInputGroup>
          <template #prepend>
          https://
          </template>
          <KInput v-model="bbm" placeholder="请输入"></KInput>
          <template #append>
          .com
          </template>
        </KInputGroup>
      \`
    };
  }
}`,...(_=(K=a.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var f,G,I;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'inputGroupdoc :  slot 插入其他组件',
  render: (args: any) => ({
    components: {
      inputGroupdoc
    },
    setup() {
      return {
        args
      };
    },
    template: '<inputGroupdoc v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: inputGroupdocDoc
      }
    }
  }
}`,...(I=(G=u.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const J=["def","inputGroupdocSB"];export{J as __namedExportsOrder,a as def,H as default,u as inputGroupdocSB};
