import { notFound } from "next/navigation";

import "~/styles/css/mdx.css";

import { Header } from "~/app/[locale]/_blog/[slug]/_components/header";
import { Mdx } from "~/app/[locale]/_blog/[slug]/_components/mdx";
import { allBlogs } from "~/generated-mdx";

export const revalidate = 60;
export const dynamic = "force-static";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allBlogs
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function Page({ params }: Props) {
  const data = allBlogs.find((blog) => blog.slug === params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header blog={data} views={0} />

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <Mdx code={data.markdown} />
      </article>
    </div>
  );
}
