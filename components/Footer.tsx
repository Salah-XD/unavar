import React from "react";
import Image from "next/image";
import Addbanner from "./Addbanner";
import Banner from "./subcomponents/banner";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left h-[30vh]">
        <div className="flex flex-wrap justify-around gap-10  bg-white p-[40px] mb-10 pb-10">
          <div className="flex flex-col gap-4">
            <div className="text-black font-bold text-lg">Main Navigations</div>
            <div className="flex flex-col gap-2 ">
              <a
                href="/"
                className="text-black font-regular hover:cursor-pointer"
              >
                Home
              </a>
              <a
                href="/aboutus"
                className="text-black font-regular hover:cursor-pointer"
              >
                About us
              </a>
              <a
                href="/services"
                className="text-black font-regular hover:cursor-pointer"
              >
                Services
              </a>
              {/* <a className="text-black font-regular hover:cursor-pointer">
                Industry
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                Clients
              </a> */}
              <a
                href="contact"
                className="text-black font-regular hover:cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-black font-bold text-lg">Useful Link</div>
            <div className="flex flex-col gap-2 ">
              <a
                href="https://hygiene.fssai.gov.in/index.php"
                className="text-black font-regular hover:cursor-pointer"
              >
                Hygiene Rating
              </a>
              <a
                href="https://eatrightindia.gov.in/eatrightstation/"
                className="text-black font-regular hover:cursor-pointer"
              >
                Eat Right Station
              </a>
              <a
                href="https://eatrightindia.gov.in/EatRightCampus/home"
                className="text-black font-regular hover:cursor-pointer"
              >
                Eat Right Campus
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-black font-bold text-lg">Useful links</div>
            <div className="flex flex-col gap-2 ">
              <a
                href="https://eatrightindia.gov.in/eatrightplaceofworship/index.php"
                className="text-black font-regular hover:cursor-pointer"
              >
                bhog
              </a>
              <a
                href="https://eatrightindia.gov.in/fruitsandvegetablesmarket/index.php"
                className="text-black font-regular hover:cursor-pointer"
              >
                Clean Veg Market
              </a>
              <a
                href="https://eatrightindia.gov.in/streetfoodhub/home"
                className="text-black font-regular hover:cursor-pointer"
              >
                Clean Street Food Hub
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-black font-bold text-lg">Policies</div>
            <div className="flex flex-col gap-2 ">
              <a
                href="/impartiality-policy"
                className="text-black font-regular hover:cursor-pointer"
              >
                Impartiality Policy
              </a>
              <a
                href="/confidential-policy"
                className="text-black font-regular hover:cursor-pointer"
              >
                Confidential Policy
              </a>
              <a
                href="quality-policy"
                className="text-black font-regular hover:cursor-pointer"
              >
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-5 mt-3 bg-gray-100 ">
        &copy; 2024 All Rights Reserved by Unavar Food Inspection and
        Certification Pvt Ltd | Made by{" "}
        <a href="https://www.linkedin.com/company/steamtroops/">
          STEAM TROOPS Innovation Labs®
        </a>
      </div>
    </div>
  );
};

export default Footer;
