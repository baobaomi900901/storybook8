import{a as u,d as Kn,r as E,e as mn,n as L,f as fn,g as I,h as gn,o as i,i as B,m as yn,u as vn,w as An,l as h,c as Q,t as bn,v as w,x as q}from"./vue.esm-bundler-CrDTszJQ.js";import{i as xn,G as En,g as In}from"./index-JNNWE467.js";const l={size:"1em",color:"currentColor",spin:!1,prefix:"ksw"};function z(n,b,d){return{name:"Icon"+n,props:{size:{type:[String,Number],default:l.size},color:{type:String,default:l.color},spin:{type:Boolean,default:b||l.spin}},setup(c){return()=>{const{spin:t}=c,p=[`${l.prefix}-icon`,`${l.prefix}-icon-${n}`];return t&&p.push(`${l.prefix}-icon-spin`),u("span",{class:p.join(" ")},[d(c)])}}}}const o=z("Add",!1,function(n){return u("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,"aria-hidden":"true",viewBox:"0 0 24 24",fill:n.color},[u("path",{"fill-rule":"evenodd",d:"M11.25 4.5q0-.074.014-.146.015-.073.043-.141t.07-.13q.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043T12 3.75t.146.014.141.043.13.07.113.093q.053.052.094.113.04.062.069.13.028.068.043.14t.014.147v6.75h6.75q.074 0 .146.014.073.015.141.043t.13.07q.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14t.014.147-.014.146-.043.141-.07.13-.093.113q-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043t-.147.014h-6.75v6.75q0 .074-.014.146-.015.073-.043.141t-.07.13q-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043T12 20.25t-.146-.014-.141-.043-.13-.07-.113-.093q-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14t-.014-.147v-6.75H4.5q-.074 0-.146-.014-.073-.015-.141-.043t-.13-.07q-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14T3.75 12t.014-.146.043-.141.07-.13.093-.113q.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043t.147-.014h6.75z"},null)])}),un=z("ArrowBottom",!1,function(n){return u("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,"aria-hidden":"true",viewBox:"0 0 24 24",fill:n.color},[u("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null)])}),hn=z("Loading",!0,function(n){return u("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,"aria-hidden":"true",viewBox:"0 0 24 24",fill:n.color},[u("path",{"fill-rule":"evenodd",d:"M21.298 15.68Q22 13.908 22 12t-.702-3.68q-.762-1.927-2.227-3.391-1.464-1.465-3.39-2.227Q13.907 2 12 2t-3.68.702q-1.927.762-3.391 2.227-1.465 1.464-2.227 3.39Q2 10.093 2 12t.702 3.68q.762 1.927 2.227 3.391t3.39 2.227Q10.093 22 12 22t3.68-.702q1.927-.762 3.391-2.227t2.227-3.39m-1.86-6.625Q20 10.475 20 12q0 1.526-.562 2.945-.61 1.54-1.781 2.712-1.172 1.171-2.712 1.781Q13.525 20 12 20q-1.526 0-2.945-.562-1.54-.61-2.712-1.781-1.171-1.172-1.781-2.712Q4 13.525 4 12q0-1.526.562-2.945.61-1.54 1.781-2.712 1.172-1.171 2.712-1.781Q10.475 4 12 4q1.526 0 2.945.562 1.54.61 2.712 1.781 1.171 1.172 1.781 2.712",style:"opacity:.4000000059604645"},null),u("path",{"fill-rule":"evenodd",d:"M12 4h-1V2h1q2.034 0 3.893.786 1.795.76 3.178 2.143t2.143 3.178Q22 9.967 22 12v1h-2v-1q0-3.314-2.343-5.657T12 4"},null)])}),wn={key:0},qn={key:1},a=Kn({name:"KButton",__name:"button",props:{type:{default:""},main:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},text:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},size:{default:"base"},iconLeft:{default:""},iconRight:{default:""},value:{default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{default:hn},color:{default:""}},emits:["click"],setup(n,{emit:b}){const d=In(8),c=E(),t=n,p=E(t.color);mn(()=>{});const s=E();L(()=>{s.value=document.getElementById(d)}),fn(()=>t.color,e=>{if(p.value=e,e&&xn(e)){const r=e,{lightColor:x,darkColor:pn,loadingColor:Bn}=En(r);L(()=>{var C,k,_,T,V,S;(C=s.value)!=null&&C.style&&((k=s.value)==null||k.style.setProperty("--k-button-color",r),(_=s.value)==null||_.style.setProperty("--k-button-hover-color",x),(T=s.value)==null||T.style.setProperty("--k-button-active-color",pn),(V=s.value)==null||V.style.setProperty("--k-button-icon-color",r),(S=s.value)==null||S.style.setProperty("--k-button-loading-color",Bn))})}},{immediate:!0});const an=I(()=>{const e=["primary","success","info","warning","danger"];return t.type&&e.includes(t.type)?`el-button--${t.type}`:""}),sn=I(()=>t.size?`el-button--${t.size}`:""),rn=I(()=>({...ln()})),ln=()=>{const{loading:e,loadingIcon:r}=t;return{loading:e,loadingIcon:r}},dn=b,cn=e=>{dn("click",e)};return(e,r)=>{const x=gn("el-button");return i(),B(x,yn({id:vn(d),ref_key:"btn",ref:c,class:["k-button",["el-button",{"el-button--main":t.main===!0,"el-button--secondary":t.secondary===!0,"el-button--text":t.text===!0,"el-button--icon":t.icon===!0,"is-loading":t.loading,"is-disabled":t.disabled,"button-loading":t.loading},an.value,sn.value]]},rn.value,{onClick:cn}),{default:An(()=>[h(e.$slots,"iconLeft",{class:"icon-left"},()=>[t.iconLeft?(i(),B(w(t.iconLeft),{key:0})):q("",!0)]),t.value&&t.icon===!1?(i(),Q("label",wn,bn(t.value),1)):(i(),Q("label",qn,[h(e.$slots,"default",{class:"slot-content"})])),h(e.$slots,"iconRight",{class:"icon-right"},()=>[t.iconRight?(i(),B(w(t.iconRight),{key:0})):q("",!0)]),t.loading?(i(),B(w(t.loadingIcon),{key:2,class:"loading-icon"})):q("",!0)]),_:3},16,["id","class"])}}});a.__docgenInfo={name:"KButton",exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"type",description:"继承 el-button 的颜色, 可以配合 main, secondary, text 使用",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"success"'},{name:'"info"'},{name:'"warning"'},{name:'"danger"'},{name:'""'}]},defaultValue:{func:!1,value:"''"}},{name:"main",description:"主要按钮, main, secondary, text, icon 不能同时使用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"secondary",description:"次要按钮",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",description:"文字按钮",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"icon按钮",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"按钮尺寸，可选值为:",required:!1,type:{name:"union",elements:[{name:'"base"'},{name:'"sm"'}]},defaultValue:{func:!1,value:"'base'"}},{name:"iconLeft",description:"文字左边图标. 例如：'iconAdd'",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconRight",description:"文字右边图标, 例如：'IconArrowBottom'",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",description:"按钮内容",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"禁止点击",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"按钮加载",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingIcon",description:"加载图标",required:!1,type:{name:"Component"},defaultValue:{func:!1,value:"IconLoading"}},{name:"color",description:"十六进制颜色: 例如 #ff5500",required:!1,type:{name:"union",elements:[{name:"Color"},{name:"string"}]},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"iconLeft",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"iconRight",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/button/button.vue"]};const kn={title:"Base(B)/KButton",component:a,tags:["autodocs"],argTypes:{value:"text",size:{control:"select",options:["base","sm"]},main:"boolean",secondary:"boolean",text:"boolean",icon:"boolean",disabled:"boolean",loading:"boolean",iconLeft:"",iconRight:"",type:{control:"select",options:["normal","main","secondary","text","icon"]},color:{control:"color"}},args:{}},K={name:"默认",args:{value:"Button"}},m={name:"各类型按钮",args:{value:"新增",main:!0},render:n=>({components:{KButton:a,IconAdd:o},setup(){return{args:n,IconAdd:o}},template:`
      <div class="grid grid-cols-2 gap-4 w-40 items-center">
        <span>普通按钮:</span> <KButton >取消</KButton>
        <span>主要按钮:</span> <KButton main >新增</KButton>
        <span>次级按钮:</span> <KButton secondary >导出</KButton>
        <span>文字按钮:</span> <KButton text >编辑</KButton>
        <span>icon按钮:</span> <KButton icon ><IconAdd /></KButton>
      </div>
      `})},f={name:"禁用按钮",args:{disabled:!0},render:n=>({components:{KButton:a,IconAdd:o},setup(){return{args:n,IconAdd:o}},template:`
      <div class="flex gap-4">
        <KButton disabled>按钮</KButton>
        <KButton main disabled>按钮</KButton>
        <KButton secondary disabled>按钮</KButton>
        <KButton text disabled>按钮</KButton>
        <KButton icon disabled>
          <IconAdd />
        </KButton>
      </div>
      `})},g={name:"加载中",args:{value:"Button",loading:!0},render:n=>({components:{KButton:a,IconAdd:o},setup(){return{args:n,IconAdd:o}},template:`
      <div class="flex gap-4">
        <KButton loading>按钮</KButton>
        <KButton loading main>按钮</KButton>
        <KButton loading secondary>按钮</KButton>
        <KButton loading text>按钮</KButton>
        <KButton loading icon>
          <IconAdd />
        </KButton>
      </div>
      `})},y={name:"不同尺寸",args:{value:"Button",size:"base"},render:n=>({components:{KButton:a,IconAdd:o},setup(){return{args:n,IconAdd:o}},template:`
      <div class="flex gap-4">
        <KButton >按钮</KButton>
        <KButton main >按钮</KButton>
        <KButton secondary >按钮</KButton>
        <KButton text >按钮</KButton>
        <KButton icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton size='sm'>按钮</KButton>
        <KButton size='sm' main>按钮</KButton>
        <KButton size='sm' secondary>按钮</KButton>
        <KButton size='sm' text>按钮</KButton>
        <KButton size='sm' icon>
          <IconAdd />
        </KButton>
      </div>
      `})},v={name:"elTypeColor",args:{},render:n=>({components:{KButton:a,IconAdd:o,IconArrowBottom:un},setup(){return{args:n}},template:`
      <div class="flex gap-4">
        <KButton type="primary" >按钮</KButton>
        <KButton type="primary" main >按钮</KButton>
        <KButton type="primary" secondary >按钮</KButton>
        <KButton type="primary" text >按钮</KButton>
        <KButton type="primary" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="success" >按钮</KButton>
        <KButton type="success" main >按钮</KButton>
        <KButton type="success" secondary >按钮</KButton> 
        <KButton type="success" text >按钮</KButton>
        <KButton type="success" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="warning" >按钮</KButton>
        <KButton type="warning" main >按钮</KButton>
        <KButton type="warning" secondary >按钮</KButton>
        <KButton type="warning" text >按钮</KButton>
        <KButton type="warning" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="danger" >按钮</KButton>
        <KButton type="danger" main >按钮</KButton>
        <KButton type="danger" secondary >按钮</KButton>
        <KButton type="danger" text >按钮</KButton>
        <KButton type="danger" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="info" >按钮</KButton>
        <KButton type="info" main >按钮</KButton>
        <KButton type="info" secondary >按钮</KButton>
        <KButton type="info" text >按钮</KButton>
        <KButton type="info" icon >
          <IconAdd />
        </KButton>
      </div>
      `})},A={name:"自定义颜色",args:{},render:n=>({components:{KButton:a,IconAdd:o,IconArrowBottom:un},setup(){return{args:n}},template:`
      <div class="flex gap-4">
        <KButton color="#ff5500" >按钮</KButton>
        <KButton color="#ff5500" main >按钮</KButton>
        <KButton color="#ff5500" secondary >按钮</KButton>
        <KButton color="#ff5500" text >按钮</KButton>
        <KButton color="#ff5500" icon >
          <IconAdd />
        </KButton>
      </div>
      `})};var $,D,R;K.parameters={...K.parameters,docs:{...($=K.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '默认',
  args: {
    value: 'Button'
  }
}`,...(R=(D=K.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var F,P,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '各类型按钮',
  args: {
    value: '新增',
    main: true
  },
  render: (args: any) => {
    return {
      components: {
        KButton,
        IconAdd
      },
      setup() {
        return {
          args,
          IconAdd
        };
      },
      template: \`
      <div class="grid grid-cols-2 gap-4 w-40 items-center">
        <span>普通按钮:</span> <KButton >取消</KButton>
        <span>主要按钮:</span> <KButton main >新增</KButton>
        <span>次级按钮:</span> <KButton secondary >导出</KButton>
        <span>文字按钮:</span> <KButton text >编辑</KButton>
        <span>icon按钮:</span> <KButton icon ><IconAdd /></KButton>
      </div>
      \`
    };
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var N,G,O;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '禁用按钮',
  args: {
    disabled: true
  },
  render: (args: any) => {
    return {
      components: {
        KButton,
        IconAdd
      },
      setup() {
        return {
          args,
          IconAdd
        };
      },
      template: \`
      <div class="flex gap-4">
        <KButton disabled>按钮</KButton>
        <KButton main disabled>按钮</KButton>
        <KButton secondary disabled>按钮</KButton>
        <KButton text disabled>按钮</KButton>
        <KButton icon disabled>
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(O=(G=f.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var j,H,J;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    value: 'Button',
    loading: true
  },
  render: (args: any) => {
    return {
      components: {
        KButton,
        IconAdd
      },
      setup() {
        return {
          args,
          IconAdd
        };
      },
      template: \`
      <div class="flex gap-4">
        <KButton loading>按钮</KButton>
        <KButton loading main>按钮</KButton>
        <KButton loading secondary>按钮</KButton>
        <KButton loading text>按钮</KButton>
        <KButton loading icon>
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var U,W,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '不同尺寸',
  args: {
    value: 'Button',
    size: 'base'
  },
  render: (args: any) => {
    return {
      components: {
        KButton,
        IconAdd
      },
      setup() {
        return {
          args,
          IconAdd
        };
      },
      template: \`
      <div class="flex gap-4">
        <KButton >按钮</KButton>
        <KButton main >按钮</KButton>
        <KButton secondary >按钮</KButton>
        <KButton text >按钮</KButton>
        <KButton icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton size='sm'>按钮</KButton>
        <KButton size='sm' main>按钮</KButton>
        <KButton size='sm' secondary>按钮</KButton>
        <KButton size='sm' text>按钮</KButton>
        <KButton size='sm' icon>
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,nn;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'elTypeColor',
  args: {},
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
      <div class="flex gap-4">
        <KButton type="primary" >按钮</KButton>
        <KButton type="primary" main >按钮</KButton>
        <KButton type="primary" secondary >按钮</KButton>
        <KButton type="primary" text >按钮</KButton>
        <KButton type="primary" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="success" >按钮</KButton>
        <KButton type="success" main >按钮</KButton>
        <KButton type="success" secondary >按钮</KButton> 
        <KButton type="success" text >按钮</KButton>
        <KButton type="success" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="warning" >按钮</KButton>
        <KButton type="warning" main >按钮</KButton>
        <KButton type="warning" secondary >按钮</KButton>
        <KButton type="warning" text >按钮</KButton>
        <KButton type="warning" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="danger" >按钮</KButton>
        <KButton type="danger" main >按钮</KButton>
        <KButton type="danger" secondary >按钮</KButton>
        <KButton type="danger" text >按钮</KButton>
        <KButton type="danger" icon >
          <IconAdd />
        </KButton>
      </div>
      <br />
      <div class="flex gap-4">
        <KButton type="info" >按钮</KButton>
        <KButton type="info" main >按钮</KButton>
        <KButton type="info" secondary >按钮</KButton>
        <KButton type="info" text >按钮</KButton>
        <KButton type="info" icon >
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(nn=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var tn,en,on;A.parameters={...A.parameters,docs:{...(tn=A.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  name: '自定义颜色',
  args: {},
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
      <div class="flex gap-4">
        <KButton color="#ff5500" >按钮</KButton>
        <KButton color="#ff5500" main >按钮</KButton>
        <KButton color="#ff5500" secondary >按钮</KButton>
        <KButton color="#ff5500" text >按钮</KButton>
        <KButton color="#ff5500" icon >
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(on=(en=A.parameters)==null?void 0:en.docs)==null?void 0:on.source}}};const _n=["def","KBtbType","disabled","loading","size","elTypeColor","customColor"];export{m as KBtbType,_n as __namedExportsOrder,A as customColor,K as def,kn as default,f as disabled,v as elTypeColor,g as loading,y as size};
