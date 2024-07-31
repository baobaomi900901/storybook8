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
    <IconCTypeYamlColor grayscale />
    <IconRefresh class="icon-refresh" color="#000" />
    <IconSystemTypeLinuxColor />
    <div class="oklch flex">
      <div ref="oklch50" class="box color-panel">50</div>
      <div ref="oklch100" class="box color-secondary-bg">100</div>
      <div ref="oklch200" class="box color-200">200</div>
      <div ref="oklch300" class="box color-300">300</div>
      <div ref="oklch400" class="box color-400">400</div>
      <div ref="oklch500" class="box color-500">500</div>
      <div ref="oklch600" class="box color-button-main-bg">600</div>
      <div ref="oklch700" class="box color-text">700</div>
      <div ref="oklch800" class="box color-title">800</div>
      <div ref="oklch900" class="box color-900">900</div>
      <div ref="oklch950" class="box color-950">950</div>
      <div ref="oklch1000" class="box color-disclaimer"></div>
    </div>
    <div class="hsl flex">
      <div class="box color-panel">50</div>
      <div class="box color-secondary-bg">100</div>
      <div class="box color-200">200</div>
      <div class="box color-300">300</div>
      <div class="box color-400">400</div>
      <div class="box color-500">500</div>
      <div class="box color-button-main-bg">600</div>
      <div class="box color-text">700</div>
      <div class="box color-title">800</div>
      <div class="box color-900">900</div>
      <div class="box color-950">950</div>
      <div class="box color-disclaimer"></div>
    </div>
    <br />

    <div class="flex">
      <div class="panel" id="oklchPanel">
        <div class="code-container">
          <div class="color-snippet color1" id="oklch1Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch1Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
            </div>
            <div class="line"></div>
          </div>
          <div class="color-snippet color2" id="oklch2Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch2Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
            </div>
            <div class="line"></div>
          </div>
          <div class="color-snippet color3" id="oklch3Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch3Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="oklch3Cr">APCA: 70</div>
            </div>
            <div class="line"></div>
          </div>
          <div class="color-snippet color4" id="oklch4Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch4Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="oklch4Cr">APCA: 70</div>
            </div>
            <div class="line"></div>
          </div>
          <div class="color-snippet color5" id="oklch5Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch5Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="oklch5Cr">APCA: 70</div>
            </div>
            <div class="line"></div>
          </div>
          <div class="color-snippet color6" id="oklch6Snippet">
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="oklch6Code">oklch(62% 0 0)</div>
              <div class="contrast-value" id="oklch6Cr">APCA: 70</div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="card-container">
          OKLCH
          <div class="card" ref="cardOklch" id="cardOklch">
            <div class="image-container">
              <button class="fav-button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2C3 1.44772 3.44772 1 4 1H12C12.5523 1 13 1.44772 13 2V13.2338C13 14.0111 12.152 14.4912 11.4855 14.0913L8.5145 12.3087C8.19781 12.1187 7.80219 12.1187 7.4855 12.3087L4.5145 14.0913C3.84797 14.4912 3 14.0111 3 13.2338V2Z"
                    style="fill: var(--color-oklch-text)"
                  />
                </svg>
              </button>
              <div class="img-hider"></div>
            </div>
            <div class="content-container">
              <div class="title">Explore new places around the world</div>
              <div class="text">
                Sign up for free and receive hand-picked offers for the best destinations with great
                discounts
              </div>
              <button class="button">View Offers</button>
              <div class="friends-counter">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0789 2.5C13.2445 2.5 15 4.25551 15 6.42105C15 8.60799 14.1238 9.70448 10.4073 12.5951L8.71626 13.9103C8.29497 14.238 7.70503 14.238 7.28374 13.9103L5.59271 12.5951C1.87621 9.70448 1 8.60799 1 6.42105C1 4.25551 2.75551 2.5 4.92105 2.5C6.08128 2.5 7.11221 3.04619 8 4.10293C8.88779 3.04619 9.91872 2.5 11.0789 2.5Z"
                    style="fill: var(--color-oklch-disclaimer)"
                  />
                </svg>
                <div>Liked by 16 your friends on Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel" id="hslPanel">
        <div class="card-container">
          HSL
          <div class="card" id="cardHsl">
            <div class="image-container">
              <button class="fav-button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2C3 1.44772 3.44772 1 4 1H12C12.5523 1 13 1.44772 13 2V13.2338C13 14.0111 12.152 14.4912 11.4855 14.0913L8.5145 12.3087C8.19781 12.1187 7.80219 12.1187 7.4855 12.3087L4.5145 14.0913C3.84797 14.4912 3 14.0111 3 13.2338V2Z"
                    style="fill: var(--color-hsl-text)"
                  />
                </svg>
              </button>
              <div class="img-hider"></div>
            </div>
            <div class="content-container">
              <div class="title">Explore new places around the world</div>
              <div class="text">
                Sign up for free and receive hand-picked offers for the best destinations with great
                discounts
              </div>
              <button class="button">View Offers</button>
              <div class="friends-counter">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0789 2.5C13.2445 2.5 15 4.25551 15 6.42105C15 8.60799 14.1238 9.70448 10.4073 12.5951L8.71626 13.9103C8.29497 14.238 7.70503 14.238 7.28374 13.9103L5.59271 12.5951C1.87621 9.70448 1 8.60799 1 6.42105C1 4.25551 2.75551 2.5 4.92105 2.5C6.08128 2.5 7.11221 3.04619 8 4.10293C8.88779 3.04619 9.91872 2.5 11.0789 2.5Z"
                    style="fill: var(--color-hsl-disclaimer)"
                  />
                </svg>
                <div>Liked by 16 your friends on Facebook</div>
              </div>
            </div>
          </div>
        </div>
        <div class="code-container flex flex-col">
          <div class="color-snippet color1 flex items-center justify-end" id="hsl1Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl1Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
            </div>
          </div>
          <div class="color-snippet color2" id="hsl2Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl2Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
            </div>
          </div>
          <div class="color-snippet color3" id="hsl3Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl3Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="hsl3Cr">APCA: 70</div>
            </div>
          </div>
          <div class="color-snippet color4" id="hsl4Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl4Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="hsl4Cr">APCA: 70</div>
            </div>
          </div>
          <div class="color-snippet color5" id="hsl5Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl5Code">
                oklch(90% 0.05
                <span class="pink">29</span>
                )
              </div>
              <div class="contrast-value" id="hsl5Cr">APCA: 70</div>
            </div>
          </div>
          <div class="color-snippet color6" id="hsl6Snippet">
            <div class="line"></div>
            <div class="color-sample"></div>
            <div class="color-code-stack">
              <div class="color-code" id="hsl6Code">hsl(0 0% 53%)</div>
              <div class="contrast-value" id="hsl6Cr">APCA: 70</div>
            </div>
          </div>
        </div>
      </div>

      <div class="toolbar">
        <label class="hue-label" for="sliderHue">Hue</label>
        <input
          type="range"
          ref="sliderHue"
          id="sliderHue"
          name="sliderHue"
          min="0"
          max="360"
          value="0"
        />
        <span class="hue-value" ref="heuValue" id="heuValue">0</span>
      </div>

      <div class="checkbox-panel">
        <input
          type="checkbox"
          ref="boostChromaCheckbox"
          id="boostChromaCheckbox"
          name="boostChroma"
        />
        <label for="boostChroma">Boost oklch chroma</label>
      </div>

      <button class="clear-button1" ref="clearButton" id="clearButton">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 2C8.65311 2 9.20873 2.4174 9.41465 3H6.58535C6.79127 2.4174 7.34689 2 8 2ZM5.04148 3H3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H3.18182L3.83464 12.1811C3.92829 13.2112 4.79202 14 5.82643 14H10.1736C11.208 14 12.0717 13.2112 12.1654 12.1811L12.8182 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H10.9585C10.7205 1.58114 9.4865 0.5 8 0.5C6.5135 0.5 5.27952 1.58114 5.04148 3Z"
            fill="black"
            style="fill: black; fill: black; fill-opacity: 1"
          />
        </svg>
      </button>
    </div>
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

