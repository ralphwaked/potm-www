import { Particles } from "~/app/[locale]/_components/particles";
import { ContactClient } from "~/app/[locale]/contact/client";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface Props {
    params: {
      locale: string;
    };
  }

export default async function Page({ params }: Props) {
  const t = await getTranslations("Contact");
  
return (
  <main className="font-sans flex min-h-screen w-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
    <Particles
            quantity={1000}
            className="absolute inset-0 -z-10 h-full animate-fade-in"
          />

<section
        id="contact"
        className="flex h-screen w-screen flex-col items-center justify-center gap-4"
      >
       <h2 className="text-edge-outline z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-2xl text-transparent md:text-4xl">
          {t("title")}
        </h2> 

        

        <ContactClient />
        <Link
          href="mailto:contact@productiononthemove.com"
          className="text-edge-outline z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-xs text-transparent"
        >
          contact@productiononthemove.com
        </Link>
        <p className="text-edge-outline z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-xs text-transparent">
          <Link href="tel:+33766299466">+33 7 66 29 94 66</Link>
        </p>
      

        <Link href="/" prefetch className="text-sm text-zinc-500 duration-500 hover:text-zinc-300">← {t("back")}</Link>
      </section>
  </main>
)
}