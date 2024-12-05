/** @type {import('tailwindcss').Config} */

import guangfa from './theme/theme-guangfa';

// import { gf } from 'kswux/theme/';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
    './kswux/packages/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
    './kswux-ant/packages/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    // extend: gf,
    screens: {
      '2xs': '768px',
      xs: '1280px',
      sm: '1440px',
      base: '1920px',
      lg: '2560px',
      xl: '3008px',
      '2xl': '3840px',
    },
  },
  plugins: [
    // 滚动条
    require('tailwind-scrollbar-hide'),
  ],
};
