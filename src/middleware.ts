import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    const isPublic = path === "/login";
    const token = request.cookies.get("kinde_token")?.value || "";
    if (isPublic && token) {
      return NextResponse.redirect(new URL("/todos", request.url));
    } else if (!isPublic && !token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error: any) {
    console.log("middleware error: ", error.message);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/todos/:path*", "/logout", "/verify", "/login"],
};
