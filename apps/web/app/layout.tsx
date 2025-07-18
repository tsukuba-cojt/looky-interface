import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { NextTamaguiProvider } from "../components/NextTamaguiProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: "",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${noto_sans_jp.variable}`}>
        <NextTamaguiProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </NextTamaguiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
