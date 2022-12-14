import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-full">{children}</div>
      <footer>Welocome @2022 Gatsby...</footer>
    </>
  );
};

export default Layout;
