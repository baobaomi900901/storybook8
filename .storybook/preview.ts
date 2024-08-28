import { Preview, setup } from '@storybook/vue3';
import '../kswux/package/style/variable.css';
import 'ksw-vue-icon/styles/icon.css';
import '@iframe-resizer/child';
import '/public/font/result.css'; // 全局字体
import elementPlus from 'element-plus';
import install from '../kswux/package/index'; // 全局注册组件
import { KswIcon } from 'ksw-vue-icon';
import '../src/myStyle.css';
import '../src/style.css';

setup((app) => {
  app.use(elementPlus);
  app.use(KswIcon);
  // app.use(install);
  install(app);
});

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [''],
      },
    },
  },
};

export default preview;
