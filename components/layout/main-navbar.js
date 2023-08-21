import React from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiDetail, BiUserCircle, BiBriefcase, BiMessageDetail } from "react-icons/bi";
import classes from "./main-navbar.module.css";
import Image from "next/image";

const mobileOpening = `fixed left-0 top-0 w-[80%] sm:w[45%] md:w-[45%] h-screen shadow-lg p-5 bg-gradient-to-r from-[#141E30] to-[#243B55] p-5 ease-in duration-500 ${classes.animated}`;
const mobileClosing = `fixed left-[-100%] top-0 w-[80%] sm:w-[45%] md:w-[45%] h-screen bg-gradient-to-r from-[#141E30] to-[#243B55] p-5 ease-in duration-500`;

export default function MainNavbar(props) {
  const mobileNav = props.mobileNav;
  const setMobileNav = props.setMobileNav;
  const visible = props.visible
  return (
    <header
      className={`fixed w-full h-20  z-[100] bg-gradient-to-r from-[#141E30] to-[#243B55]  shadow-md lg:pr-[5rem] ${
        !visible && "hidden"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
        
        </div>
        <nav>
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#form">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden px-5" onClick={() => setMobileNav(true)}>
            <AiOutlineMenu size={30} />
          </div>
        </nav>
      </div>

      <div
        className={
          mobileNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
        onClick={() => setMobileNav(false)}
      >
        <div className={mobileNav ? mobileOpening : mobileClosing}>
          <div>
            <div className="flex w-full h-auto justify-between  py-2">
              <div className="flex item-center">
                <Image
                  src="/assets/images/logo_02.png"
                  height="70"
                  width="70"
                  alt="logo"
                />
                <div className="text-sm px-2">
                  <p className="font-bold">Vinh Nguyen</p>
                  <p className="">Front-end developer</p>
                </div>
              </div>
              <div onClick={() => setMobileNav(false)}>
                <AiOutlineClose className="m-0" size={30} />
              </div>
            </div>

            <div className="border-b border-gray-500 my-4">
              <p className="w-[100%] py-4">
                I create inclusive, accessible web experiences
              </p>
            </div>
          </div>
  
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-md flex">< BiDetail size={30}/>About</li>
              </Link>
              <Link href="/#experience">
                <li className="py-4 text-md flex">< BiUserCircle size={30}/>Experience</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-md flex">< BiBriefcase size={30}/>Projects</li>
              </Link>
              <Link href="/#form">
                <li className="py-4 text-md flex">< BiMessageDetail size={30}/>Contact</li>
              </Link>
            </ul>
         
            <div className="pt-40">
              <p className="uppercase tracking-widest">Let's Connect</p>
              <ul className="flex item-center justify-between my-4 w-[70%] sm:w-[50%]">
                <a href="https://www.linkedin.com/in/vinh-nguyen-software-developer/" className="cursor-pointer">
                  <li>
                    <FaLinkedinIn size={25} />
                  </li>
                </a>
                <a href="https://instagram.com/vinhnguyen.dev?igshid=OGQ5ZDc2ODk2ZA==" className="cursor-pointer">
                  <li>
                    <AiFillInstagram size={25} />
                  </li>
                </a>
                <a href="#form" className="cursor-pointer">
                  <li>
                    <AiOutlineMail size={25} />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
