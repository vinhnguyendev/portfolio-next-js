import Head from "next/head";
import Hero from "@/components/hero";
import { Fragment } from "react";
import { getFeaturedProjects } from "@/lib/projects-lib";
import ContentLayout from "@/components/layout/content-layout";
import Notification from "@/components/ui/notification";

function Home(props) {
  return (
    <Fragment>
        <Head>
          <title>Vinh Nguyen | Front-end Developer</title>
          <meta
            name="description"
            content="Crafting Dynamic User Experiences: Your Go-To React Developer"
          />
        </Head>
        <div className="lg:px-[5rem]">
        <Hero />
        <ContentLayout projects={props.projects}>
          {props.children}
        </ContentLayout>
        <Notification />
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

export default Home;
