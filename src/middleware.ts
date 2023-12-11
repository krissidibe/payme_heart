import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
export async function middleware(req: NextRequest) {
  const token = req.headers.get("Authorization");

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((error) => {
      console.log(error);
    }));

  const url = req.url;

  if (!verifiedToken) {
    if (req.nextUrl.pathname.startsWith("/api/protected")) {
      return new Response(
        JSON.stringify({ error: { message: `authentification required ${token}` } })
      );
    }
  }
}


 


export const config = {
  matcher: [
    "/api/protected/:path*"

],
};
