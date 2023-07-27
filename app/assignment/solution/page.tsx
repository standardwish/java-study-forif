"use client";
import Assignment1 from "@/app/components/codes/assignment1";
import Assignment2 from "@/app/components/codes/assignment2";
import Assignment3 from "@/app/components/codes/assignment3";
import ExpandArrow from "@/app/components/icons/arrow_expand";
import ShrinkArrow from "@/app/components/icons/arrow_shrink";
import Name from "@/app/components/problems/name";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const [opens, setOpens]: any = useState({
    open1: false,
    open2: false,
  });

  const { open1, open2 } = opens;
  const onChange = (name: any) => {
    setOpens({
      ...opens,
      [name]: !opens[name],
    });
  };

  return (
    <>
      <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-3 scroll-smooth">
        <div className="mb-5 flex flex-row gap-2 items-center justify-center scroll-smooth">
          <Image
            src="/images/task_done.png"
            width="45"
            height="60"
            alt="Assignment icon"
            className="pt-1 md:w-10 md:h-12"
          />
          <h1 className="text-4xl font-bold md:text-3xl">솔루션 보기</h1>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="text-2xl font-bold md:text-2xl border-b-2 border-solid pb-3 border-gray-200 flex flex-row justify-center items-center"
            onClick={() => {
              onChange("open1");
            }}
          >
            자료형
            {open1 ? <ExpandArrow /> : <ShrinkArrow />}
          </button>
          {open1 && (
            <div className="flex flex-col gap-3 mb-8">
              <Name>1-1. 진법변환</Name>
              <Assignment1 />
              <div className="flex flex-col gap-3 mb-8">
                <Name>1-2. 진법변환</Name>
                <Assignment2 />
              </div>
              <div className="flex flex-col gap-3 mb-8">
                <Name>1-3. 진법변환</Name>
                <Assignment3 />
              </div>
            </div>
          )}
          <button
            className="text-2xl font-bold md:text-2xl border-b-2 border-solid pb-3 border-gray-200 flex flex-row justify-center items-center"
            onClick={() => {
              onChange("open2");
            }}
          >
            연산자
            {open2 ? <ExpandArrow /> : <ShrinkArrow />}
          </button>
          {open2 && (
            <div className="flex flex-col gap-3 mb-8">
              <Name>2-1. 진법변환</Name>
              <Assignment1 />
              <div className="flex flex-col gap-3 mb-8">
                <Name>1-1. 진법변환</Name>
                <Assignment2 />
              </div>
              <div className="flex flex-col gap-3 mb-8">
                <Name>2-3. 진법변환</Name>
                <Assignment3 />
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className="fixed bottom-12 right-12 rounded-full bg-blue-400 w-10 h-10 flex items-center justify-center"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <ShrinkArrow />
      </button>
    </>
  );
}
