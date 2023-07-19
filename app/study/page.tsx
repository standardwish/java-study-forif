import Java from "../components/icons/java";

export default function Page() {
  return (
    <div>
      <div className="py-12 border-b-2 border-black">
        <h1 className="text-5xl">스터디가 진행되는 과정</h1>
        <p className="text-base mt-4 ">자바 스터디는 다음과 같이 운영됩니다.</p>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Java />
          <h1 className="text-5xl">FORIF IN JAVA</h1>
        </div>
        <div className="flex flex-col gap-0 w-1/2">
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                01
              </button>
              <div className="rounded-full border-2 border-black w-10 h-10 text-center relative mr-8">
                <p className="absolute left-1 top-1.5 text-sm">.java</p>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Specify requirement</h1>
            <p className="text-2xl">Specify requirement</p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                02
              </button>
              <div className="rounded-full border-2 border-black w-10 h-10 text-center relative mr-8">
                <p className="absolute left-1 top-1.5 text-sm">.java</p>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Specify requirement</h1>
            <p className="text-2xl">Specify requirement</p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                03
              </button>
              <div className="rounded-full border-2 border-black w-10 h-10 text-center relative mr-8">
                <p className="absolute left-1 top-1.5 text-sm">.java</p>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Specify requirement</h1>
            <p className="text-2xl">Specify requirement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
