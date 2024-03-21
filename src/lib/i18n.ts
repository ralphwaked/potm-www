import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { appConfig } from "~/lib/config";

export default getRequestConfig(async ({ locale }) => {
  if (!appConfig.i18n.locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`../data/messages/${locale}.ts`)).default,
  };
});
