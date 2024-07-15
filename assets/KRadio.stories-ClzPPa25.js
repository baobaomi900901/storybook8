import{_ as s}from"./radio_group-DSe1KvYi.js";import{e as k,r as p,b as D,y as f,c as l,w as d,u as t,F as B,o as N,d as r,a as K}from"./vue.esm-bundler-BJoIvmbj.js";import"./index-nFJc4fXK.js";const G={class:"flex gap-3"},$={class:"flex gap-3"},w=k({__name:"size",setup(n){const e=p("1");return(V,a)=>(N(),D(B,null,[f("div",G,[l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),value:"0"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o),value:"1"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),value:"2"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=o=>e.value=o),value:"0",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])]),f("div",$,[l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=o=>e.value=o),value:"0",size:"sm"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[5]||(a[5]=o=>e.value=o),value:"1",size:"sm"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[6]||(a[6]=o=>e.value=o),value:"2",size:"sm"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(t(s),{modelValue:e.value,"onUpdate:modelValue":a[7]||(a[7]=o=>e.value=o),value:"0",size:"sm",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])])],64))}});w.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/radio/size.vue"]};const C=`<template>
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
<\/script>`,I={class:"flex gap-3"},T=f("br",null,null,-1),E=k({__name:"color",setup(n){const e=p("1"),V=p("1");return(a,o)=>{const i=K("KRadio"),F=K("KRadioGroup");return N(),D(B,null,[f("div",I,[l(i,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),value:"0",color:"#ff5500"},{default:d(()=>[r("直角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=u=>e.value=u),value:"1",color:"#ff5500"},{default:d(()=>[r("钝角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=u=>e.value=u),value:"2",color:"#ff5500"},{default:d(()=>[r("锐角")]),_:1},8,["modelValue"]),l(i,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=u=>e.value=u),value:"0",color:"#ff5500",disabled:""},{default:d(()=>[r("90°")]),_:1},8,["modelValue"])]),T,l(F,{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=u=>V.value=u),button:""},{default:d(()=>[l(i,{value:"0",color:"#ff5500"},{default:d(()=>[r("直角")]),_:1}),l(i,{value:"1",color:"#ff5500"},{default:d(()=>[r("钝角")]),_:1}),l(i,{value:"2",color:"#ff5500"},{default:d(()=>[r("锐角")]),_:1}),l(i,{value:"0",color:"#ff5500",disabled:""},{default:d(()=>[r("直角")]),_:1})]),_:1},8,["modelValue"])],64)}}});E.__docgenInfo={exportName:"default",displayName:"color",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/radio/color.vue"]};const O=`<template>
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
<\/script>`,H={title:"Data Entry(DE)/KRadio",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},m={name:"默认",args:{color:"",size:""},render:n=>({components:{KRadio:s},setup(){const e=p("1");return{args:n,radioValue:e}},template:`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `})},v={name:"size : 不同尺寸",render:n=>({components:{size:w},setup(){return{args:n}},template:'<size v-bind="args" />'}),parameters:{docs:{source:{code:C}}}},c={name:"color : 自定义颜色",render:n=>({components:{color:E},setup(){return{args:n}},template:'<color v-bind="args" />'}),parameters:{docs:{source:{code:O}}}};var R,g,z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(g=m.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var _,b,x;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'size : 不同尺寸',
  render: (args: any) => ({
    components: {
      size
    },
    setup() {
      return {
        args
      };
    },
    template: '<size v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: sizeDoc
      }
    }
  }
}`,...(x=(b=v.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var U,y,S;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'color : 自定义颜色',
  render: (args: any) => ({
    components: {
      color
    },
    setup() {
      return {
        args
      };
    },
    template: '<color v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: colorDoc
      }
    }
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const J=["def","sizeSB","colorSB"];export{J as __namedExportsOrder,c as colorSB,m as def,H as default,v as sizeSB};
