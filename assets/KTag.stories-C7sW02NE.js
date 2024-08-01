import"./button-CKICkMOT.js";import{c as _}from"./tree_select-TBFvi8sH.js";import"./radio_group-CyS_Gqqs.js";import{A as g}from"./index-wXGUTIPA.js";import{d as f,b as x,j as T,y as v,c as K,f as k,o as b,x as y}from"./vue.esm-bundler-CPPrNTGp.js";import"./utils-zdN4c4KV.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={class:"flex items-star gap-2"},C={class:"w-80"},h=f({__name:"block",setup(s){return(E,N)=>{const n=x("KTag");return b(),T("div",D,[v("div",C,[K(n,null,{default:k(()=>[y("标签1")]),_:1})])])}}});h.__docgenInfo={exportName:"default",displayName:"block",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/block.vue"]};const $=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,B={class:"flex items-star gap-2"},S={class:"w-80"},w=f({__name:"point",setup(s){return(E,N)=>{const n=x("KTag");return b(),T("div",B,[v("div",S,[K(n,{point:""},{default:k(()=>[y("标签1")]),_:1})])])}}});w.__docgenInfo={exportName:"default",displayName:"point",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/point.vue"]};const V=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag point>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,J={title:"Data Entry(DE)/KTag",component:_,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"}},e={name:"Default",render:s=>({components:{KTag:_},setup(){return{args:s}},template:`
     <KTag>123</KTag>`})};console.log(e);const z=g(h,"块状标签",$),o={name:"块状标签",...z},A=g(w,"点状标签",V),t={name:"点状标签",...A};var a,r,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var p,m,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '块状标签',
  ...doc
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '点状标签',
  ...doc1
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const L=["def","blockExample","pointExample"];export{L as __namedExportsOrder,o as blockExample,e as def,J as default,t as pointExample};
