import React from "react";
import Image from "next/image";

type Props = {};

const Maps = (props: Props) => {
  return (
    <div className="relative">
      <div className="flex absolute flex-wrap justify-center gap-[6rem] bg-white p-[35px] top-[15rem] rounded-lg left-[20%] z-20 shadow-lg lg:flex-wrap md:flex-wrap">
        <div className="flex gap-3">
          <div className="relative w-[50px] h-[50px]">
            {" "}
            <Image
              src={"/images/icon_1.png"}
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col text-left p-2">
            <a className="text-black font-bold text-lg">825+</a>
            <p className="text-black font-normal">xxx</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative w-[50px] h-[50px]">
            {" "}
            <Image
              src={"/images/icon_2.png"}
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>{" "}
          <div className="flex flex-col text-left p-2">
            <a className="text-black font-bold text-lg">825+</a>
            <p className="text-black font-normal">xxx</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative w-[50px] h-[50px]">
            {" "}
            <Image
              src={"/images/icon_3.png"}
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>{" "}
          <div className="flex flex-col text-left p-2">
            <a className="text-black font-bold text-lg">825+</a>
            <p className="text-black font-normal">xxx</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative w-[60px] h-[50px]">
            {" "}
            <Image
              src={"/images/icon_4.png"}
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>{" "}
          <div className="flex flex-col text-left p-2">
            <a className="text-black font-bold text-lg">825+</a>
            <p className="text-black font-normal">xxx</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">
            All Across India
          </a>
          <div className="flex text-white flex-col gap-5 p-[30px]">
            <ul className="flex gap-8 justify-center text-xs sm:text-sm md:text-xs md:flex md:gap-[50px] lg:text-sm xl:text-xl list-disc">
              <li className="text-white font-regular ">NEWDELHI</li>
              <li className="text-white font-regular">MUMBAI</li>
              <li className="text-white font-regular">BANGLORE</li>
              <li className="text-white font-regular">CHENNAI</li>
              <li className="text-white font-regular">HYDERABAD</li>
            </ul>
            <ul className="flex gap-8 justify-center text-xs sm:text-sm md:text-xs md:flex md:gap-10 lg:text-sm xl:text-xl list-disc">
              <li className="text-white font-regular">AHMEDABAD</li>
              <li className="text-white font-regular">COCHIN</li>
              <li className="text-white font-regular">KOLKATA</li>
              <li className="text-white font-regular">INDORE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
