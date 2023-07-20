"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UpArrow from "./icons/arrow_expand";
import DownArrow from "./icons/arrow_less";
import Logo from "./icons/logo";
export default function Header() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const onShow = () => {
    if (show) {
      setShow(false);
    } else {
    }
  };
  return (
    <header
      className="flex flex-row justify-between items-center py-3 border-b-2 h-20 border-black"
      onClick={onShow}
    >
      <a href="/">
        <Logo />
      </a>
      <nav className="flex flex-row gap-10 text-base">
        <div className="inline-block">
          <button
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out hover:scale-110 duration-300"
            onClick={() => setShow(!show)}
          >
            <span
              className={
                pathname === "/assignment"
                  ? "underline underline-offset-2 decoration-2 decoration-red-500 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
              }
            >
              ASSIGNMENT
            </span>
            {show ? <DownArrow /> : <UpArrow />}
          </button>
          {show && (
            <ul className="border-2 border-gray-100 absolute top-16 flex flex-col gap-3 bg-white w-44 py-2 pl-4 z-0">
              <Link
                href="/assignment"
                className="z-0 hover:text-blue-500"
                onClick={() => setShow(false)}
              >
                <li
                  className={pathname === "/assignment" ? "text-red-500" : ""}
                >
                  과제 확인
                </li>
              </Link>

              <Link
                href="/assignment/submit"
                className="z-0 hover:text-blue-500"
                onClick={() => setShow(false)}
              >
                <li
                  className={
                    pathname === "/assignment/submit" ? "text-red-500" : ""
                  }
                >
                  과제 제출
                </li>
              </Link>

              <li>
                <hr />
              </li>
              <Link
                href="/assignment/solution"
                className="z-0 hover:text-blue-500"
                onClick={() => setShow(false)}
              >
                <li
                  className={
                    pathname === "/assignment/solution" ? "text-red-500" : ""
                  }
                >
                  솔루션 보기
                </li>
              </Link>
            </ul>
          )}
        </div>
        <Link
          href="/errors"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-300 group"
        >
          <span
            className={
              pathname === "/errors"
                ? "underline underline-offset-2 decoration-2 decoration-red-500 transition-all duration-200"
                : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
            }
          >
            ERRORS
          </span>
        </Link>
        <Link
          href="/study"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          <span
            className={
              pathname === "/study"
                ? "underline underline-offset-2 decoration-2 decoration-red-500 transition-all duration-200"
                : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
            }
          >
            HOW IT WORKS
          </span>
        </Link>
      </nav>
      <Link
        href="mailto:standardstar@hanyang.ac.kr"
        className="rounded-xl border-blue-600 border-4 bg-blue-600 px-2 py-1 mr-3 text-xs hover:text-blue-600 hover:border-white hover:bg-white hover:font-bold text-white transition-all duration-200"
      >
        ASK ME A QUESTION!
      </Link>
    </header>
  );
}
