"use client";
import Spinner from "@/app/components/loading/Spinner";
import { getNotionPage } from "@/app/hooks/getNotion";
import { type BlockData } from "@/types/notion_type";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const pageId = pathname.split("/")[2];

  const [blockData, setBlockData] = useState<BlockData>();
  const [contents, setContents] = useState<string[]>([]);
  const content: string[] = [];

  useEffect(() => {
    async function getPage() {
      const getBlock = async (pageId: string) => {
        const res: BlockData = await getNotionPage(pageId);

        return res;
      };
      const resData = await getBlock(pageId);

      setBlockData(resData);
    }
    getPage();
    blockData?.data.results.map((res) => {
      if (res.type === "paragraph") {
        res.paragraph.rich_text.map((text) => content.push(text.plain_text));
      } else {
        res.code.rich_text.map((text) => content.push(text.plain_text));
      }
    });

    setContents(content);
  }, [blockData, pageId]);

  return (
    <div className="w-4/5 mx-auto mb-3 mt-10 md:mt-5 h-screen">
      <div className="mb-5 flex flex-row gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold md:text-3xl text-center">
          {blockData ? "문제 보기" : "로딩중"}
        </h1>
      </div>
      <div className="leading-7 text-left">
        <h1 className="text-2xl mb-3">문제</h1>
        <hr className="w-12 h-1 bg-white mb-5" />
        <div className="mb-4">
          {blockData
            ? contents.map((row, idx) => {
                return <p key={idx}>{row}</p>;
              })
            : "로딩 중"}
        </div>
      </div>
      {!blockData && <Spinner />}
    </div>
  );
}
