export { default } from "next-auth/middleware";

export const config = {
  // Protect all routes under /admin except /admin/login and /admin/register
  matcher: ['/admin/dashboard/:path*', '/admin/dashboard']
};
