import { cookies } from "next/headers";
import type { Locale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value ?? "ja") as Locale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
