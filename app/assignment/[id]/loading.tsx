import Spinner from "@/app/components/loading/Spinner";

export default function Page() {
  return (
    <>
      <div className="w-4/5 mx-auto mb-3 mt-10 md:mt-5 md:ml-3 h-screen">
        <div className="mb-5 flex flex-row gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-3xl">로딩중</h1>
        </div>
        <div className="leading-7 text-left">
          <h1 className="text-2xl mb-3">문제</h1>
          <hr className="w-12 h-1 bg-white mb-5" />
          <div className="mb-4">로딩 중</div>
          <h1 className="text-2xl mb-3">출력</h1>
          <hr className="w-12 h-1 bg-white mb-5" />
          <div className="mb-4">로딩 중</div>
        </div>
      </div>
      <Spinner />
    </>
  );
}
