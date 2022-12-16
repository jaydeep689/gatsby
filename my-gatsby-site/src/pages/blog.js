import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Link } from "gatsby";
// import Filter from "../components/Filter";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=IN&category=general&apiKey=84addf0a8b97435da94399230184ec4b`
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div>
        {/* <Filter /> */}
        <div className="grid lg:grid-cols-5 gap-8  md:grid-cols-3 sm:grid-cols-2 mt-10 mb-10 ">
          {data.map((item) => {
            return (
              <Link href={item.url} key={item.title}>
                <div
                  className=" bg-zinc-50 p-2 rounded-lg transition ease-in-out delay-150
                 hover:-translate-y-1 hover:scale-110 h-full hover:shadow-green-200 hover: duration-300 ..."
                >
                  <img src={item.urlToImage} alt="..." />
                  <h2>{item.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
