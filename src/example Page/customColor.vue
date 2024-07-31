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
      <div class="box color-50">50</div>
      <div class="box color-100">100</div>
      <div class="box color-200">200</div>
      <div class="box color-300">300</div>
      <div class="box color-400">400</div>
      <div class="box color-500">500</div>
      <div class="box color-600">600</div>
      <div class="box color-700">700</div>
      <div class="box color-800">800</div>
      <div class="box color-900">900</div>
      <div class="box color-950">950</div>
      <div class="box color-disclaimer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { calcContrast, apcach, crToBgBlack } from 'apcach';
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

onMounted(() => {
  customColors(customHue, customRule);
});

// fn 自定义颜色
const customColors = (hue, rule) => {
  // console.log(hue);
  let colors = [];
  hue.forEach((item, index) => {
    // console.log(item);
    rule.forEach((item2, index2) => {
      let color = parse(`oklch(${item2.l} ${item2.c} ${item.h})`);
      color.name = `${item.name}-${item2.name}`;
      colors.push(color);
    });
  });
  console.log(colors);
};

// console.log(hue, rule);
// console.log(parse('greenyellow')); // 将 css 颜色转换成 rgb 对象
// console.log(parse('oklch(0.98 0.03 0)')); // 将 css 颜色转换成 rgb 对象
// 将 parse('oklch(0.98 0.03 0)'), 转换成 16 进制的颜色
let rgb = converter('rgb');
let oklch = converter('oklch');
console.log(rgb('oklch(0.65 0.19 0)'));
console.log(oklch('#ff5500'));
// console.log(formatHex('red'));
// console.log(formatHex('rgb(255, 85, 0)'));
console.log(formatHex('oklch(0.65 0.19 0)'));
console.log(formatHex({ mode: 'oklch', l: 0.65, c: 0.19, h: 0, alpha: 1 }));
// console.log(formatHex8('oklch(0.65 0.19 0 / 100%)'));
// console.log(formatHex8({ mode: 'oklch', l: 0.65, c: 0.19, h: 0, alpha: 1 }));

const inRgb = inGamut('rgb');
// console.log(inRgb('oklch(0.65 0.236 25)')); // 判断是否在 rgb 色域
console.log(clampChroma({ mode: 'oklch', l: 0.65, c: 0.4, h: 350 }, 'oklch')); // 限制色域
// let grays = interpolate(['#fff', '#000']);
// console.log(grays);
// console.log(samples(14), samples(14).map(grays).map(formatHex));
// console.log(apcach(60, 0.2, 35));
// console.log(apcach(crToBgBlack(60), 0.2, 145));
</script>

<style lang="less">
// ----------------------------------------------------------------------------
:root {
  --color-50: oklch(0.98 0.03 0);
  --color-100: oklch(0.94 0.05 0);
  --color-200: oklch(0.88 0.05 0);
  --color-300: oklch(0.82 0.09 0);
  --color-400: oklch(0.74 0.14 0);
  --color-500: oklch(0.65 0.19 0);
  --color-600: oklch(0.63 0.14 0);
  --color-700: oklch(0.6 0.14 0);
  --color-800: oklch(0.49 0.09 0);
  --color-900: oklch(0.4 0.05 0);
  --color-950: oklch(0.32 0.05 0);
}
.box {
  width: 48px;
  height: 48px;
  color: #fff;
}
.color-50 {
  background-color: var(--color-50);
}
.color-100 {
  background-color: var(--color-100);
}
.color-200 {
  background-color: var(--color-200);
}
.color-300 {
  background-color: var(--color-300);
}
.color-400 {
  background-color: var(--color-400);
}
.color-500 {
  background-color: var(--color-500);
}
.color-600 {
  background-color: var(--color-600);
}
.color-700 {
  background-color: var(--color-700);
}
.color-800 {
  background-color: var(--color-800);
}
.color-900 {
  background-color: var(--color-900);
}
.color-950 {
  background-color: var(--color-950);
}

.icon-refresh {
  color: red;
}
.icon-refresh:hover {
  svg {
    fill: greenyellow;
  }
}
</style>
