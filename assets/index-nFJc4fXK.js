var p=Object.defineProperty;var x=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>x(e,typeof t!="symbol"?t+"":t,n);function b(e){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=n.length;for(let o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*s));return t}function C(e){switch(e){case"sm":return"small";case"lg":return"large";case"default":return"default";case"base":return"default";default:return""}}function I(e){if(!e)return!1;const t=new Option().style;return t.color=e,!!t.color}function y(e){function t(l){const c=parseInt(l.slice(1),16),f=c>>16&255,u=c>>8&255,M=c&255;return[f,u,M]}function n(l,c,f){return`#${((1<<24)+(l<<16)+(c<<8)+f).toString(16).slice(1).toUpperCase()}`}function s([l,c,f],u){return[Math.min(255,Math.max(0,Math.round(l*u))),Math.min(255,Math.max(0,Math.round(c*u))),Math.min(255,Math.max(0,Math.round(f*u)))]}function o([l,c,f],u){return[Math.min(255,Math.max(0,Math.round(l*u)+25)),Math.min(255,Math.max(0,Math.round(c*u)+25)),Math.min(255,Math.max(0,Math.round(f*u)+25))]}const a=t(e),h=1.2,d=.8,r=n(...s(a,h)),i=n(...s(a,d)),g=n(...o(a,1.4));return{lightColor:r,darkColor:i,loadingColor:g}}class L{constructor(){m(this,"events");this.events=new Map}on(t,n,s){const o=this.events.get(t);if(!o){this.events.set(t,[{id:n,callback:s}]);return}o.push({id:n,callback:s})}emit(t,n,...s){const o=this.events.get(t);if(!o)return;const a=o.find(h=>h.id===n);if(a){const{callback:h}=a;h.call(null,...s)}}remove(t,n){const s=this.events.get(t);if(!s)return;const o=s.findIndex(a=>a.id===n);o!==-1&&s.splice(o,1),s.length===0&&this.events.delete(t)}}function S(e,t){const n=new Map(e.map((r,i)=>[r.id,i])),s=new Map(e.map(r=>[r.id,r])),o=[],a=[];for(const r of t){const i=n.get(r);i>=0&&(o.push(i),a.push(r))}o.sort((r,i)=>r-i);for(const r in o)n.set(a[r],o[r]);const h=[];for(const[r,i]of n)h[i]=r;const d=[];for(const r of h)d.push(s.get(r));return d}function v(e,t){if(!Array.isArray(e)||e.length===0)return[];let n=[];for(const s of e)s[t]?n=n.concat(v(s[t],t)):n.push(s);return n}export{L as E,y as G,C as a,b as g,I as i,S as s,v as t};