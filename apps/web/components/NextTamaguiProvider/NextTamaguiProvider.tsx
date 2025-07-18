"use client";

import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import { config, TamaguiProvider } from "@repo/ui";
import {
  type ColorScheme,
  NextThemeProvider,
  useRootTheme,
} from "@tamagui/next-theme";
import { useServerInsertedHTML } from "next/navigation";
import type { ReactNode } from "react";
import { StyleSheet } from "react-native";

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // @ts-expect-error
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: -
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />

        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: -
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              exclude:
                process.env.NODE_ENV === "production" ? "design-system" : null,
            }),
          }}
        />
      </>
    );
  });

  return (
    <NextThemeProvider
      skipNextHead
      defaultTheme="light"
      onChangeTheme={(name) => {
        setTheme(name as ColorScheme);
      }}
    >
      <TamaguiProvider config={config} defaultTheme={theme}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
