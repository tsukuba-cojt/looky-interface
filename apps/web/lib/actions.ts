"use server";

import { cookies } from "next/headers";
import type { Locale } from "../types";

export const setLocale = async (locale: Locale) => {
  (await cookies()).set("locale", locale);
};
