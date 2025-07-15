import { withTamagui } from "@tamagui/next-plugin";
import type { NextConfig } from "next";

const plugins = [
  withTamagui({
    config: "../../packages/ui/src/tamagui.config.ts",
    components: ["tamagui", "@repo/ui"],
    appDir: true,
    importsWhitelist: ["constants.js", "colors.js"],
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === "development",
    excludeReactNativeWebExports: [
      "Switch",
      "ProgressBar",
      "Picker",
      "CheckBox",
      "Touchable",
    ],
  }),
];

const nextConfig: () => NextConfig = () => {
  let config: NextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: [
      "react-native-web",
      "expo-linking",
      "expo-constants",
      "expo-modules-core",
      "react-native-safe-area-context",
      "react-native-svg",
      "react-native-reanimated",
      "react-native-gesture-handler",
    ],
    experimental: {
      scrollRestoration: true,
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};

export default nextConfig;
