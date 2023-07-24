import Spinner from "./components/loading/Spinner";

export default function Loading() {
  return (
    <div>
      <div className="pl-8 bg-[url('/images/main-bg-img.webp')] bg-cover w-full h-screen bg-center bg-fixed main-bg-img flex md:flex-col flex-row justify-between md:justify-normal opacity-10">
        <div className="pt-24 md:pt-12 flex flex-col gap-6 w-2/5 md:w-full break-keep animate-fadein">
          <h1 className="text-6xl md:text-4xl">로딩 중</h1>
          <p className="text-base">로딩 중입니다.</p>
          <button className="w-60 h-14 border-2 rounded-md border-blue-600 bg-blue-600 text-white">
            <p className="flex flex-row gap-5 items-center justify-center">
              로딩 중입니다
            </p>
          </button>
        </div>
      </div>
      <Spinner />
    </div>
  );
}
