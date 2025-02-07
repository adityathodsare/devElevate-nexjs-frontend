"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";

function page() {
  const words = [
    {
      text: "BECOME A",
    },
    {
      text: "CERTIFIED",
    },
    {
      text: "JAVA",
    },
    {
      text: "DEVELOPER WITH",
    },
    {
      text: " DEVELEVATE !!!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <div>
            <div className="flex flex-col items-center justify-center h-[40rem]  ">
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                hence jurney begin
              </p>
              <TypewriterEffectSmooth words={words} />

              <div className="max-w-md mx-auto text-white p-6 rounded-lg shadow-lg border border-gray-700">
                <p className="text-lg">
                  <span className="font-semibold">ID:</span> 3
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Title:</span> Java Full Stack
                  Development
                </p>
                <p className="text-lg">
                  <span className="font-semibold">certification:</span> yes
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Description:</span> Master
                  backend development with Java and Spring Boot, along with
                  frontend technologies like React.js or Angular.
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Price:</span> $119.99
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Instructor:</span> Emily
                  Johnson
                </p>

                <p className="text-lg">
                  <span className="font-semibold">Duration:</span> 76 hours
                </p>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    enroll now
                  </span>
                </button>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"></div>
            </div>
          </div>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

export default page;
