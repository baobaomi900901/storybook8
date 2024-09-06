<!--
* @description  参数1
* @fileName  CustomColor
* @author userName
* @date 2024-07-17 17:30:03
* @version V3.0.0
!-->
<template>
  <div id="customColorHooksDev" class="customColorHooksDev flex flex-col gap-2">
    CustomColor old2
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { calcContrast } from 'apcach';
import { parse, clampChroma, converter } from 'culori';

const hslPanel = document.getElementById('hslPanel');
const sliderHue = ref();
const heuValue = ref();
const cardOklch = ref();
const cardHsl = document.getElementById('cardHsl');
const boostChromaCheckbox = ref();
const clearButton = ref();
const lightness = [
  97.78, 93.56, 88.11, 82.67, 74.22, 64.78, 57.33, 46.89, 39.44, 32, 23.78,
];

const chroma = [
  0.0108, 0.0321, 0.0609, 0.0908, 0.1398, 0.1472, 0.1299, 0.1067, 0.0898,
  0.0726, 0.054,
];

const oklchComps = {
  0: { l: .9778, c: 0.0108, name: '--color-oklch-50' },
  1: { l: .9356, c: 0.0321, name: '--color-oklch-100' },
  2: { l: .8811, c: 0.0609, name: '--color-oklch-200' },
  3: { l: .8267, c: 0.0908, name: '--color-oklch-300' },
  4: { l: .7422, c: 0.1398, name: '--color-oklch-400' },
  5: { l: .6478, c: 0.1472, name: '--color-oklch-500' },
  6: { l: .5733, c: 0.1299, name: '--color-oklch-600' },
  7: { l: .4689, c: 0.1067, name: '--color-oklch-700' },
  8: { l: .3944, c: 0.0898, name: '--color-oklch-800' },
  9: { l: .32, c: 0.0726, name: '--color-oklch-900' },
  10: { l: .2378, c: 0.054, name: '--color-oklch-950' },
};


// console.log(sliderHue.value);
</script>

<style lang="less">
@font-face {
  font-family: MG;
  font-display: swap;
  src: url('https://cdn.evilmartians.com/front/fonts/MartianGrotesk-1.0.woff2') format('woff2');
  font-weight: 500 900;
  font-stretch: 100% 125%;
}

@font-face {
  font-family: MM;
  font-display: swap;
  src: url('https://cdn.evilmartians.com/front/fonts/MartianMono-1.0.0.woff2') format('woff2');
  font-weight: 400;
}

html,
body {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.panel {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.code-container {
  width: 320px;
  height: 640px;
}

.color-snippet {
  display: flex;
  gap: 8px;
  font-family: MM;
  font-size: 12.5px;
  line-height: 16px;
  bacground: #f00;
}

.color-sample {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
}

.color1 {
  margin-top: 56px;
}

.color2 {
  margin-top: 116px;
}

.color3 {
  margin-top: 116px;
}

.color4 {
  margin-top: 70px;
}

.color5 {
  margin-top: 72px;
}

.color6 {
  margin-top: 10px;
}

#oklch1Snippet > .color-sample {
  background-color: var(--color-oklch-button-secondary-bg);
}

#oklch2Snippet > .color-sample {
  background-color: var(--color-oklch-panel);
}

#oklch3Snippet > .color-sample {
  background-color: var(--color-oklch-title);
}

#oklch4Snippet > .color-sample {
  background-color: var(--color-oklch-text);
}

#oklch5Snippet > .color-sample {
  background-color: var(--color-oklch-button-main-bg);
}

#oklch6Snippet > .color-sample {
  background-color: var(--color-oklch-disclaimer);
}

#hsl1Snippet > .color-sample {
  background-color: var(--color-hsl-button-secondary-bg);
}

#hsl2Snippet > .color-sample {
  background-color: var(--color-hsl-panel);
}

#hsl3Snippet > .color-sample {
  background-color: var(--color-hsl-title);
}

#hsl4Snippet > .color-sample {
  background-color: var(--color-hsl-text);
}

#hsl5Snippet > .color-sample {
  background-color: var(--color-hsl-button-main-bg);
}

#hsl6Snippet > .color-sample {
  background-color: var(--color-hsl-disclaimer);
}

.color-code-stack {
  display: flex;
  flex-direction: column;
}

.color-code {
  color: var(--color-gray);
}

.line {
  flex-grow: 1;
  box-sizing: border-box;
  height: 8px;
  border-bottom: solid 1px oklch(60% 0 0 / 25%);
}

.fixed {
  flex-grow: 0;
  width: 120px !important;
}

.pink {
  color: oklch(65% 0.334 321.35);
}

.card-container {
  width: 320px;
  height: 640px;
  font-family: MG;
  font-size: 10px;
  font-weight: 700;
  font-stretch: 125%;
  line-height: 20px;
}

.card {
  width: 100%;
  height: 560px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: var(--color-oklch-panel);
  overflow: hidden;
}

.drag-over {
  box-shadow: 0px 0px 0px 4px var(--color-oklch-button-secondary-bg);
}

#hslPanel > .card-container > .card {
  background-color: var(--color-hsl-panel);
}

.image-container {
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
}

.fav-button {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 16px;
  background: var(--color-oklch-button-secondary-bg);
  z-index: 1;
}

#hslPanel > .card-container > .card > .image-container > .fav-button {
  background: var(--color-hsl-button-secondary-bg);
}

.img-hider {
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, var(--color-oklch-panel));
  z-index: 1;
}

#hslPanel > .card-container > .card > .image-container > .img-hider {
  background: linear-gradient(to bottom, transparent 0%, var(--color-hsl-panel));
}

.content-container {
  padding: 0 24px 16px 24px;
}

