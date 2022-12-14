import React from "react";
import { Link } from 'gatsby'

function Navbar() {
  return (
    <ul className="flex flex-row justify-center space-x-4  bg-slate-800 text-slate-200 p-4">
      <li className="text-white-800 font-bold hover:text-green-400 m-2">
        <Link href="/">Home</Link>
      </li>
      <li className="text-white-800 font-bold hover:text-green-400 m-2">
        <Link href="/blogpost/business">Blog</Link>
      </li>
      <li className="text-white-800 font-bold hover:text-green-400 m-2">
        <Link href="/about">About Us</Link>
      </li>
      <li className="text-white-800 font-bold hover:text-green-400 m-2">
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}

export default Navbar;
