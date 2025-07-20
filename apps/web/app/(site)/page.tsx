"use client";

import { H1, Paragraph, XStack, YStack } from "@repo/ui";
import { useThemeSetting } from "@tamagui/next-theme";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TopPage = () => {
  const t = useTranslations("site.top");
  const themeSetting = useThemeSetting();

  return (
    <YStack flex={1} items="center" pt="$12">
      <XStack gap="$10">
        <YStack pt="$20">
          <YStack gap="$6">
            <Paragraph
              fontSize="$2xl"
              lineHeight="$2xl"
              fontWeight="$bold"
              color="$primaryBackground"
            >
              {t.rich("tagline", { br: () => <br /> })}
            </Paragraph>
            <H1 fontSize="$6xl" lineHeight="$7xl" fontWeight="$bold">
              {t.rich("slogan", {
                br: () => <br />,
              })}
            </H1>
          </YStack>
        </YStack>
        <XStack gap="$8">
          <Image
            src="/images/mockups/tryon-dark.png"
            alt=""
            width={240}
            height={0}
            style={{
              height: "auto",
              display:
                themeSetting.resolvedTheme === "light" ? "none" : "block",
            }}
          />
          <Image
            src="/images/mockups/tryon-light.png"
            alt=""
            width={240}
            height={0}
            style={{
              height: "auto",
              display: themeSetting.resolvedTheme === "dark" ? "none" : "block",
            }}
          />
          <Image
            src="/images/mockups/discover-dark.png"
            alt=""
            width={240}
            height={0}
            style={{
              height: "auto",
              display:
                themeSetting.resolvedTheme === "light" ? "none" : "block",
            }}
          />
          <Image
            src="/images/mockups/discover-light.png"
            alt=""
            width={240}
            height={0}
            style={{
              height: "auto",
              display: themeSetting.resolvedTheme === "dark" ? "none" : "block",
            }}
          />
        </XStack>
      </XStack>
    </YStack>
  );
};

export default TopPage;
