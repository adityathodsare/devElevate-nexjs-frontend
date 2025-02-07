import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundBeams } from "./ui/background-beams";

function HeroSection() {
  const words = `Learn the latest technologies in software development,
              cybersecurity, cloud computing, and more. Gain hands-on experience
              with expert-led courses and boost your IT career today!`;
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-auto mx-auto py-10 md:py-10">
          <div className="p-4 relative z-10 width-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              DevElevate
            </h1>

            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              {words}
            </p>
            <br />
            <div className="mt-4">
              <Link href="/courses">
                <div className=" flex justify-center text-center">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Explore Courses
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
