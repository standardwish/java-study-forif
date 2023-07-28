import getDate from "@/lib/getDate";
import { type UsersType } from "@/types/type";
import { Suspense } from "react";
import { getAllUsers } from "../hooks/getAllUsers";
import Loading from "./loading";
import { useSession } from "next-auth/react";

async function ListMember() {
  const date = getDate(new Date());
  const { users }: UsersType = await getAllUsers();

  const isAttend = true;

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h1 className="text-center">{date}</h1>
      <h1 className="text-4xl text-center mb-10">스터디 부원 명단</h1>
      <div className="relative w-5/6 mx-auto overflow-y-auto overflow-x-auto border-2 border-black rounded-xl">
        <table className="w-full h-full text-sm text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md">
            <tr>
              <th scope="col" className="px-6 py-3 text-base">
                이름
              </th>
              <th scope="col" className="px-6 py-3 text-base">
                학과
              </th>
              <th scope="col" className="px-6 py-3 text-base">
                출석 여부
              </th>
              <th scope="col" className="px-6 py-3 text-base">
                과제 제출 횟수
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any) => (
              <tr className="bg-white border-b text-black" key={user._id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <span>{user.username}</span>
                </th>
                <td className="px-6 py-4">{user.major}</td>
                <td className="px-6 py-4">
                  {isAttend ? (
                    <p className="text-blue-400">출석</p>
                  ) : (
                    <p className="text-red-400">결석</p>
                  )}
                </td>
                <td className="px-6 py-4">{user.assignment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ListMember />
    </Suspense>
  );
}
