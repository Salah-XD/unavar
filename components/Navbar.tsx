"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-7 shadow-lg flex items-center justify-between">
      <div className="left flex items-center gap-5">
        <Image alt="logo" src="/images/logo.png" width={50} height={50} />
        <p className="font-bold">UNAVAR</p>
      </div>
      <div className="right relative">
        <div
          ref={menuRef}
          className={`menu absolute top-full left-0 bg-white w-full shadow-md sm:static sm:flex sm:gap-7 list-none font-[500] ${
            isOpen ? "block transition-all duration-300" : "hidden"
          }`}
          style={{
            maxHeight: isOpen ? "calc(100vh - 64px)" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
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
            <a href="">Clients</a>
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
