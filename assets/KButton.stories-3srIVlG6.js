import{_ as st}from"./button-DfjyLBG0.js";import{A as d}from"./index-wXGUTIPA.js";import{j as a,o as u,t as p,G as s,e as t,l as e,E as o,k as rt,F as at}from"./vue.esm-bundler-N-wW40t0.js";import"./utils-D2KGOJGy.js";const it={class:"w-80 grid grid-cols-3 gap-4 justify-items-center"},ct=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"普通按钮:"),s("span",null,"主要按钮:"),s("span",null,"次级按钮:"),s("span",null,"文字按钮:"),s("span",null,"icon按钮:")],-1),dt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},W={__name:"btnType",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd");return u(),p("div",it,[ct,s("div",dt,[t(n,null,{default:e(()=>[o("取消")]),_:1}),t(n,{main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{secondary:""},{default:e(()=>[o("导出")]),_:1}),t(n,{text:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{icon:""},{default:e(()=>[t(r)]),_:1})])])}}};W.__docgenInfo={exportName:"default",displayName:"btnType",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnType.vue"]};const ut=`<template>
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
`,lt={class:"w-80 grid grid-cols-3 gap-4 justify-items-center items-center"},pt=s("span",null,"普通按钮:",-1),mt=s("span",null,"主要按钮:",-1),_t=s("span",null,"次级按钮:",-1),ft=s("span",null,"文字按钮:",-1),gt=s("span",null,"icon按钮:",-1),X={__name:"btnSize",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd");return u(),p("div",lt,[pt,t(n,null,{default:e(()=>[o("取消")]),_:1}),t(n,{size:"sm"},{default:e(()=>[o("取消")]),_:1}),mt,t(n,{main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{size:"sm",main:""},{default:e(()=>[o("新增")]),_:1}),_t,t(n,{secondary:""},{default:e(()=>[o("导出")]),_:1}),t(n,{size:"sm",secondary:""},{default:e(()=>[o("导出")]),_:1}),ft,t(n,{text:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{size:"sm",text:""},{default:e(()=>[o("编辑")]),_:1}),gt,t(n,{icon:""},{default:e(()=>[t(r)]),_:1}),t(n,{size:"sm",icon:""},{default:e(()=>[t(r)]),_:1})])}}};X.__docgenInfo={exportName:"default",displayName:"btnSize",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnSize.vue"]};const yt=`<template>
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
`,Y={__name:"btnGroup",setup(l){const i=(c,n="按钮被点击")=>{console.log(n)};return(c,n)=>{const r=a("k-button"),b=a("k-button-group");return u(),rt(b,null,{default:e(()=>[t(r,{onClick:i},{default:e(()=>[o("按钮1")]),_:1}),t(r,null,{default:e(()=>[o("按钮2")]),_:1}),t(r,null,{default:e(()=>[o("按钮3")]),_:1})]),_:1})}}};Y.__docgenInfo={exportName:"default",displayName:"btnGroup",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnGroup.vue"]};const Bt=`<template>
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
`,wt={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},Kt=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"普通按钮:"),s("span",null,"主要按钮:"),s("span",null,"次级按钮:"),s("span",null,"文字按钮:"),s("span",null,"icon按钮:")],-1),vt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},Z={__name:"btnDisabled",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd");return u(),p("div",wt,[Kt,s("div",vt,[t(n,{disabled:""},{default:e(()=>[o("取消")]),_:1}),t(n,{main:"",disabled:""},{default:e(()=>[o("新增")]),_:1}),t(n,{secondary:"",disabled:""},{default:e(()=>[o("导出")]),_:1}),t(n,{text:"",disabled:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{icon:"",disabled:""},{default:e(()=>[t(r)]),_:1})])])}}};Z.__docgenInfo={exportName:"default",displayName:"btnDisabled",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnDisabled.vue"]};const bt=`<template>
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
`,xt={class:"w-80 grid grid-cols-3 gap-4 justify-items-center"},ht=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"普通按钮:"),s("span",null,"主要按钮:"),s("span",null,"次级按钮:"),s("span",null,"文字按钮:"),s("span",null,"icon按钮:")],-1),jt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},kt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},tt={__name:"btnLoading",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd");return u(),p("div",xt,[ht,s("div",jt,[t(n,null,{default:e(()=>[o("取消")]),_:1}),t(n,{main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{secondary:""},{default:e(()=>[o("导出")]),_:1}),t(n,{text:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{icon:""},{default:e(()=>[t(r)]),_:1})]),s("div",kt,[t(n,{size:"sm"},{default:e(()=>[o("取消")]),_:1}),t(n,{size:"sm",main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{size:"sm",secondary:""},{default:e(()=>[o("导出")]),_:1}),t(n,{size:"sm",text:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{size:"sm",icon:""},{default:e(()=>[t(r)]),_:1})])])}}};tt.__docgenInfo={exportName:"default",displayName:"btnLoading",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnLoading.vue"]};const It=`<template>
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
`,$t={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},At=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"普通按钮:"),s("span",null,"主要按钮:"),s("span",null,"次级按钮:"),s("span",null,"文字按钮:"),s("span",null,"icon按钮:")],-1),zt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},nt={__name:"btnIconSlot",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd");return u(),p("div",$t,[At,s("div",zt,[t(n,null,{default:e(()=>[o("取消")]),_:1}),t(n,{main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{secondary:""},{default:e(()=>[o("导出")]),_:1}),t(n,{text:""},{default:e(()=>[o("编辑")]),_:1}),t(n,{icon:""},{default:e(()=>[t(r)]),_:1})])])}}};nt.__docgenInfo={exportName:"default",displayName:"btnIconSlot",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnIconSlot.vue"]};const Nt=`<template>
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
`,St={class:"w-80 grid grid-cols-4 gap-4 justify-items-center",style:{width:"32rem"}},Dt=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"el:primary"),s("span",null,"el:info"),s("span",null,"el:success"),s("span",null,"el:warning"),s("span",null,"el:danger")],-1),Ct={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},Ft={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},Lt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},Gt={class:"w-80 grid grid-cols-4 gap-4 justify-items-center",style:{width:"32rem","padding-top":"1rem"}},Tt=s("div",{class:"grid grid-flow-col auto-cols-fr justify-items-center items-center gap-4"},[s("span",null,"自定义颜色")],-1),et={__name:"btnColor",setup(l){return(i,c)=>{const n=a("KButton");return u(),p(at,null,[s("div",St,[Dt,s("div",Ct,[t(n,{type:"primary",main:""},{default:e(()=>[o("主要按钮")]),_:1}),t(n,{type:"info",main:""},{default:e(()=>[o("主要按钮")]),_:1}),t(n,{type:"success",main:""},{default:e(()=>[o("主要按钮")]),_:1}),t(n,{type:"warning",main:""},{default:e(()=>[o("主要按钮")]),_:1}),t(n,{type:"danger",main:""},{default:e(()=>[o("主要按钮")]),_:1})]),s("div",Ft,[t(n,{type:"primary",secondary:""},{default:e(()=>[o("次级按钮")]),_:1}),t(n,{type:"info",secondary:""},{default:e(()=>[o("次级按钮")]),_:1}),t(n,{type:"success",secondary:""},{default:e(()=>[o("次级按钮")]),_:1}),t(n,{type:"warning",secondary:""},{default:e(()=>[o("次级按钮")]),_:1}),t(n,{type:"danger",secondary:""},{default:e(()=>[o("次级按钮")]),_:1})]),s("div",Lt,[t(n,{type:"primary",text:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{type:"info",text:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{type:"success",text:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{type:"warning",text:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{type:"danger",text:""},{default:e(()=>[o("文字按钮")]),_:1})])]),s("div",Gt,[Tt,t(n,{color:"#9966cc",main:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{color:"#9966cc",secondary:""},{default:e(()=>[o("文字按钮")]),_:1}),t(n,{color:"#9966cc",text:""},{default:e(()=>[o("文字按钮")]),_:1})])],64)}}};et.__docgenInfo={exportName:"default",displayName:"btnColor",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnColor.vue"]};const Rt=`<template>
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
`,Et={class:"w-80 grid grid-cols-2 gap-4 justify-items-center"},Vt=s("div",{class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},[s("span",null,"icon-left"),s("span",null,"icon-right"),s("span",null,"自定义插槽-left"),s("span",null,"自定义插槽-right")],-1),Mt={class:"grid grid-flow-row auto-rows-fr justify-items-center items-center gap-4"},ot={__name:"btnIcon",setup(l){return(i,c)=>{const n=a("KButton"),r=a("IconAdd"),b=a("IconArrowBottom");return u(),p("div",Et,[Vt,s("div",Mt,[t(n,{iconLeft:"IconAdd",main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{iconRight:"IconArrowBottom",main:""},{default:e(()=>[o("新增")]),_:1}),t(n,{main:""},{iconLeft:e(()=>[t(r)]),default:e(()=>[o(" 新增 ")]),_:1}),t(n,{main:""},{iconRight:e(()=>[t(b)]),default:e(()=>[o(" 新增 ")]),_:1})])])}}};ot.__docgenInfo={exportName:"default",displayName:"btnIcon",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/button/btnIcon.vue"]};const Ot=`<template>
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
`,en={title:"Base(B)/KButton",component:st,argTypes:{value:"text",size:{control:"select",options:["base","sm"]},main:"boolean",secondary:"boolean",text:"boolean",icon:"boolean",disabled:"boolean",loading:"boolean",iconLeft:"",iconRight:"",type:{control:"select",options:["normal","main","secondary","text","icon"]},color:{control:"color"}},args:{}},m={name:"默认",args:{value:"Button"}},qt=d(W,"各种类型按钮",ut),_={name:"各种类型按钮",...qt},Ht=d(X,"size: sm",yt),f={name:"size: sm",...Ht},Jt=d(Z,"disabled:禁用按钮",bt),g={name:"disabled:禁用按钮",...Jt},Pt=d(tt,"loading:加载中",It),y={name:"loading:加载中",...Pt},Qt=d(nt,"icon:按钮左右侧图标",Nt),B={name:"icon:按钮左右侧图标",...Qt},Ut=d(et,"color:支持 el-type 类型 与 自定义颜色",Rt),w={name:"color:支持 el-type 类型 与 自定义颜色",...Ut},Wt=d(ot,"icon:插入图标",Ot),K={name:"icon:插入图标",...Wt},Xt=d(Y,"btnGroup:按钮组",Bt),v={name:"btnGroup:按钮组",...Xt};var x,h,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '默认',
  args: {
    value: 'Button'
  }
}`,...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var k,I,$;_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '各种类型按钮',
  ...doc1
}`,...($=(I=_.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var A,z,N;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'size: sm',
  ...doc2
}`,...(N=(z=f.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var S,D,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'disabled:禁用按钮',
  ...doc3
}`,...(C=(D=g.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var F,L,G;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'loading:加载中',
  ...doc4
}`,...(G=(L=y.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var T,R,E;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'icon:按钮左右侧图标',
  ...doc5
}`,...(E=(R=B.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var V,M,O;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'color:支持 el-type 类型 与 自定义颜色',
  ...doc6
}`,...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,H,J;K.parameters={...K.parameters,docs:{...(q=K.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'icon:插入图标',
  ...doc7
}`,...(J=(H=K.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,Q,U;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'btnGroup:按钮组',
  ...doc9
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const on=["def","example1","example2","example3","example4","example5","example6","example7","example9"];export{on as __namedExportsOrder,m as def,en as default,_ as example1,f as example2,g as example3,y as example4,B as example5,w as example6,K as example7,v as example9};
