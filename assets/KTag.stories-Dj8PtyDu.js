import"./button-DfjyLBG0.js";import{d as F}from"./tree_select-DipHEuL5.js";import"./radio_group-CGkB-Q-w.js";import{A as m}from"./index-wXGUTIPA.js";import{f as d,j as _,t as u,G as n,e as o,l as s,o as g,E as t}from"./vue.esm-bundler-N-wW40t0.js";import"./utils-D2KGOJGy.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j={class:"flex items-star gap-2"},G={class:"w-80"},I=d({__name:"block",setup(a){return(f,T)=>{const e=_("KTag");return g(),u("div",j,[n("div",G,[o(e,null,{default:s(()=>[t("标签1")]),_:1})])])}}});I.__docgenInfo={exportName:"default",displayName:"block",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/block.vue"]};const O=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,q={class:"flex items-star gap-2"},H={class:"w-80"},A=d({__name:"point",setup(a){return(f,T)=>{const e=_("KTag");return g(),u("div",q,[n("div",H,[o(e,{point:""},{default:s(()=>[t("标签1")]),_:1})])])}}});A.__docgenInfo={exportName:"default",displayName:"point",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/point.vue"]};const J=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag point>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,L={class:"flex items-star gap-2"},M={class:"w-80 flex gap-4"},B=d({__name:"color",setup(a){return(f,T)=>{const e=_("KTag");return g(),u("div",L,[n("div",M,[o(e,{type:"success"},{default:s(()=>[t("标签1")]),_:1}),o(e,{point:"",type:"success"},{default:s(()=>[t("标签2")]),_:1}),o(e,{color:"#ff5500"},{default:s(()=>[t("标签1")]),_:1}),o(e,{point:"",color:"#ff5500"},{default:s(()=>[t("标签2")]),_:1})])])}}});B.__docgenInfo={exportName:"default",displayName:"color",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/color.vue"]};const P=`<template>
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
`,Q={class:"flex flex-col items-star gap-4"},R={class:"w-80 flex gap-4"},U={class:"w-80 flex gap-4"},V=d({__name:"size",setup(a){return(f,T)=>{const e=_("KTag");return g(),u("div",Q,[n("div",R,[o(e,null,{default:s(()=>[t("标签1")]),_:1}),o(e,{point:""},{default:s(()=>[t("标签2")]),_:1})]),n("div",U,[o(e,{size:"sm"},{default:s(()=>[t("标签1")]),_:1}),o(e,{size:"sm",point:""},{default:s(()=>[t("标签2")]),_:1})])])}}});V.__docgenInfo={exportName:"default",displayName:"size",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/size.vue"]};const W=`<template>
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
`,pe={title:"Data Entry(DE)/KTag",component:F,argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"},parameters:{controls:{},docs:{subtitle:"用于标记和选择。",description:{component:"Another description, overriding the comments"}}}},r={name:"Default",render:a=>({components:{KTag:F},setup(){return{args:a}},template:`
     <KTag>123</KTag>`})},X=m(I,"块状标签",O),c={name:"块状标签",...X},Y=m(A,"点状标签",J),p={name:"点状标签",...Y},Z=m(B,"color: 自定义颜色",P),i={name:"color: 自定义颜色",...Z},ee=m(V,"size: 标签大小",W),l={name:"size: 标签大小",...ee};var v,x,K;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(x=r.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var h,k,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '块状标签',
  ...doc1
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var b,w,z;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '点状标签',
  ...doc2
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,N,$;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'color: 自定义颜色',
  ...doc3
}`,...($=(N=i.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,C,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'size: 标签大小',
  ...doc4
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const ie=["def","blockExample","pointExample","colorExample","sizeExample"];export{ie as __namedExportsOrder,c as blockExample,i as colorExample,r as def,pe as default,p as pointExample,l as sizeExample};
