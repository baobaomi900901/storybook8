import{a as e,_ as E}from"./radio_group-DXJ5IvaN.js";import{d as B,r,o as C,c as O,a as s,w as u,u as t,b as v}from"./vue.esm-bundler-CrDTszJQ.js";import"./index-JNNWE467.js";const A={class:"mb-2 flex items-center text-sm"},F=B({__name:"tmp",setup(o){const a=r("1");return(c,m)=>(C(),O("div",A,[s(t(E),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=y=>a.value=y),class:"ml-4"},{default:u(()=>[s(t(e),{value:"1"},{default:u(()=>[v("Option 1")]),_:1}),s(t(e),{value:"2"},{default:u(()=>[v("Option 2")]),_:1})]),_:1},8,["modelValue"])]))}});F.__docgenInfo={exportName:"default",displayName:"tmp",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/components/radio/tmp.vue"]};const N=`<template>
  <div class="mb-2 flex items-center text-sm">
    <k-radio-group v-model="radio" class="ml-4">
      <KRadio value="1">Option 1</KRadio>
      <KRadio value="2">Option 2</KRadio>
    </k-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KRadio, KRadioGroup } from '@/components/radio';

const radio = ref('1');
<\/script>`,h={title:"Data Entry(DE)/KRadio",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},d={name:"默认",args:{color:"",size:""},render:o=>({components:{KRadio:e},setup(){const a=r("1");return{args:o,radioValue:a}},template:`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `})},i={name:"不同尺寸",args:{},render:o=>({components:{KRadio:e},setup(){const a=r("1");return{args:o,radioValue:a}},template:`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0">直角</KRadio>
        <KRadio v-model="radioValue" value="1">钝角</KRadio>
        <KRadio v-model="radioValue" value="2">锐角</KRadio>
        <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
      </div>
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" size='sm'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" size='sm'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" size='sm'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" size='sm' disabled>90°</KRadio>
      </div>
      `})},n={name:"自定义颜色",args:{},render:o=>({components:{KRadio:e,KRadioGroup:E},setup(){const a=r("1"),c=r(0);return{args:o,radioValue:a,radio:c}},template:`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" color='#ff5500'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" color='#ff5500'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" color='#ff5500'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" color='#ff5500' disabled>90°</KRadio>
      </div>
      <br />
      <k-radio-group v-model="radio" :direction="args.direction">
        <KRadio :value="0" color="#ff5500" button>直角</KRadio>
        <KRadio :value="1" color="#ff5500" button>钝角</KRadio>
        <KRadio :value="2" color="#ff5500" button>锐角</KRadio>
        <KRadio :value="0" disabled color="#ff5500" button>直角</KRadio>
      </k-radio-group>

      
      `})},l={name:"可选项目数量的限制",render:o=>({components:{tmp:F},setup(){return{args:o}},template:'<tmp v-bind="args" />'}),parameters:{docs:{source:{code:N}}}};var p,K,R;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(R=(K=d.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var f,g,V;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '不同尺寸',
  args: {},
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
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0">直角</KRadio>
        <KRadio v-model="radioValue" value="1">钝角</KRadio>
        <KRadio v-model="radioValue" value="2">锐角</KRadio>
        <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
      </div>
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" size='sm'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" size='sm'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" size='sm'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" size='sm' disabled>90°</KRadio>
      </div>
      \`
    };
  }
}`,...(V=(g=i.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var z,b,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '自定义颜色',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadio,
        KRadioGroup
      },
      setup() {
        const radioValue = ref('1');
        const radio = ref(0);
        return {
          args,
          radioValue,
          radio
        };
      },
      template: \`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" color='#ff5500'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" color='#ff5500'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" color='#ff5500'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" color='#ff5500' disabled>90°</KRadio>
      </div>
      <br />
      <k-radio-group v-model="radio" :direction="args.direction">
        <KRadio :value="0" color="#ff5500" button>直角</KRadio>
        <KRadio :value="1" color="#ff5500" button>钝角</KRadio>
        <KRadio :value="2" color="#ff5500" button>锐角</KRadio>
        <KRadio :value="0" disabled color="#ff5500" button>直角</KRadio>
      </k-radio-group>

      
      \`
    };
  }
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var x,_,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '可选项目数量的限制',
  render: (args: any) => ({
    components: {
      tmp
    },
    setup() {
      return {
        args
      };
    },
    template: '<tmp v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: tmpDoc
      }
    }
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const M=["def","size","customColor","minMax"];export{M as __namedExportsOrder,n as customColor,d as def,h as default,l as minMax,i as size};
