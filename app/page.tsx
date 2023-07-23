"use client";
import Link from "next/link";
import ForwardArrow from "./components/icons/arrow_forward";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import Loading from "./loading";

function MainPage() {
  const { data: session, status } = useSession();
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l9AzO1FMgM8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="border-2 border-black rounded-xl animate-fadein mt-24 md:mt-12 mr-10 md:w-5/6 w-2/5 h-2/4 md:h-1/4"
        ></iframe>
      </div>
    </div>
  );
}

export default function Home() {
  console.log(process.env.NODE_ENV);

  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
}
