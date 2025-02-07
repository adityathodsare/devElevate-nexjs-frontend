"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="h-[40rem] rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          feedback from our students
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The hands-on learning approach helped me apply my skills in real-world projects. I feel more confident about my career in tech, thanks to the guidance and industry connections provided.",
    name: "Ravi Sharma",
  },
  {
    quote:
      "The platform provided excellent mentorship and real-time coding challenges. I was placed in a top tech company soon after completing my course. The resources are top-notch!",
    name: "Priya Desai",
  },
  {
    quote:
      "I joined with minimal experience, but after completing the course, I gained the skills needed to start my career in full-stack development. The practical approach was truly impactful.",
    name: "Amit Verma",
  },
  {
    quote:
      "This platform not only taught me technical skills but also connected me with industry professionals who helped me understand the job market better. The mentorship was a game-changer for me!",
    name: "Sneha Rao",
  },
  {
    quote:
      "The placement assistance was amazing! I received job offers from multiple companies after completing the course. I highly recommend this platform for anyone serious about their tech career.",
    name: "Vikram Singh",
  },
];
