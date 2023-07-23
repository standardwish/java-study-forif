import Image from "next/image";
import ExpandArrow from "../components/icons/arrow_expand";
export default function Page() {
  return (
    <div className="max-w-5xl mb-3 mx-auto mt-10 md:mt-5 md:ml-3 flex flex-col justify-center items-center">
      <div className="mb-5 flex flex-row gap-2 items-center justify-center">
        <Image
          src="/images/assignment.png"
          width="45"
          height="60"
          alt="Assignment icon"
          className="pt-1 md:w-10 md:h-12"
        />
        <h1 className="text-4xl font-bold md:text-3xl ">과제 보기</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <button className="text-2xl font-bold md:text-2xl flex flex-row">
          로딩중
          <ExpandArrow />
        </button>
        <button className="text-2xl font-bold md:text-2xl flex flex-row">
          로딩중
          <ExpandArrow />
        </button>
      </div>
    </div>
  );
}
