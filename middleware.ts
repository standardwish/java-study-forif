// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { default } from "next-auth/middleware";
export const config = {
  runtime: "experimental-edge",
};
