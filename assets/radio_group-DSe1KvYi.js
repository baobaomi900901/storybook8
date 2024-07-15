import{e as b,r as d,l as B,n as g,f as _,g as m,h as k,p as v,q as y,m as z,u as C,a as h,o as R,w,i as $,s as q,v as S,x as G}from"./vue.esm-bundler-BJoIvmbj.js";import{g as K,i as P,G as x,a as N}from"./index-nFJc4fXK.js";const V=b({name:"KRadio",__name:"radio",props:{size:{default:"base"},color:{default:""},button:{type:Boolean,default:!1}},setup(c){const e=c,n=K(8),i=d(e.color),p=d();B(()=>{});const o=d();g(()=>{o.value=document.getElementById(n)}),_(()=>e.color,a=>{if(i.value=a,a&&P(a)){const l=a,{lightColor:s}=x(l);g(()=>{var r,t,u;(r=o.value)!=null&&r.style&&((t=o.value)==null||t.style.setProperty("--radio-color-checked",l),(u=o.value)==null||u.style.setProperty("--radio-color-hover",s))})}},{immediate:!0});const f=m(()=>e.size?`k-radio--${e.size}`:"");return(a,l)=>{const s=h("el-radio");return R(),k(s,z(a.$attrs,{id:C(n),ref_key:"kRadioRef",ref:p,class:["k-radio",[f.value,{"is-button":e.button===!0}]]}),v({_:2},[y(a.$slots,(r,t)=>({name:t,fn:w(u=>[$(a.$slots,t,q(S(u)))])}))]),1040,["id","class"])}}});V.__docgenInfo={name:"KRadio",exportName:"default",displayName:"radio",description:"",tags:{},props:[{name:"size",description:"尺寸, 默认 base",required:!1,type:{name:"union",elements:[{name:'"base"'},{name:'"sm"'}]},defaultValue:{func:!1,value:"'base'"}},{name:"color",description:"自定义颜色",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"button",description:"是否为按钮样式, 建议配合 KRadioGroup 使用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/radio/radio.vue"]};const I=b({name:"KRadioGroup",__name:"radio_group",props:{size:{default:"base"},direction:{default:"row"},button:{type:Boolean,default:!1}},setup(c){const e=c,n=m(()=>e.direction==="row"?"k-radio-group--row":"k-radio-group--column"),i=d(e.color),p=m(()=>e.size?`k-radio-group--${e.size}`:"");return _(()=>e.color,o=>{i.value=o}),G("_fillColor",i),(o,f)=>{const a=h("el-radio-group");return R(),k(a,z({class:"k-radio-group"},o.$attrs,{size:C(N)(o.size),class:[{"k-radio-group--button":e.button===!0},n.value,p.value]}),v({_:2},[y(o.$slots,(l,s)=>({name:s,fn:w(r=>[$(o.$slots,s,q(S(r)))])}))]),1040,["size","class"])}}});I.__docgenInfo={name:"KRadioGroup",exportName:"default",displayName:"radio_group",description:"",tags:{},props:[{name:"size",description:"尺寸",required:!1,type:{name:"union",elements:[{name:'"base"'},{name:'"sm"'}]},defaultValue:{func:!1,value:"'base'"}},{name:"direction",description:"排列方向",required:!1,type:{name:"union",elements:[{name:'"row"'},{name:'"column"'}]},defaultValue:{func:!1,value:"'row'"}},{name:"button",description:"button 样式的 radio",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/storybook8/storybook8/kswux/package/components/radio/radio_group.vue"]};export{V as _,I as a};
