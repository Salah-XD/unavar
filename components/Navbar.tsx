"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCardList } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="w-full px-5 gap-3 h-20 shadow relative z-[30] flex items-center justify-between bg-white   md:flex md:justify-between md:items-center">
      <span className="cursor-pointer md:w-[500px] z-[40] bg-white w-full h-full flex items-center gap-4 ">
        <Link href="/">
          <div className="logo text-3xl text-[#EFBA00] font-['Nunito',sans-serif]">
            <Image width={50} height={50} alt="image" src="/images/logo.png" />
          </div>
        </Link>
        <p className="font-bold text-xl">
          UNAVAR
          {/* UNAVAR FOOD INSPECTION & <br /> CERTIFICATION PRIVATE LIMITED */}
        </p>
      </span>

      <div
        className="text-5xl cursor-pointer mx-2 md:hidden block h-10 w-7"
        onClick={onClickHandler}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            onClickHandler();
          }
        }}
        role="button"
        tabIndex={0}
      >
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
      </div>
      <ul
        className={`md:flex md:items-center z-50  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  mt-0 transition-all ease-in duration-500 ${
          !navbar && "opacity-0 top-[-400px]"
        } ${navbar && "opacity-100 top-20"}`}
      >
        <li className="mx-4 mb-6 md:my-0">
          <Link href="/" className=" flex items-center gap-1 text-l text-black">
            <p>Home</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            target="_blank"
            href="/aboutus"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>About Us</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/services"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Services</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/industry"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Industry</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Clients</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/contact"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
