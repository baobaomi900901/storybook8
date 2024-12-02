// 定义 pinia
import { defineStore } from 'pinia';
import { ref } from 'vue';

// 导出 pinia 实例
export default defineStore('main', {
  state: () => {
    const styleModule = ref('AOM');
    return {
      showMenuType: false,
      webMode: 'light',
      leftMenuShow: true,
      styleModule,
    };
  },
});