const oklchComps = {
  0: { l: 0.98, c: 0.01, name: '--color-oklch-50' },
  1: { l: 0.94, c: 0.05, name: '--color-oklch-100' },
  2: { l: 0.88, c: 0.05, name: '--color-oklch-200' },
  3: { l: 0.82, c: 0.09, name: '--color-oklch-300' },
  4: { l: 0.74, c: 0.14, name: '--color-oklch-400' },
  5: { l: 0.65, c: 0.19, name: '--color-oklch-500' },
  6: { l: 0.63, c: 0.14, name: '--color-oklch-600' },
  7: { l: 0.6, c: 0.14, name: '--color-oklch-700' },
  8: { l: 0.49, c: 0.09, name: '--color-oklch-800' },
  9: { l: 0.4, c: 0.05, name: '--color-oklch-900' },
  10: { l: 0.32, c: 0.05, name: '--color-oklch-950' },
  11: { l: 0.62, c: 0.0, name: '--color-oklch-dark-gray' },
  11: { l: 0.23, c: 0.0, name: '--color-oklch-dark-normal' },
};

// const COLORS = Object.keys(oklchComps).length; // 颜色数量
const COLORS = 6; // 颜色数量
const ACCENT_COLORS = [2, 4]; // 强调色索引, 2 和 4 是强调色
const theme = { accent: 0, ambient: 0 }; // 主题色索引初始值, accent: 强调色, ambient: 背景色

