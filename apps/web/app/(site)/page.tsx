"use client";

import { H1, Paragraph, Stack, XStack, YStack } from "@repo/ui";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TopPage = () => {
  const t = useTranslations("site.top");

  return (
    <YStack flex={1} items="center" pt="$12">
      <XStack gap="$12">
        <YStack pt="$20" gap="$16">
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
          <XStack items="center" gap="$4">
            <Image
              src="/images/apple-store.png"
              alt="Download on the App Store"
              width={120}
              height={0}
              style={{ height: "auto" }}
            />
            <Image
              src="/images/google-play.png"
              alt="Get it on Google Play"
              width={120}
              height={0}
              style={{ height: "auto" }}
            />
          </XStack>
        </YStack>
        <XStack gap="$8">
          <Stack aspectRatio={9 / 19} w="$64">
            <Image src="/images/mockups/tryon-light.png" alt="mockup1" fill />
          </Stack>
          <Stack aspectRatio={9 / 19} w="$64">
            <Image
              src="/images/mockups/discover-light.png"
              alt="mockup2"
              fill
            />
          </Stack>
        </XStack>
      </XStack>
    </YStack>
  );
};

export default TopPage;
