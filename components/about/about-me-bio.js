import React from "react";
import AboutMeBlog from "/about/about.mdx";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function AboutMeBio() {
  return (
      <div className="h-[100%] md:h-[100%] lg:h-screen flex w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] ml-auto z-50">
        <div className="m-auto py-10 px-5 self-end">
          <h3 className="my-5  text-slate-50 font-normal dark:text-slate-200">
            ABOUT
          </h3>
          <AboutMeBlog />
          <div className="mt-11">
            <Link href="https://docs.google.com/document/d/1KcRl5uGOgIPdZXXZbxYd94FMY2tZkcH0kZETrwImLvI/export?format=pdf">
              <div className="flex text-neutral-500 underline hover:text-[#3E6E8E]">
              <span>View Full Resume</span>
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
