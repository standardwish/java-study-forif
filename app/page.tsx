"use client";
import Link from "next/link";
import ForwardArrow from "./components/icons/arrow_forward";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import Loading from "./loading";

function MainPage() {
  const { data: session } = useSession();
  return (
    <div>
      <div className="pl-8 bg-[url('/images/main-bg-img.webp')] bg-cover w-full h-screen bg-center bg-fixed main-bg-img flex md:flex-col flex-row justify-between md:justify-normal">
        <div className="pt-24 md:pt-12 flex flex-col gap-6 w-2/5 md:w-full break-keep animate-fadein">
          <h1 className="text-6xl md:text-4xl">
            자바 공부를 시작하는 가장 뛰어난 방법
          </h1>
          <p className="text-base">
            질 좋은 강의자료와 과제, 그리고 편리한 과제 제출 시스템까지.포리프
            자바 스터디에서 빠르고 정확하게 자바를 배워보세요.
          </p>
          {session ? (
            <button className="w-60 h-14 border-2 rounded-md border-blue-600 bg-blue-600 text-white">
              <Link
                href="https://galmaehs.notion.site/Catching-Java-f4c0fbad87844db2b408f13a0e4e973b?pvs=4"
                className="flex flex-row gap-5 items-center justify-center"
                target="_blank"
              >
                이번 주 과제 제출하기
              </Link>
            </button>
          ) : (
            <button className="w-60 h-14 border-2 rounded-md border-blue-600 bg-blue-600 text-white">
              <Link
                href="https://galmaehs.notion.site/Catching-Java-f4c0fbad87844db2b408f13a0e4e973b?pvs=4"
                className="flex flex-row gap-5 items-center justify-center"
                target="_blank"
              >
                신청하기
                <ForwardArrow />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
}
