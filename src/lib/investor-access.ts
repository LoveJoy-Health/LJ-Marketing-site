export const INVESTOR_ACCESS_COOKIE = "lj_investor_access";

export const INVESTOR_UNLOCK_PATH = "/investors/unlock";

export function isInvestorPath(pathname: string) {
  return pathname === "/investors" || pathname.startsWith("/investors/");
}

export function safeInvestorNext(value: string | null | undefined) {
  if (!value || !value.startsWith("/investors")) return "/investors/pitch-deck";
  if (value.startsWith("//") || value.includes("://")) {
    return "/investors/pitch-deck";
  }
  return value;
}
