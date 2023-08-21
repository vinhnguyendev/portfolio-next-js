import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainNavbar from "./main-navbar";
import ProjectDetailNavbar from "./project-detail-navbar";

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [prevPage, setPrevPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.asPath === "/projects" ||
    router.asPath === "/projects/crypto-project-with-next-js" ||
    router.asPath === "/projects/admin-dashboard-project-next-js" ||
    router.asPath === "/projects/clothing-store-next-js" ||
    router.asPath === "/projects/clingstone-website-react-js"
      ? setPrevPage(true)
      : setPrevPage(false);
  }, [router]);

  const handleGoBack = () => {
    router.back();
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {!prevPage ? (
        <MainNavbar
          mobileNav={mobileNav}
          setMobileNav={setMobileNav}
          visible={visible}
        />
      ) : (
        <ProjectDetailNavbar prevPage={prevPage} handleGoBack={handleGoBack} />
      )}
    </>
  );
}
