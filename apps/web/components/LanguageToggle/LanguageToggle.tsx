"use client";

import { Button, Icons } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";
import { setLocale } from "../../lib/actions";

export const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = useCallback(async () => {
    await setLocale(locale === "en" ? "ja" : "en");

    router.refresh();
  }, [locale, router]);

  return (
    <Button variant="ghost" w="$8" h="$8" onPress={toggleLanguage}>
      <Button.Icon>
        <Icons.languages size="$4" shrink={0} />
      </Button.Icon>
    </Button>
  );
};
