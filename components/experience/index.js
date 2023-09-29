import React from "react";
import TimelineItem from "./timeline-item";


const EXPERIENCES = [
  {
    id: 1,
    date: "MAY 2023 - SEP 2023",
    title: "Software Engineer",
    company: "iGeek Systems Inc.",
    location: "Sarasota, FL",
    description:"Integrated RESTful APIs to design and execute dynamic web pages that effortlessly retrieve and exhibit real-time data from MySQL databases. ",
    skills: ["Restful APIs","TypeScript","Data visualization", "MySQL"]
  },
  {
    id: 2,
    date: "OCT 2022 - APR 2023",
    title: "Web Engineer Intern",
    company: "Clingstone",
    location: "Plano,TX",
    description:"Crafted UI components, collaborated with designers & PMs for client projects. Automated testing for robust software. Enhanced API functionality & data flow.",
    skills: ["Next.js","RESTful APIs","React","Webpack","responsive UI", "TailwindCSS"]
  },
  {
    id: 3,
    date: "JUL 2022 - OCT 2022",
    title: "Full Stack Web Developer",
    company: "DevMountain Coding Bootcamp",
    location: "Lehi, UT",
    description:"Created, managed, and deployed full-stack applications utilizing various modern technologies within a short amount of time. Led Agile projects, promoted pair programming, and facilitated productive team meetings.",
    skills: ["MERN stack","React","CSS3","Jest","PostgreSQL"]
  }
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
