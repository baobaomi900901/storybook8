import{d as X,h as Y,i as Z,o,c as s,j as f,w as ee,m as ne,n as te,a as ae,e as k,t as re,r as oe}from"./vue.esm-bundler-7C2mjde0.js";import{r as y,h as B}from"./index.es-CQrmyl57.js";const se={key:0},le={key:1},ue={key:3},r=X({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},status:{},iconRight:{default:null},iconLeft:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:void 0}},emits:["click"],setup(e,{emit:G}){const a=e,H=Y(()=>{const{type:t,size:n}=a;return{...J(t),...M(n),...Q()}}),J=t=>{const n={type:"",plain:!1,text:!1};switch(t){case"main":n.type="primary";break;case"secondary":n.type="primary",n.plain=!0;break;case"normal":n.type="";break;case"text":n.type="primary",n.text=!0;break}return n},M=t=>{const n={size:"default"};switch(t){case"base":n.size="default";break;case"sm":n.size="small";break}return n},Q=()=>{const{disabled:t,loading:n,loadingIcon:b}=a;return{disabled:t,loading:n,loadingIcon:b}},U=G,W=t=>{U("click",t)};return(t,n)=>{const b=Z("el-button");return o(),s("div",{class:te([{"button-loading":a.loading},"k-button"])},[f(b,ne({ref:"buttonRef",class:["k-button__inner",{loading:a.loading}]},H.value,{onClick:W}),{default:ee(()=>[ae("span",null,[a.iconLeft?(o(),s("span",se,[f(a.iconLeft,{class:"icon-left"})])):k("",!0),a.value?(o(),s("span",le,re(a.value),1)):oe(t.$slots,"default",{key:2,class:"slot-content"}),a.iconRight?(o(),s("span",ue,[f(a.iconRight,{class:"icon-right"})])):k("",!0)])]),_:3},16,["class"])],2)}}});r.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'normal'"}},{name:"size",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"status",required:!1,type:{name:"string"}},{name:"iconRight",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"null"}},{name:"iconLeft",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"null"}},{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",required:!1,type:{name:"object"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/button/button.vue"]};const de={title:"Base(B)/KButton",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮1",disabled:!1,loading:!1}},l={args:{label:"默认按钮"},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},u={args:{label:"主要按钮",type:"main"},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},c={args:{label:"次级按钮",type:"secondary"},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},i={args:{label:"禁用按钮",disabled:!0},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},d={args:{label:"文字按钮",type:"text"},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},p={args:{label:"加载中",loading:!0},render:e=>({components:{KButton:r},setup(){return{args:e}},template:`
        <k-button>
        {{ args.label }}
        </k-button>`})},m={args:{label:"双边图标",iconLeft:y,iconRight:B},render:e=>({components:{KButton:r,IconAdd:y,IconArrowBottom:B},setup(){return{args:e}},template:`
      <KButton :icon-left="args.iconLeft" :icon-right="args.iconRight">
      {{args.label}}
      </KButton>
    `})},g={args:{},render:e=>(console.log("components",components),{components:{KButton:r,IconAdd:y},setup(){return{args:e}},template:`
        <k-button >
        
        </k-button>`})};var h,A,K;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "默认按钮"
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(K=(A=l.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var _,v,x;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "主要按钮",
    type: "main"
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,E,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "次级按钮",
    type: "secondary"
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,z,R;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "禁用按钮",
    disabled: true
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(R=(z=i.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var q,C,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "文字按钮",
    type: "text"
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var w,j,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "加载中",
    loading: true
  },
  render: (args: any) => {
    return {
      components: {
        KButton
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button>
        {{ args.label }}
        </k-button>\`
    };
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var D,F,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "双边图标",
    iconLeft: IconAdd,
    iconRight: IconArrowBottom
  },
  render: (args: any) => {
    return {
      components: {
        KButton,
        IconAdd,
        IconArrowBottom
      },
      setup() {
        return {
          args
        };
      },
      template: \`
      <KButton :icon-left="args.iconLeft" :icon-right="args.iconRight">
      {{args.label}}
      </KButton>
    \`
    };
  }
}`,...(T=(F=m.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var O,P,$;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: (args: any) => {
    console.log('components', components);
    return {
      components: {
        KButton,
        IconAdd
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <k-button >
        
        </k-button>\`
    };
  }
}`,...($=(P=g.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const pe=["normal","main","secondary","disabled","text","loading","iconAndText","onlyIcon"];export{pe as __namedExportsOrder,de as default,i as disabled,m as iconAndText,p as loading,u as main,l as normal,g as onlyIcon,c as secondary,d as text};
