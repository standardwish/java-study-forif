"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Forif from "../components/icons/forif";
import Image from "next/image";
import supabaseAdmin from "@/supabase/supabase";
export default function SignUp() {
  return (
    <div className="py-24 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center mx-96 md:mx-0">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <Forif />
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">가입하기</h2>
      </div>
      <div className="mt-16 grid space-y-4">
        <button
          className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
        >
          <div className="flex items-center space-x-4 justify-center">
            <Image
              src="/images/google_icon.png"
              alt="google icon"
              width={30}
              height={30}
            />
            <button className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              학교 계정으로 로그인하기
            </button>
          </div>
        </button>
      </div>
      <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
        <p className="text-xs">
          이 로그인 과정을 통해 이름, 학과 정보를 가져옵니다.
        </p>
      </div>
    </div>
  );
}
