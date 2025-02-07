"use client";
import Link from "next/link";
import data from "../../data/courses.json";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { div, p } from "motion/react-client";
import { BackgroundGradient } from "../../components/ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeturesSection() {
  const featuredCourses = data.courses.filter(
    (course: Course) => !course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-950 flex flex-wrap justify-center h-full w-full dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  items-center ">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            upcoming courses
          </p>
        </div>
      </div>
      <div className="mt-10 mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      Learn more
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="m-20 text-center">
        <Link href="/courses">
          <div className="flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Explore all courses</span>
            </HoverBorderGradient>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeturesSection;
