"use client";

import { Main, YStack } from "@repo/ui";
import { ReactNode } from "react";
import { Header } from "../../components/Header";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <YStack minH="100vh">
      <Header />
      <Main flex={1}>{children}</Main>
    </YStack>
  );
};

export default SiteLayout;
