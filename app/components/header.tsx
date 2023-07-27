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
        <div className="inline-block">
          <button
            onClick={() => {
              setAssign(!assign);
            }}
          >
            <span
              className={
                pathname === "/assignment"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200 flex flex-row gap-0 items-center justify-center transition ease-in-out"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p flex flex-row gap-0 items-center justify-center transition "
              }
            >
              과제
              <div>
                {assign ? (
                  <ShrinkArrow classname="fill-white" />
                ) : (
                  <ExpandArrow classname="fill-white" />
                )}
              </div>
            </span>
          </button>
          {assign && (
            <ul className="border-2 rounded-md border-gray-100 absolute top-16 flex flex-col gap-3 bg-white text-black w-44 py-2 pl-4 z-50">
              <Link
                href="/assignment"
                className="hover:font-bold"
                onClick={() => {
                  setAssign(false);
                }}
              >
                <li
                  className={pathname === "/assignment" ? "text-red-500" : ""}
                >
                  과제 확인
                </li>
              </Link>

              {session ? (
                <Link
                  href="/assignment/submit"
                  className="hover:font-bold"
                  onClick={() => {
                    setAssign(false);
                  }}
                >
                  <li
                    className={
                      pathname === "/assignment/submit" ? "text-red-500" : ""
                    }
                  >
                    과제 제출
                  </li>
                </Link>
              ) : (
                <a
                  className="cursor-not-allowed opacity-50"
                  onClick={() => {
                    setAssign(false);
                  }}
                >
                  <li>과제 제출</li>
                </a>
              )}

              <li>
                <hr />
              </li>
              {session ? (
                <Link
                  href="/assignment/solution"
                  className="hover:font-bold"
                  onClick={() => {
                    setAssign(false);
                  }}
                >
                  <li
                    className={
                      pathname === "/assignment/solution" ? "text-red-500" : ""
                    }
                  >
                    솔루션 보기
                  </li>
                </Link>
              ) : (
                <a className="cursor-not-allowed opacity-50">솔루션 보기</a>
              )}
              <Link
                href="/assignment/errors"
                className="hover:font-bold"
                onClick={() => {
                  setAssign(false);
                }}
              >
                <li
                  className={
                    pathname === "/assignment/errors" ? "text-red-500" : ""
                  }
                >
                  자주 발생하는 에러
                </li>
              </Link>
            </ul>
          )}
        </div>

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
        {session ? (
          <Link
            href="/members"
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
          >
            <span
              className={
                pathname === "/members"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p"
              }
            >
              멤버들
            </span>
          </Link>
        ) : (
          <a className="flex flex-row gap-0 items-center justify-center cursor-not-allowed opacity-60">
            <span className="border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out">
              멤버들
            </span>
          </a>
        )}
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
              <button
                className="flex flex-row gap-1 items-center"
                onClick={() => {
                  showDetail(!detail);
                }}
              >
                과제
                {detail ? (
                  <ShrinkArrow classname="fill-white" />
                ) : (
                  <ExpandArrow classname="fill-white" />
                )}
              </button>
              {detail && (
                <ul className="flex flex-col gap-2 mt-4 animate-dropdown_down relative">
                  <Link href="/assignment" onClick={onShow}>
                    <li className="text-base">과제 확인</li>
                  </Link>
                  <Link
                    className={
                      status === "authenticated"
                        ? ""
                        : "opacity-50 cursor-not-allowed"
                    }
                    href="/assignment/submit"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <li>과제 제출</li>
                  </Link>
                  <Link
                    className={
                      status === "authenticated"
                        ? ""
                        : "opacity-50 cursor-not-allowed"
                    }
                    href="/assignment/solution"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <li>솔루션 보기</li>
                  </Link>
                  <Link
                    href="/assignment/errors"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <li>자주 발생하는 에러</li>
                  </Link>
                </ul>
              )}
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
              href="/members"
              className={
                status === "authenticated"
                  ? "ml-4"
                  : "opacity-50 cursor-not-allowed ml-4"
              }
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <li>멤버들</li>
            </Link>

            {status === "loading" ? (
              <p className="ml-4">
                <li>로딩중</li>
              </p>
            ) : status === "authenticated" ? (
              <Link
                href="/auth/signin"
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
