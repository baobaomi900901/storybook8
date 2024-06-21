import{d as $,r as t,o as p,a as v,c as g,w as d,m as q,u as i,F as K,b as f,e as w,t as U,f as H}from"./vue.esm-bundler-BmZDuZDd.js";import{b as r,c as _}from"./tree_transfer-CiKLCTX1.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=$({__name:"Indeterminate",setup(e){const n=t(!1),l=t(!0),u=t(["Shanghai","Beijing"]),s=["Shanghai","Beijing","Guangzhou","Shenzhen"],a=h=>{u.value=h?s:[],l.value=!1},P=h=>{const c=h.length;n.value=c===s.length,l.value=c>0&&c<s.length};return(h,c)=>(p(),v(K,null,[g(i(r),q({modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=o=>n.value=o),indeterminate:l.value,onChange:a},h.$attrs),{default:d(()=>[f(" Check all ")]),_:1},16,["modelValue","indeterminate"]),g(i(_),{modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=o=>u.value=o),onChange:P},{default:d(()=>[(p(),v(K,null,w(s,o=>g(i(r),{key:o,label:o,value:o},{default:d(()=>[f(U(o),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64))}});T.__docgenInfo={exportName:"default",displayName:"Indeterminate",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/components/checkbox/Indeterminate.vue"]};const J=`<template>
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
import { ref } from "vue";
import { KCheckbox, KCheckboxGroup } from "@components";

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

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
`,O=$({__name:"minMaxCheckbox",setup(e){const n=t(["Shanghai","Beijing"]),l=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(u,s)=>(p(),H(i(_),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a),min:1,max:2},{default:d(()=>[(p(),v(K,null,w(l,a=>g(i(r),{key:a,label:a,value:a},{default:d(()=>[f(U(a),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"]))}});O.__docgenInfo={exportName:"default",displayName:"minMaxCheckbox",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/components/checkbox/minMaxCheckbox.vue"]};const Q=`<template>
  <KCheckboxGroup v-model="checkedCities" :min="1" :max="2">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { KCheckbox, KCheckboxGroup } from "@components";

const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
<\/script>
`,Y={title:"Data Entry(DE)/KCheckbox",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm","lg"],description:"大小, sm: 小尺寸、base: 默认尺寸"}},args:{size:"base"}},b={name:"基础用法",args:{label:"复选框"},render:e=>({components:{KCheckbox:r},setup(){const n=t({checked1:!0,checked2:!1,checked3:!1,checked4:!1,checked5:!1,checked6:!1,checked7:!1,checked8:!1});return{args:e,checkboxes:n}},template:`
          <div>
            <KCheckbox :label="args.label" v-model="checkboxes.checked1" size="lg"/>
            <KCheckbox :label="args.label" v-model="checkboxes.checked2" size="lg"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked3"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked4"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked5" size="sm"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked6" size="sm"/>
          </div>
          <div>
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked7" />
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked8" disabled/>
          </div>
      `})},k={name:"禁用状态",args:{name:"禁用",disabled:!1},render:e=>({components:{KCheckbox:r},setup(){return{args:e}},template:`
          <KCheckbox v-bind="args" disabled >
            {{args.name}}
          </KCheckbox>
          <KCheckbox v-bind="args" >
            不{{args.name}}
          </KCheckbox>
      `})},m={name:"多选框组",args:{Checkbox1:"复选框 1",Checkbox2:"复选框 2",Checkbox3:"复选框 3",Checkbox4:"禁用",Checkbox5:"选择和禁用"},render:e=>({components:{KCheckboxGroup:_,KCheckbox:r},setup(){const n=t(["复选框 1","选择和禁用"]);return{args:e,checkList:n}},template:`
          <KCheckboxGroup v-model="checkList">
            <KCheckbox :label="args.Checkbox1" value="复选框 1" />
            <KCheckbox :label="args.Checkbox2" />
            <KCheckbox :label="args.Checkbox3" />
            <KCheckbox :label="args.Checkbox4" disabled />
            <KCheckbox :label="args.Checkbox5" value="选择和禁用" disabled />
          </KCheckboxGroup>
      `})},x={name:"中间状态",render:e=>({components:{Indeterminate:T},setup(){return{args:e}},template:'<Indeterminate v-bind="args" />'}),parameters:{docs:{source:{code:J}}}},C={name:"可选项目数量的限制",render:e=>({components:{minMaxCheckbox:O},setup(){return{args:e}},template:'<minMaxCheckbox v-bind="args" />'}),parameters:{docs:{source:{code:Q}}}};var y,z,G;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "基础用法",
  args: {
    label: "复选框"
  },
  render: (args: any) => {
    return {
      components: {
        KCheckbox
      },
      setup() {
        const checkboxes = ref({
          checked1: true,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false,
          checked6: false,
          checked7: false,
          checked8: false
        });
        return {
          args,
          checkboxes
        };
      },
      template: \`
          <div>
            <KCheckbox :label="args.label" v-model="checkboxes.checked1" size="lg"/>
            <KCheckbox :label="args.label" v-model="checkboxes.checked2" size="lg"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked3"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked4"/>
          </div>
          <div>
          <KCheckbox :label="args.label" v-model="checkboxes.checked5" size="sm"/>
          <KCheckbox :label="args.label" v-model="checkboxes.checked6" size="sm"/>
          </div>
          <div>
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked7" />
            <KCheckbox v-bind="args" :label="args.label" v-model="checkboxes.checked8" disabled/>
          </div>
      \`
    };
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var S,I,B;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "禁用状态",
  args: {
    name: "禁用",
    disabled: false
  },
  render: (args: any) => {
    return {
      components: {
        KCheckbox
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KCheckbox v-bind="args" disabled >
            {{args.name}}
          </KCheckbox>
          <KCheckbox v-bind="args" >
            不{{args.name}}
          </KCheckbox>
      \`
    };
  }
}`,...(B=(I=k.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var E,D,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "多选框组",
  args: {
    Checkbox1: "复选框 1",
    Checkbox2: "复选框 2",
    Checkbox3: "复选框 3",
    Checkbox4: "禁用",
    Checkbox5: "选择和禁用"
  },
  render: (args: any) => {
    return {
      components: {
        KCheckboxGroup,
        KCheckbox
      },
      setup() {
        const checkList = ref(['复选框 1', '选择和禁用']);
        return {
          args,
          checkList
        };
      },
      template: \`
          <KCheckboxGroup v-model="checkList">
            <KCheckbox :label="args.Checkbox1" value="复选框 1" />
            <KCheckbox :label="args.Checkbox2" />
            <KCheckbox :label="args.Checkbox3" />
            <KCheckbox :label="args.Checkbox4" disabled />
            <KCheckbox :label="args.Checkbox5" value="选择和禁用" disabled />
          </KCheckboxGroup>
      \`
    };
  }
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var V,A,j;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "中间状态",
  render: (args: any) => ({
    components: {
      Indeterminate
    },
    setup() {
      return {
        args
      };
    },
    template: '<Indeterminate v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: IndeterminateCode
      }
    }
  }
}`,...(j=(A=x.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var F,L,N;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "可选项目数量的限制",
  render: (args: any) => ({
    components: {
      minMaxCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<minMaxCheckbox v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: minMaxCheckboxCode
      }
    }
  }
}`,...(N=(L=C.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const Z=["def","disabled","checkboxGropu","indeterminate","minMax"];export{Z as __namedExportsOrder,m as checkboxGropu,b as def,Y as default,k as disabled,x as indeterminate,C as minMax};
