function M(e){switch(e){case"sm":return"small";case"lg":return"large";case"default":return"default";case"base":return"default";default:return""}}function b(e){if(!e)return!1;const t=new Option().style;return t.color=e,!!t.color}function p(e,t=1){function u(o){const n=parseInt(o.slice(1),16),r=n>>16&255,a=n>>8&255,m=n&255;return[r,a,m]}function s(o,n,r){return`#${((1<<24)+(o<<16)+(n<<8)+r).toString(16).slice(1).toUpperCase()}`}function c([o,n,r],a){return[Math.min(255,Math.max(0,Math.round(o*a))),Math.min(255,Math.max(0,Math.round(n*a))),Math.min(255,Math.max(0,Math.round(r*a)))]}const i=u(e),h=1.2,g=.8,f=s(...c(i,h)),d=s(...c(i,g));let l=.5;return t>=.5&&t<=1.5?l=t:t>1.5&&(l=1.5),{lightColor:f,darkColor:d,colorCustom:s(...c(i,l))}}export{p as G,M as g,b as i};