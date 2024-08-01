import { cssColorNames } from './const.js';

function computeMappedValue(x, a, b, c, d) {
  // x: 实际值
  // a: 实际数轴最小值
  // b: 实际数轴最大值
  // c: 映射数轴最小值
  // d: 映射数轴最大值
  // 计算并返回映射值
  return c + ((x - a) * (d - c)) / (b - a);
}
console.log(computeMappedValue(1, 1, 10, 0, 0.35));

// 1, 10, 0, 0.35, 0.05

// function isValidColor(strColor) {
//   if (!strColor) {
//     return false;
//   }
//   const s = new Option().style;
//   s.color = strColor;
//   return Boolean(s.color);
// }

// function GetColorLevel2(hex, leven = 500) {
//   // 1.判断是否合法
//   if (!isValidColor(hex)) {
//     console.log('@颜色不合规 ==>', hex);
//     return '';
//   }

//   // 2. 判断十六进制颜色还是 css 颜色
//   if (hex.startsWith('#')) {
//     console.log('hex 16 进制 :>> ', hex);
//     // 2.1 非标准 16 进制颜色，补全为 7 位
//     if (hex.length !== 7) {
//       hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
//     }
//   } else {
//     // 2.2 css 颜色, 枚举颜色表，转换为 16 进制颜色
//     if (cssColorNames[hex]) {
//       hex = cssColorNames[hex];
//       console.log('hex string :>> ', hex);
//     }
//   }

//   // 3. 将16进制颜色转换为 RGB 颜色
//   function hexToRgb(h) {
//     // 移除前导的 "#" 符号
//     h = h.replace(/^#/, '');
//     // 提取红、绿、蓝
//     const r = parseInt(h.substr(0, 2), 16);
//     const g = parseInt(h.substr(2, 2), 16);
//     const b = parseInt(h.substr(4, 2), 16);

//     return { r, g, b };
//   }

//   const { r, g, b } = hexToRgb(hex);

//   // 转换为 HSL 颜色
//   function rgbToHsl(r, g, b) {
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     const max = Math.max(r, g, b);
//     const min = Math.min(r, g, b);
//     let h,
//       s,
//       l = (max + min) / 2;

//     if (max === min) {
//       h = s = 0; // 灰色
//     } else {
//       const d = max - min;
//       s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

//       switch (max) {
//         case r:
//           h = (g - b) / d + (g < b ? 6 : 0);
//           break;
//         case g:
//           h = (b - r) / d + 2;
//           break;
//         case b:
//           h = (r - g) / d + 4;
//           break;
//       }

//       h /= 6;
//     }

//     h = Math.round(h * 360);
//     s = Math.round(s * 100);
//     l = Math.round(l * 100);

//     return { h, s, l };
//   }

//   return rgbToHsl(r, g, b);
// }

// const result = GetColorLevel2('red', 500);
// const result2 = GetColorLevel2('#ff5500', 500);
// const result4 = GetColorLevel2('#2882FF', 500);
// console.log(result);
// console.log(result2);
// console.log(result4);
