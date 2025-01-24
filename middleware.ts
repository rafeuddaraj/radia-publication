import NextAuth from "next-auth";
import { DASHBOARD, LOGIN, PUBLIC_ROUTES, ROOT } from "./lib/routes";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { getToken } from "next-auth/jwt";
const { auth: nextAuth } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
});

export default nextAuth(async (req: NextRequest) => {
  const { nextUrl } = req;

  // Check if the session exists
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isAuthenticated = !!token;
  const role = token?.role as string;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.includes(route)) ||
    ROOT === nextUrl.pathname;

  if (isAuthenticated && nextUrl.pathname === LOGIN) {
    return NextResponse.redirect(
      new URL(role === "admin" ? `/dashboard` : "/", nextUrl)
    );
  }

  if (nextUrl.pathname.startsWith(DASHBOARD) && role !== "admin") {
    return NextResponse.redirect(
      new URL(isAuthenticated ? ROOT : LOGIN, nextUrl)
    );
  }

  if (!isPublicRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
