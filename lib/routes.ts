export const LOGIN = "/login";
export const ROOT = "/";

export const PUBLIC_ROUTES = ["/login", "/blog", "/api/auth"];
export const PRIVATE_ROUTES = ["/books"];
export const ADMIN_ROUTES = ["/dashboard", ...PRIVATE_ROUTES];
