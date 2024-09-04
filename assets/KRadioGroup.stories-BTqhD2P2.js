import{_ as d,a as p}from"./radio_group-BJq7aPbM.js";import{f as y,r as R,j as f,k as F,l as e,o as N,e as a,E as n,t as C,u as t,G as S,F as T}from"./vue.esm-bundler-DnGJEZCU.js";import{A as E}from"./index-wXGUTIPA.js";import"./utils-7yzkk6k9.js";const w=y({__name:"RGbutton",setup(K){const s=R("1");return(v,r)=>{const o=f("KRadio"),i=f("KRadioGroup");return N(),F(i,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=D=>s.value=D),button:""},{default:e(()=>[a(o,{value:"0"},{default:e(()=>r[1]||(r[1]=[n("直角")])),_:1}),a(o,{value:"1"},{default:e(()=>r[2]||(r[2]=[n("钝角")])),_:1}),a(o,{value:"2"},{default:e(()=>r[3]||(r[3]=[n("锐角")])),_:1}),a(o,{value:"0",disabled:""},{default:e(()=>r[4]||(r[4]=[n("直角")])),_:1})]),_:1},8,["modelValue"])}}});w.__docgenInfo={exportName:"default",displayName:"RGbutton",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/RGbutton.vue"]};const U=`<template>
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
<\/script>`,B=y({__name:"RGsize",setup(K){const s=R("1"),v=R("1");return(r,o)=>(N(),C(T,null,[a(t(p),{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=i=>v.value=i),size:"sm"},{default:e(()=>[a(t(d),{value:"0"},{default:e(()=>o[2]||(o[2]=[n("直角")])),_:1}),a(t(d),{value:"1"},{default:e(()=>o[3]||(o[3]=[n("钝角")])),_:1}),a(t(d),{value:"2"},{default:e(()=>o[4]||(o[4]=[n("锐角")])),_:1}),a(t(d),{value:"0",disabled:""},{default:e(()=>o[5]||(o[5]=[n("90°")])),_:1})]),_:1},8,["modelValue"]),o[10]||(o[10]=S("br",null,null,-1)),a(t(p),{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),size:"sm",button:""},{default:e(()=>[a(t(d),{value:"0"},{default:e(()=>o[6]||(o[6]=[n("直角")])),_:1}),a(t(d),{value:"1"},{default:e(()=>o[7]||(o[7]=[n("钝角")])),_:1}),a(t(d),{value:"2"},{default:e(()=>o[8]||(o[8]=[n("锐角")])),_:1}),a(t(d),{value:"0",disabled:""},{default:e(()=>o[9]||(o[9]=[n("直角")])),_:1})]),_:1},8,["modelValue"])],64))}});B.__docgenInfo={exportName:"default",displayName:"RGsize",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/RGsize.vue"]};const $=`<template>
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
</style>`,J={title:"Data Entry(DE)/KRadioGroup",component:p,argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"}},u={args:{},render:K=>({components:{KRadioGroup:p,KRadio:d},setup(){const s=R(0);return{args:K,radio:s}},template:`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>`})},A=E(w,"button : 控制不同样式",U),l={name:"button : 控制不同样式",...A},I=E(B,"size : 不同尺寸",$),m={name:"size : 不同尺寸",...I};var b,c,g;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(c=u.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var G,z,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'button : 控制不同样式',
  ...doc1
}`,...(V=(z=l.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var k,_,x;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'size : 不同尺寸',
  ...doc2
}`,...(x=(_=m.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const L=["def","example2","example1"];export{L as __namedExportsOrder,u as def,J as default,m as example1,l as example2};
