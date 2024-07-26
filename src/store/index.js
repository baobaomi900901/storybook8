// 定义 pinia
import { defineStore } from 'pinia';

// 导出 pinia 实例
export default defineStore('main', {
  state: () => {
    return {
      showMenuType: false,
      webMode: 'light',
    };
  },
});
