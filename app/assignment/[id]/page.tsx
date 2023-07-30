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
  const [problem, setProblem] = useState<string[]>([]);
  const [exp, setExp] = useState<string[]>([]);
  const [title, setTtile] = useState("");

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
    const paragraphs = blockData?.data.results.map((res) =>
      res.paragraph.rich_text.map((text) => text.plain_text)
    );
    if (typeof paragraphs !== "undefined") {
      const problem = [];
      const expectation = [];
      let expectIndex = 0;
      for (let i = 1; i < paragraphs.length; i++) {
        if (paragraphs[i][0] === "출력") {
          expectIndex = i + 1;
          break;
        }
        if (paragraphs[i][0] === undefined) {
          problem.push("");
        } else {
          problem.push(paragraphs[i][0]);
        }
      }

      for (let i = expectIndex; i < paragraphs.length; i++) {
        if (paragraphs[i][0] === undefined) {
          expectation.push("");
        } else {
          expectation.push(paragraphs[i][0]);
        }
      }
      setProblem(problem);
      setExp(expectation);
      setTtile(paragraphs[0][0]);
    } else {
      setProblem(["데이터를 불러오는 데 실패했습니다."]);
      setExp(["데이터를 불러오는 데 실패했습니다."]);
    }
  }, [blockData, pageId]);

  return (
    <div className="w-4/5 mx-auto mb-3 mt-10 md:mt-5 h-screen">
      <div className="mb-5 flex flex-row gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold md:text-3xl text-center">
          {blockData ? title : "로딩중"}
        </h1>
      </div>
      <div className="leading-7 text-left">
        <h1 className="text-2xl mb-3">문제</h1>
        <hr className="w-12 h-1 bg-white mb-5" />
        <div className="mb-4">
          {blockData
            ? problem.map((row, idx) => {
                return <p key={idx}>{row}</p>;
              })
            : "로딩 중"}
        </div>
        <h1 className="text-2xl mb-3">출력</h1>
        <hr className="w-12 h-1 bg-white mb-5" />
        <div className="mb-4">
          {blockData
            ? exp.map((row, idx) => {
                return <p key={idx}>{row}</p>;
              })
            : "로딩 중"}
        </div>
      </div>
      {!blockData && <Spinner />}
    </div>
  );
}
