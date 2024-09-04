import"./button-BTkNDmSC.js";import{d as I}from"./tree_select-De66uPhg.js";import"./radio_group-BJq7aPbM.js";import{A as d}from"./index-wXGUTIPA.js";import{f as u,j as g,t as f,G as r,e as s,l as t,o as _,E as n}from"./vue.esm-bundler-DnGJEZCU.js";import"./utils-7yzkk6k9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={class:"flex items-star gap-2"},O={class:"w-80"},A=u({__name:"block",setup(a){return(T,e)=>{const o=g("KTag");return _(),f("div",G,[r("div",O,[s(o,null,{default:t(()=>e[0]||(e[0]=[n("标签1")])),_:1})])])}}});A.__docgenInfo={exportName:"default",displayName:"block",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/block.vue"]};const h=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,q={class:"flex items-star gap-2"},H={class:"w-80"},B=u({__name:"point",setup(a){return(T,e)=>{const o=g("KTag");return _(),f("div",q,[r("div",H,[s(o,{point:""},{default:t(()=>e[0]||(e[0]=[n("标签1")])),_:1})])])}}});B.__docgenInfo={exportName:"default",displayName:"point",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/point.vue"]};const J=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag point>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,L={class:"flex items-star gap-2"},M={class:"w-80 flex gap-4"},V=u({__name:"color",setup(a){return(T,e)=>{const o=g("KTag");return _(),f("div",L,[r("div",M,[s(o,{type:"success"},{default:t(()=>e[0]||(e[0]=[n("标签1")])),_:1}),s(o,{point:"",type:"success"},{default:t(()=>e[1]||(e[1]=[n("标签2")])),_:1}),s(o,{color:"#ff5500"},{default:t(()=>e[2]||(e[2]=[n("标签1")])),_:1}),s(o,{point:"",color:"#ff5500"},{default:t(()=>e[3]||(e[3]=[n("标签2")])),_:1})])])}}});V.__docgenInfo={exportName:"default",displayName:"color",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/color.vue"]};const P=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80 flex gap-4">
      <KTag type="success">标签1</KTag>
      <KTag point type="success">标签2</KTag>
      <KTag color="#ff5500">标签1</KTag>
      <KTag point color="#ff5500">标签2</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,Q={class:"flex flex-col items-star gap-4"},R={class:"w-80 flex gap-4"},U={class:"w-80 flex gap-4"},j=u({__name:"size",setup(a){return(T,e)=>{const o=g("KTag");return _(),f("div",Q,[r("div",R,[s(o,null,{default:t(()=>e[0]||(e[0]=[n("标签1")])),_:1}),s(o,{point:""},{default:t(()=>e[1]||(e[1]=[n("标签2")])),_:1})]),r("div",U,[s(o,{size:"sm"},{default:t(()=>e[2]||(e[2]=[n("标签1")])),_:1}),s(o,{size:"sm",point:""},{default:t(()=>e[3]||(e[3]=[n("标签2")])),_:1})])])}}});j.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/size.vue"]};const W=`<template>
  <div class="flex flex-col items-star gap-4">
    <div class="w-80 flex gap-4">
      <KTag>标签1</KTag>
      <KTag point>标签2</KTag>
    </div>
    <div class="w-80 flex gap-4">
      <KTag size="sm">标签1</KTag>
      <KTag size="sm" point>标签2</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,pe={title:"Data Entry(DE)/KTag",component:I,argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"},parameters:{controls:{},docs:{subtitle:"用于标记和选择。",description:{component:"Another description, overriding the comments"}}}},c={name:"Default",render:a=>({components:{KTag:I},setup(){return{args:a}},template:`
     <KTag>123</KTag>`})},X=d(A,"块状标签",h),p={name:"块状标签",...X},Y=d(B,"点状标签",J),i={name:"点状标签",...Y},Z=d(V,"color: 自定义颜色",P),l={name:"color: 自定义颜色",...Z},ee=d(j,"size: 标签大小",W),m={name:"size: 标签大小",...ee};var v,x,K;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Default',
  render: (args: any) => {
    return {
      components: {
        KTag
      },
      setup() {
        return {
          args
        };
      },
      template: \`
     <KTag>123</KTag>\`
    };
  }
}`,...(K=(x=c.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var k,y,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '块状标签',
  ...doc1
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,z,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '点状标签',
  ...doc2
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,$,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'color: 自定义颜色',
  ...doc3
}`,...(D=($=l.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var C,S,F;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'size: 标签大小',
  ...doc4
}`,...(F=(S=m.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const ie=["def","blockExample","pointExample","colorExample","sizeExample"];export{ie as __namedExportsOrder,p as blockExample,l as colorExample,c as def,pe as default,i as pointExample,m as sizeExample};
