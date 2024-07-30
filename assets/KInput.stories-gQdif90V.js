import"./button-Co_YL6s_.js";import{_ as Z,d as q}from"./tree_select-D2XSVbIY.js";import"./radio_group-C7MBaVFz.js";import{r as d,b as c,o as m,j as v,c as a,y as n,f as p,x as f,u as ee,F as te}from"./vue.esm-bundler-COzhbkL3.js";import{A as x}from"./index-wXGUTIPA.js";import"./index-nFJc4fXK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const oe={class:"w-60"},G=Object.assign({name:"disabled"},{__name:"disabled",setup(u){const t=d("");return(r,s)=>{const e=c("k-input");return m(),v("div",oe,[a(e,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),placeholder:"Disabled Input",disabled:""},null,8,["modelValue"])])}}});G.__docgenInfo={name:"disabled",exportName:"default",displayName:"disabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/disabled.vue"]};const se=`<template>
  <div class="w-60">
    <k-input v-model="text" placeholder="Disabled Input" disabled></k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');

defineOptions({
  name: 'disabled',
});
<\/script>
<style scoped></style>
`,ne={class:"w-60"},H={__name:"clearable",setup(u){const t=d("");return(r,s)=>{const e=c("k-input");return m(),v("div",ne,[a(e,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),placeholder:"请输入",clearable:""},null,8,["modelValue"])])}}};H.__docgenInfo={exportName:"default",displayName:"clearable",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/clearable.vue"]};const ae=`
<template>
  <div class="w-60">
    <k-input v-model="text" placeholder="请输入" clearable> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped>
</style>`,le={class:"grid grid-cols-2 gap-4"},re=n("div",null,"密码输入框:",-1),de=n("div",null,"显示密码按钮:",-1),J={__name:"showPassword",setup(u){const t=d(""),r=d("");return(s,e)=>{const o=c("k-input");return m(),v("div",le,[re,de,a(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i),type:"password"},null,8,["modelValue"]),a(o,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i),showPassword:""},null,8,["modelValue"])])}}};J.__docgenInfo={exportName:"default",displayName:"showPassword",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/showPassword.vue"]};const ie=`<template>
  <div class="grid grid-cols-2 gap-4">
    <div>密码输入框:</div>
    <div>显示密码按钮:</div>
    <k-input v-model="Password" type="password"></k-input>
    <k-input v-model="Password2" showPassword></k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const Password = ref('');
const Password2 = ref('');
<\/script>
<style scoped>
</style>`,pe={class:"grid grid-cols-2 gap-4"},ce=n("div",null,"普通文本域:",-1),ue=n("div",null,"自适应高度:",-1),M={__name:"textarea",setup(u){const t=d(""),r=d("");return(s,e)=>{const o=c("k-input");return m(),v("div",pe,[ce,ue,a(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i),type:"textarea",placeholder:"Enter text"},null,8,["modelValue"]),a(o,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i),type:"textarea",placeholder:"Enter text",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])])}}};M.__docgenInfo={exportName:"default",displayName:"textarea",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/textarea.vue"]};const me=`<template>
  <div class="grid grid-cols-2 gap-4">
    <div>普通文本域:</div>
    <div>自适应高度:</div>
    <k-input v-model="text" type="textarea" placeholder="Enter text"> </k-input>
    <k-input v-model="text2" type="textarea" placeholder="Enter text" :autosize="{ minRows: 2, maxRows: 4 }"> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const text = ref('');
const text2 = ref('');
<\/script>
<style scoped>
</style>`,ve={class:"grid grid-cols-2 gap-4"},xe=n("div",null,"输入框:",-1),fe=n("div",null,"文本域:",-1),Q={__name:"maxInput",setup(u){const t=d("");return(r,s)=>{const e=c("k-input");return m(),v("div",ve,[xe,fe,a(e,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"]),a(e,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o),type:"textarea",placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"])])}}};Q.__docgenInfo={exportName:"default",displayName:"maxInput",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/maxInput.vue"]};const _e=`
<template>
  <div class="grid grid-cols-2 gap-4">
    <div>输入框:</div>
    <div>文本域:</div>
    <k-input v-model="text" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
    <k-input v-model="text" type="textarea" placeholder="请输入" :maxlength="10" showWordLimit> </k-input>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped>
