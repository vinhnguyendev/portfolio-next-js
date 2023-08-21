import ProjectContent from "@/components/projects/project-detail/project-content";
import React, { Fragment } from "react";
import { getProjectFiles, getProjectData } from "@/lib/projects-lib";
import Head from "next/head";

function ProjectsDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.projects.title}</title>
        <meta name="description" content={props.projects.overview} />
      </Head>
      <ProjectContent projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      projects: projectData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const projectFiles = getProjectFiles();
  const slugs = projectFiles.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectsDetailPage;
