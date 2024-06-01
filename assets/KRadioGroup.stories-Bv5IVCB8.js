import{_ as f}from"./radio-CFZS-6Hx.js";import{d as R,e as m,b as s,w as D,f as b,o as C,c as G,g as x,h as z,m as E,r as S}from"./vue.esm-bundler-B5kV1v7-.js";import{g as B}from"./index-De_4ewB0.js";const F={class:"k-radio-group"},t=R({name:"KRadioGroup",__name:"radio_group",props:{modelValue:{},disabled:{type:Boolean},size:{},color:{},name:{},id:{},direction:{default:"row"}},emits:["update:modelValue","change"],setup(a,{emit:r}){const e=a,_=m(()=>e.direction==="row"?"el-radio-group--row":"el-radio-group--column"),u=r,i=s(e.modelValue),w=m(()=>({disabled:e.disabled,size:B(e.size),id:e.id,name:e.name}));D(()=>e.modelValue,o=>{i.value=o});const h=o=>{u("update:modelValue",o),u("change",o)};return(o,l)=>{const y=b("el-radio-group");return C(),G("div",F,[x(y,E({modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=K=>i.value=K)},w.value,{onChange:h,class:_.value}),{default:z(()=>[S(o.$slots,"default")]),_:3},16,["modelValue","class"])])}}});t.__docgenInfo={name:"KRadioGroup",exportName:"default",displayName:"radio_group",description:"",tags:{},props:[{name:"direction",defaultValue:{func:!1,value:"'row'"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/radio/radio_group.vue"]};const O={title:"Data Entry(DE)/KRadioGroup",component:t,tags:["autodocs"],argTypes:{direction:{table:{type:{summary:"string"},defaultValue:{summary:"row"}},control:"select",options:["row","column"],description:"布局方向"},change:{description:"? 事件说明"},"update:modelValue":{description:" ? 事件说明"}},args:{}},n={args:{direction:"row"},render:a=>({components:{KRadioGroup:t,KRadio:f},setup(){const r=s(0);return{args:a,modelValue:r}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})},d={args:{direction:"column"},render:a=>({components:{KRadioGroup:t,KRadio:f},setup(){const r=s(0);return{args:a,modelValue:r}},template:`
      <k-radio-group v-model="modelValue" :direction="args.direction">
        <k-radio :value="0" >直角
        </k-radio>
        <k-radio :value="1" >锐角
        </k-radio>
        <k-radio :value="2" >钝角
        </k-radio>
      </k-radio-group>`})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,v,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(v=d.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const P=["def","column"];export{P as __namedExportsOrder,d as column,n as def,O as default};
