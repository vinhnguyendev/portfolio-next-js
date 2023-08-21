import React, { Fragment } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
