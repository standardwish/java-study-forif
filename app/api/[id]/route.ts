import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { id } = params;

  await connectMongoDB();
  console.log(typeof id);

  const user = await users.findOne({ username: id });
  return NextResponse.json({ user }, { status: 200 });
}
