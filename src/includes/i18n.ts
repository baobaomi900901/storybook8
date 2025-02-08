import { createI18n } from 'vue-i18n';
import zh from '../locales/zh.json';
import en from '../locales/en.json';

// 导出 useI18n 函数
export default new createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  },
});
