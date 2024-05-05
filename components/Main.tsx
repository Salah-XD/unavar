import React from "react";
import Link from "next/link";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="main absolute z-10 top-[40%] left-[5%] md:left-[15%]">
      <h1 className="text-4xl md:text-7xl font-extrabold font-mont  leading-[1.5] mb-5 text-white">
        Unavar Food Inspection <br /> and Certification
      </h1>
      <p className="text-l md:text-3xl font-semibold mb-6 leading-[1.15] font-mont  text-white">
        Private Limited
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfHnFKuv9M13pfVsG-7_DPirOfjN2VYiQZMXwrvIb5ka0RsgQ/viewform?usp=sf_link"
        className="text-[#fff] bg-[#0f7a87] px-5 py-3 rounded-[7px] my-9 font-medium shadow-xl main-btn"
        target="_blank"
      >
        Enquire Now
      </a>
    </div>
  );
};

export default Main;
