"use client";

import { Anchor, Header as TamaguiHeader, XStack } from "@repo/ui";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { navConfig } from "../../config/nav";
import { LanguageToggle } from "../LanguageToggle";
import { ModeToggle } from "../ModeToggle";

export const Header = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <TamaguiHeader>
      <XStack
        h="$12"
        px="$4"
        $md={{ h: "$16", px: "$10" }}
        items="center"
        justify="space-between"
      >
        <XStack items="center" gap="$6">
          {navConfig.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Anchor
                key={index.toString()}
                href={item.href}
                fontSize="$sm"
                fontWeight="$medium"
                textDecorationLine="none"
                opacity={isActive ? 1 : 0.6}
                focusStyle={{ opacity: 0.8 }}
              >
                {t(`${item.label}.metadata.title`)}
              </Anchor>
            );
          })}
        </XStack>
        <XStack items="center" gap="$4">
          <ModeToggle />
          <LanguageToggle />
        </XStack>
      </XStack>
    </TamaguiHeader>
  );
};
