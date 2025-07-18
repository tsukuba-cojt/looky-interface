import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";
import { fonts } from "./theme/fonts";
import { shorthands } from "./theme/shorthands";
import { themes } from "./theme/themes";
import { tokens } from "./theme/tokens";
import { animations } from "./theme/animations";

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts,
  themes,
  tokens,
  shorthands,
});
