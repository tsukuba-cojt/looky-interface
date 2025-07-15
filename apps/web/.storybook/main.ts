import { createRequire } from "node:module";
import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: (config) => {
    config.define = {
      DEV: `${process.env.NODE_ENV === "development" ? true : false}`,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    };

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native": "react-native-web",
      };
    }

    if (config.optimizeDeps) {
      config.optimizeDeps.esbuildOptions = {
        ...config.optimizeDeps.esbuildOptions,
        resolveExtensions: [
          ".web.js",
          ".web.jsx",
          ".web.ts",
          ".web.tsx",
          ".mjs",
          ".js",
          ".mts",
          ".ts",
          ".jsx",
          ".tsx",
          ".json",
        ],
        loader: {
          ".js": "jsx",
        },
      };
    }

    return config;
  },
};
export default config;
