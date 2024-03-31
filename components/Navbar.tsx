"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-7 shadow-lg flex items-center justify-between">
      <div className="left flex items-center gap-5">
        <Image alt="logo" src="/images/logo.png" width={50} height={50} />
        <p className="font-bold text-2xl">
          UNAVAR
          {/* UNAVAR FOOD INSPECTION & <br /> CERTIFICATION PRIVATE LIMITED */}
        </p>
      </div>
      <div className="right">
        <div
          className={`menu flex gap-7 list-none font-[500] ${
            isOpen ? "block" : "hidden "
          } sm:flex`}
        >
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
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
