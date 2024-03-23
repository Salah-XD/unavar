import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white p-7 shadow-lg flex items-center justify-between">
      <div className="left flex items-center gap-5">
        <Image alt="logo" src="/img/image 3.png" width={50} height={50} />
        <p className="font-bold">
          UNAVAR FOOD INSPECTION & <br /> CERTIFICATION PRIVATE LIMITED
        </p>
      </div>
      <div className="right">
        <div className="menu flex gap-7 list-none font-[500]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Industry</a>
          </li>
          <li>
            <a href="">clients</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
