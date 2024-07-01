import{_ as i,a as d}from"./radio_group-DXJ5IvaN.js";import{r as u}from"./vue.esm-bundler-CrDTszJQ.js";import"./index-JNNWE467.js";const G={title:"Data Entry(DE)/KRadioGroup",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm"]},direction:{control:"select",options:["row","column"]},button:{control:"boolean"}},args:{size:"base",direction:"row",button:!1}},r={args:{},render:o=>({components:{KRadioGroup:i,KRadio:d},setup(){const a=u(0);return{args:o,radio:a}},template:`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>`})},e={name:"Group控制radio形态",args:{},render:o=>({components:{KRadioGroup:i,KRadio:d},setup(){const a=u(0);return{args:o,radio:a}},template:`
      <k-radio-group v-model="radio" :direction=args.direction button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      `})},n={name:"Group控制radio大小",args:{},render:o=>({components:{KRadioGroup:i,KRadio:d},setup(){const a=u(0);return{args:o,radio:a}},template:`
      <k-radio-group v-model="radio" :direction=args.direction size="sm">
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      `})};var t,s,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const radio = ref(0);
        return {
          args,
          radio
        };
      },
      template: \`
      <k-radio-group v-model="radio" :direction=args.direction :size=args.size  :button=args.button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>\`
    };
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var K,R,c;e.parameters={...e.parameters,docs:{...(K=e.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Group控制radio形态',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const radio = ref(0);
        return {
          args,
          radio
        };
      },
      template: \`
      <k-radio-group v-model="radio" :direction=args.direction button>
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      \`
    };
  }
}`,...(c=(R=e.parameters)==null?void 0:R.docs)==null?void 0:c.source}}};var l,m,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Group控制radio大小',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadioGroup,
        KRadio
      },
      setup() {
        const radio = ref(0);
        return {
          args,
          radio
        };
      },
      template: \`
      <k-radio-group v-model="radio" :direction=args.direction size="sm">
        <KRadio :value="0" >直角</KRadio>
        <KRadio :value="1" >钝角</KRadio>
        <KRadio :value="2" >锐角</KRadio>
        <KRadio :value="0" disabled >直角</KRadio>
      </k-radio-group>
      \`
    };
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const f=["def","GroupTypeBtn","GroupSize"];export{n as GroupSize,e as GroupTypeBtn,f as __namedExportsOrder,r as def,G as default};
