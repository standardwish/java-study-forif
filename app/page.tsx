"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import useTypingWords from "./components/animation/typing";
import MainCode from "./components/codes/main";
import Notification from "./components/icons/notification";
import { NotoSansKR, UbunTu } from "./fonts";

import ScrollDown from "./components/icons/scroll_arrow_down";
import ScrollUp from "./components/icons/scroll_arrow_up";
import TerminalIcon from "./components/icons/terminal";
import Loading from "./loading";

const UnAuthPage = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={UbunTu.className}>
      <div className="text-8xl md:text-4xl leading-normal text-center items-center flex justify-center font-bold h-screen pt-20">
        <h1 className="relative mt-[-15rem] animate-fadein">
          <p>Think</p>
          <p className="text-yellow-500">Objective</p>
          <p className="text-red-500">Java</p>
        </h1>
        {position < 3000 ? (
          <div className="fixed bottom-6 left-6 animate-bounce-slow flex flex-row gap-2 items-center">
            <p className="text-base">SCROLL</p>
            <ScrollDown />
          </div>
        ) : (
          <button
            className="fixed bottom-6 left-6 animate-bounce-slow flex flex-row gap-2 items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p className="text-base">TOP</p>
            <ScrollUp />
          </button>
        )}
      </div>
      <Fade duration={2000} className={NotoSansKR.className}>
        <div
          className="text-center font-bold h-screen pt-20 relative"
          id="introduction"
        >
          <h1 className="text-6xl">Forif Java Study</h1>
          <p className="text-3xl py-5">멘토 : 양병현 / 표준성</p>
          <p className="text-xl pt-10">
            한양대학교 중앙 동아리 포리프에서
            <br />
            기본적인 프로그래밍 지식(반복문, 연산자 등)을 가진
            <br />
            포리프 부원들을 대상으로 스터디를 모집합니다.
          </p>
        </div>
      </Fade>
      <Fade duration={2000} className={NotoSansKR.className}>
        <div
          className="text-center font-bold h-screen pt-20 relative"
          id="apply_support"
        >
          <h1 className="text-6xl">자바란?</h1>
          <p className="text-3xl py-5">What is Java</p>
          <p className="text-xl py-10">
            널리 사용되는 객체 지향 프로그래밍 언어 및 소프트웨어 플랫폼입니다.
            <br />
            자바 가상 머신(JVM, Java Virtual Machine)을 사용하여 운영체제와
            독립적으로
            <br /> 동작하므로 어느 운영체제에서나 같은 형태로 실행 될 수
            있습니다.
          </p>
          <Image
            src="/images/java.png"
            width={160}
            height={160}
            className="absolute top-0 left-0"
            alt="Java Explain 1"
          />
        </div>
      </Fade>

      <Fade duration={2000} className={NotoSansKR.className}>
        <div
          className="text-center font-bold h-screen pt-20"
          id="apply_support"
        >
          <h1 className="text-6xl">지원 조건</h1>
          <div className="relative">
            <p className="text-3xl py-5">최소한의 프로그래밍 경험</p>
            <p className="text-xl py-10">
              다음과 같은 코드를 이해해보세요. 자바는 C언어의 기본적인
              <br />
              문법을 거의 그대로 사용합니다.
            </p>
            <TerminalIcon />
          </div>
          <MainCode />
        </div>
      </Fade>
      <Fade duration={2000} className={NotoSansKR.className}>
        <div
          className="text-center items-center flex flex-col justify-center font-bold h-screen pt-20"
          id="apply"
        >
          <h1 className="text-6xl">신청하기</h1>
          <div className="relative">
            <p className="text-3xl py-5">포리프</p>
            <button
              className="text-xl my-16 border-2 border-gray-100 w-60 h-14 hover:bg-white hover:text-black"
              onClick={() => console.log("APPLY")}
            >
              신청하기
            </button>
            <p className="text-xl text-yellow-500">지원기간 : 07/26 - 08/12</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

const AuthPage = () => {
  const { data: session } = useSession();
  return (
    <div className={UbunTu.className}>
      <div className="relative text-8xl md:text-4xl leading-normal items-center flex flex-col justify-center font-bold h-screen pt-20">
        <div className="relative animate-fadein mt-[-15rem]">
          <h1>포리프 자바 스터디</h1>
          <Link href="/">
            <Notification />
          </Link>
          <h1 className="text-2xl">
            {useTypingWords(`환영해요, ${session?.user.username}님.`, 100)}
          </h1>
        </div>
      </div>
    </div>
  );
};

function MainPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-black bg-fixed w-full" id="main">
        <div className=" text-white mx-auto w-2/3">
          {status === "loading" ? (
            <Loading />
          ) : status === "authenticated" ? (
            <AuthPage />
          ) : (
            <UnAuthPage />
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
}
