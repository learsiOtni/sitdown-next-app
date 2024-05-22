import { NextRequest, NextResponse } from "next/server";
import { fetchWrapper } from "./util/fetchWrapper";

//const protectedRoutes = ["/dashboard", "/updates", "/profile", "/projects", "/tags", "/users", "/updates/:path*"]

/*export const config = {
    matcher: ["/dashboard", "/updates", "/profile", "/projects", "/tags", "/users", "/updates/:path*"]
};*/

async function isAuthenticated(req: NextRequest) {

    const user = await fetchWrapper.get(
        process.env.NEXT_PUBLIC_API_URL + "user",
        undefined,
        req.cookies.get('authToken')?.value
    )
    
    // if theres error, token is not valid and unable to validate user
    if (user.error) return false
    return true
}

/*export default async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated(req);

    if(!isAuth && config.matcher.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/login", req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}*/

async function getUpdate(req: NextRequest) {
    /*const data = (await fetchWrapper.get(
        process.env.NEXT_PUBLIC_API_URL + "updates/" + 
      ));
        console.log("updates page", data);
    
      if(data.error) redirect("/dashboard");*/
}

export default async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated(req);

    if(!isAuth) {
        const absoluteURL = new URL("/login", req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString());
    }

    //if(req.nextUrl.pathname.match(/updates\/.*/)) { 
        //console.log(req.se);
    //}
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

