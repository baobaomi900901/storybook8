import{o as a,h as s,m as k,i as f,d as Z,r as ee,j as ne,k as _,a as te,c as oe,w as ae,f as C,t as se,l as q,p as R}from"./vue.esm-bundler-i_Gm276z.js";import{i as re,G as le}from"./index-BA0qWRNh.js";const L=(n,d)=>{const t=n.__vccOpts||n;for(const[e,u]of d)t[e]=u;return t},ie={name:"IconAdd",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},ce=["width","height","fill"],de=f("path",{"fill-rule":"evenodd",d:"M13 19.875V4.125C13 3.504 12.552 3 12 3s-1 .504-1 1.125v15.75c0 .621.448 1.125 1 1.125s1-.504 1-1.125"},null,-1),ue=f("path",{"fill-rule":"evenodd",d:"M19.875 11H4.125C3.504 11 3 11.448 3 12s.504 1 1.125 1h15.75c.621 0 1.125-.448 1.125-1s-.504-1-1.125-1"},null,-1),me=[de,ue];function pe(n,d,t,e,u,i){return a(),s("span",k({class:i.iconClasses},n.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},me,8,ce))],16)}const r=L(ie,[["render",pe]]),ge={name:"IconArrowBottom",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!1}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},fe=["width","height","fill"],ye=f("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null,-1),be=[ye];function Be(n,d,t,e,u,i){return a(),s("span",k({class:i.iconClasses},n.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},be,8,fe))],16)}const c=L(ge,[["render",Be]]),he={name:"IconLoading",props:{size:{type:[Number,String],default:"1em"},color:{type:String,default:"currentColor"},spin:{type:Boolean,default:!0}},computed:{iconClasses(){return["ksw-icon","ksw-icon-"+this.$options.name.toLowerCase(),{"ksw-icon-spin":this.spin}]}}},ve=["width","height","fill"],we=f("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:{opacity:".4000000059604645"}},null,-1),Ie=f("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null,-1),Ae=[we,Ie];function Ke(n,d,t,e,u,i){return a(),s("span",k({class:i.iconClasses},n.$attrs),[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color},Ae,8,ve))],16)}const ke=L(he,[["render",Ke]]),ze={key:0},Ce={key:0},Le={key:1},_e={key:0},l=Z({name:"KButton",__name:"button",props:{type:{default:"normal"},size:{default:"base"},iconLeft:{default:null},iconRight:{default:null},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:ke},color:{default:""}},emits:["click"],setup(n,{emit:d}){const t=ee(),e=n;ne(()=>{if(console.log("props.color =>>",e.color),e.color&&re(e.color)){const o=e.color,{lightColor:B,darkColor:z}=le(o,.1);t.value.style.setProperty("--k-button-color",o),t.value.style.setProperty("--k-button-hover-color",B),t.value.style.setProperty("--k-button-active-color",z),t.value.style.setProperty("--k-button-icon-color",o)}});const u=_(()=>({...i()})),i=()=>{const{loading:o,loadingIcon:B}=e;return{loading:o,loadingIcon:B}},W=_(()=>e.size!==""?`el-button--${e.size}`:""),X=d,Y=o=>{X("click",o)};return(o,B)=>{const z=te("el-button");return a(),oe(z,k({ref_key:"buttonRef",ref:t,class:["k-button",["el-button",{"el-button--main":e.type==="main","el-button--secondary":e.type==="secondary","el-button--text":e.type==="text","el-button--icon":e.type==="icon","is-loading":e.loading,"is-disabled":e.disabled,"button-loading":e.loading},W.value]]},u.value,{onClick:Y}),{default:ae(()=>[C(o.$slots,"iconLeft",{class:"icon-left"},()=>[e.iconLeft?(a(),s("span",ze,[q(e.iconLeft,{class:"icon-left"})])):R("",!0)]),e.value?(a(),s("span",Ce,se(e.value),1)):(a(),s("label",Le,[C(o.$slots,"default",{class:"slot-content"})])),C(o.$slots,"iconRight",{class:"icon-right"},()=>[e.iconRight?(a(),s("span",_e,[q(e.iconRight,{class:"icon-right"})])):R("",!0)])]),_:3},16,["class"])}}});l.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",description:`按钮状态: 普通按钮, 主要按钮, 次级按钮, 文字按钮, 图标按钮.
  可选值为:`,required:!1,type:{name:"union",elements:[{name:'"normal"'},{name:'"main"'},{name:'"secondary"'},{name:'"text"'},{name:'"icon"'}]},defaultValue:{func:!1,value:"'normal'"}},{name:"size",description:"按钮尺寸，可选值为:",required:!1,type:{name:"union",elements:[{name:'"base"'},{name:'"sm"'}]},defaultValue:{func:!1,value:"'base'"}},{name:"iconLeft",description:"文字左边图标",required:!1,type:{name:"Component"},defaultValue:{func:!1,value:"null"}},{name:"iconRight",description:"文字右边图标",required:!1,type:{name:"Component"},defaultValue:{func:!1,value:"null"}},{name:"value",description:"按钮内容",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"禁止点击",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"按钮加载",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",description:"加载图标",required:!1,type:{name:"Component"},defaultValue:{func:!1,value:"IconLoading"}},{name:"color",description:"十六进制颜色: 例如 #ff5500",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/button/button.vue"]};const xe={title:"Base(B)/KButton",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"]},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"]},disabled:"boolean",loading:"boolean",color:{control:"color",description:"按钮颜色"}}},y="secondary",b="sm",m="按钮",p=!1,g=!1,h={name:"icon传参",args:{label:m,type:y,size:b,loading:p,disabled:g,value:"",color:""},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n,IconAdd:r,IconArrowBottom:c}},template:`
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom :color="args.color">
            {{args.label}}
          </KButton>
      `})},v={name:"default",args:{label:m,type:y,size:b,loading:p,disabled:g},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},w={name:"icon left",args:{label:m,type:y,size:b,loading:p,disabled:g},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},I={name:"icon right",args:{label:m,type:y,size:b,loading:p,disabled:g},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},A={name:"sm",args:{label:m,type:y,size:"sm",loading:p,disabled:g},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},K={name:"icon",args:{label:m,type:"icon",size:b,loading:p,disabled:g,iconLeft:r},render:n=>({components:{KButton:l,IconAdd:r,IconArrowBottom:c},setup(){return{args:n}},template:`
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      `})};var x,S,V;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "icon传参",
  args: {
    label: mylabel,
    type: mytype,
    size: mysize,
    loading: myloading,
    disabled: mydisabled,
    value: "",
    color: ""
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
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom :color="args.color">
            {{args.label}}
          </KButton>
      \`
    };
  }
}`,...(V=(S=h.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var Q,$,N;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(N=($=v.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var M,P,O;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(P=w.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var E,F,G;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(G=(F=I.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var T,D,H;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(D=A.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var j,U,J;K.parameters={...K.parameters,docs:{...(j=K.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(U=K.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const Se=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{Se as __namedExportsOrder,h as def,xe as default,K as icon,w as iconLeft,I as iconRight,v as namedSlot,A as sm};
