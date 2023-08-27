"use client";
import Link from "next/link";
import { getDatabase } from "../hooks/getNotion";

export default async function Page() {
  const data = await getDatabase();

  return (
    <>
      <div className="mb-3 mt-10 md:mt-5 md:ml-3 h-screen">
        <h1 className="text-center text-2xl">과제 리스트</h1>
        <div className="relative my-14 overflow-auto">
          <table className="text-sm text-center whitespace-nowrap">
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
                      <Link href={`/assignment/${val.pageId}`}>
                        {val.NameOfAssignment}
                      </Link>
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
      </div>
    </>
  );
}
