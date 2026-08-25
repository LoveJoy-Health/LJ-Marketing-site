import { NextResponse } from "next/server";
import {
  INVESTOR_ACCESS_COOKIE,
  safeInvestorNext,
} from "@/lib/investor-access";

function expectedPassword() {
  return process.env.INVESTOR_DECK_PASSWORD ?? "lovejoy-2027";
}

export async function POST(request: Request) {
  let body: { password?: string; next?: string } = {};
  try {
    body = (await request.json()) as { password?: string; next?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if ((body.password ?? "") !== expectedPassword()) {
    return NextResponse.json(
      { error: "That password is incorrect." },
      { status: 401 },
    );
  }

  const next = safeInvestorNext(body.next);
  const response = NextResponse.json({ ok: true, next });
  response.cookies.set(INVESTOR_ACCESS_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
