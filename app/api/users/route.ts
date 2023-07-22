import connectMongoDB from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { username, password, major, assignment } = await request.json();
  await connectMongoDB();
  await Users.create({ username, password, major, assignment });

  return NextResponse.json({ messsage: "User Added" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await Users.find();
  return NextResponse.json({ users });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Users.findByIdAndDelete(id);
  return NextResponse.json({ message: "User Delected" }, { status: 200 });
}
