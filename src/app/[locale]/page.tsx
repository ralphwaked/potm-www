import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Particles } from "~/app/[locale]/_components/particles";
import { Projects } from "~/app/[locale]/_components/projects";
import { navigation } from "~/data/constants/layout";
import { projects } from "~/data/constants/projects";

interface Props {
  params: {
    locale: string;
  };
}

export default async function Page({ params }: Props) {
  const t = await getTranslations("Home");

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black uppercase">
      <Particles
        quantity={1000}
        className="absolute inset-0 -z-10 h-full animate-fade-in"
      />

      <section
        id="hero"
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <li
                key={item.href}
                className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
              >
                <Link href={item.href}>
                  {params.locale === "en" ? item.name : item.name_fr}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-4xl text-transparent duration-1000 sm:text-8xl">
          production <br /> on the move
        </h1>

        <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="text-xs text-zinc-500 sm:text-sm ">
            {t("hero_description")}
          </h2>
        </div>
      </section>

      <section
        id="about"
        className="my-10 flex w-full flex-col items-center justify-center"
      >
        <div className="mx-auto w-full max-w-3xl px-10 text-justify sm:px-8">
          {/* <h2 className="text-center font-monument text-2xl uppercase sm:text-5xl">
            {t("about_title")}
          </h2> */}
          <div className="py-10">
            <p className="text-xl">{t("about_description")}</p>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="my-10 flex w-full flex-col items-center justify-center"
      >
        <Projects
          title={t("featured_title")}
          projects={projects}
          locale={params.locale}
        />
      </section>

      <section
        id="contact"
        className="mb-8 flex w-full flex-col items-center justify-center space-y-2"
      >
        <Link
          href="mailto:contact@productiononthemove.com"
          className="text-edge-outline z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-xs text-transparent md:text-2xl"
        >
          contact@productiononthemove.com
        </Link>
        <p className="text-edge-outline z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center font-monument text-xs text-transparent md:text-2xl">
          <Link href="tel:+33766299466">+33 7 66 29 94 66</Link> |{" "}
          <Link href="tel:+33749933788">+33 7 49 93 37 88</Link>
        </p>
      </section>

      <footer className="w-screen flex-col items-center justify-center space-y-2 px-8 py-5 text-center">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Link href="/s/instagram">
            <Instagram />
          </Link>
          <Link href="/s/linkedin">
            <Linkedin />
          </Link>
        </div>
        <p>© 2024 POTM</p>
      </footer>
    </main>
  );
}
