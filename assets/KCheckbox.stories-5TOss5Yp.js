import"./button-CKICkMOT.js";import{b as B}from"./tree_select-TBFvi8sH.js";import"./radio_group-CyS_Gqqs.js";import{d as M,r as s,b as h,j as p,c as r,f as i,m as $,F as k,o as C,x as g,p as j,t as D,y as w}from"./vue.esm-bundler-CPPrNTGp.js";import{A as E}from"./index-wXGUTIPA.js";import"./utils-zdN4c4KV.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N=M({__name:"Indeterminate",setup(b){const o=s(!1),c=s(!0),l=s(["Shanghai","Beijing"]),n=["Shanghai","Beijing","Guangzhou","Shenzhen"],x=e=>{l.value=e?n:[],c.value=!1},v=e=>{const a=e.length;o.value=a===n.length,c.value=a>0&&a<n.length};return(e,a)=>{const f=h("KCheckbox"),F=h("KCheckboxGroup");return C(),p(k,null,[r(f,$({modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),indeterminate:c.value,onChange:x},e.$attrs),{default:i(()=>[g(" Check all ")]),_:1},16,["modelValue","indeterminate"]),r(F,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=t=>l.value=t),onChange:v},{default:i(()=>[(C(),p(k,null,j(n,t=>r(f,{key:t,label:t,value:t},{default:i(()=>[g(D(t),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});N.__docgenInfo={exportName:"default",displayName:"Indeterminate",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/checkbox/Indeterminate.vue"]};const U=`<template>
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
`,T=M({__name:"minMaxCheckbox",setup(b){const o=s([]),c=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(l,n)=>{const x=h("KCheckbox"),v=h("KCheckboxGroup");return C(),p(k,null,[w("div",{class:"sb-title-sub",onClick:n[0]||(n[0]=(...e)=>l.handleClick&&l.handleClick(...e))},"min = 0, max = 2"),r(v,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),min:0,max:2},{default:i(()=>[(C(),p(k,null,j(c,e=>r(x,{key:e,label:e,value:e},{default:i(()=>[g(D(e),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});T.__docgenInfo={exportName:"default",displayName:"minMaxCheckbox",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/checkbox/minMaxCheckbox.vue"]};const L=`<template>
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
`,W={title:"Data Entry(DE)/KCheckbox",component:B,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","base"],description:"设置尺寸"},color:{control:"color",description:"设置颜色"},min:{control:"number",description:"设置最小值"},max:{control:"number",description:"设置最大值"},label:{control:"text",description:"设置标签"}},args:{}},u={name:"默认",args:{color:"",size:""},render:b=>({components:{KCheckbox:B},setup(){const o=s(),c=s();return{args:b,value:o,value2:c}},template:`
      <div class="flex gap-4">
        <KCheckbox v-model="value" label="烧饼"></KCheckbox>
        <KCheckbox v-model="value2" label="包子"></KCheckbox>
        <KCheckbox v-model="value2" label="馒头" disabled></KCheckbox>
      </div>
      `})},m=E(N,"全选",U),d=E(T,"最小最大值",L);var K,_,y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(y=(_=u.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,A,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"ATExample(Indeterminate, '全选', IndeterminateDoc)",...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var G,V,z;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:"ATExample(minMaxCheckbox, '最小最大值', minMaxCheckboxDoc)",...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const X=["def","selectAll","minMax"];export{X as __namedExportsOrder,u as def,W as default,d as minMax,m as selectAll};
