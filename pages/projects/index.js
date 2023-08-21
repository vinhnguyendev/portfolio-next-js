import ProjectsGrid from "@/components/projects/projects-grid";
import React, { Fragment } from "react";
import { getFeaturedProjects } from "@/lib/projects-lib";
import Head from "next/head";

function AllProjects(props) {
  return (
    <Fragment>
      <Head>
        <title>All Projects</title>
        <meta
          name="description"
          content="My recent projects as a React Developer"
        />
      </Head>
      <div className="flex">
        <div className="m-auto py-[9rem]">
          <ProjectsGrid projects={props} />
        </div>
      </div>
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredProjects = getFeaturedProjects();
  return {
    props: {
      projects: featuredProjects,
    },
  };
}

export default AllProjects;
