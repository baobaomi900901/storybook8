import{d as U,h as W,i as X,o as m,c as p,j as K,w as Y,m as Z,n as nn,r as h,e as z,t as en}from"./vue.esm-bundler-7C2mjde0.js";import{s as tn,r as s,h as r}from"./index.es-CQrmyl57.js";const an={key:0},on={key:0},sn={key:1},rn={key:0},o=U({name:"KButton",__name:"btn",props:{type:{default:""},size:{default:"base"},status:{},iconRight:{},iconLeft:{},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:tn}},emits:["click"],setup(e,{emit:O}){const t=e;console.log(t.loadingIcon.props.size),t.loadingIcon.props.spin={type:Boolean,default:!0},t.loadingIcon.props.color={type:String,default:"#2882ff"};const P=W(()=>{const{type:a,size:n}=t;return{...G(a),...H(n),...J()}}),G=a=>{const n={type:"",plain:!1,text:!1,iconLeft:null,iconRight:null};switch(a){case"":n.type="";break;case"main":n.type="main";break;case"secondary":n.type="secondary";break;case"text":n.type="text";break;case"icon":n.type="icon";break}return n},H=a=>{const n={size:"default"};switch(a){case"base":n.size="";break;case"sm":n.size="sm";break}return n},J=()=>{const{disabled:a,loading:n,loadingIcon:A}=t;return{disabled:a,loading:n,loadingIcon:A}},M=O,Q=a=>{M("click",a)};return(a,n)=>{const A=X("el-button");return m(),p("div",{class:nn([{"button-loading":t.loading},"k-button"])},[K(A,Z({ref:"buttonRef",class:["k-button__inner",{loading:t.loading}]},P.value,{onClick:Q}),{default:Y(()=>[h(a.$slots,"iconLeft",{class:"icon-left"},()=>[t.iconLeft?(m(),p("span",an,[K(t.iconLeft,{class:"icon-left"})])):z("",!0)]),t.value?(m(),p("span",on,en(t.value),1)):(m(),p("label",sn,[h(a.$slots,"default",{class:"slot-content"})])),h(a.$slots,"iconRight",{class:"icon-right"},()=>[t.iconRight?(m(),p("span",rn,[K(t.iconRight,{class:"icon-right"})])):z("",!0)])]),_:3},16,["class"])],2)}}});o.__docgenInfo={name:"KButton",exportName:"default",displayName:"btn",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"base"'}},{name:"status",required:!1,type:{name:"string"}},{name:"iconRight",required:!1,type:{name:"any"}},{name:"iconLeft",required:!1,type:{name:"any"}},{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",required:!1,type:{name:"object"},defaultValue:{func:!1,value:"IconLoading"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["D:/RengarTang/Kingsware/code_demo/storybook8/src/package/components/btn/btn.vue"]};const dn={title:"Base(B)/KBtn",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮1",disabled:!1,loading:!1}},u="secondary",l="sm",i="按钮",c=!1,d=!1,g={name:"default",args:{label:i,type:u,size:l,loading:c,disabled:d},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
          <KBtn v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      `})},b={name:"icon传参",args:{label:i,type:u,size:l,loading:c,disabled:d,iconLeft:s,iconRight:r},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
          <KBtn v-bind='args'>
            {{args.label}}
          </KBtn>
      `})},y={name:"icon left",args:{label:i,type:u,size:l,loading:c,disabled:d},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
        <KBtn v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KBtn>
    `})},f={name:"icon right",args:{label:i,type:u,size:l,loading:c,disabled:d},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
          <KBtn v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      `})},B={name:"sm",args:{label:i,type:u,size:l,loading:c,disabled:d},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
          <KBtn v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KBtn>
      `})},I={name:"icon",args:{label:i,type:"icon",size:l,loading:c,disabled:d},render:e=>({components:{KBtn:o,IconAdd:s,IconArrowBottom:r},setup(){return{args:e}},template:`
          <KBtn v-bind='args'>
            <IconAdd />
          </KBtn>
      `})};var v,w,k;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "default",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KBtn v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      \`
    };
  }
}`,...(k=(w=g.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,R,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "icon传参",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
    iconLeft: IconAdd,
    iconRight: IconArrowBottom
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KBtn v-bind='args'>
            {{args.label}}
          </KBtn>
      \`
    };
  }
}`,...(L=(R=b.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var S,q,x;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "icon left",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <KBtn v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KBtn>
    \`
    };
  }
}`,...(x=(q=y.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var C,V,j;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "icon right",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KBtn v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KBtn>
      \`
    };
  }
}`,...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var N,T,$;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "sm",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KBtn v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KBtn>
      \`
    };
  }
}`,...($=(T=B.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var D,E,F;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "icon",
  args: {
    label: mylabel,
    type: "icon",
    size: mysize,
    loading: myloading,
    disabled: mydisabled
  },
  render: (args: any) => {
    return {
      components: {
        KBtn,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
          <KBtn v-bind='args'>
            <IconAdd />
          </KBtn>
      \`
    };
  }
}`,...(F=(E=I.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const mn=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{mn as __namedExportsOrder,g as def,dn as default,I as icon,y as iconLeft,f as iconRight,b as namedSlot,B as sm};
