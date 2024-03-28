import Link from "next/link";
import { Eye } from "lucide-react";

interface Blog {
  slug: string;
  date: string;
  title: string;
  description: string;
}

interface Props {
  blog: Blog;
  views: number;
}

export function Article({ blog, views }: Props) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="drop-shadow-orange text-xs text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:text-white">
            {blog.date ? (
              <time dateTime={new Date(blog.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(blog.date),
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="flex items-center  gap-1 text-xs text-zinc-500">
            <Eye className="h-4 w-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
        </div>
        <h2 className="z-20 font-monument text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl">
          {blog.title}
        </h2>
        <p className="z-20 mt-4 text-sm  text-zinc-400 duration-1000 group-hover:text-zinc-200">
          {blog.description}
        </p>
      </article>
    </Link>
  );
}
