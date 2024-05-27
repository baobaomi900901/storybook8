import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});
