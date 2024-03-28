import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export const runtime = "nodejs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 font-mono ">
      {children}

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
    </div>
  );
}
