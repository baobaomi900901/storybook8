import"./button-Bdp72iJS.js";import{_ as te,c as q}from"./tree_select-KLl3cXDb.js";import"./radio_group-IruEeixh.js";import{r as i,j as c,o as m,t as v,e as n,G as o,l as p,E as x,u as oe,F as ne}from"./vue.esm-bundler-N-wW40t0.js";import{A as f}from"./index-wXGUTIPA.js";import"./utils-D6daWLFa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const se={class:"w-60"},H=Object.assign({name:"disabled"},{__name:"disabled",setup(u){const t=i("");return(r,a)=>{const e=c("k-input");return m(),v("div",se,[n(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"Disabled Input",disabled:""},null,8,["modelValue"])])}}});H.__docgenInfo={name:"disabled",exportName:"default",displayName:"disabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/disabled.vue"]};const ae=`<template>
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
`,re={class:"w-60"},J={__name:"clearable",setup(u){const t=i("");return(r,a)=>{const e=c("k-input");return m(),v("div",re,[n(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"请输入",clearable:""},null,8,["modelValue"])])}}};J.__docgenInfo={exportName:"default",displayName:"clearable",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/clearable.vue"]};const le=`
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
</style>`,ie={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},de=o("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[o("div",null,"密码输入框:"),o("div",null,"显示密码按钮:")],-1),pe={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},M={__name:"showPassword",setup(u){const t=i(""),r=i("");return(a,e)=>{const s=c("k-input");return m(),v("div",ie,[de,o("div",pe,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"password"},null,8,["modelValue"]),n(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=d=>r.value=d),showPassword:""},null,8,["modelValue"])])])}}};M.__docgenInfo={exportName:"default",displayName:"showPassword",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/showPassword.vue"]};const ce=`<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>密码输入框:</div>
      <div>显示密码按钮:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="Password" type="password"></k-input>
      <k-input v-model="Password2" showPassword></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const Password = ref('');
const Password2 = ref('');
<\/script>
<style scoped></style>
`,ue={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},me=o("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[o("div",null,"多行文本域:"),o("div",null,"自适应高度:")],-1),ve={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},Q={__name:"textarea",setup(u){const t=i(""),r=i("");return(a,e)=>{const s=c("k-input");return m(),v("div",ue,[me,o("div",ve,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"textarea",placeholder:"Enter text"},null,8,["modelValue"]),n(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=d=>r.value=d),type:"textarea",placeholder:"Enter text",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])])])}}};Q.__docgenInfo={exportName:"default",displayName:"textarea",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/textarea.vue"]};const fe=`<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>多行文本域:</div>
      <div>自适应高度:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="text" type="textarea" placeholder="Enter text"></k-input>
      <k-input
        v-model="text2"
        type="textarea"
        placeholder="Enter text"
        :autosize="{ minRows: 2, maxRows: 4 }"
      ></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const text = ref('');
const text2 = ref('');
<\/script>
<style scoped></style>
`,xe={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},we=o("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[o("div",null,"输入框:"),o("div",null,"文本域:")],-1),_e={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},X={__name:"maxInput",setup(u){const t=i("");return(r,a)=>{const e=c("k-input");return m(),v("div",xe,[we,o("div",_e,[n(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"]),n(e,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value=s),type:"textarea",placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"])])])}}};X.__docgenInfo={exportName:"default",displayName:"maxInput",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/maxInput.vue"]};const ge=`<template>
  <div class="grid gap-4" style="grid-template-columns: auto 3fr">
    <div class="grid grid-flow-row justify-items-end items-center gap-4">
      <div>输入框:</div>
      <div>文本域:</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2">
      <k-input v-model="text" placeholder="请输入" :maxlength="10" showWordLimit></k-input>
      <k-input
        v-model="text"
        type="textarea"
        placeholder="请输入"
        :maxlength="10"
        showWordLimit
      ></k-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const text = ref('');
