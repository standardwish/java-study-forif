import ExpandArrow from "@/app/components/icons/arrow_expand";
import Spinner from "@/app/components/loading/Spinner";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-3 scroll-smooth opacity-10 h-screen">
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
          <button className="text-2xl font-bold md:text-2xl border-b-2 border-solid pb-3 border-gray-200 flex flex-row justify-center items-center">
            로딩중
            <ExpandArrow classname="fill-white" />
          </button>
          <button className="text-2xl font-bold md:text-2xl border-b-2 border-solid pb-3 border-gray-200 flex flex-row justify-center items-center">
            로딩중
            <ExpandArrow classname="fill-white" />
          </button>
        </div>
      </div>
      <Spinner />
    </>
  );
}
