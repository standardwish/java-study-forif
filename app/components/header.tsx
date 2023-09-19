"use client";
import { navState } from "@/recoil/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import ExpandArrow from "./icons/arrow_expand";
import ShrinkArrow from "./icons/arrow_shrink";
import NavIcon from "./icons/nav_logo";
import WhiteForif from "./icons/white-forif";

function HeaderPage() {
  const pathname = usePathname();
  const [assign, setAssign] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(navState);
  const [detail, showDetail] = useState(false);
  const { data: session, status } = useSession();

  const onShow = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);
  };

  return (
    <header className="flex flex-row justify-between items-center h-20 px-8 md:px-0 bg-black text-white sticky md:static top-0 z-50">
      <a href="/" className="md:pl-4">
        <div className={isOpen ? "fixed top-4" : ""}>
          <WhiteForif />
        </div>
      </a>
      <nav className="flex flex-row gap-5 text-sm md:hidden">
        <Link
          href="/assignment"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
        >
          <span
            className={
              pathname === "/assignment"
                ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
            }
          >
            실습
          </span>
        </Link>

        <Link
          href="/study"
          className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
        >
          <span
            className={
              pathname === "/study"
                ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
            }
          >
            스터디 운영 방식
          </span>
        </Link>
        {status === "loading" ? (
          <a className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150">
            <span>로딩 중...</span>
          </a>
        ) : status === "authenticated" ? (
          <Link
            href="/auth/mypage"
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
          >
            <span
              className={
                pathname === "/auth/mypage"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
              }
            >
              내 정보
            </span>
          </Link>
        ) : (
          <Link
            href="/auth/signin"
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
          >
            <span
              className={
                pathname === "/auth/signin"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
              }
            >
              로그인
            </span>
          </Link>
        )}
      </nav>

      <div className="hidden md:block">
        <button className="mt-2" onClick={onShow}>
          <div className={isOpen ? "fixed right-3 top-6" : "pr-3 right-0"}>
            <NavIcon />
          </div>
        </button>
      </div>
      {isOpen && (
        <nav className="top-20 bg-black w-full h-screen fixed z-50">
          <ul className="flex flex-col gap-9 text-base">
            <div className="ml-4 mt-5">
              <Link
                href="/assignment"
                className="flex flex-row gap-1 items-center"
              >
                과제
              </Link>
            </div>
            <Link
              href="/study"
              className="ml-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <li>스터디 운영 방식</li>
            </Link>
            <Link
              href="/study"
              className="ml-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <li>스터디 운영 방식</li>
            </Link>

            {status === "loading" ? (
              <p className="ml-4">
                <li>로딩중</li>
              </p>
            ) : status === "authenticated" ? (
              <Link
                href="/auth/mypage"
                className="ml-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <li>내 정보</li>
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="ml-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <li>로그인</li>
              </Link>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function Header() {
  return (
    <Suspense>
      <HeaderPage />
    </Suspense>
  );
}
