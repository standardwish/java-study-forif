import Java from "../components/icons/java";
import Image from "next/image";
export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className="py-12 border-b-2 border-black pl-6">
        <h1 className="text-5xl animate-fadein">스터디가 진행되는 과정</h1>
        <p className="text-base mt-4 animate-fadein">
          자바 스터디는 다음과 같이 운영됩니다.
        </p>
      </div>
      <div className="flex flex-row items-center">
        <a
          href="https://www.yes24.com/Product/Goods/24259565"
          target="_blank"
          className="w-1/2 flex flex-col justify-center items-center transition ease-in-out hover:scale-110 duration-300"
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
        <div className="flex flex-col gap-0 w-1/2">
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 transition ease-in-out hover:scale-110 bg-white duration-300">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                01
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">BACK</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs font-bold">15</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Time To Review</h1>
            <p className="text-2xl">
              지난 주의 과제를 바탕으로 소스코드를 리뷰합니다! 코드를
              간결화하고, 명명법에 대해 알아봅니다.
              <strong>15분</strong> 정도 소요됩니다.
            </p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 transition ease-in-out hover:scale-110 bg-white duration-300">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                02
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">CODE</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs font-bold">50</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Lecture Time!</h1>
            <p className="text-2xl">
              멘토가 직접 준비한 강의 자료와 코드를 바탕으로 강의식 수업을
              진행합니다. <strong>50분</strong> 정도 소요됩니다.
            </p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 transition ease-in-out hover:scale-110 bg-white duration-300">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                03
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">ORG</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs font-bold">10</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">
              Organizing and Allocate Assignment
            </h1>
            <p className="text-2xl">
              강의가 끝난 후, 강의 내용을 정리합니다. 이후 과제에 대한 안내가
              있습니다. <strong>10분</strong> 정도 소요됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
