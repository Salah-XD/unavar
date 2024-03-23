import React from "react";
import Image from "next/image";

const Qci = () => {
  return (
    <div className="qci my-10 p-5 px-10 flex flex-wrap justify-around">
      <div className="left w-[40%]">
        <h2 className="text-4xl font-semibold leading-[1.5] text-[#0f7a87]">
          Ensuring the highest <br /> standards of food safety and quality.
        </h2>
        <p className=" my-5 text-xl leading-[1.7]">
          Unavar, is a distinguished certification body dedicated to aiding
          Indian Food Business Operators (FBOs) in obtaining certifications
          aligned with the Food Safety Standards Authority of India (FSSAI),
          International Organization for Standardization (ISO), and various
          global standards.
        </p>
        <div className="sub flex items-center gap-4">
          <Image alt="img" src="/images/layer-1.svg" width={100} height={100} />
          <h3 className="text-2xl font-[500]">
            QCI Credited <br /> Oraganisation
          </h3>
        </div>
      </div>
      <div className="right">
        <Image
          alt="img"
          className=" shadow-[23px_-23px_#0f7a87]"
          src="/images/pic.png"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Qci;
