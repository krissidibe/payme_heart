import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  return new Response(
    JSON.stringify({
      maliba: false,
      bamako: 100,
    })
  );

  // return new Response(JSON.stringify("ENTERPRISE GET"));
}
