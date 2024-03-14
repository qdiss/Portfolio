import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Adis Klobodanović"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Zenica, Bosnia and Herzegovina. I'm a software engineer, web developer, and open-source enthusiast."
          }
        </p>
        <Link
          href={"mailto:klobodanovic.adis.21@size.ba"}
          className="inline-block group"
        >
          <div>
            <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
              Contact Me 📧
            </h1>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="relative h-72 w-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
