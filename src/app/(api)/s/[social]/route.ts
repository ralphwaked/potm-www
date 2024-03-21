import { NextResponse } from "next/server";

export function GET(req: Request, { params }: { params: { social: string } }) {
  switch (params.social) {
    case "instagram": {
      return NextResponse.redirect("https://instagram.com/productiononthemove");
    }

    case "linkedin": {
      return NextResponse.redirect(
        "https://www.linkedin.com/company/production-on-the-move",
      );
    }

    default: {
      return NextResponse.redirect("https://productiononthemove.com");
    }
  }
}
