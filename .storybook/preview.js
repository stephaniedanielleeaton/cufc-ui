import './output.css';
import '../src/styles/colors.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
