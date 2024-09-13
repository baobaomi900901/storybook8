/** @type {import('tailwindcss').Config} */

import guangfa from './theme/theme-guangfa';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: guangfa,
  },
  plugins: [],
};
