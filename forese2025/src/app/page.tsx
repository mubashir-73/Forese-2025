import Image from "next/image";
import Hero from "./component/Hero";
import About from "./component/About";
import Gallery from "./component/Gallery";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-clip w-full">
        <Image src="/Forese.JPG" alt="hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#004aad]/80" />
      </div>
      <div className="relative inset-0 z-10 min-h-screen h-full w-screen">
        <Hero />
        <About />
        <Gallery />
      </div>
    </>
  );
}
