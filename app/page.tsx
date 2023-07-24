"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Suspense, useEffect } from "react";
import useTypingWords from "./components/animation/typing";
import Notification from "./components/icons/notification";
import { UbunTu } from "./fonts";
import Loading from "./loading";

const UnAuthPage = () => {
  return (
    <div className="text-8xl md:text-4xl leading-normal text-center items-center flex justify-center font-bold h-screen mt-[-10rem]">
      <h1 className={UbunTu.className}>
        {useTypingWords("It's Time", 100)}
        <br />
        {useTypingWords("To", 120)}
        <br />
        {useTypingWords("Learn ", 140)}
        <span className="text-red-500">{useTypingWords("Java", 160)}</span>
      </h1>
    </div>
  );
};

const AuthPage = () => {
  const { data: session } = useSession();
  return (
    <div className={UbunTu.className}>
      <div className="relative text-8xl md:text-4xl leading-normal items-center flex flex-col justify-center font-bold h-screen mt-[-10rem]">
        <div className="relative animate-fadein">
          <h1>포리프 자바 스터디</h1>
          <Link href="/">
            <Notification darkMode={true} />
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
  console.log(status);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-black bg-fixed w-full scroll-smooth pt-20">
        <div className=" text-white mx-auto w-2/3">
          {status === "loading" ? (
            <Loading />
          ) : status === "authenticated" ? (
            <AuthPage />
          ) : (
            <UnAuthPage />
          )}
          <main>
            <h1 className="h-20">asas</h1>
          </main>
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
