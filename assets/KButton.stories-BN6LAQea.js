import{_ as st}from"./button-BTkNDmSC.js";import{A as u}from"./index-wXGUTIPA.js";import{j as a,o as l,t as m,G as r,e as o,l as e,E as s,k as rt,F as it}from"./vue.esm-bundler-DnGJEZCU.js";import"./utils-7yzkk6k9.js";const at={class:"w-80 grid grid-cols-3 gap-4 justify-items-center"},dt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},X={__name:"btnType",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd");return l(),m("div",at,[t[4]||(t[4]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"普通按钮:"),r("span",null,"主要按钮:"),r("span",null,"次级按钮:"),r("span",null,"文字按钮:"),r("span",null,"icon按钮:")],-1)),r("div",dt,[o(n,null,{default:e(()=>t[0]||(t[0]=[s("取消")])),_:1}),o(n,{main:""},{default:e(()=>t[1]||(t[1]=[s("新增")])),_:1}),o(n,{secondary:""},{default:e(()=>t[2]||(t[2]=[s("导出")])),_:1}),o(n,{text:""},{default:e(()=>t[3]||(t[3]=[s("编辑")])),_:1}),o(n,{icon:""},{default:e(()=>[o(i)]),_:1})])])}}};X.__docgenInfo={exportName:"default",displayName:"btnType",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnType.vue"]};const ut=`<template>
  <div class="w-80 grid grid-cols-3 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>普通按钮:</span>
      <span>主要按钮:</span>
      <span>次级按钮:</span>
      <span>文字按钮:</span>
      <span>icon按钮:</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton>取消</KButton>
      <KButton main>新增</KButton>
      <KButton secondary>导出</KButton>
      <KButton text>编辑</KButton>
      <KButton icon><IconAdd /></KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,lt={class:"w-80 grid grid-cols-3 gap-4 justify-items-center items-center"},Y={__name:"btnSize",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd");return l(),m("div",lt,[t[8]||(t[8]=r("span",null,"普通按钮:",-1)),o(n,null,{default:e(()=>t[0]||(t[0]=[s("取消")])),_:1}),o(n,{size:"sm"},{default:e(()=>t[1]||(t[1]=[s("取消")])),_:1}),t[9]||(t[9]=r("span",null,"主要按钮:",-1)),o(n,{main:""},{default:e(()=>t[2]||(t[2]=[s("新增")])),_:1}),o(n,{size:"sm",main:""},{default:e(()=>t[3]||(t[3]=[s("新增")])),_:1}),t[10]||(t[10]=r("span",null,"次级按钮:",-1)),o(n,{secondary:""},{default:e(()=>t[4]||(t[4]=[s("导出")])),_:1}),o(n,{size:"sm",secondary:""},{default:e(()=>t[5]||(t[5]=[s("导出")])),_:1}),t[11]||(t[11]=r("span",null,"文字按钮:",-1)),o(n,{text:""},{default:e(()=>t[6]||(t[6]=[s("编辑")])),_:1}),o(n,{size:"sm",text:""},{default:e(()=>t[7]||(t[7]=[s("编辑")])),_:1}),t[12]||(t[12]=r("span",null,"icon按钮:",-1)),o(n,{icon:""},{default:e(()=>[o(i)]),_:1}),o(n,{size:"sm",icon:""},{default:e(()=>[o(i)]),_:1})])}}};Y.__docgenInfo={exportName:"default",displayName:"btnSize",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnSize.vue"]};const pt=`<template>
  <div class="w-80 grid grid-cols-3 gap-4 justify-items-center items-center">
    <span>普通按钮:</span>
    <KButton>取消</KButton>
    <KButton size="sm">取消</KButton>
    <span>主要按钮:</span>
    <KButton main>新增</KButton>
    <KButton size="sm" main>新增</KButton>
    <span>次级按钮:</span>
    <KButton secondary>导出</KButton>
    <KButton size="sm" secondary>导出</KButton>
    <span>文字按钮:</span>
    <KButton text>编辑</KButton>
    <KButton size="sm" text>编辑</KButton>
    <span>icon按钮:</span>
    <KButton icon><IconAdd /></KButton>
    <KButton size="sm" icon><IconAdd /></KButton>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,Z={__name:"btnGroup",setup(p){const d=(t,n="按钮被点击")=>{console.log(n)};return(t,n)=>{const i=a("k-button"),_=a("k-button-group");return l(),rt(_,null,{default:e(()=>[o(i,{onClick:d},{default:e(()=>n[0]||(n[0]=[s("按钮1")])),_:1}),o(i,null,{default:e(()=>n[1]||(n[1]=[s("按钮2")])),_:1}),o(i,null,{default:e(()=>n[2]||(n[2]=[s("按钮3")])),_:1})]),_:1})}}};Z.__docgenInfo={exportName:"default",displayName:"btnGroup",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnGroup.vue"]};const mt=`<template>
  <k-button-group>
    <k-button @click="handleClick">按钮1</k-button>
    <k-button>按钮2</k-button>
    <k-button>按钮3</k-button>
  </k-button-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const handleClick = (_a, Message = '按钮被点击') => {
  console.log(Message);
};
<\/script>
<style scoped></style>
`,ct={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},ft={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},h={__name:"btnDisabled",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd");return l(),m("div",ct,[t[4]||(t[4]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"普通按钮:"),r("span",null,"主要按钮:"),r("span",null,"次级按钮:"),r("span",null,"文字按钮:"),r("span",null,"icon按钮:")],-1)),r("div",ft,[o(n,{disabled:""},{default:e(()=>t[0]||(t[0]=[s("取消")])),_:1}),o(n,{main:"",disabled:""},{default:e(()=>t[1]||(t[1]=[s("新增")])),_:1}),o(n,{secondary:"",disabled:""},{default:e(()=>t[2]||(t[2]=[s("导出")])),_:1}),o(n,{text:"",disabled:""},{default:e(()=>t[3]||(t[3]=[s("编辑")])),_:1}),o(n,{icon:"",disabled:""},{default:e(()=>[o(i)]),_:1})])])}}};h.__docgenInfo={exportName:"default",displayName:"btnDisabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnDisabled.vue"]};const gt=`<template>
  <div class="w-80 grid grid-cols-2 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>普通按钮:</span>
      <span>主要按钮:</span>
      <span>次级按钮:</span>
      <span>文字按钮:</span>
      <span>icon按钮:</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton disabled>取消</KButton>
      <KButton main disabled>新增</KButton>
      <KButton secondary disabled>导出</KButton>
      <KButton text disabled>编辑</KButton>
      <KButton icon disabled><IconAdd /></KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,yt={class:"w-80 grid grid-cols-3 gap-4 justify-items-center"},Bt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},wt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},tt={__name:"btnLoading",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd");return l(),m("div",yt,[t[8]||(t[8]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"普通按钮:"),r("span",null,"主要按钮:"),r("span",null,"次级按钮:"),r("span",null,"文字按钮:"),r("span",null,"icon按钮:")],-1)),r("div",Bt,[o(n,null,{default:e(()=>t[0]||(t[0]=[s("取消")])),_:1}),o(n,{main:""},{default:e(()=>t[1]||(t[1]=[s("新增")])),_:1}),o(n,{secondary:""},{default:e(()=>t[2]||(t[2]=[s("导出")])),_:1}),o(n,{text:""},{default:e(()=>t[3]||(t[3]=[s("编辑")])),_:1}),o(n,{icon:""},{default:e(()=>[o(i)]),_:1})]),r("div",wt,[o(n,{size:"sm"},{default:e(()=>t[4]||(t[4]=[s("取消")])),_:1}),o(n,{size:"sm",main:""},{default:e(()=>t[5]||(t[5]=[s("新增")])),_:1}),o(n,{size:"sm",secondary:""},{default:e(()=>t[6]||(t[6]=[s("导出")])),_:1}),o(n,{size:"sm",text:""},{default:e(()=>t[7]||(t[7]=[s("编辑")])),_:1}),o(n,{size:"sm",icon:""},{default:e(()=>[o(i)]),_:1})])])}}};tt.__docgenInfo={exportName:"default",displayName:"btnLoading",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnLoading.vue"]};const Kt=`<template>
  <div class="w-80 grid grid-cols-3 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>普通按钮:</span>
      <span>主要按钮:</span>
      <span>次级按钮:</span>
      <span>文字按钮:</span>
      <span>icon按钮:</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton>取消</KButton>
      <KButton main>新增</KButton>
      <KButton secondary>导出</KButton>
      <KButton text>编辑</KButton>
      <KButton icon><IconAdd /></KButton>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton size="sm">取消</KButton>
      <KButton size="sm" main>新增</KButton>
      <KButton size="sm" secondary>导出</KButton>
      <KButton size="sm" text>编辑</KButton>
      <KButton size="sm" icon><IconAdd /></KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,vt={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},bt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},nt={__name:"btnIconSlot",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd");return l(),m("div",vt,[t[4]||(t[4]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"普通按钮:"),r("span",null,"主要按钮:"),r("span",null,"次级按钮:"),r("span",null,"文字按钮:"),r("span",null,"icon按钮:")],-1)),r("div",bt,[o(n,null,{default:e(()=>t[0]||(t[0]=[s("取消")])),_:1}),o(n,{main:""},{default:e(()=>t[1]||(t[1]=[s("新增")])),_:1}),o(n,{secondary:""},{default:e(()=>t[2]||(t[2]=[s("导出")])),_:1}),o(n,{text:""},{default:e(()=>t[3]||(t[3]=[s("编辑")])),_:1}),o(n,{icon:""},{default:e(()=>[o(i)]),_:1})])])}}};nt.__docgenInfo={exportName:"default",displayName:"btnIconSlot",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnIconSlot.vue"]};const _t=`<template>
  <div class="w-80 grid grid-cols-2 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>普通按钮:</span>
      <span>主要按钮:</span>
      <span>次级按钮:</span>
      <span>文字按钮:</span>
      <span>icon按钮:</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton>取消</KButton>
      <KButton main>新增</KButton>
      <KButton secondary>导出</KButton>
      <KButton text>编辑</KButton>
      <KButton icon><IconAdd /></KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,xt={class:"w-80 grid grid-cols-4 gap-4 justify-items-center",style:{width:"32rem"}},jt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},kt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},It={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},At={class:"w-80 grid grid-cols-4 gap-4 justify-items-center",style:{width:"32rem","padding-top":"1rem"}},ot={__name:"btnColor",setup(p){return(d,t)=>{const n=a("KButton");return l(),m(it,null,[r("div",xt,[t[15]||(t[15]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"el:primary"),r("span",null,"el:info"),r("span",null,"el:success"),r("span",null,"el:warning"),r("span",null,"el:danger")],-1)),r("div",jt,[o(n,{type:"primary",main:""},{default:e(()=>t[0]||(t[0]=[s("主要按钮")])),_:1}),o(n,{type:"info",main:""},{default:e(()=>t[1]||(t[1]=[s("主要按钮")])),_:1}),o(n,{type:"success",main:""},{default:e(()=>t[2]||(t[2]=[s("主要按钮")])),_:1}),o(n,{type:"warning",main:""},{default:e(()=>t[3]||(t[3]=[s("主要按钮")])),_:1}),o(n,{type:"danger",main:""},{default:e(()=>t[4]||(t[4]=[s("主要按钮")])),_:1})]),r("div",kt,[o(n,{type:"primary",secondary:""},{default:e(()=>t[5]||(t[5]=[s("次级按钮")])),_:1}),o(n,{type:"info",secondary:""},{default:e(()=>t[6]||(t[6]=[s("次级按钮")])),_:1}),o(n,{type:"success",secondary:""},{default:e(()=>t[7]||(t[7]=[s("次级按钮")])),_:1}),o(n,{type:"warning",secondary:""},{default:e(()=>t[8]||(t[8]=[s("次级按钮")])),_:1}),o(n,{type:"danger",secondary:""},{default:e(()=>t[9]||(t[9]=[s("次级按钮")])),_:1})]),r("div",It,[o(n,{type:"primary",text:""},{default:e(()=>t[10]||(t[10]=[s("文字按钮")])),_:1}),o(n,{type:"info",text:""},{default:e(()=>t[11]||(t[11]=[s("文字按钮")])),_:1}),o(n,{type:"success",text:""},{default:e(()=>t[12]||(t[12]=[s("文字按钮")])),_:1}),o(n,{type:"warning",text:""},{default:e(()=>t[13]||(t[13]=[s("文字按钮")])),_:1}),o(n,{type:"danger",text:""},{default:e(()=>t[14]||(t[14]=[s("文字按钮")])),_:1})])]),r("div",At,[t[19]||(t[19]=r("div",{class:"grid grid-flow-col auto-cols-fr justify-items-center items-center gap-4"},[r("span",null,"自定义颜色")],-1)),o(n,{color:"#9966cc",main:""},{default:e(()=>t[16]||(t[16]=[s("文字按钮")])),_:1}),o(n,{color:"#9966cc",secondary:""},{default:e(()=>t[17]||(t[17]=[s("文字按钮")])),_:1}),o(n,{color:"#9966cc",text:""},{default:e(()=>t[18]||(t[18]=[s("文字按钮")])),_:1})])],64)}}};ot.__docgenInfo={exportName:"default",displayName:"btnColor",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnColor.vue"]};const zt=`<template>
  <div class="w-80 grid grid-cols-4 gap-4 justify-items-center" style="width: 32rem">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>el:primary</span>
      <span>el:info</span>
      <span>el:success</span>
      <span>el:warning</span>
      <span>el:danger</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" main>主要按钮</KButton>
      <KButton type="info" main>主要按钮</KButton>
      <KButton type="success" main>主要按钮</KButton>
      <KButton type="warning" main>主要按钮</KButton>
      <KButton type="danger" main>主要按钮</KButton>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" secondary>次级按钮</KButton>
      <KButton type="info" secondary>次级按钮</KButton>
      <KButton type="success" secondary>次级按钮</KButton>
      <KButton type="warning" secondary>次级按钮</KButton>
      <KButton type="danger" secondary>次级按钮</KButton>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton type="primary" text>文字按钮</KButton>
      <KButton type="info" text>文字按钮</KButton>
      <KButton type="success" text>文字按钮</KButton>
      <KButton type="warning" text>文字按钮</KButton>
      <KButton type="danger" text>文字按钮</KButton>
    </div>
  </div>
  <div
    class="w-80 grid grid-cols-4 gap-4 justify-items-center"
    style="width: 32rem; padding-top: 1rem"
  >
    <div class="grid grid-flow-col auto-cols-fr justify-items-center items-center gap-4">
      <span>自定义颜色</span>
    </div>
    <KButton color="#9966cc" main>文字按钮</KButton>
    <KButton color="#9966cc" secondary>文字按钮</KButton>
    <KButton color="#9966cc" text>文字按钮</KButton>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,$t={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},Nt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},et={__name:"btnIcon",setup(p){return(d,t)=>{const n=a("KButton"),i=a("IconAdd"),_=a("IconArrowBottom");return l(),m("div",$t,[t[4]||(t[4]=r("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[r("span",null,"icon-left"),r("span",null,"icon-right"),r("span",null,"自定义插槽-left"),r("span",null,"自定义插槽-right")],-1)),r("div",Nt,[o(n,{iconLeft:"IconAdd",main:""},{default:e(()=>t[0]||(t[0]=[s("新增")])),_:1}),o(n,{iconRight:"IconArrowBottom",main:""},{default:e(()=>t[1]||(t[1]=[s("新增")])),_:1}),o(n,{main:""},{iconLeft:e(()=>[o(i)]),default:e(()=>[t[2]||(t[2]=s(" 新增 "))]),_:1}),o(n,{main:""},{iconRight:e(()=>[o(_)]),default:e(()=>[t[3]||(t[3]=s(" 新增 "))]),_:1})])])}}};et.__docgenInfo={exportName:"default",displayName:"btnIcon",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnIcon.vue"]};const St=`<template>
  <div class="w-80 grid grid-cols-2 gap-4 justify-items-center">
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <span>icon-left</span>
      <span>icon-right</span>
      <span>自定义插槽-left</span>
      <span>自定义插槽-right</span>
    </div>
    <div class="grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4">
      <KButton iconLeft="IconAdd" main>新增</KButton>
      <KButton iconRight="IconArrowBottom" main>新增</KButton>
      <KButton main>
        <template #iconLeft>
          <IconAdd />
        </template>
        新增
      </KButton>
      <KButton main>
        <template #iconRight>
          <IconArrowBottom />
        </template>
        新增
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
<\/script>
<style scoped></style>
`,Ht={title:"Base(B)/KButton",component:st,argTypes:{value:"text",size:{control:"select",options:["base","sm"]},main:"boolean",secondary:"boolean",text:"boolean",icon:"boolean",disabled:"boolean",loading:"boolean",iconLeft:"",iconRight:"",type:{control:"select",options:["normal","main","secondary","text","icon"]},color:{control:"color"}},args:{}},c={name:"默认",args:{value:"Button"}},Dt=u(X,"各种类型按钮",ut),f={name:"各种类型按钮",...Dt},Ct=u(Y,"size: sm",pt),g={name:"size: sm",...Ct},Ft=u(h,"disabled:禁用按钮",gt),y={name:"disabled:禁用按钮",...Ft},Lt=u(tt,"loading:加载中",Kt),B={name:"loading:加载中",...Lt},Gt=u(nt,"icon:按钮左右侧图标",_t),w={name:"icon:按钮左右侧图标",...Gt},Tt=u(ot,"color:支持 el-type 类型 与 自定义颜色",zt),K={name:"color:支持 el-type 类型 与 自定义颜色",...Tt},Rt=u(et,"icon:插入图标",St),v={name:"icon:插入图标",...Rt},Et=u(Z,"btnGroup:按钮组",mt),b={name:"btnGroup:按钮组",...Et};var x,j,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '默认',
  args: {
    value: 'Button'
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var I,A,z;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '各种类型按钮',
  ...doc1
}`,...(z=(A=f.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var $,N,S;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'size: sm',
  ...doc2
}`,...(S=(N=g.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,C,F;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'disabled:禁用按钮',
  ...doc3
}`,...(F=(C=y.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var L,G,T;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'loading:加载中',
  ...doc4
}`,...(T=(G=B.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var R,E,V;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'icon:按钮左右侧图标',
  ...doc5
}`,...(V=(E=w.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var M,O,q;K.parameters={...K.parameters,docs:{...(M=K.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'color:支持 el-type 类型 与 自定义颜色',
  ...doc6
}`,...(q=(O=K.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,J,P;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'icon:插入图标',
  ...doc7
}`,...(P=(J=v.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Q,U,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'btnGroup:按钮组',
  ...doc9
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Jt=["def","example1","example2","example3","example4","example5","example6","example7","example9"];export{Jt as __namedExportsOrder,c as def,Ht as default,f as example1,g as example2,y as example3,B as example4,w as example5,K as example6,v as example7,b as example9};
