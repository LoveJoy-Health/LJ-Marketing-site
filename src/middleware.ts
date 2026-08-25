import { NextResponse, type NextRequest } from "next/server";
import {
  INVESTOR_ACCESS_COOKIE,
  INVESTOR_UNLOCK_PATH,
  isInvestorPath,
} from "@/lib/investor-access";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!isInvestorPath(pathname)) return NextResponse.next();
  if (pathname === INVESTOR_UNLOCK_PATH) return NextResponse.next();

  const granted = request.cookies.get(INVESTOR_ACCESS_COOKIE)?.value === "1";
  if (granted) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = INVESTOR_UNLOCK_PATH;
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/investors", "/investors/:path*"],
};
