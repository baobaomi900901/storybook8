import{P as n}from"./jsx-runtime-DUQ03nRe.js";import{u as t}from"./index-D_jtBd_N.js";import{ae as a,af as o}from"./index-CRxsceJj.js";import"./vue.esm-bundler-N-wW40t0.js";import"./iframe-DJN_K2gv.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DlJr0YTq.js";import"./index-DrFu-skq.js";function r(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...t(),...i.components};return n(o.Fragment,{children:[n(a,{title:"项目概述"}),`
`,n(e.h1,{children:"项目概述"}),`
`,n(e.p,{children:"适用于产品一部 AOM/RPA/RPOM UI2.0 的组件库."}),`
`,n(e.p,{children:"本项目包含两个 npm 包, 一个是 KSW组件库(vue3), 另一个是 KSW图标库."}),`
`,n(e.hr,{}),`
`,n("br",{}),`
`,n(e.h2,{children:"KSW组件库(vue3)"}),`
`,n("br",{}),`
`,n(e.h3,{children:"兼容性"}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"Chrome : 80+"}),`
`,n(e.p,{children:"Firefox : 74+"}),`
`,n(e.p,{children:"Safari : 13.1+"}),`
`,n(e.p,{children:"Edge : 80+"}),`
`]}),`
`,n("br",{}),`
`,n(e.h3,{children:"版本"}),`
`,n(e.p,{children:"目前还处于快速开发迭代中。"}),`
`,n("br",{}),`
`,n(e.h3,{children:"使用方式:"}),`
`,n("br",{}),`
`,n(e.h4,{children:"安装:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`
# npm
npm install @ksware/ksw-ux --save

# yarn
yarn add @ksware/ksw-ux

# pnpm
pnpm add @ksware/ksw-ux

`})}),`
`,n(e.h4,{children:"全局引入:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# main.js/ts
import KSWUX from '@ksware/ksw-ux';

const app = createApp(App)
app.use(KSWUX)
app.mount('#app')

`})}),`
`,n(e.p,{children:"ps: 组件库自带 KSW图标库, 无需重复安装。"}),`
`,n(e.hr,{}),`
`,n("br",{}),`
`,n(e.h2,{children:"KSW图标库"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# npm
npm install ksw-vue-icon

# yarn
yarn add ksw-vue-icon

# pnpm
pnpm add ksw-vue-icon

`})}),`
`,n(e.h3,{children:"全局引入"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# main.js/ts
import { KswIcon} from 'ksw-vue-icon'
# 包含图标的动画样式
import 'ksw-vue-icon/styles/icon.css';

const app = createApp(App)
app.use(KswIcon)
app.mount('#app')



`})}),`
`,n(e.h3,{children:"按需引入:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# 引用
import { IconName } from 'ksw-vue-icon'

`})}),`
`,n(e.h3,{children:"使用方式"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`
# 使用
<IconName :size="24" color="#333" />

`})}),`
`,n(e.p,{children:[n(e.a,{href:"https://sengoku-f.github.io/KSW-vue-icon/",children:"图标库预览地址"}),", 可以在这里查看所有图标的效果, 点击图标, 复制到粘贴板。"]}),`
`,n(e.p,{children:["更多使用方式请参考 ",n(e.a,{href:"https://ksw.design.donxj.com/components/icon",children:"KSW-设计文档库"}),"。"]}),`
`,n("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

.sb-section {
width: 100%;
display: flex;
flex-direction: row;
gap: 20px;
}

img {
object-fit: cover;
}

.sb-section-title {
margin-bottom: 32px;
}

.sb-section a:not(h1 a, h2 a, h3 a) {
font-size: 14px;
}

.sb-section-item, .sb-grid-item {
flex: 1;
display: flex;
flex-direction: column;
}

.sb-section-item-heading {
padding-top: 20px !important;
padding-bottom: 5px !important;
margin: 0 !important;
}
.sb-section-item-paragraph {
margin: 0;
padding-bottom: 10px;
}

.sb-chevron {
margin-left: 5px;
}

.sb-features-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 32px 20px;
}

.sb-socials {
display: grid;
grid-template-columns: repeat(4, 1fr);
}

.sb-socials p {
margin-bottom: 10px;
}

.sb-explore-image {
max-height: 32px;
align-self: flex-start;
}

.sb-addon {
width: 100%;
display: flex;
align-items: center;
position: relative;
background-color: #EEF3F8;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.05);
background: #EEF3F8;
height: 180px;
margin-bottom: 48px;
overflow: hidden;
}

.sb-addon-text {
padding-left: 48px;
max-width: 240px;
}

.sb-addon-text h4 {
padding-top: 0px;
}

.sb-addon-img {
position: absolute;
left: 345px;
top: 0;
height: 100%;
width: 200%;
overflow: hidden;
}

.sb-addon-img img {
width: 650px;
transform: rotate(-15deg);
margin-left: 40px;
margin-top: -72px;
box-shadow: 0 0 1px rgba(255, 255, 255, 0);
backface-visibility: hidden;
}

@media screen and (max-width: 800px) {
.sb-addon-img {
left: 300px;
}
}

@media screen and (max-width: 600px) {
.sb-section {
flex-direction: column;
}

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }

}
`})]})}function f(i={}){const{wrapper:e}={...t(),...i.components};return e?n(e,{...i,children:n(r,{...i})}):r(i)}export{f as default};
