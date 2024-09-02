import"./button-CcOKIamw.js";import{e as M}from"./tree_select-BoIpHxCo.js";import"./radio_group-BVyi_CQ5.js";import{P as x}from"./jsx-runtime-DcXTrDYo.js";import{u as pe}from"./index-DLKhnlMj.js";import{ae as ve,ar as We,as as we,at as ze,au as Pe,av as Ie,af as ke}from"./index-CwrK-yrS.js";import{A as p}from"./index-wXGUTIPA.js";import{f as u,r as g,a as f,i as l,s as h,e as s,o as T,k as c,E as e,F as b,D as n,I as Ge,J as Ee,u as y,t as Ne}from"./vue.esm-bundler-D0aKWXXn.js";import"./utils-DE3h7KcC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C9iVZknA.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DlJr0YTq.js";import"./index-DrFu-skq.js";function E(i){const d={p:"p",...pe(),...i.components};return x(ke.Fragment,{children:[x(ve,{isTemplate:!0}),`
`,x(We,{}),`
`,x(we,{}),`
`,x(ze,{}),`
`,x(Pe,{}),`
`,x(d.p,{children:"The component accepts the following inputs (props):"}),`
`,x(Ie,{})]})}function $e(i={}){const{wrapper:d}={...pe(),...i.components};return d?x(d,{...i,children:x(E,{...i})}):E(i)}const Ae={style:{height:"300px"}},ue=u({__name:"base",setup(i){const d=g([{title:"Id",field:"id",width:"100",dataType:"number"},{title:"Name",field:"name"},{title:"Role",field:"role"},{title:"Sex",field:"sex"},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]),o=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc",icon:"IconFolderOpen",iconStyle:{empty:!1,color:"#f60",size:20}},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou",icon:"IconFolderOpen",iconStyle:{empty:!1,color:"#f60",size:16}},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai",icon:"IconFolderOpen",iconStyle:{empty:!1,color:"#f60",size:16}},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]);return(t,r)=>{const a=l("k-tree-table");return T(),h("div",Ae,[s(a,{data:o,column:d.value,"show-page":!1,border:""},null,8,["data","column"])])}}});ue.__docgenInfo={exportName:"default",displayName:"base",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/base.vue"]};const Ce=`<template>
  <div :style="{ height: '300px' }">
    <k-tree-table :data="tableData" :column="column1" :show-page="false" border></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const column1 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
const tableData = reactive([
  {
    id: 1,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 20,
    },
  },
  {
    id: 2,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 42,
    address: 'Guangzhou',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  {
    id: 3,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);
<\/script>
<style scoped></style>
`,Be=e("p",null,[n(" 单元格布局: "),e("br"),n(" 通过align属性设置单元格的对齐方式，可选值有left、center、right，默认为left， 也可以在列配置中设置align属性，优先级高于align属性 ")],-1),Re=e("br",null,null,-1),Fe={style:{height:"300px"}},he=u({__name:"cellLayout",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number"},{title:"Name",field:"name"},{title:"Role",field:"role"},{title:"Sex",field:"sex"},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel"),m=l("k-tree-table");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[Be]),_:1}),Re,e("div",Fe,[s(m,{data:d,column:o.value,"show-page":!1,align:"center",border:""},null,8,["data","column"])])],64)}}});he.__docgenInfo={exportName:"default",displayName:"cellLayout",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/cellLayout.vue"]};const Ve=`<template>
  <!-- 单元格布局 -->
  <!-- 通过align属性设置单元格的对齐方式，可选值有left、center、right，默认为left，
      也可以在列配置中设置align属性，优先级高于align属性
  -->
  <SBExamplePanel label="注释" open>
    <p>
      单元格布局:
      <br />
      通过align属性设置单元格的对齐方式，可选值有left、center、right，默认为left，
      也可以在列配置中设置align属性，优先级高于align属性
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="tableData"
      :column="column2"
      :show-page="false"
      align="center"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column2 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,je=e("p",null,[n(" 可编辑单元格: "),e("br"),n(" 通过edit-config属性设置单元格可编辑，trigger属性设置触发编辑的方式，可选值有click、dblclick，默认为click， 需要再列配置中设置editRender参数和renderEdit参数用于自定义配置编辑状态下所展示的内容 ")],-1),Ke=e("br",null,null,-1),Oe={style:{height:"300px"}},Te=u({__name:"editableCells",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number"},{title:"Name",field:"name",editRender:{},renderEdit:({row:t,column:r})=>Ge(s("input",{type:"text","onUpdate:modelValue":a=>t[r.field]=a},null),[[Ee,t[r.field]]])},{title:"Role",field:"role"},{title:"Sex",field:"sex"},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel"),m=l("k-tree-table");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[je]),_:1}),Ke,e("div",Oe,[s(m,{data:d,column:o.value,"show-page":!1,"edit-config":{trigger:"dblclick",mode:"cell"},border:""},null,8,["data","column"])])],64)}}});Te.__docgenInfo={exportName:"default",displayName:"editableCells",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/editableCells.vue"]};const Le=`<template>
  <!-- 可编辑单元格 -->
  <!-- 通过edit-config属性设置单元格可编辑，trigger属性设置触发编辑的方式，可选值有click、dblclick，默认为click，
      需要再列配置中设置editRender参数和renderEdit参数用于自定义配置编辑状态下所展示的内容
  -->
  <SBExamplePanel label="注释" open>
    <p>
      可编辑单元格:
      <br />
      通过edit-config属性设置单元格可编辑，trigger属性设置触发编辑的方式，可选值有click、dblclick，默认为click，
      需要再列配置中设置editRender参数和renderEdit参数用于自定义配置编辑状态下所展示的内容
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="tableData"
      :column="column3"
      :show-page="false"
      :edit-config="{ trigger: 'dblclick', mode: 'cell' }"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column3 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    editRender: {},
    renderEdit: ({ row, column }) => {
      return <input type='text' v-model={row[column.field]} />;
    },
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,Xe=e("p",null,[n(" 搜索功能: "),e("br"),n(" 表格搜索功能默认使用模糊匹配，可以通过search-config属性配置，strict属性设置为true时，则使用精确匹配， 如需自定义搜索方法，则使用searchMethod属性，该属性接收一个函数，函数参数为当前表格数据和搜索关键字。 ")],-1),He=e("br",null,null,-1),Qe={style:{height:"300px"}},xe=u({__name:"searchFunction",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{type:"checkbox",width:"50"},{title:"Id",field:"id",width:"50",sortable:!0,dataType:"number"},{title:"Name",field:"name",sortable:!0,cellRender:{},render:({row:t,column:r})=>s("span",{style:{color:"red"}},[s(l("k-tag"),{point:!0},{default:()=>[n("标签")]})]),dataType:"string"},{title:"Role",field:"role",showIcon:!0,dataType:"string",formatter:({cellValue:t,row:r,column:a})=>`${t}-${r.id}-${a.field}`,align:"center"},{title:"Sex",field:"sex",dataType:"string",formatter:({cellValue:t,row:r,column:a})=>t==="Man"?"男":"女",align:"left"},{title:"Age",field:"age",dataType:"number",showIcon:!0,__folder:!0,align:"right"},{title:"Address",field:"address",dataType:"string"}]);return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[Xe]),_:1}),He,e("div",Qe,[s(y(M),{data:d,column:o.value,"show-page":!1,"search-config":{strict:!0},border:""},null,8,["data","column"])])],64)}}});xe.__docgenInfo={exportName:"default",displayName:"searchFunction",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/searchFunction.vue"]};const Je=`<template>
  <!-- 搜索功能 -->
  <!-- 表格搜索功能默认使用模糊匹配，可以通过search-config属性配置，strict属性设置为true时，则使用精确匹配，
      如需自定义搜索方法，则使用searchMethod属性，该属性接收一个函数，函数参数为当前表格数据和搜索关键字
  -->
  <SBExamplePanel label="注释" open>
    <p>
      搜索功能:
      <br />
      表格搜索功能默认使用模糊匹配，可以通过search-config属性配置，strict属性设置为true时，则使用精确匹配，
      如需自定义搜索方法，则使用searchMethod属性，该属性接收一个函数，函数参数为当前表格数据和搜索关键字。
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="tableData"
      :column="column"
      :show-page="false"
      :search-config="{
        strict: true,
      }"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable, KTag } from '@components';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column = ref([
  {
    type: 'checkbox',
    width: '50',
  },
  {
    title: 'Id',
    field: 'id',
    width: '50',
    sortable: true,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    sortable: true,
    cellRender: {},
    render: ({ row, column }) => {
      return (
        <span style={{ color: 'red' }}>
          <k-tag point>标签</k-tag>
        </span>
      );
    },
    dataType: 'string',
  },
  {
    title: 'Role',
    field: 'role',
    showIcon: true,
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return \`\${cellValue}-\${row.id}-\${column.field}\`;
    },
    align: 'center',
  },
  {
    title: 'Sex',
    field: 'sex',
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return cellValue === 'Man' ? '男' : '女';
    },
    align: 'left',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
    showIcon: true,
    __folder: true,
    align: 'right',
  },
  {
    title: 'Address',
    field: 'address',
    dataType: 'string',
  },
]);
<\/script>
<style scoped></style>
`,Ue=e("p",null,[n(" 高级筛选: "),e("br"),n(" 通过advanced-filter-config属性配置高级筛选功能，例如可自定义筛选条件、显示内容和指定筛选列。 ")],-1),qe=e("br",null,null,-1),Ye={style:{height:"300px"}},fe=u({__name:"advancedScreening",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{type:"checkbox",width:"50"},{title:"Id",field:"id",width:"50",sortable:!0,dataType:"number"},{title:"Name",field:"name",sortable:!0,cellRender:{},render:({row:t,column:r})=>s("span",{style:{color:"red"}},[s(l("k-tag"),{point:!0},{default:()=>[n("标签")]})]),dataType:"string"},{title:"Role",field:"role",showIcon:!0,dataType:"string",formatter:({cellValue:t,row:r,column:a})=>`${t}-${r.id}-${a.field}`,align:"center"},{title:"Sex",field:"sex",dataType:"string",formatter:({cellValue:t,row:r,column:a})=>t==="Man"?"男":"女",align:"left"},{title:"Age",field:"age",dataType:"number",showIcon:!0,__folder:!0,align:"right"},{title:"Address",field:"address",dataType:"string"}]);return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[Ue]),_:1}),qe,e("div",Ye,[s(y(M),{data:d,column:o.value,"show-page":!1,"advanced-filter-config":{filterAll:!0,exclude:["id","name","role","address","sex"],filterColumns:[{title:"Age",field:"age",dataType:"number",options:[{label:"22",value:22},{label:"23",value:23}]}]},border:""},null,8,["data","column"])])],64)}}});fe.__docgenInfo={exportName:"default",displayName:"advancedScreening",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/advancedScreening.vue"]};const Ze=`<template>
  <!-- 高级筛选 -->
  <!-- 通过advanced-filter-config属性配置高级筛选功能，例如可自定义筛选条件、显示内容和指定筛选列，
  -->
  <SBExamplePanel label="注释" open>
    <p>
      高级筛选:
      <br />
      通过advanced-filter-config属性配置高级筛选功能，例如可自定义筛选条件、显示内容和指定筛选列。
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="tableData"
      :column="column"
      :show-page="false"
      :advanced-filter-config="{
        filterAll: true,
        exclude: ['id', 'name', 'role', 'address', 'sex'],
        filterColumns: [
          {
            title: 'Age',
            field: 'age',
            dataType: 'number',
            options: [
              {
                label: '22',
                value: 22,
              },
              {
                label: '23',
                value: 23,
              },
            ],
          },
        ],
      }"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable, KTag } from '@components';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column = ref([
  {
    type: 'checkbox',
    width: '50',
  },
  {
    title: 'Id',
    field: 'id',
    width: '50',
    sortable: true,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    sortable: true,
    cellRender: {},
    render: ({ row, column }) => {
      return (
        <span style={{ color: 'red' }}>
          <k-tag point>标签</k-tag>
        </span>
      );
    },
    dataType: 'string',
  },
  {
    title: 'Role',
    field: 'role',
    showIcon: true,
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return \`\${cellValue}-\${row.id}-\${column.field}\`;
    },
    align: 'center',
  },
  {
    title: 'Sex',
    field: 'sex',
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return cellValue === 'Man' ? '男' : '女';
    },
    align: 'left',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
    showIcon: true,
    __folder: true,
    align: 'right',
  },
  {
    title: 'Address',
    field: 'address',
    dataType: 'string',
  },
]);
<\/script>
<style scoped></style>
`,en=e("p",null,[n(" 自定义表格工具栏: "),e("br"),n(" 1.表格工具栏内置了高级筛选(filter)、刷新(refresh)、搜索框(search)、表头控制器功能(transfer)， 通过widgets参数进行配置，widgets数组允许写入字符串和对象类型，传入内置功能的关键字(filter、refresh、search、transfer)时， 表示使用内置的功能组件，传入其他字符串时，则该字符串会被当做插槽名渲染，也可以传入对象自定义渲染， 格式为{id：xxx, widget: () => VNode | Component }, 表格默认展示搜索框和高级筛选。 "),e("br"),n(" 2.widgets传入空数组时或者使用show-filter:false和show-search:false属性时，则不展示。 ")],-1),nn=e("br",null,null,-1),an={style:{height:"300px"}},be=u({__name:"formToolbar",setup(i){const d=g(["search","refresh","filter","transfer","custom1",{id:"custom2",widget:()=>s(l("KButton"),null,{default:()=>[n("自定义按钮")]})}]),o=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),t=g([{type:"checkbox",width:"50"},{title:"Id",field:"id",width:"50",sortable:!0,dataType:"number"},{title:"Name",field:"name",sortable:!0,cellRender:{},render:({row:r,column:a})=>s("span",{style:{color:"red"}},[s(l("k-tag"),{point:!0},{default:()=>[n("标签")]})]),dataType:"string"},{title:"Role",field:"role",showIcon:!0,dataType:"string",formatter:({cellValue:r,row:a,column:m})=>`${r}-${a.id}-${m.field}`,align:"center"},{title:"Sex",field:"sex",dataType:"string",formatter:({cellValue:r,row:a,column:m})=>r==="Man"?"男":"女",align:"left"},{title:"Age",field:"age",dataType:"number",showIcon:!0,__folder:!0,align:"right"},{title:"Address",field:"address",dataType:"string"}]);return(r,a)=>{const m=l("SBExamplePanel");return T(),h(b,null,[s(m,{label:"注释",open:""},{default:c(()=>[en]),_:1}),nn,e("div",an,[s(y(M),{data:o,column:t.value,"show-page":!1,widgets:d.value,border:""},{custom1:c(()=>[n("custom1插槽")]),_:1},8,["data","column","widgets"])])],64)}}});be.__docgenInfo={exportName:"default",displayName:"formToolbar",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/formToolbar.vue"]};const sn=`<template>
  <!-- 自定义表格工具栏 -->
  <!-- 1.表格工具栏内置了高级筛选(filter)、刷新(refresh)、搜索框(search)、表头控制器功能(transfer)，
      通过widgets参数进行配置，widgets数组允许写入字符串和对象类型，传入内置功能的关键字(filter、refresh、search、transfer)时，
      表示使用内置的功能组件，传入其他字符串时，则该字符串会被当做插槽名渲染，也可以传入对象自定义渲染，
      格式为{id：xxx, widget: () => VNode | Component }, 表格默认展示搜索框和高级筛选，
      2.widgets传入空数组时或者使用show-filter:false和show-search:false属性时，则不展示
  -->
  <SBExamplePanel label="注释" open>
    <p>
      自定义表格工具栏:
      <br />
      1.表格工具栏内置了高级筛选(filter)、刷新(refresh)、搜索框(search)、表头控制器功能(transfer)，
      通过widgets参数进行配置，widgets数组允许写入字符串和对象类型，传入内置功能的关键字(filter、refresh、search、transfer)时，
      表示使用内置的功能组件，传入其他字符串时，则该字符串会被当做插槽名渲染，也可以传入对象自定义渲染，
      格式为{id：xxx, widget: () => VNode | Component }, 表格默认展示搜索框和高级筛选。
      <br />
      2.widgets传入空数组时或者使用show-filter:false和show-search:false属性时，则不展示。
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table :data="tableData" :column="column" :show-page="false" :widgets="widgets" border>
      <template #custom1>custom1插槽</template>
    </k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable, KTag } from '@components';

