import React, { useEffect } from "react";
import "../../src/styles/global.css";
import axios from "axios";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const data = [
  {
    title: "Be excellent to each other",
    dec: "We’re open, kind, and honest. We don’t play games, and we’re here to be our best selves.",
  },
  {
    title: "Care about our team",
    dec: "Bottleneck mice table the discussion offline",
  },
  {
    title: "Push the limits",
    dec: "We love breaking new grounds, and revel in unknowns. Always ask “why not?”",
  },
  {
    title: "Live our values",
    dec: "We live and breathe integrity, empathy, and quality. Always and in everything we do.",
  },
  {
    title: "Love our users",
    dec: "We listen to the user and also hear their unstated needs.",
  },
  {
    title: "Details, details, details",
    dec: "Brand terrorists onward and upward!",
  },
];

const IndexPage = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/gatsbyjs/gatsby`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="mt-20 mb-20">
        <div>
          <p className="text-ragal-blue text-4xl md:text-6xl font-bold">
            Hi, we’re Acme. We make tools like Super™ and Track® that are used
            by thousands of teams worldwide.
          </p>
          <div className="text-ragal-blue mt-40 mb-40 text-2xl md:text-4xl pr-20 md:pr-80">
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
      <div className="pl-10 pr-10 md:pl-20 md:pr-20">
        <p className="text-ragal-blue text-4xl md:text-6xl font-bold">
          Company culture comes in many shapes and forms, but we particularly
          pride ourselves on:
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-3 grid-rows-2 mt-10 mb-10 gap-20">
          {data.map((item, index) => (
            <div key={index}>
              <h1 className="text-ragal-blue text-2xl md:text-4xl font-bold">
                {item.title}
              </h1>
              <p className="text-ragal-blue text-3xl mt-5">{item.dec}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
