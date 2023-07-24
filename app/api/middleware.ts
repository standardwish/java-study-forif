import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge", // this is a pre-requisite
};

export default (request: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
  });
};
