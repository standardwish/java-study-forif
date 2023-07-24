"use client";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { UbunTu } from "./fonts";
import Loading from "./loading";
import useTypingWords from "./components/animation/typing";

function MainPage() {
  const { data: session, status } = useSession();
  const title = "It's Time<br/>To</br>Learn Java";
  console.log(session, status);

  return (
    <div className="bg-black bg-fixed w-full scroll-smooth">
      <div className=" text-white mx-auto w-2/3">
        <div className="text-8xl md:text-4xl leading-normal text-center items-center flex justify-center font-bold h-screen mt-[-5rem]">
          <h1 className={UbunTu.className}>
            {useTypingWords("It's Time", 100)}
            <br />
            {useTypingWords("To", 150)}
            <br />
            Learn <span className="text-red-500">Java</span>
          </h1>
        </div>
        <div>
          <h1 className="h-20">asas</h1>
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
