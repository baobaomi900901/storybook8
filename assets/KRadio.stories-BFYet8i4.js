import{_ as s}from"./radio_group-CGkB-Q-w.js";import{f as N,r as p,t as E,G as c,e as l,l as d,u as t,F as G,o as D,E as r,j as K}from"./vue.esm-bundler-N-wW40t0.js";import{A as F}from"./index-wXGUTIPA.js";import"./utils-D2KGOJGy.js";const C={class:"flex gap-3"},S={class:"flex gap-3"},$=N({__name:"size",setup(f){const e=p("1");return(V,a)=>(D(),E(G,null,[c("div",C,[l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),value:"0"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o),value:"1"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),value:"2"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=o=>e.value=o),value:"0",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])]),c("div",S,[l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=o=>e.value=o),value:"0",size:"sm"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[5]||(a[5]=o=>e.value=o),value:"1",size:"sm"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[6]||(a[6]=o=>e.value=o),value:"2",size:"sm"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[7]||(a[7]=o=>e.value=o),value:"0",size:"sm",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])])],64))}});$.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/size.vue"]};const T=`<template>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0">直角</KRadio>
    <KRadio v-model="radioValue" value="1">钝角</KRadio>
    <KRadio v-model="radioValue" value="2">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
  </div>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0" size="sm">直角</KRadio>
    <KRadio v-model="radioValue" value="1" size="sm">钝角</KRadio>
    <KRadio v-model="radioValue" value="2" size="sm">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" size="sm" disabled>90°</KRadio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio } from '@/components/radio';

const radioValue = ref('1');
<\/script>`,A={class:"flex gap-3"},I=c("br",null,null,-1),w=N({__name:"color",setup(f){const e=p("1"),V=p("1");return(a,o)=>{const i=K("KRadio"),B=K("KRadioGroup");return D(),E(G,null,[c("div",A,[l(i,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),value:"0",color:"#ff5500"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=u=>e.value=u),value:"1",color:"#ff5500"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=u=>e.value=u),value:"2",color:"#ff5500"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=u=>e.value=u),value:"0",color:"#ff5500",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])]),I,l(B,{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=u=>V.value=u),button:""},{default:d(()=>[l(i,{value:"0",color:"#ff5500"},{default:d(()=>[r("直角")]),_:1}),l(i,{value:"1",color:"#ff5500"},{default:d(()=>[r("钝角")]),_:1}),l(i,{value:"2",color:"#ff5500"},{default:d(()=>[r("锐角")]),_:1}),l(i,{value:"0",color:"#ff5500",disabled:""},{default:d(()=>[r("直角")]),_:1})]),_:1},8,["modelValue"])],64)}}});w.__docgenInfo={exportName:"default",displayName:"color",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/color.vue"]};const j=`<template>
  <div class="flex gap-3">
    <KRadio v-model="radioValue" value="0" color="#ff5500">直角</KRadio>
    <KRadio v-model="radioValue" value="1" color="#ff5500">钝角</KRadio>
    <KRadio v-model="radioValue" value="2" color="#ff5500">锐角</KRadio>
    <KRadio v-model="radioValue" value="0" color="#ff5500" disabled>90°</KRadio>
  </div>
  <br />
  <KRadioGroup v-model="radio" button>
    <KRadio value="0" color="#ff5500">直角</KRadio>
    <KRadio value="1" color="#ff5500">钝角</KRadio>
    <KRadio value="2" color="#ff5500">锐角</KRadio>
    <KRadio value="0" color="#ff5500" disabled>直角</KRadio>
  </KRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioValue = ref('1');
const radio = ref('1');
<\/script>`,P={title:"Data Entry(DE)/KRadio",component:s,argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},n={name:"默认",args:{color:"",size:""},render:f=>({components:{KRadio:s},setup(){const e=p("1");return{args:f,radioValue:e}},template:`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `})},O=F($,"size : 不同尺寸",T),m={name:"size : 不同尺寸",...O},q=F(w,"color : 自定义颜色",j),v={name:"color : 自定义颜色",...q};var R,g,z;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '默认',
  args: {
    color: '',
    size: ''
  },
  render: (args: any) => {
    return {
      components: {
        KRadio
      },
      setup() {
        const radioValue = ref('1');
        return {
          args,
          radioValue
        };
      },
      template: \`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      \`
    };
  }
}`,...(z=(g=n.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var _,x,b;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'size : 不同尺寸',
  ...doc1
}`,...(b=(x=m.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var U,y,k;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'color : 自定义颜色',
  ...doc2
}`,...(k=(y=v.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const Q=["def","example1","example2"];export{Q as __namedExportsOrder,n as def,P as default,m as example1,v as example2};
