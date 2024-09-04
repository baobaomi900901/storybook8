import{_ as s}from"./radio_group-BJq7aPbM.js";import{f as E,r as p,t as G,G as f,e as l,l as d,u as t,F as D,o as F,E as r,j as R}from"./vue.esm-bundler-DnGJEZCU.js";import{A as w}from"./index-wXGUTIPA.js";import"./utils-7yzkk6k9.js";const T={class:"flex gap-3"},$={class:"flex gap-3"},B=E({__name:"size",setup(V){const a=p("1");return(K,e)=>(F(),G(D,null,[f("div",T,[l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),value:"0"},{default:d(()=>e[8]||(e[8]=[r("直角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),value:"1"},{default:d(()=>e[9]||(e[9]=[r("钝角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value=o),value:"2"},{default:d(()=>e[10]||(e[10]=[r("锐角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),value:"0",disabled:""},{default:d(()=>e[11]||(e[11]=[r("90°")])),_:1},8,["modelValue"])]),f("div",$,[l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value=o),value:"0",size:"sm"},{default:d(()=>e[12]||(e[12]=[r("直角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value=o),value:"1",size:"sm"},{default:d(()=>e[13]||(e[13]=[r("钝角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value=o),value:"2",size:"sm"},{default:d(()=>e[14]||(e[14]=[r("锐角")])),_:1},8,["modelValue"]),l(t(s),{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value=o),value:"0",size:"sm",disabled:""},{default:d(()=>e[15]||(e[15]=[r("90°")])),_:1},8,["modelValue"])])],64))}});B.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/size.vue"]};const A=`<template>
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
<\/script>`,I={class:"flex gap-3"},C=E({__name:"color",setup(V){const a=p("1"),K=p("1");return(e,o)=>{const i=R("KRadio"),S=R("KRadioGroup");return F(),G(D,null,[f("div",I,[l(i,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=u=>a.value=u),value:"0",color:"#ff5500"},{default:d(()=>o[5]||(o[5]=[r("直角")])),_:1},8,["modelValue"]),l(i,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=u=>a.value=u),value:"1",color:"#ff5500"},{default:d(()=>o[6]||(o[6]=[r("钝角")])),_:1},8,["modelValue"]),l(i,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=u=>a.value=u),value:"2",color:"#ff5500"},{default:d(()=>o[7]||(o[7]=[r("锐角")])),_:1},8,["modelValue"]),l(i,{modelValue:a.value,"onUpdate:modelValue":o[3]||(o[3]=u=>a.value=u),value:"0",color:"#ff5500",disabled:""},{default:d(()=>o[8]||(o[8]=[r("90°")])),_:1},8,["modelValue"])]),o[13]||(o[13]=f("br",null,null,-1)),l(S,{modelValue:K.value,"onUpdate:modelValue":o[4]||(o[4]=u=>K.value=u),button:""},{default:d(()=>[l(i,{value:"0",color:"#ff5500"},{default:d(()=>o[9]||(o[9]=[r("直角")])),_:1}),l(i,{value:"1",color:"#ff5500"},{default:d(()=>o[10]||(o[10]=[r("钝角")])),_:1}),l(i,{value:"2",color:"#ff5500"},{default:d(()=>o[11]||(o[11]=[r("锐角")])),_:1}),l(i,{value:"0",color:"#ff5500",disabled:""},{default:d(()=>o[12]||(o[12]=[r("直角")])),_:1})]),_:1},8,["modelValue"])],64)}}});C.__docgenInfo={exportName:"default",displayName:"color",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/radio/color.vue"]};const j=`<template>
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
<\/script>`,P={title:"Data Entry(DE)/KRadio",component:s,argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},n={name:"默认",args:{color:"",size:""},render:V=>({components:{KRadio:s},setup(){const a=p("1");return{args:V,radioValue:a}},template:`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `})},O=w(B,"size : 不同尺寸",A),m={name:"size : 不同尺寸",...O},q=w(C,"color : 自定义颜色",j),v={name:"color : 自定义颜色",...q};var g,z,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(z=n.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var b,c,U;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'size : 不同尺寸',
  ...doc1
}`,...(U=(c=m.parameters)==null?void 0:c.docs)==null?void 0:U.source}}};var y,k,N;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'color : 自定义颜色',
  ...doc2
}`,...(N=(k=v.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const Q=["def","example1","example2"];export{Q as __namedExportsOrder,n as def,P as default,m as example1,v as example2};
