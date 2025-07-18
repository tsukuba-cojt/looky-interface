import type { config } from "@repo/ui";

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

import type { locales } from "../i18n/locales";
import type { formats } from "../i18n/request";
import type messages from "../messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
