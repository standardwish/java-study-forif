import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionDatabaseId = process.env.NOTION_DATABASE;
const notionAccessToken = process.env.NOTION_ACCESS_TOKEN;

const notion = new Client({
  auth: notionAccessToken,
});

interface multiSelect {
  name: string;
  color: string;
}

interface Row {
  NameOfAssignment: { id: string; title: { text: { content: string } }[] };
  Tags: {
    id: string;
    multi_select: multiSelect[];
  };
  Mentor: { id: string; rich_text: [{ text: { content: string } }] };
}

export async function GET() {
  if (!notionAccessToken || !notionDatabaseId) {
    throw new Error("Missing Notion KEYs");
  }
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  // @ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];

  const rowStructured = rows.map((row) => ({
    NameOfAssignment: row.NameOfAssignment.title[0].text.content,
    Tags: [
      row.Tags.multi_select.map((val) => val.name),
      row.Tags.multi_select.map((val) => val.color),
    ],
    Mentor: row.Mentor.rich_text[0].text.content,
  }));

  return NextResponse.json({ rowStructured });
}
