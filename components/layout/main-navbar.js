import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  GoPerson,
  GoProjectRoadmap,
  GoMail,
  GoBriefcase,
} from "react-icons/go";

const MobileNavBar = (props) => {
  const [activeSection, setActiveSection] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navLinks = props.navLinks;

  const activeNavItem = () => {
    if (481 < lastScrollY && lastScrollY < 1180) {
      setActiveSection("#about");
    } else if (1180 < lastScrollY && lastScrollY < 2407) {
      setActiveSection("#experience");
    } else if (2407 < lastScrollY && lastScrollY < 3414) {
      setActiveSection("#projects");
    } else if (4750 < lastScrollY && lastScrollY < 4920) {
      setActiveSection("#form");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", activeNavItem);

      return () => {
        window.removeEventListener("scroll", activeNavItem);
      };
    }
  }, [lastScrollY]);

  return (
    <ul className="md:hidden lg:hidden flex gap-14">
      {navLinks.map((link, index) => {
        return (
          <li
            className={`p-2 rounded-full ${
              link.link === activeSection
                ? "bg-[#243B55] opacity-90"
                : "opacity-50"
            }`}
            key={index}
          >
            <Link href={link.link}>{link.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const DesktopNavBar = (props) => {
  return (
    <ul className="hidden md:flex">
      <Link href="/#about">
        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
      </Link>
      <Link href="/#experience">
        <li className="ml-10 text-sm uppercase hover:border-b">Experience</li>
      </Link>
      <Link href="/#projects">
        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
      </Link>
      <Link href="/#form">
        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
      </Link>
    </ul>
  );
};
export default function MainNavbar(props) {
  const mobileNav = props.mobileNav;
  const setMobileNav = props.setMobileNav;
  const visible = props.visible;

  const navLinks = [
    {
      title: "About",
      link: "#about",
      icon: <GoPerson className="m-auto" size={30} />,
      active: false,
    },
    {
      title: "Experience",
      link: "#experience",
      icon: <GoProjectRoadmap className="m-auto" size={30} />,
      active: false,
    },
    {
      title: "Projects",
      link: "#projects",
      icon: <GoBriefcase className="m-auto" size={30} />,
      active: false,
    },
    {
      title: "Contacts",
      link: "#form",
      icon: <GoMail className="m-auto" size={30} />,
      active: false,
    },
  ];

  return (
    <header
      className={`fixed w-full h-20  z-[100] bg-gradient-to-r from-[#141E30] to-[#243B55]  shadow-md lg:pr-[5rem] ${
        !visible && "md:hidden lg:hidden"
      }`}
    >
      <div className="flex justify-center lg:justify-end md:justify-start items-center w-full h-full px-2 2xl:px-16">
        <nav className="flex justify-center">
          <DesktopNavBar navLinks={navLinks} />
          <MobileNavBar navLinks={navLinks} />
        </nav>
      </div>

      <div
        className={
          mobileNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
        onClick={() => setMobileNav(false)}
      ></div>
    </header>
  );
}
