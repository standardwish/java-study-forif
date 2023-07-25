import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 표준성: "정보시스템학과" });
}
