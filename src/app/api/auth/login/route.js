import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  // TODO: Validate user credentials properly
  const ok = email === "admin@example.com" && password === "admin123";
  if (!ok) return NextResponse.json({ ok: false }, { status: 401 });

  const token = await createToken({ sub: "admin", email });
  const res = NextResponse.json({ ok: true, token });
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
