import React from "react";
import Image from "next/image";
import Stat from "./subcomponents/Stat";

type Props = {};

const Maps = (props: Props) => {
  return (
    <div className="relative">
      <div className=" absolute  md:gap-[2rem]  bg-white p-[40px] top-[16rem] rounded-lg md:left-[10%] md:right-[10%] z-20 shadow-lg  mx-4  md:mx-0">
        {/* <div className="flex gap-4 lg:flex-wrap md:flex-wrap flex-wrap md:justify-center justify-start m-auto ">
          <Stat img="/images/icon_1.png" num={800} desc={`Clients`} />
          <Stat img="/images/icon_1.png" num={130} desc={"Projects"} />
          <Stat img="/images/icon_1.png" num={183} desc={"certificates"} />
        </div> */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Certificate Issued
        </h1>
        <div className="flex gap-4 lg:flex-wrap md:flex-wrap flex-wrap md:justify-between justify-start m-auto ">
          <Stat
            img="/images/stats/Hygiene_rating_1.svg"
            num={1516}
            desc={`Hygiene \nRating`}
          />
          <Stat
            img="/images/stats/Worship.svg"
            num={130}
            desc={"Eat Right\nWorship"}
          />
          <Stat
            img="/images/stats/campus.svg"
            num={183}
            desc={"Eat Right\nCampus"}
          />
          <Stat
            img="/images/stats/veg_market.svg"
            num={36}
            desc={"Eat Right\nMarket"}
          />
          <Stat
            img="/images/stats/Station.svg"
            num={12}
            desc={"Eat Right\nStation"}
          />
          <Stat
            img="/images/stats/Street_food.svg"
            num={25}
            desc={"Eat Right\nFood Hub"}
          />
        </div>
      </div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">
            All Across India
          </a>
          <div className="flex text-white flex-col gap-5 p-[30px]">
            <ul className="flex flex-wrap md:gap-x-[32px] md:gap-y-[20px] gap-x-5 gap-y-5 justify-center text-xs sm:text-sm md:text-xs md:flex  lg:text-sm xl:text-xl list-disc">
              <li className="text-white font-regular ">TAMILNADU</li>
              <li className="text-white font-regular">MAHARASHTRA</li>
              <li className="text-white font-regular">GOA</li>
              <li className="text-white font-regular">KARNATAKA</li>
              <li className="text-white font-regular">KERALA</li>
              <li className="text-white font-regular">GUJARAT</li>
            </ul>
            <ul className="flex gap-8 justify-center text-xs sm:text-sm md:text-xs md:flex md:gap-10 lg:text-sm xl:text-xl list-disc">
              {/* <li className="text-white font-regular">COCHIN</li>
              <li className="text-white font-regular">KOLKATA</li>
              <li className="text-white font-regular">INDORE</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
