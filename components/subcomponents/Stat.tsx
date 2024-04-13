import React from "react";
import Image from "next/image";

interface Statsprops {
  img: string;
  num: number;
  desc: string;
}

const Stat = ({ img, num, desc }: Statsprops) => {
  return (
    <div className="flex gap-3">
      <div className="relative w-[50px] h-[60px]">
        {" "}
        <Image
          src={img}
          alt="img"
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col text-left p-1">
        <a className="text-black font-bold text-lg">{num}</a>
        <p className="text-black font-normal whitespace-pre text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Stat;
