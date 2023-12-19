import React from "react";
import TimelineItem from "./timeline-item";


const EXPERIENCES = [
  {
    id: 1,
    date: "APR 2023 - OCT 2023",
    title: "Full-stack developer",
    company: "Clingstone",
    location: "Plano, TX",
    description:"Built privacy features for a browser app, creating a user interface, saving settings with React Context, and boosting security and trust in user registration/login by 50% with Firebase Authentication.",
    skills: ["Restful APIs","TypeScript","Data visualization", "MySQL"]
  },
  {
    id: 2,
    date: "OCT 2022 - MAR 2023",
    title: "Frontend Web Developer Intern",
    company: "Clingstone",
    location: "Plano,TX",
    description:"Transformed a static HTML5 project into a more efficient React.js(TypeScript) application, reducing 50% of redundant code and enhancing project scalability. Additionally, successfully built and deployed a company website and an MVP image-generating application for a client using React, Node, MongoDB, and the OpenAI API.",
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
