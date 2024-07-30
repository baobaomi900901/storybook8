import{_ as n,a as p}from"./radio_group-C7MBaVFz.js";import{d as x,r as m,b as v,e as w,f as e,o as S,c as o,x as a,j as E,u as r,F,y as C}from"./vue.esm-bundler-COzhbkL3.js";import"./index-nFJc4fXK.js";const B=x({__name:"button",setup(s){const d=m("1");return(K,R)=>{const t=v("KRadio"),i=v("KRadioGroup");return S(),w(i,{modelValue:d.value,"onUpdate:modelValue":R[0]||(R[0]=N=>d.value=N),button:""},{default:e(()=>[o(t,{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(t,{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(t,{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(t,{value:"0",disabled:""},{default:e(()=>[a("直角")]),_:1})]),_:1},8,["modelValue"])}}});B.__docgenInfo={exportName:"default",displayName:"button",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/radioGroup/button.vue"]};const U=`<template>
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
<\/script>`,$=C("br",null,null,-1),D=x({__name:"size",setup(s){const d=m("1"),K=m("1");return(R,t)=>(S(),E(F,null,[o(r(p),{modelValue:K.value,"onUpdate:modelValue":t[0]||(t[0]=i=>K.value=i),size:"sm"},{default:e(()=>[o(r(n),{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(r(n),{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(r(n),{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(r(n),{value:"0",disabled:""},{default:e(()=>[a("90°")]),_:1})]),_:1},8,["modelValue"]),$,o(r(p),{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=i=>d.value=i),size:"sm",button:""},{default:e(()=>[o(r(n),{value:"0"},{default:e(()=>[a("直角")]),_:1}),o(r(n),{value:"1"},{default:e(()=>[a("钝角")]),_:1}),o(r(n),{value:"2"},{default:e(()=>[a("锐角")]),_:1}),o(r(n),{value:"0",disabled:""},{default:e(()=>[a("直角")]),_:1})]),_:1},8,["modelValue"])],64))}});D.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/radioGroup/size.vue"]};const I=`<template>
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
</style>`,h={title:"Data Entry(DE)/KRadioGroup",component:p,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"}},u={args:{},render:s=>({components:{KRadioGroup:p,KRadio:n},setup(){const d=m(0);return{args:s,radio:d}},template:`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>`})},l={name:"button : 控制不同样式",render:s=>({components:{btn:B},setup(){return{args:s}},template:'<btn v-bind="args" />'}),parameters:{docs:{source:{code:U}}}},c={name:"size : 不同尺寸",render:s=>({components:{size:D},setup(){return{args:s}},template:'<size v-bind="args" />'}),parameters:{docs:{source:{code:I}}}};var _,f,b;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(b=(f=u.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,z,V;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'button : 控制不同样式',
  render: (args: any) => ({
    components: {
      btn
    },
    setup() {
      return {
        args
      };
    },
    template: '<btn v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: btnDoc
      }
    }
  }
}`,...(V=(z=l.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var y,G,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(G=c.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};const q=["def","sizeSB2","sizeSB"];export{q as __namedExportsOrder,u as def,h as default,c as sizeSB,l as sizeSB2};
