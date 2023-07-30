import type { notionRow } from "@/types/notion_type";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionDatabaseId = process.env.NOTION_DATABASE;
const token = process.env.NOTION_ACCESS_TOKEN;

const notion = new Client({
  auth: token,
  notionVersion: "2022-06-28",
});

export async function GET() {
  if (!token || !notionDatabaseId) {
    throw new Error("Missing Notion KEYs");
  }
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
    sorts: [
      {
        property: "Week",
        direction: "ascending",
      },
    ],
  });

  // @ts-ignore
  const rows = query.results.map((res) => res.properties) as notionRow[];
  const pageIdRows = query.results.map((res) => res.id);

  const rowStructured = rows.map((row, idx) => ({
    NameOfAssignment: row.NameOfAssignment.title[0].text.content,
    Tags: row.Tags.multi_select.map((tag) => tag),
    Week: row.Week.rich_text[0].text.content,
    Mentor: row.Mentor.rich_text[0].text.content,
    pageId: pageIdRows[idx],
  }));

  return NextResponse.json({ rowStructured }, { status: 200 });
}
