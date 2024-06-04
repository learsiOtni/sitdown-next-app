import { NextRequest, NextResponse } from "next/server";
import { fetchWrapper } from "./util/fetchWrapper";

async function isAuthenticated(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;

    if (token) {
        const user = await fetchWrapper.get(
            `${process.env.NEXT_PUBLIC_API_URL}user`,
            undefined,
            token
        )
        if (user.id) return true
    }
    return false
}

export default async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated(req);

    if(!isAuth) {
        const absoluteURL = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/updates",
    "/updates/:path*",
    "/profile",
    "/projects",
    "/projects/:path*",
    "/tags",
    "/users",
  ],
};

