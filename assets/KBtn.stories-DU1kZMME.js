import{f as M,c as o,o as e}from"./tree_transfer-jB80NPzD.js";import{c as y}from"./vue.esm-bundler-CDHMm6MS.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=M("ArrowBottom",!1,function(n){return y("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,"aria-hidden":"true",viewBox:"0 0 24 24",fill:n.color},[y("path",{"fill-rule":"evenodd",d:"M12 16.523 5.024 10.16a.6.6 0 0 0-.409-.16.624.624 0 0 0-.615.632c0 .18.075.352.207.472l7.384 6.736a.604.604 0 0 0 .818 0l7.384-6.736a.64.64 0 0 0 .207-.472.624.624 0 0 0-.615-.632.6.6 0 0 0-.41.16z"},null)])}),V={title:"Base(B)/KButton",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["normal","main","secondary","text","icon"]},label:{control:"text",description:"按钮文字"},size:{control:"select",options:["base","sm"]},disabled:"boolean",loading:"boolean",color:{control:"color",description:"按钮颜色"}}},l="secondary",d="sm",r="按钮",a=!1,s=!1,c={name:"icon传参",args:{label:r,type:l,size:d,loading:a,disabled:s,value:"",color:""},render:n=>({components:{KButton:o,IconAdd:e,IconArrowBottom:t},setup(){return{args:n,IconAdd:e,IconArrowBottom:t}},template:`
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
      `})};var B,b,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var I,K,f;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(K=m.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};var w,v,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,L,R;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var x,S,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(S=u.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var C,E,F;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const j=["def","namedSlot","iconLeft","iconRight","sm","icon"];export{j as __namedExportsOrder,c as def,V as default,g as icon,i as iconLeft,p as iconRight,m as namedSlot,u as sm};