</style>`,we=n("div",{class:"sb-title-sub"},"图标(prefix-icon, suffix-icon)",-1),be={class:"flex items-star gap-2"},ke={class:"w-80"},ge={class:"w-80"},he={class:"flex items-star gap-2"},ye={class:"w-80"},Ve={class:"flex items-star gap-2"},Ie={class:"w-full"},X={__name:"frontAndRearSlots",setup(u){d("");const t=d(""),r=d("windows");return(s,e)=>{const o=c("KInput"),i=c("KOption"),Y=c("KButton");return m(),v(te,null,[we,n("div",be,[n("div",ke,[a(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),placeholder:"请输入内容","prefix-icon":"IconAdd"},null,8,["modelValue"])]),n("div",ge,[a(o,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),placeholder:"请输入内容","suffix-icon":"IconDelete"},null,8,["modelValue"])])]),n("div",{class:"sb-title-sub",onClick:e[2]||(e[2]=(...l)=>s.handleClick&&s.handleClick(...l))},"默认: 插槽(prefix, suffix)"),n("div",he,[n("div",ye,[a(o,{modelValue:t.value,"onUpdate:modelValue":e[3]||(e[3]=l=>t.value=l),placeholder:"请输入url"},{prepend:p(()=>[f("http://")]),append:p(()=>[f(".com")]),_:1},8,["modelValue"])])]),n("div",{class:"sb-title-sub",onClick:e[4]||(e[4]=(...l)=>s.handleClick&&s.handleClick(...l))},"组合按钮与选择器: 插槽(prefix, suffix)"),n("div",Ve,[n("div",Ie,[a(o,{modelValue:t.value,"onUpdate:modelValue":e[6]||(e[6]=l=>t.value=l),placeholder:"选择运行机器"},{prepend:p(()=>[a(ee(Z),{modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value=l),placeholder:"请选择类型",style:{width:"168px"}},{default:p(()=>[a(i,{value:"windows"},{default:p(()=>[f("windows")]),_:1}),a(i,{value:"linux"},{default:p(()=>[f("linux")]),_:1})]),_:1},8,["modelValue"])]),append:p(()=>[a(Y,{main:"","icon-left":"IconIdePlay"},{default:p(()=>[f("运行")]),_:1})]),_:1},8,["modelValue"])])])],64)}}};X.__docgenInfo={exportName:"default",displayName:"frontAndRearSlots",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/DocS/input/frontAndRearSlots.vue"]};const Se=`<template>
  <div class="sb-title-sub">图标(prefix-icon, suffix-icon)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>
    </div>
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete"></KInput>
    </div>
  </div>
  <div class="sb-title-sub" @click="handleClick">默认: 插槽(prefix, suffix)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入url">
        <template #prepend>http://</template>
        <template #append>.com</template>
      </KInput>
    </div>
  </div>
  <div class="sb-title-sub" @click="handleClick">组合按钮与选择器: 插槽(prefix, suffix)</div>
  <div class="flex items-star gap-2">
    <div class="w-full">
      <KInput v-model="value" placeholder="选择运行机器">
        <template #prepend>
          <KSelect v-model="selectValue" placeholder="请选择类型" style="width: 168px">
            <KOption value="windows">windows</KOption>
            <KOption value="linux">linux</KOption>
          </KSelect>
        </template>
        <template #append>
          <KButton main icon-left="IconIdePlay">运行</KButton>
        </template>
      </KInput>
    </div>
  </div>
</template>

<script setup>
import { KSelect } from '@/components';
import { ref, reactive } from 'vue';
const text = ref('');
const value = ref('');
const selectValue = ref('windows');
<\/script>
<style scoped></style>
`,Ne={title:"Data Entry(DE)/KInput",component:q,tags:["autodocs"],argTypes:{type:{control:"text",description:"原生input类型"},clearable:{control:"boolean",description:"是否可清空"},showPassword:{control:"boolean",description:"是否显示密码"},maxlength:{control:"number",description:"最大输入长度"},showWordLimit:{control:"boolean",description:"显示输入字数限制"},autosize:{control:"object",description:"文本域自适应高度, 接收对象例如 { minRows: 2, maxRows: 6 }"},blur:{description:"el, 使 input 失去 焦点"},focus:{description:"el, 使 input 获取 焦点"},select:{description:"el, 选中 input 中的文字"},resizeTextarea:{description:"el, 改变 textarea 大小"}},args:{}},_={name:"默认用法",args:{type:"text",clearable:!1},render:u=>{const t=d("");return{components:{KInput:q},setup(){return{args:u,text:t}},template:`
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      `}}},w=x(G,"disabled : 禁止输入",se),b=x(H,"clearable : 一键清空",ae),k=x(J,"showPassword : 显示密码",ie),g=x(M,"textarea : 文本域",me),h=x(Q,"maxInput : 最大输入长度",_e),y=x(X,"组合使用&前后插槽",Se);var V,I,S;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '默认用法',
  args: {
    type: 'text',
    clearable: false
  },
  render: (args: any) => {
    const text = ref('');
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      \`
    };
  }
}`,...(S=(I=_.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var K,D,P;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:"ATExample(disabled, 'disabled : 禁止输入', disabledDoc)",...(P=(D=w.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,A,$;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:"ATExample(clearable, 'clearable : 一键清空', clearableDoc)",...($=(A=b.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var E,N,R;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:"ATExample(showPassword, 'showPassword : 显示密码', showPasswordDoc)",...(R=(N=k.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,C,T;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:"ATExample(ktextarea, 'textarea : 文本域', textareaDoc)",...(T=(C=g.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var O,F,L;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:"ATExample(maxInput, 'maxInput : 最大输入长度', maxInputDoc)",...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var W,z,j;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:"ATExample(frontAndRearSlots, '组合使用&前后插槽', frontAndRearSlotsDoc)",...(j=(z=y.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const Re=["def","disabledSB","clearableSB","showPasswordSB","textareaSB","maxInputSB","frontAndRearSlotsSB"];export{Re as __namedExportsOrder,b as clearableSB,_ as def,Ne as default,w as disabledSB,y as frontAndRearSlotsSB,h as maxInputSB,k as showPasswordSB,g as textareaSB};
