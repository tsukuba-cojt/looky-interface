import type { Metadata } from "next";
import { NextTamaguiProvider } from "@repo/ui";

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
