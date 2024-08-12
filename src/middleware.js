import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });

  const isLoggedIn = !!token;
  const loginPath = req.nextUrl.pathname === "/login";
  const diagnosePath = req.nextUrl.pathname === "/diagnose";

  if (isLoggedIn && loginPath)
    return NextResponse.redirect(new URL("/diagnose", req.url));

  if (!isLoggedIn && diagnosePath)
    return NextResponse.redirect(new URL("/login", req.url));

  return null;
}

export const config = {
  matcher: ["/login", "/diagnose"],
};
