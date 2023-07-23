import Spinner from '../components/loading/Spinner'
export default function Loading () {
  return (
    <>
      <div className="opacity-10">
        <div className="py-12 border-b-2 border-black pl-6">
          <h1 className="text-5xl">스터디 운영 방식</h1>
          <p className="text-base mt-4">
            자바 스터디는 온라인/오프라인으로 다음과 같이 운영됩니다.
          </p>

          <label className="relative inline-flex items-center mt-4">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
              오프라인 과정
            </span>
          </label>
        </div>
        <div className="hidden flex-col justify-center items-center my-12 md:flex">
          <h1 className="text-xl mb-2 font-bold">자바의 정석, 남궁성</h1>
          <p className="text-base">
            스터디의 강의, 과제는 &apos;자바의 정석&apos;을
            <br />
            기반으로 만들어집니다.
          </p>
        </div>
        <div className="flex flex-row items-center border-b-2 border-black">
          <div className="w-1/2 flex flex-col justify-center items-center md:hidden">
            <div className="bg-gray-500 w-96 h-96 mb-3"></div>
            <h1 className="text-3xl">로딩 중</h1>
            <p className="text-base">로딩 중입니다...</p>
          </div>
          <div className="flex flex-col gap-0 w-1/2 md:w-full">
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  01
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs"></p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold"></p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">로딩 중</h1>
              <p className="text-2xl md:text-base">로딩 중입니다.....</p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  02
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs"></p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold"></p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">로딩 중</h1>
              <p className="text-2xl md:text-base">로딩 중입니다.......</p>
            </div>
            <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 md:py-3 md:pl-2 bg-white duration-300">
              <div className="flex flex-row justify-between mb-8 md:mb-4">
                <button className="rounded-lg bg-black text-white px-2 text-xl">
                  03
                </button>
                <div className="flex flex-row items-center justify-center gap-2 mr-5 md:hidden">
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs"></p>
                  </div>
                  <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                    <p className="text-xs font-bold"></p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-2xl mb-3">로딩 중</h1>
              <p className="text-2xl md:text-base">로딩중입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <Spinner />
    </>
  )
}
