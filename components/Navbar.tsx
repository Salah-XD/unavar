"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import HygineRating from '@/components/HygineRating';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className=" font-roboto-slab w-full px-5 gap-3 h-20 shadow relative z-[30] flex items-center justify-between bg-white   md:flex md:justify-between md:items-center">
      <span className="cursor-pointer md:w-[500px] z-[40] bg-white w-full h-full flex items-center gap-4 ">
        <Link href="/">
          <div className="logo text-3xl text-[#EFBA00] ">
            <Image width={70} height={70} alt="image" src="/images/logo2.png" />
          </div>
        </Link>
        {/* <p className={(RobotoSlab.className, "font-bold text-xl")}>UNAVAR</p> */}
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
            href="/aboutus"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>About</p>
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
        <li>
          <NavigationMenu className="-mt-3 sm:mt-0 p-0 mx-4">
            <NavigationMenuItem className="p-0 mt-0">
              <NavigationMenuTrigger className="text-[16px] p-0 mt-0 font-normal">
                Policies
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="flex flex-col  gap-3 p-4  text-[16px] ">
                  <Link href="/impartiality-policy">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Impartiality Policy
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/confidential-policy">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Confidential Policy
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/quality-policy">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Quality Policy
                    </NavigationMenuLink>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </li>
        {/* <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/industry"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Industry</p>
          </Link>
        </li> */}
        {/* <li className="mx-4 mb-6 md:my-0">
          <Link href="/" className=" flex items-center gap-1 text-l text-black">
            <p>Clients</p>
          </Link>
        </li> */}
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/accreditation"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Accreditation</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/major-certifications"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Major Certification</p>
          </Link>
        </li>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/gallery"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Gallery</p>
          </Link>
        </li>
        <NavigationMenu className="-mt-3 sm:mt-0 p-0 mx-4">
          <NavigationMenuItem className="p-0 mt-0">
            <NavigationMenuTrigger className="text-[16px] p-0 mt-0 font-normal">
          Complain
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="flex flex-col  gap-3 p-4  text-[16px] ">
                <Link href="/hygine-rating">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Hygine Rating
                  </NavigationMenuLink>
                </Link>
                <Link href="/fssai-tpa">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                   FSSAI Third Party Audit
                  </NavigationMenuLink>
                </Link>
               
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <li className="mx-4 mb-6 md:my-0">
          <Link
            href="/contact"
            className=" flex items-center gap-1 text-l text-black"
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
