import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize()


import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  loaders: [mswLoader],
};

export default preview;
