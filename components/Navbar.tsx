"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShouldAnimate(true);
  };

  useEffect(() => {
    const menuElement = menuRef.current;

    const handleAnimationEnd = () => {
      setShouldAnimate(false);
      if (menuElement) {
        menuElement.classList.remove("animate-again");
      }
    };

    if (menuElement) {
      menuElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

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
          ref={menuRef}
          className={`menu flex flex-col absolute gap-7 list-none font-[500] top-10 right-7  ${
            isOpen ? "block" : "hidden"
          } ${
            shouldAnimate ? "animate-slide-down animate-again" : ""
          } sm:flex-row sm:gap-5 sm:static`}
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
