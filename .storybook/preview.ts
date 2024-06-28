import type { Preview } from "@storybook/vue3";
import "../src/output.css";
import "ksw-ux/kingsware-ui/style.css";
import "../src/input.css";
import '@iframe-resizer/child'
import elementPlus from "element-plus";
import install from '../kswux/package/index';
import { setup } from "@storybook/vue3";
setup((app) => {
  app.use(elementPlus);
  install(app);
});


export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export default preview;
