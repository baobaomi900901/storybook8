import{d as se,u as ue,g as oe,r,c as pe,w as ie,a as le,o as de,b as me,h as ce,e as d,m as xe,f as m}from"./vue.esm-bundler-CHOSw6HX.js";import{g as fe}from"./index-0r_fcLWx.js";const s=se({name:"KInput",__name:"input",props:{id:{},name:{},autocomplete:{default:"off"},inputStyle:{},validateEvent:{type:Boolean,default:!0},max:{},min:{},step:{},label:{},modelValue:{default:""},type:{},width:{},prefixIcon:{},suffixIcon:{},disabled:{type:Boolean,default:!1},placeholder:{},size:{},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},autosize:{type:[Boolean,Object],default:!1},showPassword:{type:Boolean,default:!1},rows:{},maxlength:{},minlength:{}},emits:["update:modelValue","input","blur","change","clear","focus"],setup(a,{expose:n,emit:u}){var b;const e=a,l=ue(),o=u;(b=oe())==null||b.appContext.app.config.globalProperties;const i=r(""),p=r(null),X=pe(()=>({id:e.id,name:e.name,size:fe(e.size),label:e.label,type:e.type,disabled:e.disabled,placeholder:e.placeholder,readonly:e.readonly,clearable:e.clearable,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,showWordLimit:e.showWordLimit,autosize:e.autosize,rows:e.rows,showPassword:e.showPassword,maxLength:e.maxlength,minLength:e.minlength,autocomplete:e.autocomplete,inputStyle:e.inputStyle,validateEvent:e.validateEvent,max:e.max,min:e.min,step:e.step}));ie(()=>e.modelValue,t=>{i.value=t},{immediate:!0});const Y=()=>{o("update:modelValue",i.value),o("input",i.value)},Z=()=>{o("blur")},ee=()=>{o("focus")},te=t=>{o("change",t)},ne=()=>{o("update:modelValue",""),o("clear",""),o("input",""),o("change","")};return n({focus:()=>{var t;(t=p.value)==null||t.focus()},blur:()=>{var t;(t=p.value)==null||t.blur()},select:()=>{var t;(t=p.value)==null||t.select()},clear:()=>{var t;(t=p.value)==null||t.clear()},resizeTextarea:()=>{var t;(t=p.value)==null||t.resizeTextarea()}}),(t,E)=>{const ae=le("el-input");return de(),me(ae,xe({ref_key:"inputRef",ref:p,modelValue:i.value,"onUpdate:modelValue":E[0]||(E[0]=re=>i.value=re),class:"k-input"},X.value,{style:{width:e.width},onInput:Y,onChange:te,onFocus:ee,onBlur:Z,onClear:ne}),ce({_:2},[l.prepend?{name:"prepend",fn:d(()=>[m(t.$slots,"prepend")]),key:"0"}:void 0,l.append?{name:"append",fn:d(()=>[m(t.$slots,"append")]),key:"1"}:void 0,l.prefix?{name:"prefix",fn:d(()=>[m(t.$slots,"prefix")]),key:"2"}:void 0,l.suffix?{name:"suffix",fn:d(()=>[m(t.$slots,"suffix")]),key:"3"}:void 0]),1040,["modelValue","style"])}}});s.__docgenInfo={name:"KInput",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"select"},{name:"clear"},{name:"resizeTextarea"}],props:[{name:"id",description:"The label of the button",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"autocomplete",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'off'"}},{name:"inputStyle",required:!1,type:{name:"union",elements:[{name:"CSSProperties"},{name:"Array",elements:[{name:"CSSProperties"}]}]}},{name:"validateEvent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"max",required:!1,type:{name:"any"}},{name:"min",required:!1,type:{name:"any"}},{name:"step",required:!1,type:{name:"any"}},{name:"label",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"string"}},{name:"width",required:!1,type:{name:"string"}},{name:"prefixIcon",required:!1,type:{name:"any"}},{name:"suffixIcon",required:!1,type:{name:"any"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"lg"'},{name:'"base"'},{name:'"sm"'},{name:'""'}]}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showWordLimit",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autosize",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"object"}]},defaultValue:{func:!1,value:"false"}},{name:"showPassword",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"}},{name:"maxlength",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"minlength",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue"},{name:"input"},{name:"blur"},{name:"change"},{name:"clear"},{name:"focus"}],slots:[{name:"prepend"},{name:"append"},{name:"prefix"},{name:"suffix"},{name:"default"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/input/input.vue"]};const Ee={title:"Data Entry(DE)/KInput",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"双向绑定的值"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否展示删除按钮"},width:{control:"text",description:"输入框宽度"},readonly:{control:"boolean",description:"是否只读"},showWordLimit:{control:"boolean",description:"是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效"},autosize:{control:"boolean",description:"textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }"},showPassword:{control:"boolean",description:"是否可以展示密码"},autocomplete:{control:"select",options:["off","on","name","email","username","new-password","current-password"],description:"原生 autocomplete 属性/更多相关属性查看MDN"},validateEvent:{control:"boolean",description:""}},args:{width:"200px",autosize:{minRows:2,maxRows:4}}},c={name:"默认用法",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{text:n}},template:`
          <k-input v-model="text">
          </k-input>
      `}}},x={name:"禁用状态",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `}}},f={name:"一键清空",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `}}},v={name:"密码框",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `}}},g={name:"文本域",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `}}},y={name:"自适应文本域",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      `}}},h={name:"插槽类型",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
      
      <div  style="margin:5px">输入框头部插槽</div>
            <k-input v-model="text" >
             <template #prepend>Http://</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框尾部插槽</div>
            <k-input v-model="text">
            <template #append>.com</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框前置内容插槽</div>
        <k-input v-model="text"  >
            <template #prepend>
       <div>前置内容</div>
      </template>
       <template #append>
          <div>后置内容</div>
      </template>
     </k-input>
  
      <div  style="margin:5px">输入框后置内容插槽</div>
        <k-input v-model="text">
             <template #prepend>
         <div>前置内容</div>
      </template>
      <template #append>
   <div>后置内容</div>
      </template>
  </k-input>
    
      `}}},w={name:"尺寸",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
          <div  style="margin:5px">默认大小</div>
          <k-input v-model="text" type="text" :width="args.width" >
          </k-input>
          <div />
         <div  style="margin:5px"> size = lg</div>
          <k-input v-model="text" type="text" :width="args.width" size="lg">
          </k-input>
           <div  style="margin:5px"> size = base</div>
          <k-input v-model="text" type="text" :width="args.width" size="base">
          </k-input>
           <div  style="margin:5px"> size = sm</div>
          <k-input v-model="text1" type="text" :width="args.width" size="sm">
          </k-input>
      `}}},k={name:"输入长度限制",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      `}}};var B,z,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "默认用法",
  render: (args: any) => {
    const text = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          text
        };
      },
      template: \`
          <k-input v-model="text">
          </k-input>
      \`
    };
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var F,q,D;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "禁用状态",
  render: (args: any) => {
    const text = ref("");
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
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      \`
    };
  }
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var K,S,V;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "一键清空",
  render: (args: any) => {
    const text = ref("");
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
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      \`
    };
  }
}`,...(V=(S=f.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var C,L,P;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "密码框",
  render: (args: any) => {
    const text = ref("");
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
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      \`
    };
  }
}`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var A,W,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "文本域",
  render: (args: any) => {
    const text = ref("");
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
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      \`
    };
  }
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,T,$;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "自适应文本域",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      \`
    };
  }
}`,...($=(T=y.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var N,j,H;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "插槽类型",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
      
      <div  style="margin:5px">输入框头部插槽</div>
            <k-input v-model="text" >
             <template #prepend>Http://</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框尾部插槽</div>
            <k-input v-model="text">
            <template #append>.com</template>
          </k-input>
      </div>
      <div  style="margin:5px">输入框前置内容插槽</div>
        <k-input v-model="text"  >
            <template #prepend>
       <div>前置内容</div>
      </template>
       <template #append>
          <div>后置内容</div>
      </template>
     </k-input>
  
      <div  style="margin:5px">输入框后置内容插槽</div>
        <k-input v-model="text">
             <template #prepend>
         <div>前置内容</div>
      </template>
      <template #append>
   <div>后置内容</div>
      </template>
  </k-input>
    
      \`
    };
  }
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var O,M,U;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "尺寸",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
          <div  style="margin:5px">默认大小</div>
          <k-input v-model="text" type="text" :width="args.width" >
          </k-input>
          <div />
         <div  style="margin:5px"> size = lg</div>
          <k-input v-model="text" type="text" :width="args.width" size="lg">
          </k-input>
           <div  style="margin:5px"> size = base</div>
          <k-input v-model="text" type="text" :width="args.width" size="base">
          </k-input>
           <div  style="margin:5px"> size = sm</div>
          <k-input v-model="text1" type="text" :width="args.width" size="sm">
          </k-input>
      \`
    };
  }
}`,...(U=(M=w.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "输入长度限制",
  render: (args: any) => {
    const text = ref("");
    const text1 = ref("");
    return {
      components: {
        KInput
      },
      setup() {
        return {
          args,
          text,
          text1
        };
      },
      template: \`
          <div style="margin:5px">最大输入10个字符</div>
          <k-input v-model="text" type="text" width="300px" :maxlength="10" :showWordLimit="true" >
          </k-input>
         <div style="margin:5px"> textarea 最大输入30个字符</div>
          <k-input v-model="text1" type="textarea" width="300px" :maxlength="30" :showWordLimit="true" >
          </k-input>
      \`
    };
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Be=["def","def1","def2","def4","def5","def6","def7","def8","def9"];export{Be as __namedExportsOrder,c as def,x as def1,f as def2,v as def4,g as def5,y as def6,h as def7,w as def8,k as def9,Ee as default};
