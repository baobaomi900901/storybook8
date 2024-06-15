import{d as ue,u as oe,p as pe,b as r,e as ie,w as de,f as le,o as me,g as ce,q as xe,h as l,m as ve,r as m}from"./vue.esm-bundler-DN0Desjy.js";import{g as fe}from"./index-0r_fcLWx.js";const s=ue({name:"KInput",__name:"input",props:{id:{},name:{},autocomplete:{default:"off"},inputStyle:{},validateEvent:{type:Boolean,default:!0},max:{},min:{},step:{},label:{},modelValue:{default:""},type:{},width:{},prefixIcon:{},suffixIcon:{},disabled:{type:Boolean,default:!1},placeholder:{},size:{},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},autosize:{type:[Boolean,Object],default:!1},showPassword:{type:Boolean,default:!1},rows:{},maxlength:{},minlength:{}},emits:["update:modelValue","input","blur","change","clear","focus"],setup(a,{expose:n,emit:u}){var E;const e=a,d=oe(),o=u,b=(E=pe())==null?void 0:E.appContext.app.config.globalProperties,i=r(""),p=r(null),Y=ie(()=>({id:e.id,name:e.name,size:fe(e.size),label:e.label,type:e.type,disabled:e.disabled,placeholder:e.placeholder||(b==null?void 0:b.$t("input")),readonly:e.readonly,clearable:e.clearable,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,showWordLimit:e.showWordLimit,autosize:e.autosize,rows:e.rows,showPassword:e.showPassword,maxLength:e.maxlength,minLength:e.minlength,autocomplete:e.autocomplete,inputStyle:e.inputStyle,validateEvent:e.validateEvent,max:e.max,min:e.min,step:e.step}));de(()=>e.modelValue,t=>{i.value=t},{immediate:!0});const Z=()=>{o("update:modelValue",i.value),o("input",i.value)},ee=()=>{o("blur")},te=()=>{o("focus")},ne=t=>{o("change",t)},ae=()=>{o("update:modelValue",""),o("clear",""),o("input",""),o("change","")};return n({focus:()=>{var t;(t=p.value)==null||t.focus()},blur:()=>{var t;(t=p.value)==null||t.blur()},select:()=>{var t;(t=p.value)==null||t.select()},clear:()=>{var t;(t=p.value)==null||t.clear()},resizeTextarea:()=>{var t;(t=p.value)==null||t.resizeTextarea()}}),(t,B)=>{const re=le("el-input");return me(),ce(re,ve({ref_key:"inputRef",ref:p,modelValue:i.value,"onUpdate:modelValue":B[0]||(B[0]=se=>i.value=se),class:"k-input"},Y.value,{style:{width:e.width},onInput:Z,onChange:ne,onFocus:te,onBlur:ee,onClear:ae}),xe({_:2},[d.prepend?{name:"prepend",fn:l(()=>[m(t.$slots,"prepend")]),key:"0"}:void 0,d.append?{name:"append",fn:l(()=>[m(t.$slots,"append")]),key:"1"}:void 0,d.prefix?{name:"prefix",fn:l(()=>[m(t.$slots,"prefix")]),key:"2"}:void 0,d.suffix?{name:"suffix",fn:l(()=>[m(t.$slots,"suffix")]),key:"3"}:void 0]),1040,["modelValue","style"])}}});s.__docgenInfo={name:"KInput",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"select"},{name:"clear"},{name:"resizeTextarea"}],props:[{name:"modelValue",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"clearable",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"showWordLimit",defaultValue:{func:!1,value:"false"}},{name:"autosize",defaultValue:{func:!1,value:"false"}},{name:"showPassword",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"validateEvent",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"blur"},{name:"change"},{name:"clear"},{name:"focus"}],slots:[{name:"prepend"},{name:"append"},{name:"prefix"},{name:"suffix"},{name:"default"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/input/input.vue"]};const Be={title:"Data Entry(DE)/KInput",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"双向绑定的值"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否展示删除按钮"},width:{control:"text",description:"输入框宽度"},readonly:{control:"boolean",description:"是否只读"},showWordLimit:{control:"boolean",description:"是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效"},autosize:{control:"boolean",description:"textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }"},showPassword:{control:"boolean",description:"是否可以展示密码"},autocomplete:{control:"select",options:["off","on","name","email","username","new-password","current-password"],description:"原生 autocomplete 属性/更多相关属性查看MDN"},validateEvent:{control:"boolean",description:""}},args:{width:"200px",autosize:{minRows:2,maxRows:4}}},c={name:"默认用法",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{text:n}},template:`
          <k-input v-model="text">
          </k-input>
      `}}},x={name:"禁用状态",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :disabled="true">
          </k-input>
      `}}},v={name:"一键清空",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :clearable="true">
          </k-input>
      `}}},f={name:"密码框",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" :width="args.width" :showPassword="true">
          </k-input>
      `}}},g={name:"文本域",render:a=>{const n=r("");return{components:{KInput:s},setup(){return{args:a,text:n}},template:`
          <k-input v-model="text" type="textarea" :width="args.width">
          </k-input>
      `}}},h={name:"自适应文本域",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
          <k-input v-model="text" type="textarea" :width="args.width" autosize>
          </k-input>
          <div style="margin:20px" />
          <k-input v-model="text1" type="textarea" :width="args.width" :autosize="args.autosize">
          </k-input>
      `}}},w={name:"插槽类型",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
      
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
    
      `}}},y={name:"尺寸",render:a=>{const n=r(""),u=r("");return{components:{KInput:s},setup(){return{args:a,text:n,text1:u}},template:`
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
      `}}};var z,I,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var D,K,V;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(K=x.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var C,S,L;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(S=v.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var A,P,W;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(P=f.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,R,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,N,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(N=h.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var O,j,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(j=w.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var M,U,G;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ze=["def","def1","def2","def4","def5","def6","def7","def8","def9"];export{ze as __namedExportsOrder,c as def,x as def1,v as def2,f as def4,g as def5,h as def6,w as def7,y as def8,k as def9,Be as default};
