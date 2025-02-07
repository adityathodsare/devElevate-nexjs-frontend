"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const whyUsContent = [
  {
    title: "Collaborative Learning",
    description:
      "Learn together in real time with peers, mentors, and industry experts. Our platform enables interactive sessions, brainstorming, and knowledge-sharing to enhance your learning experience and boost collaboration. Engage in live discussions, pair programming, and group projects that mimic real-world work environments. By working as a team, you’ll develop problem-solving skills and a network of like-minded professionals, making learning more effective and enjoyable.",
    content: (
      <div className="flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/S0MORyyIXeCZyvZXBgE1gxW-3vdUKRbMB2R7hnbMZXs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODcx/NDYxNTgwL3Bob3Rv/L2RpdmVyc2UtZWR1/Y2F0aW9uLXNob290/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZC1pc1dlUDl2/OWgzMkRESDJDaFJn/dGZFYlpjUGlNWW4y/X0h6NjhpTmVrPQ"
          alt="Collaborative Learning"
          className=" object-cover "
        />
      </div>
    ),
  },
  {
    title: "Real-time Updates",
    description:
      "Stay up-to-date with the latest technologies and industry trends. Our courses provide real-time updates, ensuring you always learn the most relevant skills with hands-on projects and live coding sessions. We continuously update our content to match industry demands, integrating new frameworks, libraries, and best practices. This ensures that you stay ahead in the ever-evolving tech landscape, giving you a competitive edge in your career.",
    content: (
      <div className="flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/ZpXuOCXAltsC0sHeTWUvKSdl0urLIsp6FVNF6TPfLi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTMzODg2NzgvZmls/ZS9vcmlnaW5hbC1l/Zjg0OGQ0Y2UwZWE3/Y2UyZjk2MTcxMjcz/OTUwZGU0OS5wbmc_/Y3JvcD0weDAtMjMw/NHgxNzI4JmZvcm1h/dD13ZWJwJnJlc2l6/ZT00MDB4MzAwJnZl/cnRpY2FsPWNlbnRl/cg"
          alt="Real-time Updates"
          className=" object-cover "
        />
      </div>
    ),
  },
  {
    title: "Project-Based Learning",
    description:
      "Gain practical experience with hands-on projects and real-world applications. Our project-based approach ensures that you not only understand the concepts but also apply them effectively in real scenarios. Each course includes interactive assignments, coding challenges, and portfolio-building exercises that simulate industry challenges. This hands-on experience boosts your confidence and helps you develop a strong foundation for tackling real-world tech problems.",
    content: (
      <div className="flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/Enflgbjr0e0FbA-Jy1TF73_VtQ0ZXtPTDzdeP8ixpf8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM5/NjM4MTQ4L3Bob3Rv/L2hpZ2gtc2Nob29s/LXN0dWRlbnRzLWlu/LXRoZS1tYW5vci1u/ZXctdGVjaC1oaWdo/LXNjaG9vbC1hbi1p/bm5vdmF0aXZlLWNs/YXNzcm9vbS1zZXR0/aW5nLXRoYXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNs/Vmt5dzhwVVJGNzk3/c2ExY3BYTHl1dzRS/YWNXQnRqWGVsbm5Q/UmlneUk9"
          alt="Project-Based Learning"
          className=" object-cover "
        />
      </div>
    ),
  },
  {
    title: "Continuous Growth",
    description:
      "Never run out of learning resources! Our platform keeps evolving with new courses, updated materials, and expert-led guidance, ensuring you stay ahead in the fast-paced tech industry. Whether you're a beginner or an experienced developer, you’ll have access to learning paths that suit your level. With mentorship support, career guidance, and access to an ever-growing library of content, your learning journey never stops. Stay curious, keep growing, and reach your full potential.",
    content: (
      <div className="flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/MBcmNdtIBL65lb-AjuXbKUNKJDs9tBSEUlIPLOddCUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MjQ3MjY4L3Bob3Rv/L2dyb3d0aC1jaGFy/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RG9rQ0ktMVVy/eTNnMDJNd3NSWV80/TkxYNnl0S0NMN3pk/WHZpSkQyclZ4bz0"
          alt="Continuous Growth"
          className="object-cover "
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={whyUsContent} />
    </div>
  );
}

export default WhyChooseUs;
