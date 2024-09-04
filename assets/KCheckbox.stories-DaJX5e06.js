import"./button-DfjyLBG0.js";import{b as B}from"./tree_select-DipHEuL5.js";import"./radio_group-CGkB-Q-w.js";import{f as j,r as s,j as h,t as p,e as r,l as i,m as w,F as k,o as C,E as g,z as N,v as E,G as T}from"./vue.esm-bundler-N-wW40t0.js";import{A as D}from"./index-wXGUTIPA.js";import"./utils-D2KGOJGy.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F=j({__name:"Indeterminate",setup(b){const o=s(!1),c=s(!0),l=s(["Shanghai","Beijing"]),n=["Shanghai","Beijing","Guangzhou","Shenzhen"],x=e=>{l.value=e?n:[],c.value=!1},v=e=>{const a=e.length;o.value=a===n.length,c.value=a>0&&a<n.length};return(e,a)=>{const f=h("KCheckbox"),$=h("KCheckboxGroup");return C(),p(k,null,[r(f,w({modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),indeterminate:c.value,onChange:x},e.$attrs),{default:i(()=>[g(" Check all ")]),_:1},16,["modelValue","indeterminate"]),r($,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=t=>l.value=t),onChange:v},{default:i(()=>[(C(),p(k,null,N(n,t=>r(f,{key:t,label:t,value:t},{default:i(()=>[g(E(t),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});F.__docgenInfo={exportName:"default",displayName:"Indeterminate",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/checkbox/Indeterminate.vue"]};const U=`<template>
  <KCheckbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    v-bind="$attrs"
  >
    Check all
  </KCheckbox>
  <KCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
<\/script>
`,M=j({__name:"minMaxCheckbox",setup(b){const o=s([]),c=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(l,n)=>{const x=h("KCheckbox"),v=h("KCheckboxGroup");return C(),p(k,null,[T("div",{class:"sb-title-sub",onClick:n[0]||(n[0]=(...e)=>l.handleClick&&l.handleClick(...e))},"min = 0, max = 2"),r(v,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),min:0,max:2},{default:i(()=>[(C(),p(k,null,N(c,e=>r(x,{key:e,label:e,value:e},{default:i(()=>[g(E(e),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});M.__docgenInfo={exportName:"default",displayName:"minMaxCheckbox",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/checkbox/minMaxCheckbox.vue"]};const L=`<template>
  <div class="sb-title-sub" @click="handleClick">min = 0, max = 2</div>
  <KCheckboxGroup v-model="checkedCities" :min="0" :max="2">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkedCities = ref([]);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
<\/script>
`,Y={title:"Data Entry(DE)/KCheckbox",component:B,argTypes:{size:{control:"select",options:["sm","base"],description:"设置尺寸"},color:{control:"color",description:"设置颜色"},min:{control:"number",description:"设置最小值"},max:{control:"number",description:"设置最大值"},label:{control:"text",description:"设置标签"}},args:{}},m={name:"默认",args:{color:"",size:""},render:b=>({components:{KCheckbox:B},setup(){const o=s(),c=s();return{args:b,value:o,value2:c}},template:`
      <div class="flex gap-4">
        <KCheckbox v-model="value" label="烧饼"></KCheckbox>
        <KCheckbox v-model="value2" label="包子"></KCheckbox>
        <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
      </div>
      `})},O=D(F,"check all:全选",U),u={name:"check all:全选",...O},P=D(M,"min&max: 最小与最大值",L),d={name:"min&max: 最小与最大值",...P};var K,_,y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '默认',
  args: {
    color: '',
    size: ''
  },
  render: (args: any) => {
    return {
      components: {
        KCheckbox
      },
      setup() {
        const value = ref();
        const value2 = ref();
        return {
          args,
          value,
          value2
        };
      },
      template: \`
      <div class="flex gap-4">
        <KCheckbox v-model="value" label="烧饼"></KCheckbox>
        <KCheckbox v-model="value2" label="包子"></KCheckbox>
        <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
      </div>
      \`
    };
  }
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,G,z;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'check all:全选',
  ...doc1
}`,...(z=(G=u.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var V,I,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'min&max: 最小与最大值',
  ...doc2
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const Z=["def","example1","example2"];export{Z as __namedExportsOrder,m as def,Y as default,u as example1,d as example2};
