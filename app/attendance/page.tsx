import getDate from "@/lib/getDate";
import { type UsersType } from "@/types/type";
import { Suspense } from "react";
import { getAllUsers } from "../hooks/getUser";
import Loading from "./loading";

async function ListMember() {
  const date = getDate(new Date());
  const { users }: UsersType = await getAllUsers();
  console.log(users);

  const isAttend = true;

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h1 className="text-center">{date}</h1>
      <h1 className="text-4xl text-center mb-5">스터디 부원 명단</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={user._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.username}
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
