import"./button-BmBQGL3n.js";import{c as _}from"./tree_select-B-cMQ_oz.js";import"./radio_group-CTOfIhN6.js";import{A as g}from"./index-wXGUTIPA.js";import{d as f,b as x,j as T,y as v,c as k,f as b,o as K,x as E}from"./vue.esm-bundler-zDk3ptr0.js";import"./index-nFJc4fXK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N={class:"flex items-star gap-2"},D={class:"w-80"},y=f({__name:"block",setup(s){return(w,C)=>{const a=x("KTag");return K(),T("div",N,[v("div",D,[k(a,null,{default:b(()=>[E("标签1")]),_:1})])])}}});y.__docgenInfo={exportName:"default",displayName:"block",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/block.vue"]};const A=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,$={class:"flex items-star gap-2"},B={class:"w-80"},h=f({__name:"point",setup(s){return(w,C)=>{const a=x("KTag");return K(),T("div",$,[v("div",B,[k(a,{point:""},{default:b(()=>[E("标签1")]),_:1})])])}}});h.__docgenInfo={exportName:"default",displayName:"point",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/tag/point.vue"]};const S=`<template>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KTag point>标签1</KTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
<\/script>
`,G={title:"Data Entry(DE)/KTag",component:_,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]}},args:{size:"base",direction:"row"}},e={args:{},render:s=>({components:{KTag:_},setup(){return{args:s}},template:`
     <KTag>123</KTag>`})},o=g(y,"块状标签",A),t=g(h,"点状标签",S);var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"ATExample(blockComp, '块状标签', blockCompDoc)",...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"ATExample(pointComp, '点状标签', pointCompDoc)",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["def","blockExample","pointExample"];export{H as __namedExportsOrder,o as blockExample,e as def,G as default,t as pointExample};
