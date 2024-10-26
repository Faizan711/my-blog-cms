import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export default withAuth({
//   callbacks: {
//     authorized: async ({ req, token }) => {
//       if (req.nextUrl.pathname.startsWith("/admin"))
//         return token?.role === "admin";
//       return !!token;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// });

export default withAuth((req) => {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (req.nextauth.token?.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }
});

export const config = { matcher: ["/admin:path*"] };
