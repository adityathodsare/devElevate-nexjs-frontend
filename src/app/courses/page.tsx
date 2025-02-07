"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import courses from "../../data/courses.json";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 ">
      <div>
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          OUR COURSES ({courses.courses.length})
        </h1>
      </div>
      <div className="flex flex-wrap justify-center h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  items-center ">
        {courses.courses.map((course) => (
          <div key={course.id} className="max-w-xs w-full group/card m-5">
            <div
              onClick={() => (window.location.href = `/courses/${course.slug}`)}
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
              )}
              style={{
                backgroundImage: `url(${course.courseimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={course.image}
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col ">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {course.instructor}
                  </p>
                  <p className="text-sm text-gray-400">
                    instructor at DevElevate
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {course.title}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
