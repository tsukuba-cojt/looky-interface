"use client";

import { Button, Icons } from "@repo/ui";
import { useRootTheme, useThemeSetting } from "@tamagui/next-theme";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "tamagui";

export const ThemeToggle = () => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();
  const [clientTheme, setClientTheme] = useState<string | undefined>("light");

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button variant="ghost" w="$8" h="$8" onPress={themeSetting.toggle}>
      <Button.Icon>
        {clientTheme === "dark" ? (
          <Icons.sun size="$5" shrink={0} />
        ) : clientTheme === "light" ? (
          <Icons.moon size="$4" shrink={0} />
        ) : (
          <Icons.monitor size="$4" shrink={0} />
        )}
      </Button.Icon>
    </Button>
  );
};
