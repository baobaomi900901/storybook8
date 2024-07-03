import type { Preview } from '@storybook/vue3';
import '../kswux/package/style/general.css';
import '../kswux/package/style/variable.css';
import 'ksw-vue-icon/styles/icon.css';
import '@iframe-resizer/child';
// import elementPlus from 'element-plus';
import { setup } from '@storybook/vue3';
import install from '../kswux/package/index'; // 全局注册组件
import { KswIcon } from 'ksw-vue-icon';
import '../src/output.css';

setup((app) => {
  // app.use(elementPlus);
  app.use(KswIcon);
  // app.use(install);
  install(app);
});

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

// export default preview;
