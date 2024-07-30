import { Component } from 'Vue';

// Automatic template example: 自动模板示例
export function ATExample(comp: Component, label: string, compDoc: any) {
  // TODO: 添加类型校验
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
