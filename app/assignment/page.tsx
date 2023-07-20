import Assignment from "../components/codes/assignment1";
export default function Page() {
  return (
    <div className="ml-5 mt-5 max-w-5xl flex flex-col gap-3">
      <h1 className="text-4xl font-bold">🗣️</h1>
      <h1 className="text-4xl font-bold mb-5">과제 보기</h1>
      <hr />
      <h2 className="text-2xl font-bold">1. 자료형</h2>
      <hr />
      <h2 className="text-xl">1-1. 다음과 같은 결과물을 출력하시오.</h2>
      <hr />
      <Assignment />
      <h2 className="text-xl">1-2. 다음과 같은 결과물을 출력하시오.</h2>
      <hr />
      <Assignment />
      <h2 className="text-2xl font-bold">2. 제어문</h2>
      <hr />
      <h2 className="text-xl">2-1. 다음과 같은 결과물을 출력하시오.</h2>
      <hr />
    </div>
  );
}
