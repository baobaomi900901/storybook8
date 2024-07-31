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
    <div class="box-container-green flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-red flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-orange flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-yellow flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-blue flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-purple flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-custom2 flex">
      <div class="box box0">button</div>
      <div class="box box05">button</div>
      <div class="box box1">button</div>
      <div class="box box2">button</div>
      <div class="box box3">button</div>
      <div class="box box4">button</div>
      <div class="box box5">button</div>
      <div class="box box6">button</div>
      <div class="box box7">button</div>
      <div class="box box8">button</div>
      <div class="box box9">button</div>
      <div class="box box95">button</div>
    </div>
    <div class="box-container-max flex">
      <div class="box box50">button</div>
      <div class="box box100">button</div>
      <div class="box box200">button</div>
      <div class="box box300">button</div>
      <div class="box box400">button</div>
      <div class="box box500">button</div>
      <div class="box box600">button</div>
      <div class="box box700">button</div>
      <div class="box box800">button</div>
      <div class="box box900">button</div>
      <div class="box box950">button</div>
      <div class="box box1100">button</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { generate, presetPalettes } from '@ant-design/colors';
import {
  Hct,
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from '@material/material-color-utilities';

import { cssColorNames } from './const';
import { p3, toGamut } from 'culori';
import chroma from 'chroma-js';

function isValidColor(strColor) {
  if (!strColor) {
    return false;
  }
  const s = new Option().style;
  s.color = strColor;
  return Boolean(s.color);
}

function GetColorLevel(hex, leven = 500) {
  // 1.判断是否合法
  if (!isValidColor(hex)) {
    return '';
  }

  // 2. 判断十六进制颜色还是 css 颜色
  if (hex.startsWith('#')) {
    // 2.1 非标准 16 进制颜色，补全为 7 位
    if (hex.length !== 7) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
  } else {
    // 2.2 css 颜色, 枚举颜色表，转换为 16 进制颜色
    if (cssColorNames[hex]) {
      hex = cssColorNames[hex];
    }
  }

  // 3. 将16进制颜色转换为 RGB 颜色
  function hexToRgb(h) {
    // 移除前导的 "#" 符号
    h = h.replace(/^#/, '');
    // 提取红、绿、蓝
    const r = parseInt(h.substr(0, 2), 16);
    const g = parseInt(h.substr(2, 2), 16);
    const b = parseInt(h.substr(4, 2), 16);

    return (
      '0xff' +
      r.toString(16).padStart(2, '0') +
      g.toString(16).padStart(2, '0') +
      b.toString(16).padStart(2, '0')
    );
  }
  return hexToRgb(hex);
}

const lightArgs = [
  '97.78%',
  '93.56%',
  '88.11%',
  '82.67%',
  '74.22%',
  '64.78%',
  '57.33%',
  '46.89%',
  '39.44%',
  '32%',
  '23.78%',
];
const chormaArgs = [
  '0.05',
  '0.08',
  '0.11',
  '0.14',
  '0.17',
  '0.2',
  '0.17',
  '0.14',
  '0.11',
  '0.08',
  '0.05',
];
const hueArgs = [
  { name: 'red', value: 15 },
  { name: 'orange', value: 40 },
  { name: 'yellow', value: 90 },
  { name: 'green', value: 145 },
  { name: 'blue', value: 250 },
  { name: 'purple', value: 300 },
];

console.log(chroma('#ffec3d').oklch());
console.log('浅 ==>', chroma.oklch(0.9778, 0.1800912578656176, 102.8413666968296).hex());
console.log(
  '中 ==>',
  chroma.oklch(0.9305947406187393, 0.1800912578656176, 102.8413666968296).hex(),
);
console.log('深 ==>', chroma.oklch(0.2378, 0.1800912578656176, 102.8413666968296).hex());

hueArgs.push({ name: 'color', value: chroma('#b19e70').oklch()[2] });

console.log(chroma.bezier(['#fffc53', '#311900']).scale().colors(11));
console.log(chroma.bezier(['#fff', '#ffec3d', '#000']).scale().correctLightness().colors(13));

const colorVal = [];
hueArgs.forEach((item, i) => {
  lightArgs.forEach((light, j) => {
    // 三元表达式, k !== 0 时 *100, k === 0 时 = 50
    const colorLevel = j === 0 ? 50 : j === 10 ? 950 : j * 100;
    const color = `--${item.name}-${colorLevel}: oklch(${light} ${chormaArgs[j]} ${item.value})`;
    colorVal.push(color);
  });
});

console.log(colorVal);
</script>
<style lang="less" scoped>
.box-container-green {
  --color-50: oklch(97.78% 0.05 145);
  --color-100: oklch(93.56% 0.08 145);
  --color-200: oklch(88.11% 0.11 145);
  --color-300: oklch(82.67% 0.14 145);
  --color-400: oklch(74.22% 0.17 145);
  --color-500: oklch(64.78% 0.2 145);
  --color-600: oklch(57.33% 0.17 145);
  --color-700: oklch(46.89% 0.14 145);
  --color-800: oklch(39.44% 0.11 145);
  --color-900: oklch(32% 0.08 145);
  --color-950: oklch(7.2% 0.05 145);
}
.box-container-red {
  --color-50: oklch(97.78% 0.05 15);
  --color-100: oklch(93.56% 0.08 15);
  --color-200: oklch(88.11% 0.11 15);
  --color-300: oklch(82.67% 0.14 15);
  --color-400: oklch(74.22% 0.17 15);
  --color-500: oklch(64.78% 0.2 15);
  --color-600: oklch(57.33% 0.17 15);
  --color-700: oklch(46.89% 0.14 15);
  --color-800: oklch(39.44% 0.11 15);
  --color-900: oklch(32% 0.08 15);
  --color-950: oklch(23.78% 0.05 15);
}
.box-container-orange {
  --color-50: oklch(97.78% 0.05 40);
  --color-100: oklch(93.56% 0.08 40);
  --color-200: oklch(88.11% 0.11 40);
  --color-300: oklch(82.67% 0.14 40);
  --color-400: oklch(74.22% 0.17 40);
  --color-500: oklch(64.78% 0.2 40);
  --color-600: oklch(57.33% 0.17 40);
  --color-700: oklch(46.89% 0.14 40);
  --color-800: oklch(39.44% 0.11 40);
  --color-900: oklch(32% 0.08 40);
  --color-950: oklch(23.78% 0.05 40);
}
.box-container-yellow {
  --color-50: oklch(97.78% 0.05 90);
  --color-100: oklch(93.56% 0.08 90);
  --color-200: oklch(88.11% 0.11 90);
  --color-300: oklch(82.67% 0.14 90);
  --color-400: oklch(74.22% 0.17 90);
  --color-500: oklch(64.78% 0.2 90);
  --color-600: oklch(57.33% 0.17 90);
  --color-700: oklch(46.89% 0.14 90);
  --color-800: oklch(39.44% 0.11 90);
  --color-900: oklch(32% 0.08 90);
  --color-950: oklch(23.78% 0.05 90);
}
.box-container-blue {
  --color-50: oklch(97.78% 0.05 250);
  --color-100: oklch(93.56% 0.08 250);
  --color-200: oklch(88.11% 0.11 250);
  --color-300: oklch(82.67% 0.14 250);
  --color-400: oklch(74.22% 0.17 250);
  --color-500: oklch(64.78% 0.2 250);
  --color-600: oklch(57.33% 0.17 250);
  --color-700: oklch(46.89% 0.14 250);
  --color-800: oklch(39.44% 0.11 250);
  --color-900: oklch(32% 0.08 250);
  --color-950: oklch(23.78% 0.05 250);
}
// purple
.box-container-purple {
  --color-50: oklch(97.78% 0.05 300);
  --color-100: oklch(93.56% 0.08 300);
  --color-200: oklch(88.11% 0.11 300);
  --color-300: oklch(82.67% 0.14 300);
  --color-400: oklch(74.22% 0.17 300);
  --color-500: oklch(64.78% 0.2 300);
  --color-600: oklch(57.33% 0.17 300);
  --color-700: oklch(46.89% 0.14 300);
  --color-800: oklch(39.44% 0.11 300);
  --color-900: oklch(32% 0.08 300);
  --color-950: oklch(23.78% 0.05 300);
}
.box-container-custom {
  --color-50: oklch(97.78% 0.1800912578656176 102.8413666968296);
  --color-100: oklch(93.56% 0.1800912578656176 102.8413666968296);
  --color-200: oklch(88.11% 0.1800912578656176 102.8413666968296);
  --color-300: oklch(82.67% 0.1800912578656176 102.8413666968296);
  --color-400: oklch(74.22% 0.1800912578656176 102.8413666968296);
  --color-500: oklch(70.46645335464158% 0.1800912578656176 102.8413666968296);
  --color-600: oklch(57.33% 0.1800912578656176 102.8413666968296);
  --color-700: oklch(46.89% 0.1800912578656176 102.8413666968296);
  --color-800: oklch(39.44% 0.1800912578656176 102.8413666968296);
  --color-900: oklch(32% 0.1800912578656176 102.8413666968296);
  --color-950: oklch(23.78% 0.1800912578656176 102.8413666968296);
}
.box-container-custom2 {
  --color-50: oklch(100% 0.12 102.8413666968296);
  --color-100: oklch(97% 0.14 102.8413666968296);
  --color-200: oklch(88.11% 0.16 102.8413666968296);
  --color-300: oklch(82.67% 0.14 102.8413666968296);
  --color-400: oklch(74.22% 0.12 102.8413666968296);
  --color-500: oklch(64.78% 0.1 102.8413666968296);
  --color-600: oklch(57.33% 0.08 102.8413666968296);
  --color-700: oklch(46.89% 0.06 102.8413666968296);
  --color-800: oklch(39.44% 0.04 102.8413666968296);
  --color-900: oklch(32% 0.02 102.8413666968296);
  --color-950: oklch(23.78% 0 102.8413666968296);
}
.box-container-max {
  --color-50: oklch(64.78% 0.4 5);
  --color-100: oklch(64.78% 0.4 35);
  --color-200: oklch(64.78% 0.4 65);
  --color-300: oklch(64.78% 0.4 95);
  --color-400: oklch(64.78% 0.4 125);
  --color-500: oklch(64.78% 0.4 155);
  --color-600: oklch(64.78% 0.4 185);
  --color-700: oklch(64.78% 0.4 215);
  --color-800: oklch(64.78% 0.4 245);
  --color-900: oklch(64.78% 0.4 275);
  --color-950: oklch(64.78% 0.4 305);
  --color-1100: oklch(64.78% 0.4 335);
}
.box {
  --size: 68px;
  --font-color: #ddd;
  height: var(--size);
  width: var(--size);
  font-size: 0.75rem;
  color: var(--font-color);
}

.box0,
.box05,
.box1,
.box2,
.box3,
.box4 {
  --font-color: #38363c;
}

.box05 {
  background-color: var(--color-50);
}
.box1 {
  background-color: var(--color-100);
}
.box2 {
  background-color: var(--color-200);
}
.box3 {
  background-color: var(--color-300);
}
.box4 {
  background-color: var(--color-400);
}
.box600,
.box5 {
  background-color: var(--color-500);
  margin: 0 0.0625rem;
}
.box6 {
  background-color: var(--color-600);
}
.box7 {
  background-color: var(--color-700);
}
.box8 {
  background-color: var(--color-800);
}
.box9 {
  background-color: var(--color-900);
}
.box95 {
  background-color: var(--color-950);
}

.box50 {
  background-color: var(--color-50);
}
.box100 {
  background-color: var(--color-100);
}
.box200 {
  background-color: var(--color-200);
}
.box300 {
  background-color: var(--color-300);
}
.box400 {
  background-color: var(--color-400);
}
.box500 {
  background-color: var(--color-500);
}
.box600 {
  background-color: var(--color-600);
}
.box700 {
  background-color: var(--color-700);
}
.box800 {
  background-color: var(--color-800);
}
.box900 {
  background-color: var(--color-900);
}
.box950 {
  background-color: var(--color-950);
}
.box1100 {
  background-color: var(--color-1100);
}
</style>
