import React from "react";
import Link from "next/link";
import Image from "next/image";


function ProjectItem(props) {
  const { title, slug, image, overview } = props.project;

  const imagePath = `/assets/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;

  return (
    <li key={title} className="flex-col shadow-sm text-center border-spacing-2 lg:hover:scale-125 ease-in duration-200  bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg p-4">
      <Link href={linkPath}>
        <div className="overflow-hidden">
          <Image
            className="object-cover w-[100%]"
            src={imagePath}
            alt={title}
            width={400}
            height={400}
          />
        </div>
        <div className="w-[100%]">
          <h3 className="pt-2 pb-1">{title}</h3>
          <time></time>
          <p>{overview}</p>
        </div>
      </Link>
    </li>
  );
}

export default function ProjectsGrid(props) {
  const projects = props.projects.projects
  
  return (
    <div className="w-[100%] px-5 lg:px-0">
    <ul className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 content-center">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
    </div>
  );
}
