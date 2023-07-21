import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center h-20 px-3">
      <Image
        src="/logo.svg"
        alt="Forif main logo"
        width={150}
        height={150}
        className="flex items-center justify-center"
      />
      <div className="block md:hidden">
        <p>연락처 : 010-2078-9868 / 010-4870-6480</p>
        <p>이메일 : standardstar@hanyang.ac.kr / zxvm5962@hanyang.ac.kr</p>
      </div>
      <div className="hidden md:block">
        <p>문의 : 010-4870-6480</p>
      </div>
    </footer>
  );
}
