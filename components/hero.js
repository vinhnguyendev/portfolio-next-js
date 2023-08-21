import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";


export default function Hero() {
  const heroTitle = {
    title: "Vinh Nguyen",
    subTitle: "web developer",
    text: "A web developer with a solid foundation in front-end and back-end technologies",
  };
  return (
    <div className="flex h-[100%] lg:h-screen lg:w-[40%] lg:fixed lg:z-10 px-10 lg:px-0">
      <div className="flex-col inline-flex m-auto w-full">
        <div className="m-auto py-11 px-2 lg:ps-11 w-[100%] text-left lg:text-left mt-[5rem]">
          <div>
            <h1>{heroTitle.title}</h1>
            <h2 className="highlight-text font-light">{heroTitle.subTitle}</h2>
            <p className="w-[100%] lg:w-[70%] text-left mt-3 py-5">
              {heroTitle.text}
            </p>
          </div>
          <div className="flex md:justify-center lg:justify-start my-4 ">
          <ul className="flex lg:justify-between justify-start my-4 w-[100%] lg:w-[60%] lg:py-11 lg:px-0 gap-7">
            <a href="https://www.linkedin.com/in/vinh-nguyen-software-developer/" className="cursor-pointer">
              <li className="ease-in duration-100 hover:scale-150">
                <FaLinkedinIn size={25} />
              </li>
            </a>
            <a href="https://instagram.com/vinhnguyen.dev?igshid=OGQ5ZDc2ODk2ZA==" className="cursor-pointer">
              <li className="ease-in duration-100 hover:scale-150">
                <AiFillInstagram size={25} />
              </li>
            </a>
            <a href="https://github.com/vinhnguyendev" className="cursor-pointer">
              <li className="ease-in duration-100 hover:scale-150">
                <AiFillGithub size={25} />
              </li>
            </a>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
