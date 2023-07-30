import { Client } from "@notionhq/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const notionAccessToken = process.env.NOTION_ACCESS_TOKEN;

const notion = new Client({
  auth: notionAccessToken,
});

export async function GET({ params }: any) {
  const { id } = params;

  if (!notionAccessToken) {
    throw new Error("Missing Notion KEYs");
  }
  if (typeof id === "string") {
    const data = await notion.blocks.children.list({
      block_id: id,
      page_size: 100,
    });
    return NextResponse.json({ data }, { status: 200 });
  } else {
    return NextResponse.json(
      { "NO PARAM": "NO PARAMETER IN YOUR REQUEST" },
      { status: 403 }
    );
  }
}
