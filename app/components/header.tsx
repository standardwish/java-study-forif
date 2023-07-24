"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExpandArrow from "./icons/arrow_expand";
import ShrinkArrow from "./icons/arrow_less";
import Forif from "./icons/forif";
import NavIcon from "./icons/nav_logo";
export default function Header() {
  const pathname = usePathname();
  const [assign, setAssign] = useState(false);
  const [show, setShow] = useState(false);
  const [detail, showDetail] = useState(false);
  const { data: session } = useSession();
  const onShow = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <header className="flex flex-row justify-between items-center h-20 px-8 bg-black text-white">
      <a href="/">
        <Forif darkMode={true} />
      </a>
      <nav className="flex flex-row gap-5 text-sm md:hidden">
        <div className="inline-block">
          <button
            className=""
            onClick={() => {
              setAssign(!assign);
            }}
          >
            <span
              className={
                pathname === "/assignment"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200 flex flex-row gap-0 items-center justify-center transition ease-in-out"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out hover:bg-link_s_hover hover:bg-link_p flex flex-row gap-0 items-center justify-center transition"
              }
            >
              과제
              <div>
                {assign ? (
                  <ShrinkArrow darkMode={true} />
                ) : (
                  <ExpandArrow darkMode={true} />
                )}
              </div>
            </span>
          </button>
          {assign && (
            <ul className="border-2 rounded-md border-gray-100 absolute top-16 flex flex-col gap-3 bg-white text-black w-44 py-2 pl-4 z-50">
              <Link
                href="/assignment"
                className="hover:text-blue-500"
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
                  className="hover:text-blue-500"
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
                  href="/assignment/submit"
                  className="hover:text-blue-500"
                  onClick={() => {
                    setAssign(false);
                  }}
                >
                  <li
                    className={
                      pathname === "/assignment/submit" ? "text-red-500" : ""
                    }
                  >
                    솔루션 보기
                  </li>
                </Link>
              ) : (
                <a className="cursor-not-allowed opacity-50">솔루션 보기</a>
              )}
              <Link
                href="/errors"
                className="hover:text-blue-500"
                onClick={() => {
                  setAssign(false);
                }}
              >
                <li className={pathname === "/errors" ? "text-red-500" : ""}>
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
            href="/attendance"
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150"
          >
            <span
              className={
                pathname === "/attendance"
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
        {session ? (
          <Link
            href="/auth/mypage"
            className="flex flex-row gap-0 items-center justify-center transition ease-in-out delay-150 md:hidden"
          >
            <span
              className={
                pathname === "/auth/mypage"
                  ? "underline underline-offset-2 decoration-2 decoration-gray-400 transition-all duration-200"
                  : "border-b-0 bg-link_i bg-link_p bg-link_s bg-no-repeat transition-backgroundSize duration-500 ease-in-out"
              }
            >
              마이페이지
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
        <button
          className="mr-3 mt-2"
          onClick={() => {
            setShow(!show);
          }}
        >
          <NavIcon />
        </button>
      </div>
      {show && (
        <div className="absolute top-20 w-full h-full bg-slate-50 z-50">
          <ul className="pt-5 pl-4 flex flex-col gap-4 text-base">
            <div>
              <button
                className="flex flex-row gap-1 items-center"
                onClick={() => {
                  showDetail(!detail);
                }}
              >
                과제
                {detail ? (
                  <ShrinkArrow darkMode={true} />
                ) : (
                  <ExpandArrow darkMode={true} />
                )}
              </button>
              {detail && (
                <ul className="flex flex-col gap-2 mt-4 animate-dropdown_down relative">
                  <Link href="/assignment" onClick={onShow}>
                    <li className="text-base font-light">과제 확인</li>
                  </Link>
                  <Link
                    className={session ? "" : "disabled cursor-not-allowed"}
                    href="/assignment/submit"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <li className={session ? "text-base" : "text-base"}>
                      과제 제출
                    </li>
                  </Link>
                  <Link
                    href="/assignment/solution"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <li className="text-base font-light">솔루션</li>
                  </Link>
                </ul>
              )}
            </div>
            <hr className="bg-black mr-5" />
            <Link
              href="/errors"
              onClick={() => {
                setShow(false);
              }}
            >
              <li>자주 발생하는 오류</li>
            </Link>
            <hr className="bg-black mr-5" />
            <Link
              href="/study"
              onClick={() => {
                setShow(false);
              }}
            >
              <li>스터디 운영 방식</li>
            </Link>
            <hr className="bg-black mr-5" />
            {session ? (
              <Link
                href="/auth/mypage"
                onClick={() => {
                  setShow(false);
                }}
              >
                <li>마이페이지</li>
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                onClick={() => {
                  setShow(false);
                }}
              >
                <li>로그인</li>
              </Link>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
