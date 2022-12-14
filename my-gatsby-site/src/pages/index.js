import * as React from "react";
import Navbar from "./../../components/Navbar";
import '../../src/styles/global.css'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
