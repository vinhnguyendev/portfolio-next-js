import React from "react";
import ProjectHeader from "./project-header";

export default function ProjectContent(props) {
  const {slug, image, content, title } = props.projects
  const imagePath = `/assets/images/projects/${slug}/${image}`;

  return (
    <article className="h-screen">
      <ProjectHeader title={title} image={imagePath} />
      <div className="m-5">
      {content}
      </div>
    </article>
  );
}
