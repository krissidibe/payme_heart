import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  return new Response(
    JSON.stringify({
      iosForced: true,
      iosVersion: 100,
      iosLink: "https://apple.com",

      androisForced: false,
      androisVersion: 100,
      androidLink: "https://google.com",
    })
  );

  // return new Response(JSON.stringify("ENTERPRISE GET"));
}
