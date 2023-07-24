import Link from "next/link";
import Spinner from "./components/loading/Spinner";
import { UbunTu } from "./fonts";
import Notification from "./components/icons/notification";

export default function Loading() {
  return (
    <>
      <div className="relative text-8xl md:text-4xl leading-normal items-center flex flex-col justify-center font-bold h-screen mt-[-5rem]">
        <div className="relative">
          <h1 className={UbunTu.className}></h1>
        </div>
      </div>
      <Spinner />
    </>
  );
}
