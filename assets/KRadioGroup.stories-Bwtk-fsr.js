import{_ as w}from"./radio-B593ZI12.js";import{d as C,c as m,r as t,w as p,p as G,a as b,o as x,j as z,k as E,e as S,m as B,f as F}from"./vue.esm-bundler-CHOSw6HX.js";import{g as N}from"./index-0r_fcLWx.js";const $={class:"k-radio-group"},i=C({name:"KRadioGroup",__name:"radio_group",props:{modelValue:{},disabled:{type:Boolean},size:{},color:{},name:{},id:{},direction:{default:"row"}},emits:["update:modelValue","change"],setup(a,{emit:r}){const e=a,y=m(()=>e.direction==="row"?"el-radio-group--row":"el-radio-group--column"),u=r,s=t(e.modelValue),l=t(e.color),K=m(()=>({disabled:e.disabled,size:N(e.size),id:e.id,name:e.name}));p(()=>e.modelValue,o=>{s.value=o}),p(()=>e.color,o=>{l.value=o});const R=o=>{u("update:modelValue",o),u("change",o)};return G("_fillColor",l),(o,c)=>{const h=b("el-radio-group");return x(),z("div",$,[E(h,B({modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=D=>s.value=D)},K.value,{class:y.value,onChange:R}),{default:S(()=>[F(o.$slots,"default")]),_:3},16,["modelValue","class"])])}}});i.__docgenInfo={name:"KRadioGroup",exportName:"default",displayName:"radio_group",description:"",tags:{},props:[{name:"direction",defaultValue:{func:!1,value:"'row'"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/radio/radio_group.vue"]};const P={title:"Data Entry(DE)/KRadioGroup",component:i,tags:["autodocs"],argTypes:{direction:{table:{type:{summary:"string"},defaultValue:{summary:"row"}},control:"select",options:["row","column"],description:"布局方向"},change:{description:"? 事件说明"},"update:modelValue":{description:" ? 事件说明"}},args:{}},n={args:{direction:"row"},render:a=>({components:{KRadioGroup:i,KRadio:w},setup(){const r=t(0);return{args:a,modelValue:r}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})},d={args:{direction:"column"},render:a=>({components:{KRadioGroup:i,KRadio:w},setup(){const r=t(0);return{args:a,modelValue:r}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})};var g,k,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    direction: "row"
  },
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const modelValue = ref(0);
        return {
          args,
          modelValue
        };
      },
      template: \`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>\`
    };
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var f,V,_;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: "column"
  },
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const modelValue = ref(0);
        return {
          args,
          modelValue
        };
      },
      template: \`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>\`
    };
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const T=["def","column"];export{T as __namedExportsOrder,d as column,n as def,P as default};
