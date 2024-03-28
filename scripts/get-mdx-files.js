import { existsSync, statSync } from "fs";
import { access, mkdir, readdir, writeFile } from "fs/promises";
import path from "path";
import { format } from "prettier";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

const GENERATED_FOLDER = path.join(process.cwd(), ".generated-mdx", "index.ts");
const BLOGS_FOLDER = path.join(process.cwd(), "src", "data", "blogs");

export async function getMDXFiles() {
  const blogs = [];

  const fileList = await readdir(BLOGS_FOLDER);

  for (const file of fileList) {
    const name = `${BLOGS_FOLDER}/${file}`;

    if (statSync(name).isDirectory()) {
      continue;
    } else {
      try {
        await access(name);
      } catch (err) {
        return {
          count: blogs.length,
          blogs,
        };
      }

      const markdown = await read(name, {
        encoding: "utf8",
      });

      matter(markdown, {
        strip: true,
      });

      blogs.push({
        slug: file.replace(".mdx", ""),
        ...markdown.data.matter,
        markdown: String(markdown),
      });
    }
  }

  const filePath = path.resolve(GENERATED_FOLDER);

  if (!existsSync(filePath)) {
    await mkdir(path.dirname(filePath), { recursive: true });
  }

  const content = await format(
    `export const allBlogs = ${JSON.stringify(blogs)}`,
    { parser: "typescript" },
  );

  await writeFile(filePath, content);
}
