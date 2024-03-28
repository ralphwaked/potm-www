import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";

import { Article } from "~/app/[locale]/_blog/_components/article";
import { Card } from "~/app/[locale]/_blog/_components/card";
import { Navigation } from "~/app/[locale]/_blog/_components/navigation";
import { allBlogs } from "~/generated-mdx";

export const revalidate = 60;

export default async function BlogsPage() {
  const featured = allBlogs.find((blog) => blog.slug === "test")!;

  const top2 = allBlogs.find((blog) => blog.slug === "test")!;

  const top3 = allBlogs.find((blog) => blog.slug === "test")!;

  const sorted = allBlogs
    .filter((p) => p.published)
    .filter(
      (blog) =>
        blog.slug !== featured.slug &&
        blog.slug !== top2.slug &&
        blog.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-zinc-400">Will be saying something here...</p>
        </div>
        <div className="h-px w-full bg-zinc-800" />

        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <Card>
            <Link href={`/blogs/${featured.slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="h-4 w-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 font-monument text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((blog) => (
              <Card key={blog.slug}>
                <Article blog={blog} views={0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((blog) => (
                <Card key={blog.slug}>
                  <Article blog={blog} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((blog) => (
                <Card key={blog.slug}>
                  <Article blog={blog} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((blog) => (
                <Card key={blog.slug}>
                  <Article blog={blog} views={0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
