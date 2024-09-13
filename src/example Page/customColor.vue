<!--
* @description  参数1
* @fileName  CustomColor
* @author userName
* @date 2024-07-17 17:30:03
* @version V3.0.0
!-->
<template>
  <div id="CustomColor" class="CustomColor flex flex-col gap-2">
    CustomColor
    <div class="oklch flex">
      <div class="box" style="background-color: #fff7e2">50</div>
      <div class="box" style="background-color: #fbe9c6">100</div>
      <div class="box" style="background-color: #e7d6b3">200</div>
      <div class="box" style="background-color: #dfc07f">300</div>
      <div class="box" style="background-color: #d3a329">400</div>
      <div class="box" style="background-color: #c38100">500</div>
      <div class="box" style="background-color: #b08000">600</div>
      <div class="box" style="background-color: #a67700">700</div>
      <div class="box" style="background-color: #785c18">800</div>
      <div class="box" style="background-color: #544627">900</div>
      <div class="box" style="background-color: #3f3112">950</div>
    </div>

    <div v-for="(group, index) in colorGroups" :key="index" class="oklch flex">
      <div
        v-for="(color, idx) in group.colors"
        :key="idx"
        class="box"
        :style="{ backgroundColor: color.color }"
      >
        {{ color.name.split('-')[1] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { apcach, crToBgBlack, crToBg, maxChroma } from 'apcach';
import {
  parse,
  clampChroma,
  converter,
  formatHex,
  formatHex8,
  inGamut,
  samples,
  interpolate,
} from 'culori';
const boostChromaCheckbox = ref();
const clearButton = ref();

const colorGroups = ref([]);

const customHue = [
  { h: 25, name: 'red' },
  { h: 55, name: 'orange' },
  { h: 85, name: 'yellow' },
  { h: 145, name: 'green' },
  { h: 245, name: 'blue' },
  { h: 305, name: 'purple' },
];

const customRule = [
  { l: 0.9778, c: 0.05, name: '50' },
  { l: 0.9356, c: 0.05, name: '100' },
  { l: 0.8811, c: 0.09, name: '200' },
  { l: 0.8267, c: 0.14, name: '300' },
  { l: 0.7422, c: 0.17, name: '400' },
  { l: 0.6478, c: 0.19, name: '500' },
  { l: 0.5733, c: 0.17, name: '600' },
  { l: 0.4689, c: 0.15, name: '700' },
  { l: 0.3944, c: 0.13, name: '800' },
  { l: 0.32, c: 0.11, name: '900' },
  { l: 0.2378, c: 0.1, name: '950' },
];
onMounted(() => {
  // colorLevel(customHue, customRule);
  let arr = [
    'oklch(0.98 0.03 0)',
    'oklch(0.94 0.04 0)',
    'oklch(0.88 0.05 0)',
    'oklch(0.82 0.09 0)',
    'oklch(0.74 0.14 0)',
    'oklch(0.65 0.19 0)',
    'oklch(0.58 0.17 0)',
    'oklch(0.51 0.15 0)',
    'oklch(0.45 0.13 0)',
    'oklch(0.38 0.12 0)',
    'oklch(0.32 0.11 0)',
  ];

  const bgColor = [
    'oklch(66.3% 0.2 0)',
    'oklch(66.3% 0.2 15)',
    'oklch(66.3% 0.2 30)',
    'oklch(66.3% 0.2 45)',
    'oklch(66.3% 0.2 135)',
    'oklch(66.3% 0.2 150)',
    'oklch(66.3% 0.2 165)',
    'oklch(66.3% 0.2 180)',
    'oklch(66.3% 0.2 195)',
    'oklch(66.3% 0.2 210)',
    'oklch(66.3% 0.2 225)',
    'oklch(66.3% 0.2 240)',
    'oklch(66.3% 0.2 255)',
    'oklch(66.3% 0.2 270)',
    'oklch(66.3% 0.2 285)',
    'oklch(66.3% 0.2 300)',
    'oklch(66.3% 0.2 345)',
    'oklch(66.3% 0.2 360)',
  ];

  // 将 bgColor 中的 oklch 颜色转换成 16 进制颜色
  // let HEXColor = [];
  // bgColor.forEach((item) => {
  //   let { mode, l, c, h } = parse(item);
  //   let newHexColor = formatHex({ mode, l, c, h });
  //   // console.log(newHexColor);
  //   HEXColor.push(newHexColor);
  // });
  // console.log(HEXColor);

  // customColor('#38363c');
  // 示例用法
  console.log(customColor('rgb(255, 0, 0)')); // 输出: rgb
  // console.log(customColor('rgba(255, 0, 0, 0.5)')); // 输出: rgba
  // console.log(customColor('hsl(120, 100%, 50%)')); // 输出: hsl
  // console.log(customColor('#ff0000')); // 输出: hex
  // console.log(customColor('oklch(50%, 0.3, 100)')); // 输出: oklch
  // console.log(customColor('red')); // 输出: unknown
  // parse('red');
  // console.log(parse('red'));
  // customColor('red');
  // customColor('rgb(255, 0, 0)');
  // customColor('rgba(255, 0, 0, 0.5)');
  // customColor('#ff5500');
  // customColor('oklch(50%, 0.3, 100)');
  // customColor('hsl(120, 100%, 50%)');

  // 将来 oklch(50%, 0.3, 100) 转换成rgb颜色
  // let { mode, l, c, h } = customColor('oklch(50%, 0.3, 100)');
  // let newColor = formatHex({ mode, l, c, h });
  // console.log(newColor);

  // console.log(convertOklchToRgb('oklch(50%, 0.3, 100)'));
});

const customColor = (color) => {
  let oklch = converter('oklch');
  console.log(color, oklch(color));

  // return oklch(color);
  // switch (parse(color).mode) {
  //   case 'rgb':
  //     let { mode, r, g, b } = parse(color);
  //     console.log(mode);
  //     return 'rgb';
  //   case 'hsl':
  //     return 'hsl';
  //   case 'hex':
  //     return 'hex';
  //   case 'oklch':
  //     return 'oklch';
  //   default:
  //     return 'unknown';
  // }

  // // 创建一个从 oklch 到 rgb 的转换器
  // const oklchToRgb = culori.converter('oklch', 'rgb');

  // // 使用转换器将 oklch 颜色转换为 rgb 颜色
  // const rgbColor = oklchToRgb(oklchColor);

  // 返回 rgb 颜色
  // return rgbColor;
};

// const colorLevel = (hue, rule) => {
//   let groups = [];
//   hue.forEach((item) => {
//     let hexColors = [];
//     rule.forEach((item2) => {
//       let { mode, l, c, h } = parse(`oklch(${item2.l} ${item2.c} ${item.h})`);
//       let colorName = `${item.name}-${item2.name}`;
//       let newHexColor = formatHex({ mode, l, c, h });
//       const inRgb = inGamut('rgb');
//       let isInRgb = inRgb(`${mode}(${l} ${c} ${h})`);
//       // console.log(isInRgb, `${mode}(${l} ${c} ${h})`);
//       // if (isInRgb) {
//       hexColors.push({ name: colorName, color: newHexColor, isInRgb });
//       // }
//     });
//     groups.push({ name: item.name, colors: hexColors });
//   });
//   colorGroups.value = groups;
//   // console.log(colorGroups.value);
// };

// let apc = apcach(70, 0.2, 145);
// console.log('apc ==>', apc);
// let { lightness, chroma, hue } = apcach(crToBgBlack(60), 0.2, 145);
// console.log('crToBgBlack ==>', `oklch(${lightness} ${chroma} ${hue})`);
// let { lightness, chroma, hue } = apcach(crToBg('oklch(0.94 0.04 0)', 65), 0.15, 35);
// console.log('crToBg ==>', `oklch(${lightness} ${chroma} ${hue})`);

// console.log(hue, rule);
// console.log(parse('greenyellow')); // 将 css 颜色转换成 rgb 对象
// console.log(parse('oklch(0.98 0.03 0)')); // 将 css 颜色转换成 rgb 对象
// 将 parse('oklch(0.98 0.03 0)'), 转换成 16 进制的颜色
let rgb = converter('rgb');
let oklch = converter('oklch');
// console.log('@', rgb('oklch(0.65 0.19 0)'));
// console.log(oklch('#38363c'));
// console.log(formatHex('red'));
// console.log(formatHex('rgb(255, 85, 0)'));

// 移除一个数组的第一个和最后一个值

let arr = samples(13);
let newArr = arr.slice(1, arr.length - 1);
// console.log(newArr);

const inRgb = inGamut('rgb'); // inGamut
// console.log(inRgb('oklch(0.65 40 145)')); // 判断是否在 rgb 色域
// console.log(clampChroma({ mode: 'oklch', l: 1, c: 0.4, h: 85 }, 'oklch')); // 限制色域
// let grays = interpolate(['#fff', '#000']);
// console.log(grays);
// console.log(samples(14), samples(14).map(grays).map(formatHex));
// console.log(apcach(60, 0.2, 35));
// console.log(apcach(crToBgBlack(60), 0.2, 145));
</script>

<style lang="less">
// ----------------------------------------------------------------------------
:root {
  --color-50: oklch(0.98 0.03 0); // 4 1 #
  --color-100: oklch(0.94 0.04 0); // 6 1
  --color-200: oklch(0.88 0.05 0); // 6 4
  --color-300: oklch(0.82 0.09 0); // 8 5
  --color-400: oklch(0.74 0.14 0); // 9 5
  --color-500: oklch(0.65 0.19 0); // 0 0
  --color-600: oklch(0.58 0.17 0); // 7 2
  --color-700: oklch(0.51 0.15 0); // 7 2
  --color-800: oklch(0.45 0.13 0); // 6 2
  --color-900: oklch(0.38 0.12 0); // 6 1
  --color-950: oklch(0.32 0.11 0); // 6 1
}
.box {
  width: 48px;
  height: 48px;
  color: #fff;
}
.color-50 {
  color: oklch(0.5943089065819371 0.15 35);
  background-color: var(--color-50);
}
.color-100 {
  color: oklch(0.5292089843749999 0.15 35);
  background-color: var(--color-100);
}
.color-200 {
  color: oklch(0.42603515625000016 0.15 35);
  background-color: var(--color-200);
}
.color-300 {
  color: oklch(0.28507812499999996 0.11093750000000001 35);
  background-color: var(--color-300);
}
.color-400 {
  color: oklch(0 0 35);
  background-color: var(--color-400);
}
.color-500 {
  color: oklch(0.9873046875 0.007812500000000002 35);
  background-color: var(--color-500);
}
.color-600 {
  color: oklch(0.9467578124999999 0.03437500000000001 35);
  background-color: var(--color-600);
}
.color-700 {
  color: oklch(0.9093554687500003 0.06093749999999999 35);
  background-color: var(--color-700);
}
.color-800 {
  color: oklch(0.88076171875 0.08281249999999998 35);
  background-color: var(--color-800);
}
.color-900 {
  color: oklch(0.8510546875000002 0.10625000000000001 35);
  background-color: var(--color-900);
}
.color-950 {
  color: oklch(0.82966796875 0.1234375 35);
  background-color: var(--color-950);
}

.icon-refresh {
  color: red;
}
.icon-refresh:hover {
  svg {
    fill: greenyellow;
    width: calc();
  }
}
</style>
