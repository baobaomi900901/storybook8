import type { Preview } from '@storybook/vue3';
import '../kswux/package/style/general.css';
import '../kswux/package/style/variable.css';
import '../src/output.css';
import 'ksw-vue-icon/styles/icon.css';
import '@iframe-resizer/child';
import elementPlus from 'element-plus';
import { setup } from '@storybook/vue3';
import install from '../kswux/package/index';

setup((app) => {
  app.use(elementPlus);
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