onMounted(() => {
  // 颜色转换滑竿
  document.addEventListener('DOMContentLoaded', () => {
    let hue = parseFloat(sliderHue.value.value); // 初始化色相
    updatePalettes(hue, false);
  });

  // 滑竿滑动时改变色相
  sliderHue.value.addEventListener('input', function () {
    let hue = parseFloat(sliderHue.value.value); // 色相
    let chromaBoost = boostChromaCheckbox.value.checked; // 是否提升色度
    updatePalettes(hue, chromaBoost);
    heuValue.value.textContent = hue;
  });
  boostChromaCheckbox.value.addEventListener('change', function () {
    let hue = parseFloat(sliderHue.value.value); // 色相
    let chromaBoost = boostChromaCheckbox.value.checked; // 是否提升色度
    updatePalettes(hue, chromaBoost, 'click');
  });

  // 更新面板
  function updatePalettes(hueOffset, chromaBoost, click) {
    /*
     hueOffset 色相偏移, chromaBoost 是否提升色度, click 点击事件
     循环 6 个颜色, 强调会加上 滑竿的 value
    */
    for (let i = 0; i < COLORS; i++) {
      // console.log(
      //   i,
      //   ACCENT_COLORS.includes(i),
      //   ACCENT_COLORS.includes(i) ? theme.accent : theme.ambient,
      //   hueOffset,
      // );
      let hue = (ACCENT_COLORS.includes(i) ? theme.accent : theme.ambient) + hueOffset; // 控制强调色色相, 不需要可直接传 hueOffset
      updateColor('oklch', i, hue + 29, chromaBoost); // oklch 色彩空间, 第几个颜色, 是否提升色度
      // updateColor('hsl', i, hue, false);
    }
  }

  // 颜色转换
  function updateColor(model, i, h, chromaBoost) {
    // console.log('updateColor', model, i, h, chromaBoost);
    let comps;
    let color;
    if (model == 'oklch') {
      comps = oklchComps[i];
      // console.log('updateColor ==>', comps, color);
      if (chromaBoost && i < 5) {
        let tempColor = 'oklch(' + comps.l + ' ' + 0.4 + ' ' + h + ')';
        let clampedColor = clampChroma(tempColor, 'oklch');
        color = 'oklch(' + comps.l + ' ' + clampedColor.c.toFixed(2) + ' ' + h + ')';
      } else {
        // console.log('@@');
        color = 'oklch(' + comps.l + ' ' + comps.c + ' ' + h + ')';
        // console.log('updateColor ==>', comps, color);
      }
    } else {
      comps = hslComps(i);
      color = 'hsl(' + h + ' ' + comps.s + '% ' + comps.l + '%)';
    }
    setVariable(comps.name, color);
    // Display color
    let codeLabelId = model + snippetId(i) + 'Code';
    // console.log(model, snippetId(i), 'Code', codeLabelId);
    // TODO: 这段需要解释
    // let codeLabel = document.getElementById(codeLabelId);
    // codeLabel.textContent = color;
    // Contrast
    // let crLabelId = model + snippetId(i) + 'Cr';
    // let crLabel = document.getElementById(crLabelId);
    // if (crLabel) {
    //   let bg = getComputedStyle(cardOklch.value).backgroundColor;
    //   let cr = Math.round(Math.abs(i == 2 ? calcContrast(bg, color) : calcContrast(color, bg)));
    //   crLabel.textContent = 'APCA: ' + cr;
    //   if (cr < minContrast(i)) {
    //     crLabel.style.color = '#f00';
    //   } else {
    //     crLabel.style.color = '';
    //   }
    // }
  }

  // 设置变量
  function snippetId(i) {
    switch (i) {
      case 0: // 50
        return 2;
      case 1: // 100
        return 1;
      case 2: // 600
        return 5;
      case 3: // 700
        return 4;
      case 4: // 800
        return 3;
      case 5: // 900
        return 6;
    }
  }

  // function snippetId(i) {
  //   switch (i) {
  //     case 0: // 50
  //       return 2;
  //     case 1: // 100
  //       return 2;
  //     case 2: // 200
  //       return 2;
  //     case 3: // 300
  //       return 2;
  //     case 4: // 400
  //       return 2;
  //     case 5: // 500
  //       return 2;
  //     case 6: // 600
  //       return 2;
  //     case 7: // 700
  //       return 2;
  //     case 8: // 800
  //       return 2;
  //     case 9: // 900
  //       return 2;
  //     case 10: // 950
  //       return 2;
  //     case 11: // dark gray
  //       return 2;
  //   }
  // }

  // 设置变量, 最小值的对比度
  function minContrast(i) {
    switch (i) {
      case 2:
        return 60;
      case 3:
        return 60;
      case 4:
        return 75;
      case 5:
        return 60;
      default:
        return 0;
    }
  }

  // const oklchComps = {
  //   0: { l: 0.98, c: 0.01, name: '--color-oklch-50' },
  //   1: { l: 0.9, c: 0.05, name: '--color-oklch-100' },
  //   2: { l: 0.63, c: 0.14, name: '--color-oklch-600' },
  //   3: { l: 0.6, c: 0.14, name: '--color-oklch-700' },
  //   4: { l: 0.49, c: 0.09, name: '--color-oklch-800' },
  //   5: { l: 0.62, c: 0.0, name: '--color-oklch-dark-gray' },
  // };

  function hslComps(i) {
    switch (i) {
      case 0:
        return { s: 100, l: 98, name: '--color-hsl-50' };
      case 1:
        return { s: 100, l: 89, name: '--color-hsl-100' };
      case 2:
        return { s: 100, l: 58, name: '--color-hsl-600' };
      case 3:
        return { s: 100, l: 48, name: '--color-hsl-700' };
      case 4:
        return { s: 100, l: 36, name: '--color-hsl-800' };
      case 5:
        return { s: 0, l: 52, name: '--color-hsl-dark-gray' };
    }
  }

  function setVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  cardOklch.value.addEventListener('dragover', (e) => {
    e.preventDefault();
    cardOklch.value.classList.add('drag-over');
  });

  cardOklch.value.addEventListener('dragleave', () => {
    cardOklch.value.classList.remove('drag-over');
  });

  cardOklch.value.addEventListener('drop', (e) => {
    e.preventDefault();
    cardOklch.value.classList.remove('drag-over');

    const file = e.dataTransfer.files[0];
    let imgageContainers = document.getElementsByClassName('image-container');

    if (file && file.type.startsWith('image/')) {
      let reader = new FileReader();

      reader.onload = (e) => {
        let imageUrl = e.target.result;
        for (let i = 0; i < imgageContainers.length; i++) {
          imgageContainers[i].style.backgroundImage = `url(${imageUrl})`;
        }

        composeTheme(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  });

  function composeTheme(imageUrl) {
    let colorThief = new ColorThief();
    let imgContainer = document.getElementsByClassName('image-container')[0];
    let backgroundImageURL = window
      .getComputedStyle(imgContainer)
      .getPropertyValue('background-image');
    let imageURL = backgroundImageURL.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
    let image = new Image();

    // Set up an event handler to run when the image has loaded
    image.onload = function () {
      // Create a Color Thief instance
      let colorThief = new ColorThief();

      let palette = colorThief.getPalette(image, 2);
      let dominantColor = palette[0];
      let complimentaryColor = palette[1];

      let dominantColorRgb = rbgFromComponents(dominantColor);
      let complimentaryColorRgb = rbgFromComponents(complimentaryColor);

      let dominantColorOklch = converter('oklch')(dominantColorRgb);
      let complimentaryColorOklch = converter('oklch')(complimentaryColorRgb);

      let dominantColorH = Math.round(dominantColorOklch.h) - 29;
      let complimentaryColorH = Math.round(complimentaryColorOklch.h) - 29;

      theme.accent = complimentaryColorH;
      theme.ambient = dominantColorH;

      let hue = parseFloat(sliderHue.value.value);
      updatePalettes(hue, boostChromaCheckbox.value.checked);

      clearButton.style.visibility = 'visible';
    };
    // Load the image by setting its source
    image.src = imageURL;
  }
});

function rbgFromComponents(comps) {
  return `rgb(${comps[0]}, ${comps[1]}, ${comps[2]})`;
}

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
