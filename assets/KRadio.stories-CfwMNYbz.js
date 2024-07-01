import{_ as l,a as p}from"./radio_group-D_jRz0nj.js";import{r as i}from"./vue.esm-bundler-CjPtUVfS.js";import"./index-JNNWE467.js";const D={title:"Data Entry(DE)/KRadio",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},e={name:"默认",args:{color:"",size:""},render:a=>({components:{KRadio:l},setup(){const o=i("1");return{args:a,radioValue:o}},template:`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      `})},d={name:"不同尺寸",args:{},render:a=>({components:{KRadio:l},setup(){const o=i("1");return{args:a,radioValue:o}},template:`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0">直角</KRadio>
        <KRadio v-model="radioValue" value="1">钝角</KRadio>
        <KRadio v-model="radioValue" value="2">锐角</KRadio>
        <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
      </div>
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" size='sm'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" size='sm'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" size='sm'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" size='sm' disabled>90°</KRadio>
      </div>
      `})},r={name:"自定义颜色",args:{},render:a=>({components:{KRadio:l,KRadioGroup:p},setup(){const o=i("1"),f=i(0);return{args:a,radioValue:o,radio:f}},template:`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" color='#ff5500'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" color='#ff5500'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" color='#ff5500'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" color='#ff5500' disabled>90°</KRadio>
      </div>
      <br />
      <k-radio-group v-model="radio" :direction="args.direction">
        <KRadio :value="0" color="#ff5500" button>直角</KRadio>
        <KRadio :value="1" color="#ff5500" button>钝角</KRadio>
        <KRadio :value="2" color="#ff5500" button>锐角</KRadio>
        <KRadio :value="0" disabled color="#ff5500" button>直角</KRadio>
      </k-radio-group>

      
      `})};var n,u,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '默认',
  args: {
    color: '',
    size: ''
  },
  render: (args: any) => {
    return {
      components: {
        KRadio
      },
      setup() {
        const radioValue = ref('1');
        return {
          args,
          radioValue
        };
      },
      template: \`
      <div class="flex gap-4">
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size>直角</KRadio>
        <KRadio v-model="radioValue" value="1" :color=args.color :size=args.size>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" :color=args.color :size=args.size>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" :color=args.color :size=args.size disabled>90°</KRadio>
      </div>
      \`
    };
  }
}`,...(s=(u=e.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var t,c,v;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '不同尺寸',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadio
      },
      setup() {
        const radioValue = ref('1');
        return {
          args,
          radioValue
        };
      },
      template: \`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0">直角</KRadio>
        <KRadio v-model="radioValue" value="1">钝角</KRadio>
        <KRadio v-model="radioValue" value="2">锐角</KRadio>
        <KRadio v-model="radioValue" value="0" disabled>90°</KRadio>
      </div>
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" size='sm'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" size='sm'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" size='sm'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" size='sm' disabled>90°</KRadio>
      </div>
      \`
    };
  }
}`,...(v=(c=d.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var K,R,m;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '自定义颜色',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KRadio,
        KRadioGroup
      },
      setup() {
        const radioValue = ref('1');
        const radio = ref(0);
        return {
          args,
          radioValue,
          radio
        };
      },
      template: \`
      <div class="flex gap-3">
        <KRadio v-model="radioValue" value="0" color='#ff5500'>直角</KRadio>
        <KRadio v-model="radioValue" value="1" color='#ff5500'>钝角</KRadio>
        <KRadio v-model="radioValue" value="2" color='#ff5500'>锐角</KRadio>
        <KRadio v-model="radioValue" value="0" color='#ff5500' disabled>90°</KRadio>
      </div>
      <br />
      <k-radio-group v-model="radio" :direction="args.direction">
        <KRadio :value="0" color="#ff5500" button>直角</KRadio>
        <KRadio :value="1" color="#ff5500" button>钝角</KRadio>
        <KRadio :value="2" color="#ff5500" button>锐角</KRadio>
        <KRadio :value="0" disabled color="#ff5500" button>直角</KRadio>
      </k-radio-group>

      
      \`
    };
  }
}`,...(m=(R=r.parameters)==null?void 0:R.docs)==null?void 0:m.source}}};const b=["def","size","customColor"];export{b as __namedExportsOrder,r as customColor,e as def,D as default,d as size};
