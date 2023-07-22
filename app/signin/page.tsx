"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Forif from "../components/icons/forif";
import login from "../hooks/login";
import { UserType } from "@/types/type";
import { showToast } from "../components/toast/toast";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!username || !pwd) {
      alert("Username and Password are required");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/users/${username}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        const userInfo: UserType = await res.json();
        console.log(`${userInfo.user.username} is Here!`);
        if (pwd === userInfo.user.password) {
          router.push("/");
          showToast({
            type: "success",
            message: `환영해요, ${userInfo.user.username}님!`,
          });
          localStorage.setItem("isLogin", "true");
        } else {
          console.log("Login Failed");
        }
      } else {
        throw new Error("Failed to Login!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-24 my-5 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center w-2/5 md:mx-0 mx-auto">
      <div className="space-y-4 flex flex-col justify-center items-center mb-6">
        <Forif />
        <h2 className="text-2xl text-cyan-900 font-bold">로그인하기</h2>
      </div>
      <form className="flex flex-col gap-8 w-full px-8" action="#">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            USERNAME
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="표준성"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9868"
            value={pwd || ""}
            onChange={(e) => setPwd(e.target.value)}
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
      <div className="mt-8 space-y-4 text-gray-600 text-center sm:-mb-8">
        <p className="text-xs">
          이 로그인 과정을 통해 이름, 학과 정보를 가져옵니다.
        </p>
      </div>
    </div>
  );
}
