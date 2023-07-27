"use client";
import BlackForif from "@/app/components/icons/black-forif";
import { showToast } from "@/app/components/toast/toast";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logOutUser } from "../../hooks/setUser";
import { setNewUser } from "@/app/hooks/setNewUser";
import { useState } from "react";
import Modal from "@/app/components/modal/modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/recoil/store";
export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const username = session?.user.username;
  const major = session?.user.major;
  const uid = session?.user._id;
  const admin = ["64bbab011a676a98d00cf34b", "64bbab0e1a676a98d00cf34d"];
  const [modalOpen, isModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useState("");

  function setModalOpen({ actionType }: { actionType: string }) {
    switch (actionType) {
      case "ADD":
        setModalType("ADD");
        break;
      case "REMOVE":
        setModalType("REMOVE");
        break;
      case "SHOWUSER":
        setModalType("SHOWUSER");
        break;
    }
    isModalOpen(true);
  }

  const logout = () => {
    logOutUser();
    router.refresh();
    router.push("/");
    showToast({
      type: "success",
      message: "로그아웃에 성공했습니다",
    });
  };

  function IsAdmin(adminList: string[], uid: string | undefined) {
    const isAdmin =
      adminList.find((e) => e === uid) !== undefined ? true : false;
    return isAdmin;
  }

  return (
    <>
      {modalOpen ? <Modal actionType={modalType} /> : ""}
      <div className={modalOpen ? "opacity-50" : ""}>
        {IsAdmin(admin, uid) && (
          <div className="text-center text-4xl mt-20">ADMIN PANEL</div>
        )}
        <div className="py-20 text-black">
          <div className="py-14 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center w-2/5 md:w-full md:bg-black mx-auto md:text-white">
            <div className="flex flex-col justify-center items-center mb-14 border-2 border-black rounded-full p-10 md:border-white">
              <BlackForif />
            </div>
            <h1 className="text-3xl mb-14 font-bold">
              {username}
              {IsAdmin(admin, uid) && "(관리자)"}
            </h1>
            <div className="w-3/4 relative overflow-x-auto mb-14">
              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                      {major}
                    </th>
                    <td className="py-4">{session?.user.assignment}</td>
                    <td className="py-4">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {IsAdmin(admin, uid) && (
              <div className="flex flex-row w-2/3 gap-4 my-10 items-center justify-center md:flex-col md:w-full">
                <button
                  type="submit"
                  className="hover:font-bold text-teal-600 border-2 border-teal-600 p-3 md:w-72 rounded-md hover:bg-teal-600 hover:text-white"
                  onClick={() =>
                    setModalOpen({
                      actionType: "SHOWUSER",
                    })
                  }
                >
                  유저 정보
                </button>
                <button
                  type="submit"
                  className="hover:font-bold text-blue-500 border-2 border-blue-500 p-3 md:w-72 rounded-md hover:bg-blue-500 hover:text-white"
                  onClick={() =>
                    setModalOpen({
                      actionType: "ADD",
                    })
                  }
                >
                  유저 추가
                </button>
                <button
                  type="submit"
                  className="hover:font-bold text-red-500 border-2 border-red-500 p-3 md:w-72 rounded-md hover:bg-red-500 hover:text-white"
                  onClick={() =>
                    setModalOpen({
                      actionType: "REMOVE",
                    })
                  }
                >
                  유저 삭제
                </button>
              </div>
            )}
            <button
              type="submit"
              className="w-full hover:font-bold"
              onClick={logout}
            >
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
      </div>
    </>
  );
}
