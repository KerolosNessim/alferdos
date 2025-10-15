import { NextResponse } from "next/server";

export function middleware(req) {
  const role = req.cookies.get("role")?.value;
  const { pathname } = req.nextUrl;

  // 🚫 If there's no role and the user tries to access protected routes
  if (
    !role &&
    (pathname.startsWith("/profile") || pathname.startsWith("/teacher"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🧭 If the user tries to access /profile but their role is not "student"
  if (pathname.startsWith("/profile") && role !== "student") {
    return NextResponse.redirect(new URL("/teacher", req.url));
  }

  // 🧭 If the user tries to access /teacher but their role is not "teacher"
  if (pathname.startsWith("/teacher") && role !== "teacher") {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  // ✅ If the user already has a role and tries to access login or sign-up pages
  if (
    role &&
    (pathname.startsWith("/login") || pathname.startsWith("/sign-up"))
  ) {
    // If role is "student", redirect to /profile
    if (role === "student") {
      return NextResponse.redirect(new URL("/profile", req.url));
    }
    // If role is "teacher", redirect to /teacher
    if (role === "teacher") {
      return NextResponse.redirect(new URL("/teacher", req.url));
    }
  }

  // ✅ Allow the request to proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*", // All profile routes
    "/teacher/:path*", // All teacher routes
    "/login", // Login page
    "/sign-up", // Sign-up page
  ],
};
