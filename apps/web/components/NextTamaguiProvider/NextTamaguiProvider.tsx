"use client";

import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import {
  ColorScheme,
  NextThemeProvider,
  useRootTheme,
} from "@tamagui/next-theme";
import { useServerInsertedHTML } from "next/navigation";
import type { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { config, TamaguiProvider } from "@repo/ui";

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />

        <style
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
