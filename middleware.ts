import NextAuth from "next-auth";
import { ADMIN_ROUTES, LOGIN, PUBLIC_ROUTES, ROOT } from "./lib/routes";
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
  const role = token?.role; 

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  if (isAuthenticated && nextUrl.pathname === LOGIN) {
    return NextResponse.redirect(new URL(ROOT, nextUrl));
  }

  const isAdminRoute =
    ADMIN_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  // Admin user access
  if (isAuthenticated && role === "admin" && isAdminRoute) {
    return NextResponse.next();
  }
  // Reader User access
  else if (isAuthenticated && role === "user" && isPublicRoute) {
    return NextResponse.next();
  }
  // Redirect to login if not authenticated
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
