import type { Preview } from "@storybook/vue3";
import '../src/output.css';
// import '../src/kingsware-ui';
// import '../src/kingsware-ui/style.css';
import elementPlus from 'element-plus';
import { setup } from '@storybook/vue3'
setup((app) => {
  app.use(elementPlus)
})

// console.log(elementPlus);


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
