import type { Metadata } from "next";
import type { NamespaceKeys, NestedKeyOf } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { ILocale } from "~/lib/config";

interface ConstructMetadataProps<
  NestedKey extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>,
> {
  locale: ILocale;
  namespace?: NestedKey;
}

export async function constructMetadata<
  NestedKey extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>,
>({ locale, namespace }: ConstructMetadataProps<NestedKey>): Promise<Metadata> {
  const t = await getTranslations({
    locale: locale,
    namespace: namespace || "Metadata",
  });

  return {
    title: {
      default: t("title" as any),
      template: `%s | ${t("title" as any)}`,
    },
    description: t("description" as any),

    keywords: [
      "Production on the Move",
      "Production House Paris",
      "Film Production Services France",
      "Line Production",
      "Service Production",
      "Television Production Services",
      "Corporate Production Services",
      "Commercials Production Services",
      "Video Production Services",
      "Filming Locations",
      "Maison de production Paris",
      "Services de production cinématographique France",
      "Production en ligne",
      "Service de production",
      "Services de production télévisuelle",
      "Services de production d'entreprise",
      "Services de production publicitaire",
      "Services de production vidéo",
      "Lieux de tournage",
    ],

    alternates: {
      canonical: "https://productiononthemove.com",
      languages: {
        en: "https://productiononthemove.com/en",
        fr: "https://productiononthemove.com/fr",
      },
    },

    openGraph: {
      type: "website",
      url: "https://example.com",
      title: t("title" as any),
      siteName: "Production on the Move",
      description: t("description" as any),
      locale,
      countryName: "France",
      phoneNumbers: ["+33 7 66 29 94 66", "+33 7 49 93 37 88"],
      emails: ["contact@productiononthemove.com"],
      images: [
        {
          url: "https://productiononthemove.com/_static/og.png",
          alt: "Production on the Move",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@productiononthemove",
      creator: "@productiononthemove",
      title: t("title" as any),
      description: t("description" as any),
      images: "https://productiononthemove.com/_static/og.png",
    },
  };
}
