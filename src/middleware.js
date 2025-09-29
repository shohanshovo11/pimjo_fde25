import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function middleware(req) {
  const authCookie = req.cookies.get("auth_token");
  
  // Check if cookie exists first
  if (!authCookie || !authCookie.value) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  // Verify token if cookie exists
  const ok = verifyToken(authCookie.value);
  if (!ok) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
