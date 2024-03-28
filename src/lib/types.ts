export interface Project {
  title: string;
  image: string;
  color: string;
  service: string;
  service_fr?: string;
  link: string;
}

export interface MDXFrontMatter {
  slug: string;
  url?: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
}
