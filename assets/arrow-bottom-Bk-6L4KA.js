import{c as o}from"./vue.esm-bundler-BJoIvmbj.js";const e={size:"1em",color:"currentColor",spin:!1,prefix:"ksw"};function n(t,s,l){return{name:"Icon"+t,props:{size:{type:[String,Number],default:e.size},color:{type:String,default:e.color},rotate:{type:Number},spin:{type:Boolean,default:s||e.spin}},setup(r){return()=>{const{spin:a}=r,i=[`${e.prefix}-icon`,`${e.prefix}-icon-${t}`];return a&&i.push(`${e.prefix}-icon-spin`),o("span",{class:i.join(" ")},[l(r)])}}}}const c=n("Add",!1,function(t){return o("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,"aria-hidden":!0,viewBox:"0 0 24 24",transform:t.rotate?`rotate(${t.rotate})`:void 0,fill:t.color},[o("path",{"fill-rule":"evenodd",d:"M11.25 4.5q0-.074.014-.146.015-.073.043-.141t.07-.13q.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043T12 3.75t.146.014.141.043.13.07.113.093q.053.052.094.113.04.062.069.13.028.068.043.14t.014.147v6.75h6.75q.074 0 .146.014.073.015.141.043t.13.07q.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14t.014.147-.014.146-.043.141-.07.13-.093.113q-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043t-.147.014h-6.75v6.75q0 .074-.014.146-.015.073-.043.141t-.07.13q-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043T12 20.25t-.146-.014-.141-.043-.13-.07-.113-.093q-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14t-.014-.147v-6.75H4.5q-.074 0-.146-.014-.073-.015-.141-.043t-.13-.07q-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14T3.75 12t.014-.146.043-.141.07-.13.093-.113q.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043t.147-.014h6.75z"},null)])}),u=n("ArrowBottom",!1,function(t){return o("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,"aria-hidden":!0,viewBox:"0 0 24 24",transform:t.rotate?`rotate(${t.rotate})`:void 0,fill:t.color},[o("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null)])});export{c as a,u as i,n as u};
