import{_ as t,a as m}from"./radio_group-BVyi_CQ5.js";import{f as y,r as c,i as v,j as F,k as e,o as N,e as o,D as a,s as C,u as n,F as S,E as T}from"./vue.esm-bundler-D0aKWXXn.js";import{A as E}from"./index-wXGUTIPA.js";import"./utils-DE3h7KcC.js";const w=y({__name:"RGbutton",setup(p){const d=c("1");return(R,K)=>{const r=v("KRadio"),s=v("KRadioGroup");return N(),F(s,{modelValue:d.value,"onUpdate:modelValue":K[0]||(K[0]=B=>d.value=B),button:""},{default:e(()=>[o(r,{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(r,{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(r,{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(r,{value:"0",disabled:""},{default:e(()=>[a("直角")]),_:1})]),_:1},8,["modelValue"])}}});w.__docgenInfo={exportName:"default",displayName:"RGbutton",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/RGbutton.vue"]};const U=`<template>
  <KRadioGroup v-model="radio" button>
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('1');
<\/script>`,$=T("br",null,null,-1),D=y({__name:"RGsize",setup(p){const d=c("1"),R=c("1");return(K,r)=>(N(),C(S,null,[o(n(m),{modelValue:R.value,"onUpdate:modelValue":r[0]||(r[0]=s=>R.value=s),size:"sm"},{default:e(()=>[o(n(t),{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(n(t),{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(n(t),{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(n(t),{value:"0",disabled:""},{default:e(()=>[a("90°")]),_:1})]),_:1},8,["modelValue"]),$,o(n(m),{modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=s=>d.value=s),size:"sm",button:""},{default:e(()=>[o(n(t),{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(n(t),{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(n(t),{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(n(t),{value:"0",disabled:""},{default:e(()=>[a("直角")]),_:1})]),_:1},8,["modelValue"])],64))}});D.__docgenInfo={exportName:"default",displayName:"RGsize",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/RGsize.vue"]};const A=`<template>
  <KRadioGroup v-model="radioValue" size="sm">
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>90°</KRadio>
  </KRadioGroup>
  <br />
  <KRadioGroup v-model="radio" size="sm" button>
    <KRadio value="0">直角</KRadio>
    <KRadio value="1">钝角</KRadio>
    <KRadio value="2">锐角</KRadio>
    <KRadio value="0" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '@/components/radio';

const radio = ref('1');
const radioValue = ref('1');
<\/script>
<style>
</style>`,J={title:"Data Entry(DE)/KRadioGroup",component:m,argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"}},i={args:{},render:p=>({components:{KRadioGroup:m,KRadio:t},setup(){const d=c(0);return{args:p,radio:d}},template:`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>`})},I=E(w,"button : 控制不同样式",U),u={name:"button : 控制不同样式",...I},j=E(D,"size : 不同尺寸",A),l={name:"size : 不同尺寸",...j};var f,_,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const radio = ref(0);
        return {
          args,
          radio
        };
      },
      template: \`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>\`
    };
  }
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var g,G,z;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'button : 控制不同样式',
  ...doc1
}`,...(z=(G=u.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var V,k,x;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'size : 不同尺寸',
  ...doc2
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const L=["def","example2","example1"];export{L as __namedExportsOrder,i as def,J as default,l as example1,u as example2};
