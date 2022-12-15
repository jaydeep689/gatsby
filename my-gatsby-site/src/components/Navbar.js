import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Navbar() {
  return (
    <div className="flex flex-row justify-evenly p-4">
      <div>
        <StaticImage
          src="../../src/images/icon.png"
          alt="..."
          wdith={30}
          height={30}
        />
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <li className="text-ragal-blue font-bold hover:text-blue-400 m-2">
            <Link href="/">Home</Link>
          </li>
          <li className="text-ragal-blue font-bold hover:text-blue-400 m-2">
            <Link href="/blogpost/business">Blog</Link>
          </li>
          <li className="text-ragal-blue font-bold hover:text-blue-400 m-2">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-ragal-blue font-bold hover:text-blue-400 m-2">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-ragal-blue p-3 w-100  rounded-lg text-white font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
