import{o as t,c as o,m as K,n as z,b,d as X,j as Y,l as Z,i as k,w as nn,r as _,e as R,t as en}from"./vue.esm-bundler-BhCrIbF3.js";const C=(e,c)=>{const n=e.__vccOpts||e;for(const[d,u]of c)n[d]=u;return n},tn={name:"IconAdd",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},on=["width","height","fill"],an=b("path",{"fill-rule":"evenodd",d:"M13 19.875V4.125C13 3.504 12.552 3 12 3s-1 .504-1 1.125v15.75c0 .621.448 1.125 1 1.125s1-.504 1-1.125"},null,-1),sn=b("path",{"fill-rule":"evenodd",d:"M19.875 11H4.125C3.504 11 3 11.448 3 12s.504 1 1.125 1h15.75c.621 0 1.125-.448 1.125-1s-.504-1-1.125-1"},null,-1),rn=[an,sn];function ln(e,c,n,d,u,s){return t(),o("span",{class:z(s.iconClasses)},[(t(),o("svg",K({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),rn,16,on))],2)}const l=C(tn,[["render",ln]]),cn={name:"IconArrowBottom",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},dn=["width","height","fill"],un=b("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null,-1),mn=[un];function pn(e,c,n,d,u,s){return t(),o("span",{class:z(s.iconClasses)},[(t(),o("svg",K({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),mn,16,dn))],2)}const i=C(cn,[["render",pn]]),gn={name:"IconLoading",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!0}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},bn=["width","height","fill"],fn=b("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:{opacity:".4000000059604645"}},null,-1),yn=b("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null,-1),Bn=[fn,yn];function hn(e,c,n,d,u,s){return t(),o("span",{class:z(s.iconClasses)},[(t(),o("svg",K({xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,viewBox:"0 0 24 24","aria-hidden":"true"},e.$attrs,{fill:n.color}),Bn,16,bn))],2)}const wn=C(gn,[["render",hn]]),In={key:0},vn={key:0},An={key:1},Kn={key:0},a=X({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},status:{},iconRight:{default:null},iconLeft:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:wn}},emits:["click"],setup(e,{emit:c}){const n=e,d=Y(()=>({...u()})),u=()=>{const{loading:r,loadingIcon:L}=n;return{loading:r,loadingIcon:L}},s=c,U=r=>{s("click",r)};return(r,L)=>{const W=Z("el-button");return t(),o("div",{class:z([{"button-loading":n.loading},"k-button"])},[k(W,K({ref:"buttonRef",class:["k-button__inner",["el-button",{"el-button--main":n.type==="main","el-button--secondary":n.type==="secondary","el-button--text":n.type==="text","el-button--icon":n.type==="icon","el-button--sm":n.size==="sm","is-loading":n.loading,"is-disabled":n.disabled}]]},d.value,{onClick:U}),{default:nn(()=>[_(r.$slots,"iconLeft",{class:"icon-left"},()=>[n.iconLeft?(t(),o("span",In,[k(n.iconLeft,{class:"icon-left"})])):R("",!0)]),n.value?(t(),o("span",vn,en(n.value),1)):(t(),o("label",An,[_(r.$slots,"default",{class:"slot-content"})])),_(r.$slots,"iconRight",{class:"icon-right"},()=>[n.iconRight?(t(),o("span",Kn,[k(n.iconRight,{class:"icon-right"})])):R("",!0)])]),_:3},16,["class"])],2)}}});a.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:'"normal"'}},{name:"size",defaultValue:{func:!1,value:'"base"'}},{name:"value",defaultValue:{func:!1,value:'""'}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",defaultValue:{func:!1,value:"IconLoading"}},{name:"iconLeft",defaultValue:{func:!1,value:"null"}},{name:"iconRight",defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/src/package/components/button/button.vue"]};const kn={title:"Base(B)/KButton",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小, sm: 小尺寸、base: 默认尺寸"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮",disabled:!1,loading:!1}},f="text",y="sm",m="按钮",p=!1,g=!0,B={name:"default",args:{label:m,type:f,size:y,loading:p,disabled:g},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},h={name:"icon传参",args:{label:m,type:f,size:y,loading:p,disabled:g,iconLeft:l,iconRight:i},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            {{args.label}}
          </KButton>
      `})},w={name:"icon left",args:{label:m,type:f,size:y,loading:p,disabled:g},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},I={name:"icon right",args:{label:m,type:f,size:y,loading:p,disabled:g},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},v={name:"sm",args:{label:m,type:f,size:"sm",loading:p,disabled:g},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},A={name:"icon",args:{label:m,type:"icon",size:y,loading:p,disabled:g},render:e=>({components:{KButton:a,IconAdd:l,IconArrowBottom:i},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <IconAdd />
          </KButton>
      `})};var S,x,V;B.parameters={...B.parameters,docs:{...(S=B.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(x=B.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var q,Q,$;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var N,M,j;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(M=w.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var O,E,F;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(E=I.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,D,H;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "sm",
  args: {
    label: mylabel,
    type: mytype,
    size: 'sm',
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
}`,...(H=(D=v.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var P,G,J;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(J=(G=A.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const _n=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{_n as __namedExportsOrder,B as def,kn as default,A as icon,w as iconLeft,I as iconRight,h as namedSlot,v as sm};
