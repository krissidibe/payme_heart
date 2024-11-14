import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  return new Response(
    JSON.stringify({
      //Ios
      maliba: true,
      bamako: 101,
      //Android
      maliba2: false,
      bamako2: 100,
    })
  );

  // return new Response(JSON.stringify("ENTERPRISE GET"));
}
