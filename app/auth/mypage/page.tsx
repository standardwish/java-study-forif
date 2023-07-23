"use client";
import Forif from "@/app/components/icons/forif";
import { showToast } from "@/app/components/toast/toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { logOutUser } from "../../hooks/setUser";
import Link from "next/link";
export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(status);

  const logout = () => {
    logOutUser();
    router.refresh();
    router.push("/");
    showToast({
      type: "success",
      message: "로그아웃에 성공했습니다",
    });
  };

  return (
    <div className="bg-slate-50 py-20">
      <div className="py-14 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center w-2/5 md:w-4/5 mx-auto">
        <div className="space-y-4 flex flex-col justify-center items-center mb-6 border-2 border-black rounded-full p-10">
          <Forif />
        </div>
        <h1 className="text-3xl mb-24 font-bold">{session?.user.username}</h1>
        <div className="w-3/4 relative overflow-x-auto mb-20">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 text-base w-48">
                  학과
                </th>
                <th scope="col" className="py-3 text-base w-16">
                  과제
                </th>
                <th scope="col" className="py-3 text-base w-16">
                  출석률
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="py-4">
                  {session?.user.major}
                </th>
                <td className="py-4">{session?.user.assignment}</td>
                <td className="py-4">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="w-full text-black" onClick={logout}>
          로그아웃
        </button>
        <div className="mt-8 space-y-4  text-center md:break-keep md:text-sm">
          <p className="text-xs">
            <Link
              href="https://galmaehs.notion.site/f3a12337d3b1463bafdcbcfeec504aea?pvs=4"
              className="text-gray-400"
            >
              개인정보 보호방침
            </Link>
            을 확인하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