.title {
  position: relative;
  margin-top: -86px;
  font-size: 25px;
  font-weight: 900;
  font-stretch: 125%;
  line-height: 30px;
  color: var(--color-oklch-title);
  padding-bottom: 16px;
  z-index: 2;
}

#hslPanel > .card-container > .card > .content-container > .title {
  color: var(--color-hsl-title);
}

.text {
  font-size: 15px;
  font-weight: 500;
  font-stretch: 100%;
  line-height: 20px;
  color: var(--color-oklch-text);
  padding-bottom: 16px;
}

#hslPanel > .card-container > .card > .content-container > .text {
  color: var(--color-hsl-text);
}

.button {
  width: 100%;
  font-family: MG;
  font-size: 15px;
  font-weight: 500;
  font-stretch: 100%;
  line-height: 20px;
  color: var(--color-oklch-text);
  border: none;
  border-radius: 8px;
  padding: 8px 8px;
  color: var(--color-oklch-button-main-fg);
  background-color: var(--color-oklch-button-main-bg);
}

#hslPanel > .card-container > .card > .content-container > .button {
  color: var(--color-hsl-button-main-fg);
  background-color: var(--color-hsl-button-main-bg);
}

.friends-counter {
  display: flex;
  gap: 8px;
  font-family: MG;
  font-size: 10px;
  font-weight: 500;
  font-stretch: 100%;
  line-height: 16px;
  color: var(--color-oklch-disclaimer);
  padding-top: 16px;
}

#hslPanel > .card-container > .card > .content-container > .friends-counter {
  color: var(--color-hsl-disclaimer);
}

.toolbar {
  display: flex;
  gap: 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 54px;
  border-radius: 20px;
  align-items: center;
  padding: 8px 16px 8px 16px;
  background: oklch(93% 0 0);
  font-family: MG;
  font-size: 12.5px;
  font-weight: 500;
  font-stretch: 100%;
  line-height: 20px;
}

.toolbar > input {
  width: 200px;
}

.hue-label {
  width: 30px;
}

.hue-value {
  width: 30px;
}

.checkbox-panel {
  display: flex;
  gap: 8px;
  position: absolute;
  left: 54px;
  bottom: 54px;
  border-radius: 20px;
  align-items: center;
  background: oklch(93% 0 0);
  padding: 8px 16px 8px 10px;
  font-family: MG;
  font-size: 12.5px;
  font-weight: 500;
  font-stretch: 100%;
  line-height: 20px;
}

.clear-button {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 64px;
  height: 64px;
  // border: none;
  border-radius: 18px;
  background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}

:root {
  /* OKLCH ------------------------------ /*
  
  /* Functional */
  --color-oklch-panel: var(--color-oklch-50);
  --color-oklch-title: var(--color-oklch-800);
  --color-oklch-text: var(--color-oklch-700);
  --color-oklch-button-main-fg: var(--color-oklch-50);
  --color-oklch-button-main-bg: var(--color-oklch-600);
  --color-oklch-button-secondary-bg: var(--color-oklch-100);
  --color-oklch-disclaimer: var(--color-oklch-dark-gray);

  /* Spectral */
  --color-oklch-50: oklch(0.98 0.01 29);
  --color-oklch-100: oklch(0.9 0.05 29);
  --color-oklch-600: oklch(0.63 0.14 29);
  --color-oklch-700: oklch(0.6 0.14 29);
  --color-oklch-800: oklch(0.54 0.09 29);
  --color-oklch-dark-gray: oklch(0.62 0 0);

  /* HSL ------------------------------ /*
  
  /* Functional */
  --color-hsl-panel: var(--color-hsl-50);
  --color-hsl-title: var(--color-hsl-800);
  --color-hsl-text: var(--color-hsl-700);
  --color-hsl-button-main-fg: var(--color-hsl-50);
  --color-hsl-button-main-bg: var(--color-hsl-600);
  --color-hsl-button-secondary-bg: var(--color-hsl-100);
  --color-hsl-disclaimer: var(--color-hsl-dark-gray);

  /* Spectral */
  --color-hsl-50: hsl(0 30% 98%);
  --color-hsl-100: hsl(0 30% 89%);
  --color-hsl-600: hsl(0 30% 57%);
  --color-hsl-700: hsl(0 30% 55%);
  --color-hsl-800: hsl(0 30% 48%);
  --color-hsl-dark-gray: hsl(0 0% 52%);

  --color-gray: oklch(60% 0 0);
}

// ----------------------------------------------------------------------------
.box {
  width: 48px;
  height: 48px;
  color: var(--panel);
}
.oklch {
  --panel: var(--color-oklch-panel); // 50
  --title: var(--color-oklch-title); // 800
  --text: var(--color-oklch-text); // 700
  --secondary-bg: var(--color-oklch-button-secondary-bg); // 100
  --button-main-bg: var(--color-oklch-button-main-bg); // 600
  --disclaimer: var(--color-oklch-disclaimer);
}
.hsl {
  --panel: var(--color-hsl-panel); // 50
  --title: var(--color-hsl-title); // 800
  --text: var(--color-hsl-text); // 700
  --secondary-bg: var(--color-hsl-button-secondary-bg); // 100
  --button-main-bg: var(--color-hsl-button-main-bg); // 600
  --disclaimer: var(--color-hsl-disclaimer);
}
.color-panel {
  background: var(--panel);
}
.color-title {
  background-color: var(--title);
}
.color-text {
  background-color: var(--text);
}
.color-secondary-bg {
  background-color: var(--secondary-bg);
}
.color-button-main-bg {
  background-color: var(--button-main-bg);
}
.color-disclaimer {
  background-color: var(--disclaimer);
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
