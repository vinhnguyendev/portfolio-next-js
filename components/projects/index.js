import React from "react";
import ProjectsGrid from "./projects-grid";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Project(props) {
  return (
    <div
      className="flex justify-start lg:justify-end page-layout"
      id="projects"
    >
      <div className="flex-col lg:w-[50%]">
        <h3 className="my-5 text-slate-50 font-normal dark:text-slate-200 px-5 lg:px-0">
          FEATURED SERVICES
        </h3>
        <ProjectsGrid projects={props} />
        <div className="flex text-neutral-500 underline hover:text-[#3E6E8E] my-7">
          <Link href="/projects">
            <div className="flex">
              <span className="">View all services</span>
              <span className="my-auto ps-2">
                <BsArrowRight size={20} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
