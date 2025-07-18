"use client";

import { useCallback } from "react";

import { Button, Icons } from "@repo/ui";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = useCallback(() => {
    document.cookie = [
      `locale=${locale === "en" ? "ja" : "en"}`,
      "path=/",
      "max-age=31536000",
    ].join("; ");

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
