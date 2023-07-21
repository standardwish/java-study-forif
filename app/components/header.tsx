"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./icons/logo";
import NavIcon from "./icons/nav_logo";
import ExpandArrow from "./icons/arrow_expand";
import ShrinkArrow from "./icons/arrow_less";
export default function Header() {
  const pathname = usePathname();
  const [assign, setAssign] = useState(false);
  const [show, setShow] = useState(false);
  const [detail, showDetail] = useState(false);
  const onShow = () => {
    if (show) {
      setShow(false);
    } else {
    }
  };

  return (
    <header className="flex flex-row justify-between items-center py-3 border-b-2 h-20 border-black">
      <a href="/">
        <Logo />
      </a>
      <nav className="flex flex-row gap-10 text-base md:hidden">
        <div className="inline-block">
          <button
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out hover:scale-110 duration-300"
            onClick={() => setAssign(!assign)}
          >
            <span
              className={
                pathname === "/assignment"
                  ? "underline underline-offset-2 decoration-2 decoration-red-500 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
              }
            >
              과제
            </span>
            {assign ? <ShrinkArrow /> : <ExpandArrow />}
          </button>
          {assign && (
            <ul className="border-2 border-gray-100 absolute top-16 flex flex-col gap-3 bg-white w-44 py-2 pl-4 z-0">
              <Link
                href="/assignment"
                className="z-0 hover:text-blue-500"
                onClick={() => setAssign(false)}
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
                onClick={() => setAssign(false)}
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
                onClick={() => setAssign(false)}
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
            자주 발생하는 에러
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
            스터디 운영 방식
          </span>
        </Link>
      </nav>
      <Link
        href="mailto:standardstar@hanyang.ac.kr"
        className="w-40 text-center rounded-xl border-blue-600 border-4 bg-blue-600 px-2 py-1 mr-3 text-xs hover:text-blue-600 hover:border-white hover:bg-white text-white transition-all duration-200 md:hidden"
      >
        멘토에게 질문하세요!
      </Link>
      <div className="hidden md:block">
        <button className="mr-3 mt-2" onClick={() => setShow(!show)}>
          <NavIcon />
        </button>
      </div>
      {show && (
        <div className="absolute top-20 w-full h-full bg-slate-50  z-50">
          <ul className="pt-5 pl-4 flex flex-col gap-4 text-xl">
            <div>
              <button
                className="flex flex-row gap-1 items-center"
                onClick={() => showDetail(!detail)}
              >
                과제
                {detail ? <ShrinkArrow /> : <ExpandArrow />}
              </button>
              {detail && (
                <ul className="flex flex-col gap-2 mt-4 animate-dropdown_down relative">
                  <Link href="/assignment" onClick={onShow}>
                    <li className="text-base font-light">과제 확인</li>
                  </Link>
                  <Link
                    href="/assignment/submit"
                    onClick={() => setShow(false)}
                  >
                    <li className="text-base font-light">과제 제출</li>
                  </Link>
                  <Link
                    href="/assignment/solution"
                    onClick={() => setShow(false)}
                  >
                    <li className="text-base font-light">솔루션</li>
                  </Link>
                </ul>
              )}
            </div>
            <hr className="bg-black mr-5" />
            <Link href="/errors" onClick={() => setShow(false)}>
              <li>자주 발생하는 오류</li>
            </Link>
            <hr className="bg-black mr-5" />
            <Link href="/study" onClick={() => setShow(false)}>
              <li>스터디 운영 방식</li>
            </Link>
            <hr className="bg-black mr-5" />
            <Link
              href="mailto:standardstar@hanyang.ac.kr"
              onClick={() => setShow(false)}
            >
              <li>멘토에게 질문하세요!</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
