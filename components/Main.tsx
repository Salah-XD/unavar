import React from "react";
import Link from "next/link";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="main absolute z-40 top-[40%] left-[15%]">
      <h1 className="text-7xl font-extrabold leading-[1.5] text-white">
        Unavar Food <br /> Inspection services
      </h1>
      <p className="text-2xl font-semibold mb-6 leading-[1.15] text-white">
        Food Inspection and Certification firm
      </p>

      <a
        href="#"
        className="text-[#fff] bg-[#278233] px-5 py-3 rounded-[7px] my-9 font-medium shadow-xl main-btn"
      >
        Enquire Now
      </a>
    </div>
  );
};

export default Main;
