import type { Preview } from "@storybook/nextjs-vite";
import { NextTamaguiProvider } from "@repo/ui";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextTamaguiProvider>
        <Story />
      </NextTamaguiProvider>
    ),
  ],
};

export default preview;
