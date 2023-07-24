import Forif from "@/app/components/icons/black-forif";
import Spinner from "@/app/components/loading/Spinner";
export default function Page() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="opacity-10 py-14 rounded-xl bg-white shadow-xl md:shadow-none flex flex-col justify-center items-center w-2/5 md:w-4/5 mx-auto">
        <div className="space-y-4 flex flex-col justify-center items-center mb-6 border-2 border-black rounded-full p-10">
          <Forif />
        </div>
        <h1 className="text-3xl mb-24 font-bold">로딩중</h1>
        <div className="w-3/4 relative overflow-x-auto mb-20">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 text-base">
                  학과
                </th>
                <th scope="col" className="py-3 text-base">
                  과제
                </th>
                <th scope="col" className="py-3 text-base">
                  출석
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="py-4">
                  로딩 중
                </th>
                <td className="py-4">로딩 중</td>
                <td className="py-4">로딩 중</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="w-full text-black">
          로딩 중
        </button>
        <div className="mt-8 space-y-4  text-center md:break-keep md:text-sm">
          <p className="text-xs">
            <span className="text-gray-400">개인정보 보호방침</span>을
            확인하세요.
          </p>
        </div>
      </div>
      <Spinner />
    </div>
  );
}
