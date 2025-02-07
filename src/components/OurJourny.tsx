import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In early 2023, we officially launched our company, offering courses
            in Full-Stack Development, JavaScript, and React.js. We enrolled 25
            students in our first batch, with 21 successfully placed in industry
            positions, showcasing the value and quality of our platform from the
            outset.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In 2024, we saw a massive growth in student enrollment. Over 200
            students enrolled across various courses, with 150 students
            successfully placed in top tech companies worldwide. Our
            partnerships with industry leaders facilitated skill-building
            workshops and hands-on projects that ensured students were
            well-prepared for the job market.
          </p>
        </div>
      ),
    },
    {
      title: "2025*",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            GOALs for 2025
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ 1,245 students enrolled till now
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ to increase percentage of placed students
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ connecting students to industry leaders
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ experts seminars
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ launching courses in other languages with new domains
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
