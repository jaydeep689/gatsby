import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-ragal-yellow">
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
