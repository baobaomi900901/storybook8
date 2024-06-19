import{o as a,j as s,m as k,l as f,d as Z,r as nn,q as en,c as R,a as tn,b as on,e as an,f as L,t as sn,k as _,s as S}from"./vue.esm-bundler-CHOSw6HX.js";import{i as rn,G as ln}from"./index-0r_fcLWx.js";const C=(e,d)=>{const t=e.__vccOpts||e;for(const[n,u]of d)t[n]=u;return t},cn={name:"IconAdd",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},dn=["width","height","fill"],un=f("path",{"fill-rule":"evenodd",d:"M13 19.875V4.125C13 3.504 12.552 3 12 3s-1 .504-1 1.125v15.75c0 .621.448 1.125 1 1.125s1-.504 1-1.125"},null,-1),mn=f("path",{"fill-rule":"evenodd",d:"M19.875 11H4.125C3.504 11 3 11.448 3 12s.504 1 1.125 1h15.75c.621 0 1.125-.448 1.125-1s-.504-1-1.125-1"},null,-1),pn=[un,mn];function gn(e,d,t,n,u,c){return a(),s("span",k({class:c.iconClasses},e.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},pn,8,dn))],16)}const r=C(cn,[["render",gn]]),fn={name:"IconArrowBottom",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},bn=["width","height","fill"],yn=f("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null,-1),Bn=[yn];function hn(e,d,t,n,u,c){return a(),s("span",k({class:c.iconClasses},e.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},Bn,8,bn))],16)}const l=C(fn,[["render",hn]]),vn={name:"IconLoading",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!0}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},wn=["width","height","fill"],In=f("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:{opacity:".4000000059604645"}},null,-1),An=f("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null,-1),Kn=[In,An];function kn(e,d,t,n,u,c){return a(),s("span",k({class:c.iconClasses},e.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},Kn,8,wn))],16)}const zn=C(vn,[["render",kn]]),Ln={key:0},Cn={key:0},Rn={key:1},_n={key:0},i=Z({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},status:{},iconRight:{default:null},iconLeft:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:zn},color:{default:""}},emits:["click"],setup(e,{emit:d}){const t=nn(),n=e;en(()=>{if(n.color&&rn(n.color)){const o=n.color,{lightColor:B,darkColor:z}=ln(o,.1);t.value.style.setProperty("--k-button-color",o),t.value.style.setProperty("--k-button-hover-color",B),t.value.style.setProperty("--k-button-active-color",z),t.value.style.setProperty("--k-button-icon-color",o)}else return});const u=R(()=>({...c()})),c=()=>{const{loading:o,loadingIcon:B}=n;return{loading:o,loadingIcon:B}},W=R(()=>n.size!==""?`el-button--${n.size}`:""),X=d,Y=o=>{X("click",o)};return(o,B)=>{const z=tn("el-button");return a(),on(z,k({ref_key:"buttonRef",ref:t,class:["k-button",["el-button",{"el-button--main":n.type==="main","el-button--secondary":n.type==="secondary","el-button--text":n.type==="text","el-button--icon":n.type==="icon","is-loading":n.loading,"is-disabled":n.disabled,"button-loading":n.loading},W.value]]},u.value,{onClick:Y}),{default:an(()=>[L(o.$slots,"iconLeft",{class:"icon-left"},()=>[n.iconLeft?(a(),s("span",Ln,[_(n.iconLeft,{class:"icon-left"})])):S("",!0)]),n.value?(a(),s("span",Cn,sn(n.value),1)):(a(),s("label",Rn,[L(o.$slots,"default",{class:"slot-content"})])),L(o.$slots,"iconRight",{class:"icon-right"},()=>[n.iconRight?(a(),s("span",_n,[_(n.iconRight,{class:"icon-right"})])):S("",!0)])]),_:3},16,["class"])}}});i.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:'"normal"'}},{name:"size",defaultValue:{func:!1,value:'"base"'}},{name:"value",defaultValue:{func:!1,value:'""'}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",defaultValue:{func:!1,value:"IconLoading"}},{name:"iconLeft",defaultValue:{func:!1,value:"null"}},{name:"iconRight",defaultValue:{func:!1,value:"null"}},{name:"color",defaultValue:{func:!1,value:'""'}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/button/button.vue"]};const Vn={title:"Base(B)/KButton",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小, sm: 小尺寸、base: 默认尺寸"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮",disabled:!1,loading:!1}},b="secondary",y="sm",m="按钮",p=!1,g=!1,h={name:"icon传参",args:{label:m,type:b,size:y,loading:p,disabled:g,iconLeft:r,iconRight:l},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e,IconAdd:r,IconArrowBottom:l}},template:`
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom>
            {{args.label}}
          </KButton>
      `})},v={name:"default",args:{label:m,type:b,size:y,loading:p,disabled:g},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},w={name:"icon left",args:{label:m,type:b,size:y,loading:p,disabled:g},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},I={name:"icon right",args:{label:m,type:b,size:y,loading:p,disabled:g},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},A={name:"sm",args:{label:m,type:b,size:"sm",loading:p,disabled:g},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},K={name:"icon",args:{label:m,type:"icon",size:y,loading:p,disabled:g,iconLeft:r},render:e=>({components:{KButton:i,IconAdd:r,IconArrowBottom:l},setup(){return{args:e}},template:`
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      `})};var x,V,q;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          args,
          IconAdd,
          IconArrowBottom
        };
      },
      template: \`
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom>
            {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var Q,$,N;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(N=($=v.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var M,P,j;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(P=w.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var O,E,F;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(E=I.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var G,T,D;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "sm",
  args: {
    label: mylabel,
    type: mytype,
    size: "sm",
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
}`,...(D=(T=A.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var H,U,J;K.parameters={...K.parameters,docs:{...(H=K.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "icon",
  args: {
    label: mylabel,
    type: "icon",
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
    iconLeft: IconAdd
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
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      \`
    };
  }
}`,...(J=(U=K.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const qn=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{qn as __namedExportsOrder,h as def,Vn as default,K as icon,w as iconLeft,I as iconRight,v as namedSlot,A as sm};
