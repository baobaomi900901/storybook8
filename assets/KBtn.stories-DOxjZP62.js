import{o as r,c as i,m as x,a as w,d as on,r as an,b as sn,e as $,f as rn,g as ln,w as cn,h as M,t as dn,i as q,j as Q}from"./vue.esm-bundler-CyVDF3Xi.js";const V=(e,o)=>{const t=e.__vccOpts||e;for(const[n,l]of o)t[n]=l;return t},un={name:"IconAdd",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},mn=["width","height","fill"],pn=w("path",{"fill-rule":"evenodd",d:"M13 19.875V4.125C13 3.504 12.552 3 12 3s-1 .504-1 1.125v15.75c0 .621.448 1.125 1 1.125s1-.504 1-1.125"},null,-1),gn=w("path",{"fill-rule":"evenodd",d:"M19.875 11H4.125C3.504 11 3 11.448 3 12s.504 1 1.125 1h15.75c.621 0 1.125-.448 1.125-1s-.504-1-1.125-1"},null,-1),fn=[pn,gn];function bn(e,o,t,n,l,s){return r(),i("span",x({class:s.iconClasses},e.$attrs),[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},fn,8,mn))],16)}const d=V(un,[["render",bn]]),yn={name:"IconArrowBottom",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},hn=["width","height","fill"],Bn=w("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null,-1),wn=[Bn];function In(e,o,t,n,l,s){return r(),i("span",x({class:s.iconClasses},e.$attrs),[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},wn,8,hn))],16)}const m=V(yn,[["render",In]]),vn={name:"IconLoading",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!0}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},An=["width","height","fill"],Kn=w("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:{opacity:".4000000059604645"}},null,-1),kn=w("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null,-1),zn=[Kn,kn];function Cn(e,o,t,n,l,s){return r(),i("span",x({class:s.iconClasses},e.$attrs),[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},zn,8,An))],16)}const Ln=V(vn,[["render",Cn]]);function xn(e){if(!e)return!1;const o=new Option().style;return o.color=e,!!o.color}function Rn(e,o=1){function t(c){const g=parseInt(c.slice(1),16),h=g>>16&255,B=g>>8&255,tn=g&255;return[h,B,tn]}function n(c,g,h){return`#${((1<<24)+(c<<16)+(g<<8)+h).toString(16).slice(1).toUpperCase()}`}function l([c,g,h],B){return[Math.min(255,Math.max(0,Math.round(c*B))),Math.min(255,Math.max(0,Math.round(g*B))),Math.min(255,Math.max(0,Math.round(h*B)))]}const s=t(e),R=1.2,_=.8,S=n(...l(s,R)),a=n(...l(s,_));let u=.5;return o>=.5&&o<=1.5?u=o:o>1.5&&(u=1.5),{lightColor:S,darkColor:a,colorCustom:n(...l(s,u))}}const _n={key:0},Sn={key:0},Mn={key:1},Vn={key:0},p=on({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},status:{},iconRight:{default:null},iconLeft:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:Ln}},emits:["click"],setup(e,{emit:o}){const t=an(),n=e;sn(()=>{if(n.color&&xn(n.color)){const a=n.color,{lightColor:u,darkColor:c}=Rn(a,.1);t.value.style.setProperty("--k-button-color",a),t.value.style.setProperty("--k-button-hover-color",u),t.value.style.setProperty("--k-button-active-color",c),t.value.style.setProperty("--k-button-icon-color",a)}});const l=$(()=>({...s()})),s=()=>{const{loading:a,loadingIcon:u}=n;return{loading:a,loadingIcon:u}},R=$(()=>n.size!==""?`el-button--${n.size}`:""),_=o,S=a=>{_("click",a)};return(a,u)=>{const c=rn("el-button");return r(),ln(c,x({ref_key:"buttonRef",ref:t,class:["k-button",["el-button",{"el-button--main":n.type==="main","el-button--secondary":n.type==="secondary","el-button--text":n.type==="text","el-button--icon":n.type==="icon","is-loading":n.loading,"is-disabled":n.disabled,"button-loading":n.loading},R.value]]},l.value,{onClick:S}),{default:cn(()=>[M(a.$slots,"iconLeft",{class:"icon-left"},()=>[n.iconLeft?(r(),i("span",_n,[q(n.iconLeft,{class:"icon-left"})])):Q("",!0)]),n.value?(r(),i("span",Sn,dn(n.value),1)):(r(),i("label",Mn,[M(a.$slots,"default",{class:"slot-content"})])),M(a.$slots,"iconRight",{class:"icon-right"},()=>[n.iconRight?(r(),i("span",Vn,[q(n.iconRight,{class:"icon-right"})])):Q("",!0)])]),_:3},16,["class"])}}});p.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'normal'"}},{name:"size",defaultValue:{func:!1,value:"'base'"}},{name:"value",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",defaultValue:{func:!1,value:"IconLoading"}},{name:"iconLeft",defaultValue:{func:!1,value:"null"}},{name:"iconRight",defaultValue:{func:!1,value:"null"}},{name:"color",defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/button/button.vue"]};const qn={title:"Base(B)/KButton",component:p,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"],description:"按钮类型, 可选值为{ main : 主要按钮、secondary : 次要按钮、text : 文字按钮、normal: 默认按钮 }"},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"],description:"按钮大小, sm: 小尺寸、base: 默认尺寸"},iconLeft:{control:"object",description:"文字左边图标"},iconRight:{control:"object",description:"文字右边图标"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingIcon:{control:"object",description:"加载图标"}},args:{type:"normal",label:"按钮",disabled:!1,loading:!1}},I="secondary",v="sm",f="按钮",b=!1,y=!1,A={name:"icon传参",args:{label:f,type:I,size:v,loading:b,disabled:y,iconLeft:d,iconRight:m},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e,IconAdd:d,IconArrowBottom:m}},template:`
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom>
            {{args.label}}
          </KButton>
      `})},K={name:"default",args:{label:f,type:I,size:v,loading:b,disabled:y},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},k={name:"icon left",args:{label:f,type:I,size:v,loading:b,disabled:y},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},z={name:"icon right",args:{label:f,type:I,size:v,loading:b,disabled:y},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},C={name:"sm",args:{label:f,type:I,size:"sm",loading:b,disabled:y},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},L={name:"icon",args:{label:f,type:"icon",size:v,loading:b,disabled:y,iconLeft:d},render:e=>({components:{KButton:p,IconAdd:d,IconArrowBottom:m},setup(){return{args:e}},template:`
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      `})};var N,j,F;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(j=A.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var O,P,T;K.parameters={...K.parameters,docs:{...(O=K.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(P=K.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,H,D;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(H=k.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var G,U,J;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(U=z.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,nn,en;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(en=(nn=L.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};const Qn=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{Qn as __namedExportsOrder,A as def,qn as default,L as icon,k as iconLeft,z as iconRight,K as namedSlot,C as sm};
