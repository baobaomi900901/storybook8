import { create } from "@storybook/theming/create";

export default create({
  base: "dark", // or 'light',基于dark主题
  fontBase: '"Open Sans", sans-serif', // 字体
  fontCode: "monospace", // 代码字体
  // 左侧导航栏配置:
  brandTitle: "My custom Storybook", // 图片加载不出来时显示的文字
  brandUrl: "https://example.com", // logo链接
  brandImage: "https://cdn.donxj.com/img/klogo-text.svg", // logo 图片来源
  brandTarget: "_self", //
  // 主题色配置
  colorPrimary: "#2882FF", // 主要色
  colorSecondary: "#585C6D", // 导航栏图标颜色与选中颜色
//   // UI
//   appBg: '#38363c', // 左侧导航栏背景色
//   appContentBg: '#ffffff', // 徽章颜色
//   appPreviewBg: '#ffffff', // 预览区域背景色
//   appBorderRadius: 4, // 边框圆角
//   // Text colors
//   textColor: '#ffffff', // 默认文字颜色
//   textInverseColor: '#eeeeee', // 反色文字颜色
//   // Toolbar default and active colors
//   barTextColor: '#585C6D',
//   barSelectedColor: '#585C6D',
//   barHoverColor: '#2882FF',
//   barBg: '#ffffff',
//   appBorderColor: '#eeeeee', // 边框颜色

//   // Form colors
//   inputBg: '#ffffff',
//   inputBorder: '#585C6D',
//   inputTextColor: '#10162F',
//   inputBorderRadius: 4,
});
