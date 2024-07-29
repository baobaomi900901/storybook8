import"./button-CZv7o8qF.js";import{_ as o,a as n}from"./tree_select-iQ7fP_BI.js";import"./radio_group-yAcRyf_v.js";import{r as c}from"./vue.esm-bundler-QVomx6Jm.js";/* empty css               */import"./index-nFJc4fXK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K={title:"Data Entry(DE)/KSelect",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","base"]},color:{control:"color"}},args:{}},e={name:"默认",args:{},render:s=>({components:{KSelect:o,KOption:n},setup(){const r=c("1");return{args:s,options:[{value:"0",label:"全部"},{value:"1",label:"菜单"},{value:"2",label:"组件"},{value:"3",label:"流程"},{value:"4",label:"执行历史"}],selectValue:r}},template:`
      <div class="flex gap-4">
        <KSelect v-model="selectValue">
          <KOption
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </KSelect>
      </div>
      `})};var l,t,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '默认',
  args: {},
  render: (args: any) => {
    return {
      components: {
        KSelect,
        KOption
      },
      setup() {
        const selectValue = ref('1');
        const options = [{
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: '菜单'
        }, {
          value: '2',
          label: '组件'
        }, {
          value: '3',
          label: '流程'
        }, {
          value: '4',
          label: '执行历史'
        }];
        return {
          args,
          options,
          selectValue
        };
      },
      template: \`
      <div class="flex gap-4">
        <KSelect v-model="selectValue">
          <KOption
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </KSelect>
      </div>
      \`
    };
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const g=["def"];export{g as __namedExportsOrder,e as def,K as default};
