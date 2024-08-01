import fs from 'fs';
import { parse, formatHex } from 'culori';

// 定义颜色配置
const customHue = [
  { h: 25, name: 'red' },
  { h: 55, name: 'orange' },
  { h: 85, name: 'yellow' },
  { h: 145, name: 'green' },
  { h: 245, name: 'blue' },
  { h: 305, name: 'purple' },
];

const customRule = [
  { l: 0.98, c: 0.03, name: '50' },
  { l: 0.94, c: 0.05, name: '100' },
  { l: 0.88, c: 0.05, name: '200' },
  { l: 0.82, c: 0.09, name: '300' },
  { l: 0.74, c: 0.14, name: '400' },
  { l: 0.65, c: 0.19, name: '500' },
  { l: 0.63, c: 0.14, name: '600' },
  { l: 0.6, c: 0.14, name: '700' },
  { l: 0.49, c: 0.09, name: '800' },
  { l: 0.4, c: 0.05, name: '900' },
  { l: 0.32, c: 0.05, name: '950' },
];

// 生成颜色数据
const generateColors = (hue, rule) => {
  let colorGroups = [];
  hue.forEach((item) => {
    let hexColors = [];
    rule.forEach((item2) => {
      let { mode, l, c, h } = parse(`oklch(${item2.l} ${item2.c} ${item.h})`);
      let colorName = `${item.name}-${item2.name}`;
      let newHexColor = formatHex({ mode, l, c, h });
      hexColors.push({ name: colorName, color: newHexColor });
    });
    colorGroups.push({ name: item.name, colors: hexColors });
  });
  return colorGroups;
};

// 获取命令行参数
const [, , colorName, fileType] = process.argv;

if (!colorName || !fileType) {
  console.error('Please provide both color name and file type (.json or .css)');
  process.exit(1);
}

// 生成文件名
const fileName = `${colorName}${fileType}`;

// 获取生成的颜色数据
const colorData = generateColors(customHue, customRule);

let fileContent;

if (fileType === '.json') {
  // 将颜色数据转换为 JSON 格式
  fileContent = JSON.stringify(colorData, null, 2);
} else if (fileType === '.css') {
  // 将颜色数据转换为 CSS 变量格式
  let cssVariables = '';
  colorData.forEach((group) => {
    group.colors.forEach((color) => {
      cssVariables += `  --${color.name}: ${color.color};\n`;
    });
  });
  fileContent = `:root {\n${cssVariables}}`;
} else {
  console.error('Unsupported file type. Please use .json or .css');
  process.exit(1);
}

// 写入文件
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${fileName} has been created successfully!`);
  }
});