<\/script>
<style scoped></style>
`,ye=o("div",{class:"pt-4 pb-1"},"图标(prefix-icon, suffix-icon)",-1),be={class:"flex items-star gap-2"},he={class:"w-80"},ke={class:"w-80"},Ve=o("div",{class:"pt-4 pb-1"},"默认: 插槽(prefix, suffix)",-1),Ie={class:"flex items-star gap-2"},Ke={class:"w-80"},Be={class:"flex items-star gap-2"},Se={class:"w-full"},Y={__name:"frontAndRearSlots",setup(u){i("");const t=i(""),r=i("windows");return(a,e)=>{const s=c("KInput"),d=c("KOption"),V=c("KButton"),Z=c("IconArrowBottom"),ee=c("KButtonGroup");return m(),v(ne,null,[ye,o("div",be,[o("div",he,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),placeholder:"请输入内容","prefix-icon":"IconAdd"},null,8,["modelValue"])]),o("div",ke,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),placeholder:"请输入内容","suffix-icon":"IconDelete"},null,8,["modelValue"])])]),Ve,o("div",Ie,[o("div",Ke,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),placeholder:"请输入url"},{prepend:p(()=>[x("http://")]),append:p(()=>[x(".com")]),_:1},8,["modelValue"])])]),o("div",{class:"pt-4 pb-1",onClick:e[3]||(e[3]=(...l)=>a.handleClick&&a.handleClick(...l))},"组合按钮与选择器: 插槽(prefix, suffix)"),o("div",Be,[o("div",Se,[n(s,{modelValue:t.value,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value=l),placeholder:"选择运行机器"},{prepend:p(()=>[n(oe(te),{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=l=>r.value=l),placeholder:"请选择类型",style:{width:"168px"}},{default:p(()=>[n(d,{value:"windows"},{default:p(()=>[x("windows")]),_:1}),n(d,{value:"linux"},{default:p(()=>[x("linux")]),_:1})]),_:1},8,["modelValue"])]),append:p(()=>[n(ee,null,{default:p(()=>[n(V,{main:"","icon-left":"IconIdePlay"},{default:p(()=>[x("运行")]),_:1}),n(V,{main:""},{default:p(()=>[n(Z)]),_:1})]),_:1})]),_:1},8,["modelValue"])])])],64)}}};Y.__docgenInfo={exportName:"default",displayName:"frontAndRearSlots",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/frontAndRearSlots.vue"]};const Pe=`<template>
  <div class="pt-4 pb-1">图标(prefix-icon, suffix-icon)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" prefix-icon="IconAdd"></KInput>
    </div>
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入内容" suffix-icon="IconDelete"></KInput>
    </div>
  </div>

  <div class="pt-4 pb-1">默认: 插槽(prefix, suffix)</div>
  <div class="flex items-star gap-2">
    <div class="w-80">
      <KInput v-model="value" placeholder="请输入url">
        <template #prepend>http://</template>
        <template #append>.com</template>
      </KInput>
    </div>
  </div>

  <div class="pt-4 pb-1" @click="handleClick">组合按钮与选择器: 插槽(prefix, suffix)</div>
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
          <KButtonGroup>
            <KButton main icon-left="IconIdePlay">运行</KButton>
            <KButton main>
              <IconArrowBottom />
            </KButton>
          </KButtonGroup>
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
`,We={title:"Data Entry(DE)/KInput",component:q,argTypes:{type:{control:"text",description:"原生input类型"},clearable:{control:"boolean",description:"是否可清空"},showPassword:{control:"boolean",description:"是否显示密码"},maxlength:{control:"number",description:"最大输入长度"},showWordLimit:{control:"boolean",description:"显示输入字数限制"},autosize:{control:"object",description:"文本域自适应高度, 接收对象例如 { minRows: 2, maxRows: 6 }"},blur:{description:"el, 使 input 失去 焦点"},focus:{description:"el, 使 input 获取 焦点"},select:{description:"el, 选中 input 中的文字"},resizeTextarea:{description:"el, 改变 textarea 大小"}},args:{}},w={name:"默认用法",args:{type:"text",clearable:!1},render:u=>{const t=i("");return{components:{KInput:q},setup(){return{args:u,text:t}},template:`
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      `}}},$e=f(H,"disabled : 禁止输入",ae),_={name:"disabled : 禁止输入",...$e},je=f(J,"clearable : 一键清空",le),g={name:"clearable : 一键清空",...je},Ne=f(M,"showPassword : 显示密码",ce),y={name:"showPassword : 显示密码",...Ne},Ae=f(Q,"textarea : 文本域",fe),b={name:"textarea : 文本域",...Ae},Ue=f(X,"maxInput : 最大输入长度",ge),h={name:"maxInput : 最大输入长度",...Ue},De=f(Y,"组合使用&前后插槽",Pe),k={name:"组合使用&前后插槽",...De};var I,K,B;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(K=w.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var S,P,$;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'disabled : 禁止输入',
  ...doc1
}`,...($=(P=_.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,N,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'clearable : 一键清空',
  ...clearableSB
}`,...(A=(N=g.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,D,R;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'showPassword : 显示密码',
  ...showPasswordSB
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,O,F;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'textarea : 文本域',
  ...textareaSB
}`,...(F=(O=b.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var C,G,L;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'maxInput : 最大输入长度',
  ...maxInputSB
}`,...(L=(G=h.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var W,z,T;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '组合使用&前后插槽',
  ...frontAndRearSlotsSB
}`,...(T=(z=k.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const ze=["def","example1","example2","example3","example4","example5","example6"];export{ze as __namedExportsOrder,w as def,We as default,_ as example1,g as example2,y as example3,b as example4,h as example5,k as example6};
