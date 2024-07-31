import{_ as o}from"./button-BmBQGL3n.js";import"./vue.esm-bundler-zDk3ptr0.js";import{a as t,i}from"./gsap-CQ3NSv5C.js";import"./index-nFJc4fXK.js";const N={title:"Base(B)/KButton",component:o,tags:["autodocs"],argTypes:{value:"text",size:{control:"select",options:["base","sm"]},main:"boolean",secondary:"boolean",text:"boolean",icon:"boolean",disabled:"boolean",loading:"boolean",iconLeft:"",iconRight:"",type:{control:"select",options:["normal","main","secondary","text","icon"]},color:{control:"color"}},args:{}},e={name:"默认",args:{value:"Button"}},r={name:"各类型按钮",args:{value:"新增",main:!0},render:n=>({components:{KButton:o,IconAdd:t},setup(){return{args:n,IconAdd:t}},template:`
      <div class="grid grid-cols-2 gap-4 w-40 items-center">
        <span>普通按钮:</span> <KButton >取消</KButton>
        <span>主要按钮:</span> <KButton main >新增</KButton>
        <span>次级按钮:</span> <KButton secondary >导出</KButton>
        <span>文字按钮:</span> <KButton text >编辑</KButton>
        <span>icon按钮:</span> <KButton icon ><IconAdd /></KButton>
      </div>
      `})},a={name:"禁用按钮",args:{disabled:!0},render:n=>({components:{KButton:o,IconAdd:t},setup(){return{args:n,IconAdd:t}},template:`
      <div class="flex gap-4">
        <KButton disabled>按钮</KButton>
        <KButton main disabled>按钮</KButton>
        <KButton secondary disabled>按钮</KButton>
        <KButton text disabled>按钮</KButton>
        <KButton icon disabled>
          <IconAdd />
        </KButton>
      </div>
      `})},u={name:"加载中",args:{value:"Button",loading:!0},render:n=>({components:{KButton:o,IconAdd:t},setup(){return{args:n,IconAdd:t}},template:`
      <div class="flex gap-4">
        <KButton loading>按钮</KButton>
        <KButton loading main>按钮</KButton>
        <KButton loading secondary>按钮</KButton>
        <KButton loading text>按钮</KButton>
        <KButton loading icon>
          <IconAdd />
        </KButton>
      </div>
      `})},s={name:"不同尺寸",args:{value:"Button",size:"base"},render:n=>({components:{KButton:o,IconAdd:t},setup(){return{args:n,IconAdd:t}},template:`
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
      `})},c={name:"elTypeColor",args:{},render:n=>({components:{KButton:o,IconAdd:t,IconArrowBottom:i},setup(){return{args:n}},template:`
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
      `})},d={name:"自定义颜色",args:{},render:n=>({components:{KButton:o,IconAdd:t,IconArrowBottom:i},setup(){return{args:n}},template:`
      <div class="flex gap-4">
        <KButton color="#ff5500" >按钮</KButton>
        <KButton color="#ff5500" main >按钮</KButton>
        <KButton color="#ff5500" secondary >按钮</KButton>
        <KButton color="#ff5500" text >按钮</KButton>
        <KButton color="#ff5500" icon >
          <IconAdd />
        </KButton>
      </div>
      `})},B={name:"按钮左右侧图标(仅限ksw-vue-icon)",args:{},render:n=>({components:{KButton:o,IconAdd:t,IconArrowBottom:i},setup(){return{args:n}},template:`
      <div class="flex gap-4">
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" >按钮</KButton>
        <KButton iconLeft="iconAdd" iconRight="IconArrowBottom" main >按钮</KButton>
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" secondary >按钮</KButton>
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" text >按钮</KButton>
        <KButton icon >
          <IconAdd />
        </KButton>
      </div>
      `})},K={name:"具名插槽",args:{},render:n=>({components:{KButton:o,IconAdd:t,IconArrowBottom:i},setup(){return{args:n}},template:`
        <KButton>
          <template #iconLeft>
            <IconAdd />
          </template>
          <template #iconRight>
            <IconArrowBottom />
          </template>
          按钮
        </KButton>
      `})};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '默认',
  args: {
    value: 'Button'
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,y,A;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var I,f,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,b,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,h,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(h=s.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var R,S,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,_,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,O,j;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '按钮左右侧图标(仅限ksw-vue-icon)',
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
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" >按钮</KButton>
        <KButton iconLeft="iconAdd" iconRight="IconArrowBottom" main >按钮</KButton>
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" secondary >按钮</KButton>
        <KButton iconLeft="IconAdd" iconRight="IconArrowBottom" text >按钮</KButton>
        <KButton icon >
          <IconAdd />
        </KButton>
      </div>
      \`
    };
  }
}`,...(j=(O=B.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,D,F;K.parameters={...K.parameters,docs:{...(q=K.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '具名插槽',
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
        <KButton>
          <template #iconLeft>
            <IconAdd />
          </template>
          <template #iconRight>
            <IconArrowBottom />
          </template>
          按钮
        </KButton>
      \`
    };
  }
}`,...(F=(D=K.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const P=["def","KBtbType","disabled","loading","size","elTypeColor","customColor","customIcon","namedSlot"];export{r as KBtbType,P as __namedExportsOrder,d as customColor,B as customIcon,e as def,N as default,a as disabled,c as elTypeColor,u as loading,K as namedSlot,s as size};
