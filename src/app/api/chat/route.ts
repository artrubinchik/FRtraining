import { NextResponse } from "next/server";
import { getSmartReply } from "@/lib/smartChat";

export async function POST(req: Request) {
  const { message } = await req.json();

  return NextResponse.json({
    reply: getSmartReply(message || "")
  });
}