import React  from "react";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/projects";
import Testimonials from "@/components/testimonial";
import Questions from "@/components/questions";
import Breaker from "@/components/breaker";
import Form from "@/components/Form";

export default function ContentLayout(props) {
  return <div className="px-5">
      <About />
      <Breaker />
      <Experience />
      <Breaker />
      <Project projects={props.projects}/>
      <Breaker />
      <Testimonials />
      <Breaker />
      <Form />
      <Questions />
      <Breaker />
  </div>;
}

