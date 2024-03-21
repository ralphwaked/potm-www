import { redirect } from "next/navigation";

import { appConfig } from "~/lib/config";

export default function Page() {
  redirect(appConfig.i18n.defaultLocale);
}
