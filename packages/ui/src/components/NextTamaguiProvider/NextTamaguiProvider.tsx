"use client";

import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import { NextThemeProvider } from "@tamagui/next-theme";
import { useServerInsertedHTML } from "next/navigation";
import type { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { TamaguiProvider } from "tamagui";
import { config } from "../../tamagui.config";

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
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
            __html: config.getNewCSS(),
          }}
        />
      </>
    );
  });

  return (
    <NextThemeProvider defaultTheme="light" skipNextHead>
      <TamaguiProvider config={config}>{children}</TamaguiProvider>
    </NextThemeProvider>
  );
};
