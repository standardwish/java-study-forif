import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest, { params }: any) {
  const { username } = params;
  await connectMongoDB();

  const user = await users.findOne({ username: username }).exec();
  return NextResponse.json({ user }, { status: 200 });
}
