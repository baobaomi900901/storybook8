import"./button-BTkNDmSC.js";import{_ as te,c as q}from"./tree_select-De66uPhg.js";import"./radio_group-BJq7aPbM.js";import{r as i,j as u,o as m,t as v,e as o,G as n,l as p,E as x,u as ne,F as oe}from"./vue.esm-bundler-DnGJEZCU.js";import{A as f}from"./index-wXGUTIPA.js";import"./utils-7yzkk6k9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const se={class:"w-60"},H=Object.assign({name:"disabled"},{__name:"disabled",setup(c){const t=i("");return(r,a)=>{const e=u("k-input");return m(),v("div",se,[o(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"Disabled Input",disabled:""},null,8,["modelValue"])])}}});H.__docgenInfo={name:"disabled",exportName:"default",displayName:"disabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/disabled.vue"]};const ae=`<template>
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
`,re={class:"w-60"},J={__name:"clearable",setup(c){const t=i("");return(r,a)=>{const e=u("k-input");return m(),v("div",re,[o(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"请输入",clearable:""},null,8,["modelValue"])])}}};J.__docgenInfo={exportName:"default",displayName:"clearable",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/clearable.vue"]};const le=`
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
</style>`,ie={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},de={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},M={__name:"showPassword",setup(c){const t=i(""),r=i("");return(a,e)=>{const s=u("k-input");return m(),v("div",ie,[e[2]||(e[2]=n("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[n("div",null,"密码输入框:"),n("div",null,"显示密码按钮:")],-1)),n("div",de,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"password"},null,8,["modelValue"]),o(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=d=>r.value=d),showPassword:""},null,8,["modelValue"])])])}}};M.__docgenInfo={exportName:"default",displayName:"showPassword",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/showPassword.vue"]};const pe=`<template>
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
`,ue={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},ce={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},Q={__name:"textarea",setup(c){const t=i(""),r=i("");return(a,e)=>{const s=u("k-input");return m(),v("div",ue,[e[2]||(e[2]=n("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[n("div",null,"多行文本域:"),n("div",null,"自适应高度:")],-1)),n("div",ce,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"textarea",placeholder:"Enter text"},null,8,["modelValue"]),o(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=d=>r.value=d),type:"textarea",placeholder:"Enter text",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])])])}}};Q.__docgenInfo={exportName:"default",displayName:"textarea",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/textarea.vue"]};const me=`<template>
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
`,ve={class:"grid gap-4",style:{"grid-template-columns":"auto 3fr"}},fe={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4 w-1/2"},X={__name:"maxInput",setup(c){const t=i("");return(r,a)=>{const e=u("k-input");return m(),v("div",ve,[a[2]||(a[2]=n("div",{class:"grid grid-flow-row justify-items-end items-center gap-4"},[n("div",null,"输入框:"),n("div",null,"文本域:")],-1)),n("div",fe,[o(e,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"]),o(e,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value=s),type:"textarea",placeholder:"请输入",maxlength:10,showWordLimit:""},null,8,["modelValue"])])])}}};X.__docgenInfo={exportName:"default",displayName:"maxInput",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/maxInput.vue"]};const xe=`<template>
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
`,we={class:"flex items-star gap-2"},ge={class:"w-80"},_e={class:"w-80"},ye={class:"flex items-star gap-2"},be={class:"w-80"},ke={class:"flex items-star gap-2"},Ve={class:"w-full"},Y={__name:"frontAndRearSlots",setup(c){i("");const t=i(""),r=i("windows");return(a,e)=>{const s=u("KInput"),d=u("KOption"),I=u("KButton"),Z=u("IconArrowBottom"),ee=u("KButtonGroup");return m(),v(oe,null,[e[11]||(e[11]=n("div",{class:"pt-4 pb-1"},"图标(prefix-icon, suffix-icon)",-1)),n("div",we,[n("div",ge,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),placeholder:"请输入内容","prefix-icon":"IconAdd"},null,8,["modelValue"])]),n("div",_e,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),placeholder:"请输入内容","suffix-icon":"IconDelete"},null,8,["modelValue"])])]),e[12]||(e[12]=n("div",{class:"pt-4 pb-1"},"默认: 插槽(prefix, suffix)",-1)),n("div",ye,[n("div",be,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),placeholder:"请输入url"},{prepend:p(()=>e[6]||(e[6]=[x("http://")])),append:p(()=>e[7]||(e[7]=[x(".com")])),_:1},8,["modelValue"])])]),n("div",{class:"pt-4 pb-1",onClick:e[3]||(e[3]=(...l)=>a.handleClick&&a.handleClick(...l))},"组合按钮与选择器: 插槽(prefix, suffix)"),n("div",ke,[n("div",Ve,[o(s,{modelValue:t.value,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value=l),placeholder:"选择运行机器"},{prepend:p(()=>[o(ne(te),{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=l=>r.value=l),placeholder:"请选择类型",style:{width:"168px"}},{default:p(()=>[o(d,{value:"windows"},{default:p(()=>e[8]||(e[8]=[x("windows")])),_:1}),o(d,{value:"linux"},{default:p(()=>e[9]||(e[9]=[x("linux")])),_:1})]),_:1},8,["modelValue"])]),append:p(()=>[o(ee,null,{default:p(()=>[o(I,{main:"","icon-left":"IconIdePlay"},{default:p(()=>e[10]||(e[10]=[x("运行")])),_:1}),o(I,{main:""},{default:p(()=>[o(Z)]),_:1})]),_:1})]),_:1},8,["modelValue"])])])],64)}}};Y.__docgenInfo={exportName:"default",displayName:"frontAndRearSlots",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/input/frontAndRearSlots.vue"]};const Ie=`<template>
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
`,Oe={title:"Data Entry(DE)/KInput",component:q,argTypes:{type:{control:"text",description:"原生input类型"},clearable:{control:"boolean",description:"是否可清空"},showPassword:{control:"boolean",description:"是否显示密码"},maxlength:{control:"number",description:"最大输入长度"},showWordLimit:{control:"boolean",description:"显示输入字数限制"},autosize:{control:"object",description:"文本域自适应高度, 接收对象例如 { minRows: 2, maxRows: 6 }"},blur:{description:"el, 使 input 失去 焦点"},focus:{description:"el, 使 input 获取 焦点"},select:{description:"el, 选中 input 中的文字"},resizeTextarea:{description:"el, 改变 textarea 大小"}},args:{}},w={name:"默认用法",args:{type:"text",clearable:!1},render:c=>{const t=i("");return{components:{KInput:q},setup(){return{args:c,text:t}},template:`
      <div class="w-60">
        <k-input v-model="text" type="text" :clearable="args.clearable">
        </k-input>
      </div>
      `}}},Ke=f(H,"disabled : 禁止输入",ae),g={name:"disabled : 禁止输入",...Ke},he=f(J,"clearable : 一键清空",le),_={name:"clearable : 一键清空",...he},Be=f(M,"showPassword : 显示密码",pe),y={name:"showPassword : 显示密码",...Be},Se=f(Q,"textarea : 文本域",me),b={name:"textarea : 文本域",...Se},Pe=f(X,"maxInput : 最大输入长度",xe),k={name:"maxInput : 最大输入长度",...Pe},je=f(Y,"组合使用&前后插槽",Ie),V={name:"组合使用&前后插槽",...je};var K,h,B;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(h=w.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var S,P,j;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'disabled : 禁止输入',
  ...doc1
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,$,A;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'clearable : 一键清空',
  ...clearableSB
}`,...(A=($=_.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var U,D,R;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'showPassword : 显示密码',
  ...showPasswordSB
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,O,F;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'textarea : 文本域',
  ...textareaSB
}`,...(F=(O=b.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var C,G,L;k.parameters={...k.parameters,docs:{...(C=k.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'maxInput : 最大输入长度',
  ...maxInputSB
}`,...(L=(G=k.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var W,z,T;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '组合使用&前后插槽',
  ...frontAndRearSlotsSB
}`,...(T=(z=V.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const Fe=["def","example1","example2","example3","example4","example5","example6"];export{Fe as __namedExportsOrder,w as def,Oe as default,g as example1,_ as example2,y as example3,b as example4,k as example5,V as example6};
