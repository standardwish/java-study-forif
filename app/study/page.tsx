'use client'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import Loading from './loading'

function Study () {
  const [toggle, setToggle] = useState(false)
  const clickedToggle = () => {
    setToggle((prev) => !prev)
  }
  console.log(toggle)

  return (
    <div className="overflow-hidden">
      <div className="py-12 border-b-2 border-black pl-6">
        <h1 className="text-5xl animate-fadein">스터디 운영 방식</h1>
        <p className="text-base mt-4 animate-fadein">
          자바 스터디는 온라인/오프라인으로 다음과 같이 운영됩니다.
        </p>

        <label className="relative inline-flex items-center cursor-pointer mt-4">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={clickedToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
            {toggle ? '오프라인' : '온라인'} 과정
          </span>
        </label>
      </div>
      <a
        href="https://www.yes24.com/Product/Goods/24259565"
        target="_blank"
        className="hidden flex-col justify-center items-center transition ease-in-out hover:scale-110 duration-300 my-12 md:flex"
      >
        <Image
          src="/images/book.jpg"
          alt="book cover"
          width={100}
          height={200}
          className="mb-3"
        />
        <h1 className="text-xl mb-2 font-bold">자바의 정석, 남궁성</h1>
        <p className="text-base">
          스터디의 강의, 과제는 &apos;자바의 정석&apos;을
          <br />
          기반으로 만들어집니다.
        </p>
      </a>
      <div className="flex flex-row items-center border-b-2 border-black">
        <a
          href="https://www.yes24.com/Product/Goods/24259565"
          target="_blank"
          className="w-1/2 flex flex-col justify-center items-center transition ease-in-out hover:scale-110 duration-300 md:hidden"
        >
          <Image
            src="/images/book.jpg"
            alt="book cover"
            width={300}
            height={500}
          />
          <h1 className="text-3xl">자바의 정석</h1>
          <p className="text-base">
            스터디의 강의, 과제는 위의 책을 기반으로 만들어집니다.
          </p>
        </a>
        {toggle
          ? (
          <div className="flex flex-col gap-0 w-1/2 md:w-full transition-all duration-300">
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  01
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">BACK</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">15</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl mb-3 md:text-2xl">Time To Review</h1>
              <p className="text-2xl md:text-base">
                지난 주의 과제를 바탕으로 소스코드를 리뷰합니다! 코드를
                간결화하고, 명명법에 대해 알아봅니다. <strong>15분</strong> 정도
                소요됩니다.
              </p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  02
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">CODE</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">50</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">Lecture Time!</h1>
              <p className="text-2xl md:text-base">
                멘토가 직접 준비한 강의 자료와 코드를 바탕으로 강의식 수업을
                진행합니다. <strong>50분</strong> 정도 소요됩니다.
              </p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  03
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">ORG</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">10</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">
                Organize Lecture, Allocate Assignment
              </h1>
              <p className="text-2xl md:text-base">
                강의가 끝난 후, 강의 내용을 정리합니다. 이후 과제에 대한 안내가
                있습니다. <strong>10분</strong> 정도 소요됩니다.
              </p>
            </div>
          </div>
            )
          : (
          <div className="flex flex-col gap-0 w-1/2 md:w-full">
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  01
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">COM</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">JAVA</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">
                Check Your Assignment
              </h1>
              <p className="text-2xl md:text-base">
                매주 나가는 과제를 확인하고, 스터디 전까지 과제를 제출하세요.
                과제는 한 번밖에 제출할 수 없습니다.
              </p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  02
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">QT</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">ANY</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">Question Time!</h1>
              <p className="text-2xl md:text-base">
                멘토에게 헷갈리거나 모르는 점을 질문하세요. 아무 질문이나
                상관없습니다! 질문 수령 후 빠른 시일 내에 답변을 드립니다.
              </p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 transition ease-in-out hover:scale-110 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  03
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs">ERR</p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold">MEAN</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">General Errors</h1>
              <p className="text-2xl md:text-base">
                과제와 자바에서 일반적으로 발생하는 오류를 정리해놓은
                공간입니다. 오류의 의미가 해결 방안을 찾아보세요!
              </p>
            </div>
          </div>
            )}
      </div>
    </div>
  )
}

export default function Page () {
  return (
    <Suspense fallback={<Loading />}>
      <Study />
    </Suspense>
  )
}
