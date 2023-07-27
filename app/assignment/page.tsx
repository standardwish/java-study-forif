"use client";
import { useState } from "react";
import ExpandArrow from "../components/icons/arrow_expand";
import ShrinkArrow from "../components/icons/arrow_shrink";
import Description from "../components/problems/description";
import Name from "../components/problems/name";
import Output from "../components/problems/output";
export default function Page() {
  const [opens, setOpens]: any = useState({
    open1: false,
    open2: false,
  });
  const onChange = (name: any) => {
    setOpens({
      ...opens,
      [name]: !opens[name],
    });
  };

  const { open1, open2 } = opens;
  return (
    <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-2 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold md:text-3xl mb-5">과제 보기</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <button
          className="text-2xl font-bold md:text-2xl flex flex-row"
          onClick={() => {
            onChange("open1");
          }}
        >
          자료형
          {open1 ? (
            <ExpandArrow classname="fill-white" />
          ) : (
            <ShrinkArrow classname="fill-white" />
          )}
        </button>
        {open1 && (
          <div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>1-1. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>1-2. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>1-3. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
          </div>
        )}
        <button
          className="text-2xl font-bold md:text-2xl flex flex-row"
          onClick={() => {
            onChange("open2");
          }}
        >
          자료형
          {open2 ? (
            <ExpandArrow classname="fill-white" />
          ) : (
            <ShrinkArrow classname="fill-white" />
          )}
        </button>
        {open2 && (
          <div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>2-1. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>2-2. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <Name>2-3. 진법변환</Name>
              <Description>
                10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는
                프로그램을 작성하시오. 10진법을 넘어가는 진법은 숫자로 표시할 수
                없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를
                사용한다. A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
              </Description>
              <Output>ZZZZ</Output>
            </div>
          </div>
        )}
      </div>
      <button
        className="fixed bottom-12 right-12 rounded-full bg-blue-400 w-10 h-10 flex items-center justify-center"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <ShrinkArrow classname="fill-white" />
      </button>
    </div>
  );
}
