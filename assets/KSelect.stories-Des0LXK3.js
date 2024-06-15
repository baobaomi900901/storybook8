import{d as S,u as R,b as p,e as V,w as W,f as B,o as C,g as _,q as A,h as s,m as w,r,k as q}from"./vue.esm-bundler-DN0Desjy.js";import{g as P}from"./index-0r_fcLWx.js";const c=S({name:"KSelect",__name:"select",props:{modelValue:{},multiple:{type:Boolean},disabled:{type:Boolean},valueKey:{default:"value"},clearable:{type:Boolean},collapseTags:{type:Boolean},collapseTagsTooltip:{type:Boolean},multipleLimit:{default:0},autocomplete:{default:"off"},placeholder:{},filterable:{type:Boolean},filterMethod:{},remote:{type:Boolean},remoteMethod:{},remoteShowSuffix:{type:Boolean},loading:{type:Boolean},loadingText:{},noMatchText:{},noDataText:{},allowCreate:{type:Boolean},size:{},width:{},popperClass:{},teleported:{type:Boolean,default:!0},defaultFirstOption:{type:Boolean},fitInputWidth:{type:Boolean},suffixIcon:{},name:{},automaticDropdown:{type:Boolean},persistent:{type:Boolean,default:!0}},emits:["update:modelValue","blur","change","clear","focus","visible-change","remove-tag"],setup(a,{expose:l,emit:d}){const e=a,o=d,n=R(),m=p(""),f=p(null),K=V(()=>({disabled:e.disabled,placeholder:e.placeholder,clearable:e.clearable,multiple:e.multiple,filterable:e.filterable,allowCreate:e.allowCreate,popperClass:e.popperClass,teleported:e.teleported,valueKey:e.valueKey,collapseTags:e.collapseTags,collapseTagsTooltip:e.collapseTagsTooltip,multipleLimit:e.multipleLimit,autocomplete:e.autocomplete,filterMethod:e.filterMethod,remote:e.remote,remoteMethod:e.remoteMethod,remoteShowSuffix:e.remoteShowSuffix,loading:e.loading,loadingText:e.loadingText,noMatchText:e.noMatchText,noDataText:e.noDataText,defaultFirstOption:e.defaultFirstOption,fitInputWidth:e.fitInputWidth,suffixIcon:e.suffixIcon,name:e.name,automaticDropdown:e.automaticDropdown,persistent:e.persistent,size:P(e.size)}));W(()=>e.modelValue,t=>{m.value=t},{immediate:!0});function D(){o("blur")}function E(){o("focus")}function M(t){o("update:modelValue",t),o("change",t)}function O(){o("update:modelValue",""),o("clear",""),o("change","")}function I(t){o("visible-change",t)}function F(t){o("remove-tag",t)}function $(){var t;(t=f.value)==null||t.focus()}function N(){var t;(t=f.value)==null||t.blur()}return l({focus:$,blur:N}),(t,v)=>{const z=B("el-select");return C(),_(z,w({ref_key:"inputRef",ref:f,modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=L=>m.value=L),class:"k-select"},K.value,{"default-first-option":"",style:{width:e.width},onChange:M,onFocus:E,onBlur:D,onClear:O,onVisibleChange:I,onRemoveTag:F}),A({default:s(()=>[r(t.$slots,"default")]),_:2},[n.tag?{name:"tag",fn:s(()=>[n.tag?r(t.$slots,"tag",{key:0}):q("",!0)]),key:"0"}:void 0,n.empty?{name:"empty",fn:s(()=>[r(t.$slots,"empty")]),key:"1"}:void 0,n.header?{name:"header",fn:s(()=>[r(t.$slots,"header")]),key:"2"}:void 0,n.footer?{name:"footer",fn:s(()=>[r(t.$slots,"footer")]),key:"3"}:void 0]),1040,["modelValue","style"])}}});c.__docgenInfo={name:"KSelect",exportName:"default",displayName:"select",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"teleported",defaultValue:{func:!1,value:"true"}},{name:"valueKey",defaultValue:{func:!1,value:"'value'"}},{name:"multipleLimit",defaultValue:{func:!1,value:"0"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"persistent",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"blur"},{name:"change"},{name:"clear"},{name:"focus"},{name:"visible-change"},{name:"remove-tag"}],slots:[{name:"default"},{name:"tag"},{name:"empty"},{name:"header"},{name:"footer"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/select/select.vue"]};const g=S({name:"KOption",__name:"option",props:{value:{},label:{},disabled:{type:Boolean}},setup(a){const l=a,d=V(()=>({value:l.value,label:l.label,disabled:l.disabled}));return(e,o)=>{const n=B("el-option");return C(),_(n,w({class:"k-option"},d.value),{default:s(()=>[r(e.$slots,"default")]),_:3},16)}}});g.__docgenInfo={name:"KOption",exportName:"default",displayName:"option",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/select/option.vue"]};const G={title:"Data Entry(DE)/KSelect",component:c,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"适用广泛的基础单选 v-model 的值为当前被选中的 el-option 的 value 属性值"},multiple:{control:"boolean",description:"是否多选"},disabled:{control:"boolean",description:"是否禁用"},valueKey:{control:"text",description:"作为 value 唯一标识的键名，绑定值为对象类型时必填"},size:{control:"select",options:["","large","default","small"],description:"输入框尺寸"},collapseTags:{control:"boolean",description:"多选时是否将选中值按文字的形式展示"},collapseTagsTooltip:{control:"boolean",description:"当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true"},multipleLimit:{control:"number",description:"multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制"},name:{control:"text",description:"Select 输入框的原生 name 属性"},effect:{control:"select",options:["dark","light"],description:"tooltip 主题，内置了 dark / light 两种"},autocomplete:{control:"select",options:["off","on"],description:"Select 输入框的原生 autocomplete 属性,更多查看MDN"},placeholder:{control:"text",description:"占位符，默认为“Select”"},filterable:{control:"boolean",description:"Select 组件是否可筛选"},allowCreate:{control:"boolean",description:"是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。"},filterMethod:{description:"自定义筛选方法"},remote:{control:"boolean",description:"其中的选项是否从服务器远程加载"}},args:{}},u={name:"默认用法",args:{modelValue:""},render:a=>{const l=p("");return{components:{KSelect:c,KOption:g},setup(){return{args:a,text:l}},template:`
            <k-select v-model="text">
             <k-option :value="'1'" :key="'1'"  :label="'1'"/>
             <k-option :value="'2'" :key="'2'"  :label="'2'"/>
             <k-option :value="'3'" :key="'3'"  :label="'3'"/>
            </k-select>
        `}}},i={name:"默认用法",args:{modelValue:""},render:a=>{const l=p("");return{components:{KSelect:c,KOption:g},setup(){return{args:a,text:l}},template:`
              <k-select v-model="text">
               <k-option :value="'1'" :key="'1'"  :label="'1'"/>
               <k-option :value="'2'" :key="'2'"  :label="'2'"/>
               <k-option :value="'3'" :key="'3'"  :label="'3'"/>
              </k-select>
          `}}};var b,k,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "默认用法",
  args: {
    modelValue: ""
  },
  render: args => {
    const text = ref("");
    return {
      components: {
        KSelect,
        KOption
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
            <k-select v-model="text">
             <k-option :value="'1'" :key="'1'"  :label="'1'"/>
             <k-option :value="'2'" :key="'2'"  :label="'2'"/>
             <k-option :value="'3'" :key="'3'"  :label="'3'"/>
            </k-select>
        \`
    };
  }
}`,...(y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var h,x,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "默认用法",
  args: {
    modelValue: ""
  },
  render: args => {
    const text = ref("");
    return {
      components: {
        KSelect,
        KOption
      },
      setup() {
        return {
          args,
          text
        };
      },
      template: \`
              <k-select v-model="text">
               <k-option :value="'1'" :key="'1'"  :label="'1'"/>
               <k-option :value="'2'" :key="'2'"  :label="'2'"/>
               <k-option :value="'3'" :key="'3'"  :label="'3'"/>
              </k-select>
          \`
    };
  }
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const H=["def","def1"];export{H as __namedExportsOrder,u as def,i as def1,G as default};
