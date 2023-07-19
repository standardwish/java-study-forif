import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center py-3 border-b-2 h-20 border-black">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Forif main logo"
          width={150}
          height={150}
          className="ml-3"
        />
      </Link>
      <div className="flex flex-row gap-10 text-base">
        <Link
          href="/assignment"
          className="flex flex-row gap-0 items-center justify-center"
        >
          SOLUTIONS
          <Image
            src="/icons/expand_more.svg"
            alt="expanding down"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="/assignment/solution"
          className="flex flex-row gap-0 items-center justify-center"
        >
          SUBMIT
          <Image
            src="/icons/expand_more.svg"
            alt="expanding down"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="/study"
          className="flex flex-row gap-0 items-center justify-center"
        >
          HOW IT WORKS
          <Image
            src="/icons/expand_more.svg"
            alt="expanding down"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <Link
        href="/assignment/solution"
        className="rounded-xl border-blue-600 border-4 bg-blue-600 px-2 py-1 mr-3 text-xs hover:text-blue-600 hover:bg-white text-white"
      >
        ASK ME A QUESTION!
      </Link>
    </nav>
  );
}
