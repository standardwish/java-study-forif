import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();

  const user = await users.findById(id).exec();
  return NextResponse.json({ user }, { status: 200 });
}
