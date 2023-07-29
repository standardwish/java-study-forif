import type { title, Tags, rich_text, rich_week } from "@/types/notion_type";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionDatabaseId = process.env.NOTION_DATABASE;
const notionAccessToken = process.env.NOTION_ACCESS_TOKEN;

const notion = new Client({
  auth: notionAccessToken,
});

export interface notionRow {
  NameOfAssignment: title;
  Tags: Tags;
  Week: rich_week;
  Mentor: rich_text;
}

export async function GET() {
  if (!notionAccessToken || !notionDatabaseId) {
    throw new Error("Missing Notion KEYs");
  }
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  // @ts-ignore
  const rows = query.results.map((res) => res.properties) as notionRow[];

  const rowStructured = rows.map((row) => ({
    NameOfAssignment: row.NameOfAssignment.title[0].text.content,
    Tags: row.Tags.multi_select.map((tag) => tag),
    Week: row.Week.rich_text[0].text.content,
    Mentor: row.Mentor.rich_text[0].text.content,
  }));

  return NextResponse.json({ rowStructured });
}