const widgets = ref([
  'search',
  'refresh',
  'filter',
  'transfer',
  'custom1',
  {
    id: 'custom2',
    widget: () => {
      return <KButton>自定义按钮</KButton>;
    },
  },
]);

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column = ref([
  {
    type: 'checkbox',
    width: '50',
  },
  {
    title: 'Id',
    field: 'id',
    width: '50',
    sortable: true,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    sortable: true,
    cellRender: {},
    render: ({ row, column }) => {
      return (
        <span style={{ color: 'red' }}>
          <k-tag point>标签</k-tag>
        </span>
      );
    },
    dataType: 'string',
  },
  {
    title: 'Role',
    field: 'role',
    showIcon: true,
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return \`\${cellValue}-\${row.id}-\${column.field}\`;
    },
    align: 'center',
  },
  {
    title: 'Sex',
    field: 'sex',
    dataType: 'string',
    formatter: ({ cellValue, row, column }) => {
      return cellValue === 'Man' ? '男' : '女';
    },
    align: 'left',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
    showIcon: true,
    __folder: true,
    align: 'right',
  },
  {
    title: 'Address',
    field: 'address',
    dataType: 'string',
  },
]);
<\/script>
<style scoped></style>
`,tn=e("p",null,[n(" 自定义渲染: "),e("br"),n(" 表格通过具名插槽(插槽名为field字段)和列配置中的render函数自定义渲染单元格内容，已如下表格name和sex列为例。 ")],-1),rn=e("br",null,null,-1),dn={style:{height:"300px"}},ye=u({__name:"customRender",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number"},{title:"Name",field:"name"},{title:"Role",field:"role"},{title:"Sex",field:"sex",render:({row:t,column:r})=>t.sex==="Man"?s("span",{style:{color:"green"}},[n("男")]):t.sex==="Women"?s("span",{style:{color:"red"}},[n("女")]):s("span",{style:{color:"black"}},[n("未知")])},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[tn]),_:1}),rn,e("div",dn,[s(y(M),{data:d,column:o.value,"show-page":!1,border:""},{name:c(({row:m,column:Cn})=>[n("kingsware-"+Ne(m.name),1)]),_:1},8,["data","column"])])],64)}}});ye.__docgenInfo={exportName:"default",displayName:"customRender",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/customRender.vue"]};const on=`<template>
  <!-- 自定义渲染 -->
  <!-- 表格通过具名插槽(插槽名为field字段)和列配置中的render函数自定义渲染单元格内容，已如下表格name和sex列为例 -->
  <SBExamplePanel label="注释" open>
    <p>
      自定义渲染:
      <br />
      表格通过具名插槽(插槽名为field字段)和列配置中的render函数自定义渲染单元格内容，已如下表格name和sex列为例。
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table :data="tableData" :column="column4" :show-page="false" border>
      <template #name="{ row, column }">kingsware-{{ row.name }}</template>
    </k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable } from '@components';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

const column4 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
    render: ({ row, column }) => {
      if (row.sex === 'Man') {
        return <span style={{ color: 'green' }}>男</span>;
      } else if (row.sex === 'Women') {
        return <span style={{ color: 'red' }}>女</span>;
      } else {
        return <span style={{ color: 'black' }}>未知</span>;
      }
    },
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,ln=e("p",null,[n(" 单元格图标: "),e("br"),n(" 1.单元格支持单独配置图标，需要再列配置中添加showIconcolon属性设置为true，然后才能读取行数据row中的icon属性; "),e("br"),n(" 2.由于业务使用文件夹图标场景较多，因此内置了folder图标，在行数据中设置__folder属性为true即可展示文件夹图标，优先级高于 icon 同时支持给图标设置样式; "),e("br"),n(" 3.在行数据中设置iconStyle属性即可，包含color（颜色）、size（大小）、indent（图标与文字距离）、 empty（__folder为true时使用，表示文件夹为空）等属性。 ")],-1),mn=e("br",null,null,-1),gn=e("p",null,"单元格图标",-1),cn={style:{height:"300px"}},Me=u({__name:"customCellIcon",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc",icon:"IconAdd",iconStyle:{size:16,color:"red"}},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou",__folder:!0},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number"},{title:"Name",field:"name",showIcon:!0},{title:"Role",field:"role"},{title:"Sex",field:"sex"},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[ln]),_:1}),mn,gn,e("div",cn,[s(y(M),{data:d,column:o.value,"show-page":!1,border:""},null,8,["data","column"])])],64)}}});Me.__docgenInfo={exportName:"default",displayName:"customCellIcon",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/customCellIcon.vue"]};const pn=`<template>
  <!-- 单元格图标 -->
  <!-- 1.单元格支持单独配置图标，需要再列配置中添加showIconcolon属性设置为true，然后才能读取行数据row中的icon属性
    2.由于业务使用文件夹图标场景较多，因此内置了folder图标，在行数据中设置__folder属性为true即可展示文件夹图标，优先级高于icon
    同时支持给图标设置样式
    3.在行数据中设置iconStyle属性即可，包含color（颜色）、size（大小）、indent（图标与文字距离）、
    empty（__folder为true时使用，表示文件夹为空）等属性
  -->
  <SBExamplePanel label="注释" open>
    <p>
      单元格图标:
      <br />
      1.单元格支持单独配置图标，需要再列配置中添加showIconcolon属性设置为true，然后才能读取行数据row中的icon属性;
      <br />
      2.由于业务使用文件夹图标场景较多，因此内置了folder图标，在行数据中设置__folder属性为true即可展示文件夹图标，优先级高于
      icon 同时支持给图标设置样式;
      <br />
      3.在行数据中设置iconStyle属性即可，包含color（颜色）、size（大小）、indent（图标与文字距离）、
      empty（__folder为true时使用，表示文件夹为空）等属性。
    </p>
  </SBExamplePanel>
  <br />
  <p>单元格图标</p>
  <div :style="{ height: '300px' }">
    <k-tree-table :data="tableData1" :column="column5" :show-page="false" border></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable } from '@components';

// 包含图标的数据
const tableData1 = reactive([
  {
    id: 1,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    icon: 'IconAdd',
    iconStyle: {
      size: 16,
      color: 'red',
    },
  },
  {
    id: 2,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 42,
    address: 'Guangzhou',
    __folder: true,
  },
  {
    id: 3,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
  },
  {
    id: 4,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 18,
    address: 'Shanghai',
  },
  {
    id: 5,
    name: 'Test5',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'test abc',
  },
  {
    id: 6,
    name: 'Test6',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
  },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  {
    id: 8,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 9,
    name: 'Test9',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
  },
  {
    id: 10,
    name: 'Test10',
    role: 'Test',
    sex: 'Women',
    age: 42,
    address: 'Guangzhou',
  },
  {
    id: 11,
    name: 'Test11',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
  },
  {
    id: 12,
    name: 'Test12',
    role: 'Designer',
    sex: 'Women',
    age: 18,
    address: 'Shanghai',
  },
  {
    id: 13,
    name: 'Test13',
    role: 'Develop',
    sex: 'Man',
    age: 39,
    address: 'test abc',
  },
  {
    id: 14,
    name: 'Test14',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
  },
  {
    id: 15,
    name: 'Test15',
    role: 'PM',
    sex: 'Man',
    age: 9,
    address: 'Shanghai',
  },
  {
    id: 16,
    name: 'Test16',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
]);

const column5 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    showIcon: true,
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,un=e("p",null,[n(" 树形表格: "),e("br"),n(" 1.设置参数use-tree为true时启用树形表格(传入的数据需为扁平化的树形结构数组) "),e("br"),n(" 2.设置参数tree-config配置树形结构，参考vxe-table实现 "),e("br"),n(" 3.需要再某列配置中设置treeNode属性为true，表示该列为树形结构的节点列 ")],-1),hn=e("br",null,null,-1),Tn={style:{height:"300px"}},Se=u({__name:"useTreeTable",setup(i){let d=g([{id:100001,parentId:null,name:"Test1",type:"mp3",sizes:1024,date:"2020-08-01"},{id:10050,hasChild:!0,parentId:null,name:"Test2",type:"mp4",sizes:null,date:"2021-04-01"},{id:24300,parentId:10050,hasChild:!1,name:"Test3",type:"avi",sizes:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"Test4",type:"html",sizes:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"Test5",type:"avi",sizes:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"Test6",type:"txt",sizes:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test7",type:"pdf",sizes:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test8",type:"js",sizes:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test9",type:"xlsx",sizes:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test10",type:"js",sizes:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test11",type:"js",sizes:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test12",type:"js",sizes:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test13",type:"js",sizes:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test14",type:"js",sizes:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test15",type:"js",sizes:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"Test16",type:"avi",sizes:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test17",type:"js",sizes:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test18",type:"js",sizes:1024,date:"2021-06-01"}]);const o=[{title:"Id",field:"id",width:"100px",treeNode:!0,dataType:"number"},{title:"Name",field:"name",dataType:"string"},{title:"Type",field:"type"},{title:"Size",field:"sizes"},{title:"Date",field:"date"}];return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[un]),_:1}),hn,e("div",Tn,[s(y(M),{data:y(d),column:o,"use-tree":"","tree-config":{rowField:"id",parentField:"parentId"},"show-page":!1,border:""},null,8,["data"])])],64)}}});Se.__docgenInfo={exportName:"default",displayName:"useTreeTable",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/useTreeTable.vue"]};const xn=`<template>
  <SBExamplePanel label="注释" open>
    <p>
      树形表格:
      <br />
      1.设置参数use-tree为true时启用树形表格(传入的数据需为扁平化的树形结构数组)
      <br />
      2.设置参数tree-config配置树形结构，参考vxe-table实现
      <br />
      3.需要再某列配置中设置treeNode属性为true，表示该列为树形结构的节点列
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="treeTableData"
      :column="treeColumn"
      use-tree
      :tree-config="{ rowField: 'id', parentField: 'parentId' }"
      :show-page="false"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable, KTag } from '@components';

let treeTableData = ref([
  { id: 100001, parentId: null, name: 'Test1', type: 'mp3', sizes: 1024, date: '2020-08-01' },
  {
    id: 10050,
    hasChild: true,
    parentId: null,
    name: 'Test2',
    type: 'mp4',
    sizes: null,
    date: '2021-04-01',
  },
  {
    id: 24300,
    parentId: 10050,
    hasChild: false,
    name: 'Test3',
    type: 'avi',
    sizes: 1024,
    date: '2020-03-01',
  },
  { id: 20045, parentId: 24300, name: 'Test4', type: 'html', sizes: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', sizes: null, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', sizes: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', sizes: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test8', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', sizes: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test10', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test11', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test12', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test13', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test14', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test15', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'Test16', type: 'avi', sizes: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test17', type: 'js', sizes: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test18', type: 'js', sizes: 1024, date: '2021-06-01' },
]);

// 列排序配置示例
const treeColumn = [
  {
    title: 'Id',
    field: 'id',
    width: '100px',
    treeNode: true,
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
    dataType: 'string',
  },
  {
    title: 'Type',
    field: 'type',
  },
  {
    title: 'Size',
    field: 'sizes',
  },
  {
    title: 'Date',
    field: 'date',
  },
];
<\/script>
<style scoped></style>
`,fn=e("p",null,[n(" 表格排序: "),e("br"),n(" 1.在列配置中配置sortable属性为true，表示该列可排序 "),e("br"),n(" 2.可以通过快捷入口和列菜单栏进行排序 ")],-1),bn=e("br",null,null,-1),yn={style:{height:"300px"}},_e=u({__name:"useTableSort",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number",sortable:!0,showColumnMenu:!0},{title:"Name",field:"name",showIcon:!0},{title:"Role",field:"role"},{title:"Sex",field:"sex"},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel"),m=l("k-tree-table");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[fn]),_:1}),bn,e("div",yn,[s(m,{data:d,column:o.value,"show-page":!1,align:"center",border:""},null,8,["data","column"])])],64)}}});_e.__docgenInfo={exportName:"default",displayName:"useTableSort",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/useTableSort.vue"]};const Mn=`<template>
  <SBExamplePanel label="注释" open>
    <p>
      表格排序:
      <br />
      1.在列配置中配置sortable属性为true，表示该列可排序
      <br />
      2.可以通过快捷入口和列菜单栏进行排序
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table
      :data="tableData"
      :column="column6"
      :show-page="false"
      align="center"
      border
    ></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

// 列排序配置示例
const column6 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
    sortable: true,
    showColumnMenu: true,
  },
  {
    title: 'Name',
    field: 'name',
    showIcon: true,
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,Sn=e("p",null,[n(" 树形表格: "),e("br"),n(" 1.设置参数use-tree为true时启用树形表格(传入的数据需为扁平化的树形结构数组) "),e("br"),n(" 2.设置参数tree-config配置树形结构，参考vxe-table实现 "),e("br"),n(" 3.需要再某列配置中设置treeNode属性为true，表示该列为树形结构的节点列 ")],-1),_n=e("br",null,null,-1),Dn={style:{height:"300px"}},De=u({__name:"useTableFilter",setup(i){const d=f([{id:1,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:2,name:"Test2",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:3,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:4,name:"Test4",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:5,name:"Test5",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:6,name:"Test6",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:7,name:"Test7",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:8,name:"Test8",role:"Designer",sex:"Women",age:24,address:"Shanghai"},{id:9,name:"Test9",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10,name:"Test10",role:"Test",sex:"Women",age:42,address:"Guangzhou"},{id:11,name:"Test11",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:12,name:"Test12",role:"Designer",sex:"Women",age:18,address:"Shanghai"},{id:13,name:"Test13",role:"Develop",sex:"Man",age:39,address:"test abc"},{id:14,name:"Test14",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:15,name:"Test15",role:"PM",sex:"Man",age:9,address:"Shanghai"},{id:16,name:"Test16",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]),o=g([{title:"Id",field:"id",width:"100",dataType:"number",showColumnMenu:!0},{title:"Name",field:"name",showIcon:!0},{title:"Role",field:"role"},{title:"Sex",field:"sex",showColumnMenu:!0,filters:[{label:"男",value:"Man"},{label:"女",value:"Women"}]},{title:"Age",field:"age",dataType:"number"},{title:"Address",field:"address"}]);return(t,r)=>{const a=l("SBExamplePanel");return T(),h(b,null,[s(a,{label:"注释",open:""},{default:c(()=>[Sn]),_:1}),_n,e("div",Dn,[s(y(M),{data:d,column:o.value,"show-page":!1,border:""},null,8,["data","column"])])],64)}}});De.__docgenInfo={exportName:"default",displayName:"useTableFilter",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/doc/treeTable/useTableFilter.vue"]};const vn=`<template>
  <SBExamplePanel label="注释" open>
    <p>
      树形表格:
      <br />
      1.设置参数use-tree为true时启用树形表格(传入的数据需为扁平化的树形结构数组)
      <br />
      2.设置参数tree-config配置树形结构，参考vxe-table实现
      <br />
      3.需要再某列配置中设置treeNode属性为true，表示该列为树形结构的节点列
    </p>
  </SBExamplePanel>
  <br />
  <div :style="{ height: '300px' }">
    <k-tree-table :data="tableData" :column="column7" :show-page="false" border></k-tree-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { KTreeTable } from '@components';

const tableData = reactive([
  { id: 1, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 2, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 3, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 9, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10, name: 'Test10', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
  { id: 11, name: 'Test11', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 12, name: 'Test12', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
  { id: 13, name: 'Test13', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
  { id: 14, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 15, name: 'Test15', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
  { id: 16, name: 'Test16', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
]);

// 列筛选配置示例
const column7 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
    showColumnMenu: true,
  },
  {
    title: 'Name',
    field: 'name',
    showIcon: true,
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
    showColumnMenu: true,
    filters: [
      { label: '男', value: 'Man' },
      { label: '女', value: 'Women' },
    ],
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
  {
    title: 'Address',
    field: 'address',
  },
]);
<\/script>
<style scoped></style>
`,Zn={title:"Data Display(DD)/KTreeTable",component:M,argTypes:{column:{description:"继承 VxeColumnProps:, 常用配置项如下👇🏻",control:"boolean",type:"columnConfigType | VxeColumnProps"},visible:{description:"是否可见",type:"boolean"},key:{},field:{description:"是否可见",type:"string"},title:{description:"列名",type:"string"},width:{description:"列宽",type:" string | number"},filters:{description:"筛选配置，参考vxe-table",type:"any[]"},treeNode:{description:"该列是否为树节点，只在useTree为true时有效",type:"boolean"},cellRender:{description:"自定义渲染列，参考vxe-table",type:"any"},editRender:{description:"自定义渲染列，参考vxe-table",type:"any"},minWidth:{description:"最小宽度",type:"string | number"},sortable:{description:"参考vxe-table",type:"boolean"},showColumnMenu:{description:"是否显示列头菜单",type:"boolean"},group:{description:"多级列头配置，数组结构与列配置一致",type:"VxeColgroupProps[]"},dataType:{description:"该列数据类型，默认string，用于表格高级筛选",type:"string"},render:{description:"自定义渲染该列单元格内容",type:"render?: () => VNode"},showPage:{description:"是否显示分页",type:"boolean"},useTree:{description:"是否显示分页",type:"boolean"},isRemoteQuery:{description:"是否显示分页",type:"boolean"},isServerPaging:{description:"是否服务器分页",type:"boolean"},paginationConfig:{description:"分页配置",type:"PaginationConfigType"},showDescription:{description:"是否显示秒数",type:"boolean"},showHeaderTools:{description:"是否显示表头工具栏",type:"boolean"},batchOperations:{description:"批量操作配置",type:"any[]"},showBatchOperation:{description:"是否显示批量操作",type:"boolean"},showColumnMenu2:{description:"是否显示列头菜单",type:"boolean"},showDragColumn:{description:"是否显示拖拽列",type:"boolean"},cellClickToggleHighlight:{description:"单元格点击是否切换高亮状态",type:"boolean"},widgets:{description:"自定义表头菜单组件",type:"(string | widgetItemType)[]"},showSearchInput:{description:"是否显示搜索框",type:"boolean"},showFilter:{description:"是否显示筛选器",type:"boolean"},showRefresh:{description:"是否显示刷新按钮",type:"boolean"},showTransfer:{description:"是否显示数据穿梭按钮",type:"boolean"},advancedFilterConfig:{description:"高级筛选器配置: 如下👇🏻",type:"boolean"},filterColumns:{description:"自定义筛选列配置",type:"FilterColumnType[]"},filterAll:{description:"是否筛选全部 默认值 true，为false时只筛选可见数据",type:"boolean"},exclude:{description:"排除字段",type:"string[]"},defaultConditions:{description:"默认条件，只在初始化时生效",type:"any[]"},searchConfig:{description:"搜索配置",type:"boolean"},strict:{description:"是否严格匹配 默认值 false",type:"boolean"},searchMethod:{description:"自定义搜索方法，返回匹配的数据",type:"(key, data: any[]) => any[]"},"searchConfig--isRemoteQuery":{description:"是否远程查询 默认值 false",type:"boolean"}},args:{},parameters:{controls:{},docs:{page:$e}}},Wn=p(ue,"基础使用",Ce),S={name:"基础使用",...Wn},wn=p(he,"cellLayout: 单元格布局",Ve),_={name:"单元格布局",...wn},zn=p(Te,"editableCells: 可编辑单元格, 示例中双击 Name 列的单元格文字,即可编辑",Le),D={name:"可编辑单元格",...zn},Pn=p(xe,"searchFunction: 搜索功能",Je),v={name:"自定义搜索方法",...Pn},In=p(fe,"advancedScreening: 高级筛选器",Ze),W={name:"高级筛选器",...In},kn=p(be,"formToolbar: 表单工具栏",sn),w={name:"表单工具栏",...kn},Gn=p(ye,"customRender: 自定义渲染",on),z={name:"自定义渲染",...Gn},En=p(Me,"customCellIcon: 自定义单元格图标",pn),P={name:"自定义单元格图标",...En},Nn=p(Se,"useTreeTable: 树形表格",xn),I={name:"树形表格",...Nn},$n=p(_e,"useTableSort: 表格排序",Mn),k={name:"表格排序",...$n},An=p(De,"useTableFilter: 表格筛选",vn),G={name:"表格筛选",...An};var N,$,A;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '基础使用',
  ...doc1
}`,...(A=($=S.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var C,B,R;_.parameters={..._.parameters,docs:{...(C=_.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '单元格布局',
  ...doc2
}`,...(R=(B=_.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var F,V,j;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '可编辑单元格',
  ...doc3
}`,...(j=(V=D.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var K,O,L;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '自定义搜索方法',
  ...doc4
}`,...(L=(O=v.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var X,H,Q;W.parameters={...W.parameters,docs:{...(X=W.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '高级筛选器',
  ...doc5
}`,...(Q=(H=W.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var J,U,q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '表单工具栏',
  ...doc6
}`,...(q=(U=w.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '自定义渲染',
  ...doc7
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,se;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '自定义单元格图标',
  ...doc8
}`,...(se=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,de;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '树形表格',
  ...doc9
}`,...(de=(re=I.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var oe,le,ie;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '表格排序',
  ...doc10
}`,...(ie=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var me,ge,ce;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: '表格筛选',
  ...doc11
}`,...(ce=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};const ea=["def1Example","def2Example","def3Example","def4Example","def5Example","def6Example","def7Example","def8Example","def9Example","def10Example","def11Example"];export{ea as __namedExportsOrder,k as def10Example,G as def11Example,S as def1Example,_ as def2Example,D as def3Example,v as def4Example,W as def5Example,w as def6Example,z as def7Example,P as def8Example,I as def9Example,Zn as default};
