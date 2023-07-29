import errors from "./errors.json";
export default async function ErrorPage() {
  return (
    <div>
      <div className="w-2/5 mb-3 mx-auto mt-10 md:mt-5 md:w-2/3">
        <h1 className="text-4xl font-bold md:text-3xl mb-10 text-center">
          자주 발생하는 <span className="text-red-400">에러</span>와 해결방법
        </h1>
        <div className="flex flex-col gap-14 md:gap-5">
          {errors.map((val, idx) => {
            return (
              <div key={idx}>
                <h1 className="text-xl font-bold md:text-2xl flex flex-row mb-4">
                  {idx + 1}. {val.errorCode}
                </h1>
                <p className="text-base font-light">{val.errorMessage}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
