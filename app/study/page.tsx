import Java from "../components/icons/java";

export default function Page() {
  return (
    <div>
      <div className="py-12 border-b-2 border-black pl-6">
        <h1 className="text-5xl animate-fadein">스터디가 진행되는 과정</h1>
        <p className="text-base mt-4 animate-fadein">
          자바 스터디는 다음과 같이 운영됩니다.
        </p>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/2 flex flex-col justify-center items-center animate-pulse hover:animate-none">
          <Java />
          <h1 className="text-5xl ">FORIF IN JAVA</h1>
        </div>
        <div className="flex flex-col gap-0 w-1/2">
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 hover:animate-pulse">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                01
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">BACK</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">15</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Time To Review!</h1>
            <p className="text-2xl">
              Have a time to review our codes which are provided in your hand!
              It will take <strong>15 minutes</strong>.
            </p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 hover:animate-pulse">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                02
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">CODE</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">50</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">Lecture Time</h1>
            <p className="text-2xl">
              Two lecturers will teach you guys with proper codes and data. It
              will take <strong>50 minutes</strong>.
            </p>
          </div>
          <div className="w-full h-1/3 border-2 border-gray-400 pl-8 py-4 hover:animate-pulse">
            <div className="flex flex-row justify-between mb-8">
              <button className="rounded-lg bg-black text-white px-2 text-xl">
                03
              </button>
              <div className="flex flex-row items-center justify-center gap-2 mr-5">
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">ORG</p>
                </div>
                <div className="rounded-full border-2 border-black w-10 h-10 text-center relative flex items-center justify-center">
                  <p className="text-xs">10</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-3">
              Allocate Assignment and Organizing
            </h1>
            <p className="text-2xl">
              After the lecture is over, you will get proper amounts of
              assignments to step up! It will take <strong>10 minutes</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
