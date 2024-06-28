import{d as w,r,a as K,c as m,w as l,m as H,F as f,e as C,o as x,f as _,g as U,t as T,h as J}from"./vue.esm-bundler-CDHMm6MS.js";import{e as g,g as Q}from"./tree_transfer-jB80NPzD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O=w({__name:"Indeterminate",setup(n){const a=r(!1),t=r(!0),h=r(["Shanghai","Beijing"]),s=["Shanghai","Beijing","Guangzhou","Shenzhen"],p=e=>{h.value=e?s:[],t.value=!1},v=e=>{const c=e.length;a.value=c===s.length,t.value=c>0&&c<s.length};return(e,c)=>{const y=C("KCheckbox"),q=C("KCheckboxGroup");return x(),K(f,null,[m(y,H({modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=o=>a.value=o),indeterminate:t.value,onChange:p},e.$attrs),{default:l(()=>[_(" Check all ")]),_:1},16,["modelValue","indeterminate"]),m(q,{modelValue:h.value,"onUpdate:modelValue":c[1]||(c[1]=o=>h.value=o),onChange:v},{default:l(()=>[(x(),K(f,null,U(s,o=>m(y,{key:o,label:o,value:o},{default:l(()=>[_(T(o),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});O.__docgenInfo={exportName:"default",displayName:"Indeterminate",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/components/checkbox/Indeterminate.vue"]};const R=`<template>
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
`,P=w({__name:"minMaxCheckbox",setup(n){const a=r(["Shanghai","Beijing"]),t=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(h,s)=>{const p=C("KCheckbox"),v=C("KCheckboxGroup");return x(),J(v,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),min:1,max:2},{default:l(()=>[(x(),K(f,null,U(t,e=>m(p,{key:e,label:e,value:e},{default:l(()=>[_(T(e),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])}}});P.__docgenInfo={exportName:"default",displayName:"minMaxCheckbox",description:"",tags:{},sourceFiles:["/home/runner/work/storybook8/storybook8/src/components/checkbox/minMaxCheckbox.vue"]};const W=`<template>
  <KCheckboxGroup v-model="checkedCities" :min="1" :max="2">
    <KCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </KCheckbox>
  </KCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
<\/script>
`,ee={title:"Data Entry(DE)/KCheckbox",component:g,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm","lg"],description:"大小, sm: 小尺寸、base: 默认尺寸"}},args:{size:"base"}},d={name:"基础用法",args:{label:"复选框"},render:n=>({components:{KCheckbox:g},setup(){const a=r({checked1:!0,checked2:!1,checked3:!1,checked4:!1,checked5:!1,checked6:!1,checked7:!1,checked8:!1});return{args:n,checkboxes:a}},template:`
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
      `})},i={name:"禁用状态",args:{name:"禁用",disabled:!1},render:n=>({components:{KCheckbox:g},setup(){return{args:n}},template:`
          <KCheckbox v-bind="args" disabled >
            {{args.name}}
          </KCheckbox>
          <KCheckbox v-bind="args" >
            不{{args.name}}
          </KCheckbox>
      `})},u={name:"多选框组",args:{Checkbox1:"复选框 1",Checkbox2:"复选框 2",Checkbox3:"复选框 3",Checkbox4:"禁用",Checkbox5:"选择和禁用"},render:n=>({components:{KCheckboxGroup:Q,KCheckbox:g},setup(){const a=r(["复选框 1","选择和禁用"]);return{args:n,checkList:a}},template:`
          <KCheckboxGroup v-model="checkList">
            <KCheckbox :label="args.Checkbox1" value="复选框 1" />
            <KCheckbox :label="args.Checkbox2" />
            <KCheckbox :label="args.Checkbox3" />
            <KCheckbox :label="args.Checkbox4" disabled />
            <KCheckbox :label="args.Checkbox5" value="选择和禁用" disabled />
          </KCheckboxGroup>
      `})},b={name:"中间状态",render:n=>({components:{Indeterminate:O},setup(){return{args:n}},template:'<Indeterminate v-bind="args" />'}),parameters:{docs:{source:{code:R}}}},k={name:"可选项目数量的限制",render:n=>({components:{minMaxCheckbox:P},setup(){return{args:n}},template:'<minMaxCheckbox v-bind="args" />'}),parameters:{docs:{source:{code:W}}}};var G,z,S;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,B,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,M,V;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,j,F;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(j=b.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var L,N,$;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(N=k.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const ne=["def","disabled","checkboxGropu","indeterminate","minMax"];export{ne as __namedExportsOrder,u as checkboxGropu,d as def,ee as default,i as disabled,b as indeterminate,k as minMax};
