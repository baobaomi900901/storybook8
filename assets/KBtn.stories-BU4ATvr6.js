import{_ as o,T as e,H as t}from"./dropdown_item-DyleUnbW.js";import"./vue.esm-bundler-BuMKoFJh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Base(B)/KButton",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"]},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"]},disabled:"boolean",loading:"boolean",color:{control:"color",description:"按钮颜色"}}},l="secondary",d="sm",r="按钮",a=!1,s=!1,c={name:"icon传参",args:{label:r,type:l,size:d,loading:a,disabled:s,value:"",color:""},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n,IconAdd:e,IconArrowBottom:t}},template:`
          <KButton v-bind='args' :iconLeft=IconAdd :iconRight=IconArrowBottom :color="args.color">
            {{args.label}}
          </KButton>
      `})},m={name:"default",args:{label:r,type:l,size:d,loading:a,disabled:s},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
            <template #iconLeft>
                <IconAdd />
            </template>
            <template #iconRight>
                <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},i={name:"icon left",args:{label:r,type:l,size:d,loading:a,disabled:s},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n}},template:`
        <KButton v-bind='args'>
          <template #iconLeft>
            <IconAdd />
          </template>
          {{args.label}}
        </KButton>
    `})},p={name:"icon right",args:{label:r,type:l,size:d,loading:a,disabled:s},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
            <template #iconRight>
              <IconArrowBottom />
            </template>
            {{args.label}}
          </KButton>
      `})},u={name:"sm",args:{label:r,type:l,size:"sm",loading:a,disabled:s},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n}},template:`
          <KButton v-bind='args'>
              <template #iconLeft>
                <IconAdd />
              </template>
              <template #iconRight>
                <IconArrowBottom />
              </template>
              {{args.label}}
          </KButton>
      `})},g={name:"icon",args:{label:r,type:"icon",size:d,loading:a,disabled:s,iconLeft:e},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n}},template:`
        <div style="display: flex; gap: 0.75rem">
            <KButton v-bind='args'>
            </KButton>
            <KButton type="icon">
            <IconAdd />
            </KButton>
        </div>
      `})};var y,b,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(b=c.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var A,I,K;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(I=m.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var f,w,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var v,h,L;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(h=p.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var R,S,x;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(S=u.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var _,T,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(T=g.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const j=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{j as __namedExportsOrder,c as def,O as default,g as icon,i as iconLeft,p as iconRight,m as namedSlot,u as sm};
