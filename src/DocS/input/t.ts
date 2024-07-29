import { Component } from 'Vue';

export function bbm(comp: Component, label: string, compDoc: Component) {
  // TODO: 添加类型校验

  const vn = new String('label');
  console.log(vn instanceof String);
  console.log(Object.prototype.toString.call(vn));
  // if (typeof compDoc !== 'object' || typeof comp !== 'object') {
  //   // return null;
  // }
  const doc: Story = {
    name: label,
    render: (args: any) => ({
      components: { comp },
      setup() {
        return { args };
      },
      template: `<comp v-bind="args" />`,
    }),
    parameters: {
      docs: {
        source: {
          code: compDoc,
        },
      },
    },
  };

  return doc;
}
