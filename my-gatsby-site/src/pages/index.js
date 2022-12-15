import * as React from "react";
import "../../src/styles/global.css";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <div className="mt-20 mb-20">
        <div>
          <p className="text-ragal-blue text-7xl">
            Hi, we’re Acme. We make tools like Super™ and Track® that are used
            by thousands of teams worldwide.
          </p>
          <div className="text-ragal-blue mt-40 mb-40 text-4xl">
            We’re serious about creating amazing products, practices, open work,
            accessibility, and inclusivity. And in all that we strive to embed a
            good amount of fun. We’re rooted in the open source community and
            deeply care about giving back.
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/sea-g86e00f3fb_1920.jpg"
            alt="..."
            className="rounded-xl"
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
