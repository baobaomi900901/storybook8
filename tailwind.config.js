/** @type {import('tailwindcss').Config} */

import guangfa from './theme/theme-guangfa';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
    './kswux/package/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
    './kswux-ant/package/**/*.{vue,js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: guangfa,
  },
  plugins: [
    // 滚动条
    require('tailwind-scrollbar-hide'),
  ],
};
