import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  // Workaround for Next.js middleware bypass vulnerability
  // Prevent external requests with x-middleware-subrequest header
  if (request.headers.get("x-middleware-subrequest")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return authMiddleware({
    publicRoutes: ["/", "/api/uploadthing", "/api/user"],
  })(request, event);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
