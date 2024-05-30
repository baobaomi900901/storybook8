import{o as t,c as o,m as z,n as k,b as y,d as Z,j as nn,l as en,i as C,w as tn,r as L,e as S,t as on}from"./vue.esm-bundler-BhCrIbF3.js";function an(e){switch(e){case"sm":return"small";case"lg":return"large";case"default":return"default";default:return""}}const R=(e,d)=>{const n=e.__vccOpts||e;for(const[u,m]of d)n[u]=m;return n},sn={name:"IconAdd",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},rn=["width","height","fill"],ln=y("path",{"fill-rule":"evenodd",d:"M13 19.875V4.125C13 3.504 12.552 3 12 3s-1 .504-1 1.125v15.75c0 .621.448 1.125 1 1.125s1-.504 1-1.125"},null,-1),cn=y("path",{"fill-rule":"evenodd",d:"M19.875 11H4.125C3.504 11 3 11.448 3 12s.504 1 1.125 1h15.75c.621 0 1.125-.448 1.125-1s-.504-1-1.125-1"},null,-1),dn=[ln,cn];function un(e,d,n,u,m,l){return t(),o("span",{class:k(l.iconClasses)},[(t(),o("svg",z({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),dn,16,rn))],2)}const i=R(sn,[["render",un]]),mn={name:"IconArrowBottom",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},pn=["width","height","fill"],gn=y("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null,-1),fn=[gn];function bn(e,d,n,u,m,l){return t(),o("span",{class:k(l.iconClasses)},[(t(),o("svg",z({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),fn,16,pn))],2)}const c=R(mn,[["render",bn]]),yn={name:"IconLoading",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!0}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},hn=["width","height","fill"],Bn=y("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:{opacity:".4000000059604645"}},null,-1),wn=y("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null,-1),In=[Bn,wn];function vn(e,d,n,u,m,l){return t(),o("span",{class:k(l.iconClasses)},[(t(),o("svg",z({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),In,16,hn))],2)}const An=R(yn,[["render",vn]]),Kn={key:0},zn={key:0},kn={key:1},_n={key:0},r=Z({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},status:{},iconRight:{default:null},iconLeft:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:An}},emits:["click"],setup(e,{emit:d}){const n=e,u=nn(()=>({...m(n.type),...l()})),m=a=>{const s={type:"",plain:!1,text:!1,iconLeft:null,iconRight:null};switch(a){case"":s.type="";break;case"main":s.type="main";break;case"secondary":s.type="secondary";break;case"text":s.type="text";break;case"icon":s.type="icon";break}return s},l=()=>{const{disabled:a,loading:s,loadingIcon:_,size:Y}=n;return{disabled:a,loading:s,loadingIcon:_,size:an(Y)}},W=d,X=a=>{W("click",a)};return(a,s)=>{const _=en("el-button");return t(),o("div",{class:k([{"button-loading":n.loading},"k-button"])},[C(_,z({ref:"buttonRef",class:["k-button__inner",{loading:n.loading}]},u.value,{onClick:X}),{default:tn(()=>[L(a.$slots,"iconLeft",{class:"icon-left"},()=>[n.iconLeft?(t(),o("span",Kn,[C(n.iconLeft,{class:"icon-left"})])):S("",!0)]),n.value?(t(),o("span",zn,on(n.value),1)):(t(),o("label",kn,[L(a.$slots,"default",{class:"slot-content"})])),L(a.$slots,"iconRight",{class:"icon-right"},()=>[n.iconRight?(t(),o("span",_n,[C(n.iconRight,{class:"icon-right"})])):S("",!0)])]),_:3},16,["class"])],2)}}});r.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:'"normal"'}},{name:"size",defaultValue:{func:!1,value:'"base"'}},{name:"value",defaultValue:{func:!1,value:'""'}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",defaultValue:{func:!1,value:"IconLoading"}},{name:"iconLeft",defaultValue:{func:!1,value:"null"}},{name:"iconRight",defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/button/button.vue"]};const Ln={title:"Base(B)/KButton",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小, sm: 小尺寸、base: 默认尺寸"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮",disabled:!1,loading:!1}},h="main",p="",g="按钮",f=!1,b=!1,B={name:"default",args:{label:g,type:h,size:p,loading:f,disabled:b},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},w={name:"icon传参",args:{label:g,type:h,size:p,loading:f,disabled:b,iconLeft:i,iconRight:c},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            {{args.label}}
          </KButton>
      `})},I={name:"icon left",args:{label:g,type:h,size:p,loading:f,disabled:b},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},v={name:"icon right",args:{label:g,type:h,size:p,loading:f,disabled:b},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},A={name:"sm",args:{label:g,type:h,size:p,loading:f,disabled:b},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},K={name:"icon",args:{label:g,type:"icon",size:p,loading:f,disabled:b},render:e=>({components:{KButton:r,IconAdd:i,IconArrowBottom:c},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <IconAdd />
          </KButton>
      `})};var x,V,q;B.parameters={...B.parameters,docs:{...(x=B.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(q=(V=B.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var Q,$,N;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
          <KButton v-bind='args'>
            {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(N=($=w.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var M,j,O;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    \`
    };
  }
}`,...(O=(j=I.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var T,E,F;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(F=(E=v.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,H,P;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(P=(H=A.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,J,U;K.parameters={...K.parameters,docs:{...(G=K.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          <KButton v-bind='args'>
            <IconAdd />
          </KButton>
      \`
    };
  }
}`,...(U=(J=K.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const Rn=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{Rn as __namedExportsOrder,B as def,Ln as default,K as icon,I as iconLeft,v as iconRight,w as namedSlot,A as sm};
