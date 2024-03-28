import type { MDXComponents } from "mdx/types";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { cn } from "~/lib/utils";

const components: MDXComponents = {
  h1: ({ className, children, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ className, children, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ className, children, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ className, href, children, ...props }) => (
    <Link
      href={href ?? "/"}
      className={cn(
        "font-medium text-zinc-900 underline underline-offset-4",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  ),
  p: ({ className, children, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ className, children, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li className={cn("mt-2", className)} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: ({
    className,
    alt,
    children,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border border-zinc-200", className)}
      alt={alt}
      {...props}
    >
      {children}
    </img>
  ),
  hr: ({ children, ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props}>
      {children}
    </hr>
  ),
  table: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props}>
        {children}
      </table>
    </div>
  ),
  tr: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ className, children, ...props }) => (
    <th
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ className, children, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-900 py-4",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        "relative rounded border bg-zinc-300 bg-opacity-25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-600",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="mdx">
      <MDXRemote source={code} components={components} />
    </div>
  );
}
