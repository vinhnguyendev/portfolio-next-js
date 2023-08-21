import React from "react";
import TimelineItem from "./timeline-item";


const EXPERIENCES = [
  {
    id: 1,
    date: "JUN 2023 - Present",
    title: "React Developer",
    company: "Independent Project",
    location: "Remote",
    description:"Immersed in an exciting journey of building an independent project that involves the integration of the Plaid API. Through this ongoing experience, I am gaining hands-on expertise in connecting with Plaid's API to access and leverage financial data effectively",
    skills: ["Next.js","Plaid API","TypeScript","Data visualization"]
  },
  {
    id: 2,
    date: "OCT 2022 - JUL 2023",
    title: "Web Engineer",
    company: "Clingstone",
    location: "Plano,TX",
    description:"Crafted UI components, collaborated with designers & PMs for client projects. Automated testing for robust software. Enhanced API functionality & data flow.",
    skills: ["RESTful APIs","React","Webpack","responsive UI"]
  },
  {
    id: 3,
    date: "AUG 2022 - OCT 2022",
    title: "Full Stack Web Developer",
    company: "DevMountain Coding Bootcamp",
    location: "Lehi, UT",
    description:"Created, managed, and deployed full-stack applications utilizing various modern technologies within a short amount of time. Led Agile projects, promoted pair programming, and facilitated productive team meetings.",
    skills: ["MERN stack","CSS3","Jest"]
  },
  {
    id: 4,
    date: "JUN 2022 - AUG 2022",
    title: "Web Developer",
    company: "DevMountain Coding Bootcamp",
    location: "Lehi, UT",
    description:"Recognized by Software Developer mentors for excelling in challenges, projects, quick learning, and stylish design. ",
    skills: ["HTML", "CSS3","JavaScript","Node.js"]
  },
];

const Timeline = () => {
  return (
    <div className="flex-row lg:w-[50%]">
      <div className="m-auto lg:px-0 lg:py-7">
        <h3 className="text-slate-50 font-normal dark:text-slate-200">
          RECENT EXPERIENCE
        </h3>
      </div>
      <ol className="lg:relative lg:border-l lg:border-gray-200 lg:dark:border-gray-700">
        {EXPERIENCES.map((experience) => (
          <TimelineItem key={experience.title} experience={experience} />
        ))}
      </ol>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="flex justify-end items-end page-layout" id="experience">
      <Timeline />
    </div>
  );
}
