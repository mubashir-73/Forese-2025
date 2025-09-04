import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 w-full bg-transparent p-5 backdrop-blur-sm">
        <Link href="/">
          <div>
            <Image src="/FOR.png" alt="logo" width={100} height={85} />
          </div>
        </Link>

        <div className="hidden md:flex gap-6 text-white font-light tracking-tight mr-10 items-center">
          <Link href="/Coderforum">
            <p>CODERS FORUM</p>
          </Link>
          <Link href="/Event">
            <p>EVENTS</p>
          </Link>
          <Link href="/Team">
            <p>TEAM</p>
          </Link>
          <button className="bg-white text-black rounded-md px-4 py-2 font-light">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
