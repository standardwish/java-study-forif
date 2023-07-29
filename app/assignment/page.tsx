import type { AssignmentData } from "@/types/notion_type";
import { getNotion } from "../hooks/getNotion";

export default async function Page() {
  const res: AssignmentData = await getNotion();
  const data = res.rowStructured;
  const assignData = data.sort(function (a, b) {
    return a.Week - b.Week;
  });

  return (
    <>
      <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-3 h-screen">
        <div className="mb-5 flex flex-row gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-3xl">과제 리스트</h1>
        </div>
        <div className="w-full relative overflow-x-auto my-14">
          <table className="w-full text-sm text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
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
              {assignData.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row" className="py-4" key={idx}>
                      <button>{val.NameOfAssignment}</button>
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
          <span className="border-red-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-blue-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-purple-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-green-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-default-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
          <span className="border-orange-800 border-2 rounded-md px-1 text-xs">
            TEST COLOR
          </span>
        </div>
      </div>
    </>
  );
}
