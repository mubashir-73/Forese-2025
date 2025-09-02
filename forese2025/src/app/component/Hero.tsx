"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="full h-screen relative overflow-hidden">
        <Image src="/Forese.JPG" alt="hero" fill className="object-cover" />
        {/* Background Image */}
        <div className="flex flex-col text-3xl md:text-6xl lg:text-8xl absolute inset-0 bg-[#004aad]/80 justify-center items-center">
          <span className="inline-flex">
            <h1 className="text-white  italic">FOR </h1>
            <h1 className="text-white">um for Economic Studies</h1>
          </span>
          <h1 className="text-white ">By Engineers</h1>
        </div>
      </div>
    </>
  );
}
