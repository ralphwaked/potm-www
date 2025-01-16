import "~/styles/css/globals.css";

import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { ILocale } from "~/lib/config";
import { appConfig } from "~/lib/config";
import { constructMetadata } from "~/lib/metadata";
import { cn } from "~/lib/utils";
import { fontMonument, fontNeutralFace } from "~/styles/font";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

export const revalidate = 0;
export const runtime = "edge";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: ILocale;
  };
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  return await constructMetadata({ locale: params.locale });
}

export const viewport: Viewport = {
  colorScheme: "normal",
};

export default async function Layout({ children, params }: LayoutProps) {
  if (!appConfig.i18n.locales.includes(params.locale as any)) {
    notFound();
  }

  const messages = await getMessages({
    locale: params.locale
  })

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          fontMonument.variable,
          fontNeutralFace.variable,
          "scrollbar-black overflow-x-hidden overflow-y-scroll bg-black font-neutralFace text-white scrollbar scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full scrollbar-w-3",
        )}
      >
        <NextIntlClientProvider messages={messages}
        >{children}
        <Toaster />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
