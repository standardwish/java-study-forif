"use client";
import type { AssignmentData } from "@/types/notion_type";
import { getNotionDatabase, getNotionPage } from "../hooks/getNotion";

export default async function Page() {
  const getDatabase = async () => {
    const res: AssignmentData = await getNotionDatabase();
    const data = res.rowStructured;
    return data;
  };
  const data = await getDatabase();

  const getPage = async (page_id: string) => {
    const res: any = await getNotionPage(page_id);
    console.log(res);
  };

  return (
    <>
      <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-3 h-screen">
        <div className="mb-5 flex flex-row gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-3xl">과제 리스트</h1>
        </div>
        <div className="w-full relative overflow-x-auto my-14">
          <table className="w-full text-sm text-center overflow-x-auto">
            <thead className="text-xs text-pink-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="py-3 text-base w-48">
                  과제명
                </th>
                <th scope="col" className="py-3 text-base w-16">
                  학습내용
                </th>
                <th scope="col" className="py-3 text-base w-16">
                  주차
                </th>
                <th scope="col" className="py-3 text-base w-16">
                  멘토
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row" className="py-4" key={idx}>
                      <button
                        onClick={async () => {
                          await getPage("dc4ffdc8-3c1a-4d8a-b10a-00a1df44be32");
                        }}
                      >
                        {val.NameOfAssignment}
                      </button>
                    </th>
                    <td className="py-4 flex flex-row items-center gap-3 text-xs">
                      {val.Tags.map((tag, idx) => {
                        return (
                          <span
                            className={`bg-${tag.color}-800 px-1 border-2 border-${tag.color}-800 rounded-sm`}
                            key={idx}
                          >
                            {tag.name}{" "}
                          </span>
                        );
                      })}
                    </td>
                    <td className="py-4">{val.Week}</td>
                    <td className="py-4">{val.Mentor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row gap-3">
          <span className="border-red-800 bg-red-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-blue-800 bg-blue-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-purple-800 bg-purple-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-green-800 bg-green-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-orange-800 bg-orange-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-brown-800 bg-brown-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-gray-800 bg-gray-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-pink-800 bg-pink-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
        </div>
      </div>
    </>
  );
}
