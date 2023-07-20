import ForwardArrow from "./components/icons/arrow_forward";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/images/main-bg-img.png')] bg-cover w-full h-screen bg-center bg-fixed main-bg-img flex justify-between">
        <div className="ml-8 pt-24 flex flex-col gap-6 w-2/5 break-keep animate-fadein">
          <h1 className="text-6xl">자바 공부를 시작하는 가장 뛰어난 방법</h1>
          <p className="text-base">
            질 좋은 강의자료와 과제, 그리고 편리한 과제 제출 시스템까지.포리프
            자바 스터디에서 빠르고 정확하게 자바를 배워보세요.
          </p>
          <button className="w-60 h-14 border-2 rounded-md flex flex-row gap-5 items-center justify-center border-blue-600 bg-blue-600 text-white">
            지금 바로 시작하기
            <ForwardArrow />
          </button>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l9AzO1FMgM8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="border-2 border-black rounded-xl animate-fadein mt-24 mr-10"
        ></iframe>
      </div>
    </div>
  );
}
