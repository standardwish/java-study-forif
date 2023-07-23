"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Forif from "../../components/icons/forif";
import { showToast } from "../../components/toast/toast";
import { loginUser } from "../../hooks/setUser";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!username || !password) {
      showToast({
        type: "error",
        message: "이름과 비밀번호를 모두 입력해주세요.",
      });
    } else {
      try {
        const loginRes = await loginUser({ username, password });
        if (loginRes?.error === null) {
          router.push("/");
          showToast({
            type: "success",
            message: `환영해요, ${username}님!`,
          });
        } else if (loginRes?.error === "Password InCorrect Credentials") {
          showToast({
            type: "error",
            message: `비밀번호가 맞지 않아요. 비밀번호는 휴대전화 뒷 4자리에요.`,
          });
        } else if (loginRes?.error === "No User Credentials") {
          showToast({
            type: "error",
            message: `데이터베이스에 해당하는 유저가 없어요.`,
          });
        }
      } catch (error) {
        showToast({
          type: "error",
          message: `로그인에 실패했어요. 아직 DB에 추가되지 않았거나 존재하지 않는 이름이에요.`,
        });
      }
    }
  };

  return (
    <div className="py-24 md:py-10 my-5 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center w-2/5 md:w-4/5 mx-auto">
      <div className="space-y-4 flex flex-col justify-center items-center mb-6">
        <Forif />
        <h2 className="text-2xl text-cyan-900 font-bold">로그인하기</h2>
      </div>
      <form className="flex flex-col gap-8 w-full px-8" action="#">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            USERNAME
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="표준성"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="9868"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full text-black"
        >
          로그인
        </button>
      </form>
      <div className="mt-8 space-y-4 text-gray-600 text-center md:break-keep md:text-sm">
        <p className="text-xs">
          이 로그인 과정을 통해 이름, 학과 정보를 가져옵니다.
        </p>
      </div>
    </div>
  );
}
