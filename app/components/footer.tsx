import Image from "next/image";
import Link from "next/link";
import Instagram from "./icons/instagram";
export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center py-3 h-20">
      <Image
        src="/logo.svg"
        alt="Forif main logo"
        width={150}
        height={150}
        className="absolute left-0 ml-3"
      />
      <div>
        <p>연락처 : 010-2078-9868 / 010-4870-6480</p>
        <p>이메일 : standardstar@hanyang.ac.kr / zxvm5962@hanyang.ac.kr</p>
      </div>
    </footer>
  );
}
