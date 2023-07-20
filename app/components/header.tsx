"use client";
import Link from "next/link";
import { useState } from "react";
import UpArrow from "./icons/arrow_expand";
import DownArrow from "./icons/arrow_less";
import Logo from "./icons/logo";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="flex flex-row justify-between items-center py-3 border-b-2 h-20 border-black">
      <a href="/">
        <Logo />
      </a>
      <nav className="flex flex-row gap-10 text-base">
        <div className="inline-block">
          <button
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out hover:scale-110 duration-300"
            onClick={() => setShow(!show)}
          >
            ASSIGNMENT
            {show ? <DownArrow /> : <UpArrow />}
          </button>
          {show && (
            <ul className="border-2 border-gray-100 absolute top-16 flex flex-col gap-3 bg-white w-44 py-2 pl-4 transition ease-in-out delay-150 translate-y-1 duration-300 ">
              <li>
                <Link
                  href="/assignment"
                  className="z-0 hover:text-blue-500"
                  onClick={() => setShow(false)}
                >
                  과제 확인
                </Link>
              </li>
              <li>
                <Link
                  href="/assignment/submit"
                  className="z-0 hover:text-blue-500"
                  onClick={() => setShow(false)}
                >
                  과제 제출
                </Link>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <Link
                  href="/assignment/solution"
                  className="z-0 hover:text-blue-500"
                  onClick={() => setShow(false)}
                >
                  솔루션 보기
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link
          href="/assignment/solution"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          ERRORS
        </Link>
        <Link
          href="/study"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          HOW IT WORKS
        </Link>
      </nav>
      <Link
        href="/assignment/solution"
        className="rounded-xl border-blue-600 border-4 bg-blue-600 px-2 py-1 mr-3 text-xs hover:text-blue-600 hover:bg-white text-white"
      >
        ASK ME A QUESTION!
      </Link>
    </header>
  );
}
