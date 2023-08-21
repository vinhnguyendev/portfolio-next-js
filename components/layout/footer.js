import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between px-4 lg:pl-10 lg:pr-[5rem] pt-7 border-t-[0.05rem] border-gray-700 pb-11 ">
      <div className="py-2 lg:z-50">
        <Link href="https://github.com/vinhnguyendev/portfolio-next-js">
          <p className="flex underline">
            <AiFillGithub className="mr-1 my-auto" /> Github Repo
          </p>
        </Link>
      </div>
      <div className="">
        <p className="flex text-xs md:text-sm lg:text-sm pb-1">
          Designed in Figma & Built using NextJs, Tailwind by Vinh Nguyen
        </p>
        <p className="flex text-xs md:text-sm lg:text-sm pb-1">
          &copy; 2023 Vinh Nguyen, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
